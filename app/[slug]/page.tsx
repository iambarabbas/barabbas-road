import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import postsData from "@/data/posts.json";

// ── Types ────────────────────────────────────────────────────────────────────

interface Post {
  slug: string;
  url: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
}

const posts = (postsData as Post[]).filter((p) => !/^genesis\s/i.test(p.title));
const postMap = new Map(posts.map((p) => [p.slug, p]));

// ── Static generation ─────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

// ── Metadata ──────────────────────────────────────────────────────────────────

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = postMap.get(slug);
  if (!post) return { title: "Not Found" };
  const SITE_URL = "https://barabbas.com";
  const title = decodeHtmlEntities(post.title);
  const description = post.excerpt || `A Bible teaching article from Barabbas Road Church in Miramar, San Diego.`;
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${post.slug}/`,
    },
    authors: [{ name: "Barabbas Road Church", url: SITE_URL }],
    openGraph: {
      title,
      description,
      type: "article",
      url: `${SITE_URL}/${post.slug}/`,
      siteName: "Barabbas Road Church",
      publishedTime: post.date || undefined,
      authors: ["Barabbas Road Church"],
      section: post.category,
      images: [
        {
          url: `/assets/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: `${title} — Barabbas Road Church`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/og-default.jpg"],
    },
  };
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201C")
    .replace(/&#8221;/g, "\u201D")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&nbsp;/g, "\u00A0");
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function buildArticleSchema(post: Post, title: string) {
  const SITE_URL = "https://barabbas.com";
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE_URL}/${post.slug}/`,
    headline: title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    url: `${SITE_URL}/${post.slug}/`,
    inLanguage: "en-US",
    wordCount: post.content.trim().split(/\s+/).length,
    author: {
      "@type": "Organization",
      name: "Barabbas Road Church",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Barabbas Road Church",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/assets/logolock-black.png`,
      },
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Barabbas Road Church",
      url: `${SITE_URL}/`,
    },
    about: {
      "@type": "Thing",
      name: "Bible teaching",
    },
  };
}

// ── Smart plain-text renderer ────────────────────────────────────────────────

type ContentSection = { type: "heading" | "body"; text: string };

const SENTENCES_PER_PARA = 4;

function processPlainContent(text: string): ContentSection[] {
  const sentences = text
    .split(/(?<=[.!?…])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 4);

  const sections: ContentSection[] = [];
  let buffer: string[] = [];
  let currentType: "heading" | "body" = "body";

  const flush = () => {
    if (buffer.length > 0) {
      sections.push({ type: currentType, text: buffer.join(" ") });
      buffer = [];
    }
  };

  for (const sentence of sentences) {
    const upper = (sentence.match(/[A-Z]/g) || []).length;
    const letters = (sentence.match(/[a-zA-Z]/g) || []).length;
    const type: "heading" | "body" =
      letters > 0 && upper / letters > 0.65 ? "heading" : "body";

    if (type !== currentType) {
      flush();
      currentType = type;
    }

    buffer.push(sentence);

    // Break body text into readable paragraphs
    if (currentType === "body" && buffer.length >= SENTENCES_PER_PARA) {
      flush();
    }
  }

  flush();
  return sections;
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap.get(slug);
  if (!post) notFound();

  const title = decodeHtmlEntities(post.title);
  const content = decodeHtmlEntities(post.content);
  const formattedDate = formatDate(post.date);
  const minutes = readingTime(post.content);
  const articleSchema = buildArticleSchema(post, title);

  return (
    <div>
      {/* Article header */}
      <section style={{ background: "var(--ink-900)", padding: "56px 0 48px" }}>
        <div className="brc-container" style={{ maxWidth: "800px" }}>
          <div style={{ marginBottom: "16px" }}>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-semicond)",
                fontWeight: 700,
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: ".1em",
                color: "var(--gold-400)",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              ← Barabbas Road
            </Link>
          </div>
          <Eyebrow color="var(--gold-400)" withRule>
            {post.category}
          </Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2rem,1.4rem+3.5vw,3.8rem)",
              margin: "16px 0 16px",
              lineHeight: 1.0,
            }}
          >
            {title}
          </h1>
          {(formattedDate || minutes) && (
            <div
              style={{
                fontFamily: "var(--font-semicond)",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "rgba(255,255,255,.45)",
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              {formattedDate && <span>{formattedDate}</span>}
              {minutes && <span>{minutes} min read</span>}
            </div>
          )}
          {/* Article JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
        </div>
      </section>

      {/* Article body */}
      <article style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div
          className="brc-container"
          style={{ maxWidth: "720px" }}
        >
          {content.includes("<p") ? (
            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : content.trim().length > 20 ? (
            <div className="post-plaintext">
              {processPlainContent(content).map((section, i) =>
                section.type === "heading" ? (
                  <div key={i} className="post-section-label">
                    {section.text}
                  </div>
                ) : (
                  <p key={i} className="post-prose">
                    {section.text}
                  </p>
                )
              )}
            </div>
          ) : (
            <p style={{ color: "var(--text-muted)", fontStyle: "italic" }}>
              Content not available. Visit the original post at{" "}
              <a href={post.url} style={{ color: "var(--gold-700)" }}>
                barabbas.com
              </a>
              .
            </p>
          )}
        </div>
      </article>

      {/* Related / CTA */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="brc-container" style={{ maxWidth: "720px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <Eyebrow color="var(--gold-700)" withRule>
                Barabbas Road Church
              </Eyebrow>
              <p style={{ color: "var(--text-muted)", margin: "10px 0 0", maxWidth: "40ch" }}>
                A Bible-teaching church in Miramar, San Diego. Sundays at 10am.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/sermons">
                <Button variant="primary">Watch Sermons</Button>
              </Link>
              <Link href="/new-here">
                <Button variant="outline">Plan a Visit</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
