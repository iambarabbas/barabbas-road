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

const posts = postsData as Post[];
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
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date || undefined,
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

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postMap.get(slug);
  if (!post) notFound();

  const title = decodeHtmlEntities(post.title);
  const content = decodeHtmlEntities(post.content);
  const formattedDate = formatDate(post.date);

  // Split content into paragraphs for clean rendering
  const paragraphs = content
    .split(/\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 20);

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
          {formattedDate && (
            <div
              style={{
                fontFamily: "var(--font-semicond)",
                fontWeight: 600,
                fontSize: "14px",
                textTransform: "uppercase",
                letterSpacing: ".08em",
                color: "rgba(255,255,255,.45)",
              }}
            >
              {formattedDate}
            </div>
          )}
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
          ) : paragraphs.length > 0 ? (
            paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: "var(--fs-lead)",
                  lineHeight: "var(--lh-relaxed)",
                  color: "var(--text-body)",
                  marginBottom: "1.5em",
                }}
              >
                {para}
              </p>
            ))
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
                A Bible-teaching church in Clairemont, San Diego. Sundays at 10am.
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
