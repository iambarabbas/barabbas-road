#!/usr/bin/env python3
"""
Scrape all blog posts from barabbas.com and save to data/posts.json.
Preserves original URL slugs for Next.js static route generation.
"""

import json
import time
import re
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from html.parser import HTMLParser
from pathlib import Path
from typing import Optional

BASE = "https://www.barabbas.com"
SITEMAP_URLS = [
    "https://www.barabbas.com/post-sitemap.xml",
]
OUT_FILE = Path(__file__).parent.parent / "data" / "posts.json"
DELAY = 0.5  # seconds between requests — be polite

# ── HTML content extractor ────────────────────────────────────────────────────

class ContentExtractor(HTMLParser):
    """Extract readable text content from WordPress post HTML."""
    def __init__(self):
        super().__init__()
        self.in_entry = False
        self.in_title = False
        self.in_date = False
        self.depth = 0
        self.entry_depth = None
        self.title = ""
        self.date = ""
        self.content_parts = []
        self.current_tag = ""
        self.skip_tags = {"script", "style", "nav", "header", "footer", "aside"}
        self.skip_depth = None
        self.title_done = False
        self.date_done = False
        # Track h1/h2 page title
        self.page_title = ""
        self.in_page_title = False

    def handle_starttag(self, tag, attrs):
        self.depth += 1
        attrs_dict = dict(attrs)
        cls = attrs_dict.get("class", "")

        if self.skip_depth is not None:
            return
        if tag in self.skip_tags:
            self.skip_depth = self.depth
            return

        # Detect WordPress post content area
        if tag in ("article", "div") and any(
            c in cls for c in ("entry-content", "post-content", "the-content", "entry", "post")
        ) and not self.in_entry:
            self.in_entry = True
            self.entry_depth = self.depth

        # Page title (h1)
        if tag == "h1" and not self.page_title:
            self.in_page_title = True

        # Date detection
        if tag in ("time", "span", "div") and not self.date_done:
            if "date" in cls.lower() or "time" in cls.lower() or "published" in cls.lower():
                self.in_date = True
            # Also check datetime attribute
            dt = attrs_dict.get("datetime", "")
            if dt and not self.date:
                self.date = dt[:10]  # YYYY-MM-DD
                self.date_done = True

        self.current_tag = tag

    def handle_endtag(self, tag):
        if self.skip_depth is not None and self.depth == self.skip_depth:
            self.skip_depth = None
        self.depth -= 1

        if self.in_page_title and tag == "h1":
            self.in_page_title = False

        if self.in_entry and self.entry_depth is not None and self.depth < self.entry_depth:
            self.in_entry = False

        if tag in ("p", "h2", "h3", "h4", "li", "blockquote", "h1"):
            if self.content_parts and self.content_parts[-1] != "\n":
                self.content_parts.append("\n")

    def handle_data(self, data):
        if self.skip_depth is not None:
            return
        text = data.strip()
        if not text:
            return

        if self.in_page_title and not self.page_title:
            self.page_title = text

        if self.in_date and not self.date_done:
            self.date = text.strip()
            self.in_date = False
            self.date_done = True

        if self.in_entry:
            self.content_parts.append(text + " ")

    def get_content(self):
        return re.sub(r'\s+', ' ', "".join(self.content_parts)).strip()


def fetch_url(url: str, retries: int = 3) -> Optional[str]:
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; site-migration-bot/1.0)",
        "Accept": "text/html,application/xhtml+xml,text/xml",
    }
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=15) as resp:
                return resp.read().decode("utf-8", errors="replace")
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            print(f"  HTTP {e.code} for {url} (attempt {attempt+1})")
        except Exception as e:
            print(f"  Error fetching {url}: {e} (attempt {attempt+1})")
        if attempt < retries - 1:
            time.sleep(2)
    return None


def get_post_urls_from_sitemap(sitemap_url: str) -> list[str]:
    print(f"Fetching sitemap: {sitemap_url}")
    html = fetch_url(sitemap_url)
    if not html:
        return []
    urls = []
    try:
        # Strip namespace for easier parsing
        html_clean = re.sub(r' xmlns[^"]*"[^"]*"', '', html)
        root = ET.fromstring(html_clean)
        for url_el in root.findall(".//loc"):
            loc = url_el.text.strip()
            # Skip the /messages/ index page — we want individual posts
            if loc != f"{BASE}/messages/":
                urls.append(loc)
    except ET.ParseError as e:
        print(f"  XML parse error: {e}")
        # Fallback: regex
        urls = re.findall(r'<loc>(https://www\.barabbas\.com/[^<]+)</loc>', html)
    print(f"  Found {len(urls)} URLs")
    return urls


def slug_from_url(url: str) -> str:
    """Extract slug from full URL, preserving sub-path for /messages/ etc."""
    path = url.replace(BASE, "").strip("/")
    return path  # e.g. "expository-preaching" or "messages/the-light-still-shines"


def parse_post(url: str, html: str) -> Optional[dict]:
    """Extract structured data from a WordPress post page."""
    ex = ContentExtractor()
    try:
        ex.feed(html)
    except Exception:
        pass

    # Title: prefer <title> tag content
    title_match = re.search(r'<title[^>]*>([^<]+)</title>', html)
    raw_title = title_match.group(1).strip() if title_match else ""
    # Clean WordPress site name suffix
    title = re.sub(r'\s*[-|–]\s*(Barabbas Road Church.*|barabbas\.com.*)$', '', raw_title, flags=re.I).strip()
    if not title:
        title = ex.page_title or slug_from_url(url).replace("-", " ").title()

    # Date
    date = ex.date
    if not date:
        # Try meta tags
        m = re.search(r'<meta[^>]*(?:publish|date|article:published)[^>]*content=["\']([^"\']+)["\']', html, re.I)
        if m:
            date = m.group(1)[:10]

    # Content
    content = ex.get_content()
    if len(content) < 50:
        # Try broader extraction
        body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.S)
        if body_match:
            body = re.sub(r'<script[^>]*>.*?</script>', '', body_match.group(1), flags=re.S)
            body = re.sub(r'<style[^>]*>.*?</style>', '', body, flags=re.S)
            body = re.sub(r'<[^>]+>', ' ', body)
            content = re.sub(r'\s+', ' ', body).strip()[:5000]

    # Excerpt: first ~200 chars of content
    excerpt = content[:220].rsplit(' ', 1)[0] + "…" if len(content) > 220 else content

    # Category from URL path
    path = slug_from_url(url)
    category = "Messages" if path.startswith("messages/") else "Article"

    return {
        "slug": path,
        "url": url,
        "title": title,
        "date": date or "",
        "excerpt": excerpt,
        "content": content[:8000],  # cap at ~8K chars
        "category": category,
    }


def main():
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)

    # Load existing progress if any
    existing = {}
    if OUT_FILE.exists():
        try:
            existing = {p["slug"]: p for p in json.loads(OUT_FILE.read_text())}
            print(f"Resuming — {len(existing)} posts already scraped")
        except Exception:
            pass

    # Collect all post URLs
    all_urls: list[str] = []
    for sitemap_url in SITEMAP_URLS:
        all_urls.extend(get_post_urls_from_sitemap(sitemap_url))
        time.sleep(0.5)

    # Deduplicate
    all_urls = list(dict.fromkeys(all_urls))
    print(f"\nTotal URLs to process: {len(all_urls)}")

    posts = dict(existing)
    new_count = 0
    skip_count = 0
    error_count = 0

    for i, url in enumerate(all_urls):
        slug = slug_from_url(url)

        if slug in posts:
            skip_count += 1
            continue

        print(f"[{i+1}/{len(all_urls)}] {slug}")
        html = fetch_url(url)

        if html is None:
            print(f"  SKIP (404/error)")
            error_count += 1
            continue

        post = parse_post(url, html)
        if post:
            posts[slug] = post
            new_count += 1

        # Save progress every 20 posts
        if new_count % 20 == 0 and new_count > 0:
            OUT_FILE.write_text(json.dumps(list(posts.values()), indent=2, ensure_ascii=False))
            print(f"  Progress saved ({len(posts)} total)")

        time.sleep(DELAY)

    # Final save — sort by date desc
    sorted_posts = sorted(posts.values(), key=lambda p: p.get("date", ""), reverse=True)
    OUT_FILE.write_text(json.dumps(sorted_posts, indent=2, ensure_ascii=False))
    print(f"\n✅ Done! {new_count} new, {skip_count} skipped, {error_count} errors")
    print(f"   Saved to: {OUT_FILE}")


if __name__ == "__main__":
    main()
