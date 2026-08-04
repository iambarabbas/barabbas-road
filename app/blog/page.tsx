"use client";

import { useState } from "react";
import Link from "next/link";
import postsData from "@/data/posts.json";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Card } from "@/components/core/Card";
import { Badge } from "@/components/core/Badge";
import { Icon } from "@/components/Icon";

// ── Category logic ────────────────────────────────────────────────────────────

type BadgeTone = "gold" | "ink" | "outline" | "success" | "info";

interface CategoryDef {
  label: string;
  tone: BadgeTone;
}

const CATEGORY_DEFS: Record<string, CategoryDef> = {
  "Sermon Notes":      { label: "Sermon Notes",      tone: "ink"     },
  "Theology & Faith":  { label: "Theology & Faith",  tone: "gold"    },
  "Church & Ministry": { label: "Church & Ministry",  tone: "info"    },
  "Family & Life":     { label: "Family & Life",      tone: "success" },
  "Culture":           { label: "Culture",             tone: "outline" },
};

const CATEGORY_ORDER = ["Sermon Notes", "Theology & Faith", "Church & Ministry", "Family & Life", "Culture"];

function deriveCategory(title: string): string {
  const t = title.toLowerCase();
  if (/genesis|hebrews|joshua|matthew|^john |romans|ephesians|philippians|colossians|\bacts\b|revelation|psalm|proverbs|isaiah|jeremiah|daniel|ezekiel|samuel|kings|chronicles|nehemiah|esther|\bjob\b|ecclesiastes|peter|james|timothy|titus|corinthians|galatians|thessalonians|philemon|jude|exegesis of|^summary of/.test(t)) return "Sermon Notes";
  if (/preach|sermon|expository|expositional|pastor|church|congregation|elder|deacon|ministry|mission|evangel/.test(t)) return "Church & Ministry";
  if (/family|marriage|husband|wife|children|parenting|\bkids\b|\bmen\b|\bwomen\b/.test(t)) return "Family & Life";
  if (/\bai\b|chatgpt|technology|covid|culture|social media|political|america/.test(t)) return "Culture";
  return "Theology & Faith";
}

// ── Data prep ─────────────────────────────────────────────────────────────────

interface RawPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

interface Post extends RawPost {
  cat: string;
}

const allPosts: Post[] = (postsData as RawPost[]).filter((p) => !/^genesis\s/i.test(p.title)).map((p) => ({
  ...p,
  cat: deriveCategory(p.title),
}));

const catCounts = CATEGORY_ORDER.reduce<Record<string, number>>((acc, c) => {
  acc[c] = allPosts.filter((p) => p.cat === c).length;
  return acc;
}, {});

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDate(d: string) {
  try {
    return new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return d;
  }
}

const PER_PAGE = 18;

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCat, setActiveCat] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = activeCat === "All" ? allPosts : allPosts.filter((p) => p.cat === activeCat);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handleCat(cat: string) {
    setActiveCat(cat);
    setPage(1);
  }

  function handlePage(n: number) {
    setPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Build pagination page numbers with ellipsis
  const pageNums: (number | "…")[] = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - page) <= 2) {
      pageNums.push(i);
    } else if (pageNums[pageNums.length - 1] !== "…") {
      pageNums.push("…");
    }
  }

  const btnBase: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: "13px",
    letterSpacing: ".06em",
    textTransform: "uppercase",
    borderRadius: "var(--radius-pill)",
    padding: "7px 18px",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "all var(--dur-fast) var(--ease-out)",
    border: "1px solid var(--border-default)",
    background: "transparent",
    color: "var(--text-muted)",
  };

  return (
    <div>
      {/* ── Header ── */}
      <section style={{ background: "var(--ink-900)", padding: "56px 0 52px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>From the Blog</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.5rem, 1.4rem + 4vw, 4.5rem)",
              margin: "16px 0 0",
              lineHeight: 1.0,
            }}
          >
            Articles &amp; Updates
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.55)",
              fontSize: "var(--fs-lead)",
              margin: "16px 0 0",
              maxWidth: "52ch",
            }}
          >
            {allPosts.length} posts on theology, preaching, culture, and life in Christ.
          </p>
        </div>
      </section>

      {/* ── Category tabs ── */}
      <div
        style={{
          background: "var(--surface-card)",
          borderBottom: "1px solid var(--border-subtle)",
          position: "sticky",
          top: "76px",
          zIndex: 50,
        }}
      >
        <div
          className="brc-container"
          style={{
            display: "flex",
            gap: "6px",
            overflowX: "auto",
            padding: "14px 0",
            scrollbarWidth: "none",
          }}
        >
          {/* All */}
          <button
            onClick={() => handleCat("All")}
            style={{
              ...btnBase,
              background: activeCat === "All" ? "var(--ink-900)" : "transparent",
              color: activeCat === "All" ? "var(--white)" : "var(--text-muted)",
              borderColor: activeCat === "All" ? "var(--ink-900)" : "var(--border-default)",
            }}
          >
            All <span style={{ opacity: 0.55, marginLeft: "4px" }}>({allPosts.length})</span>
          </button>

          {CATEGORY_ORDER.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCat(cat)}
              style={{
                ...btnBase,
                background: activeCat === cat ? "var(--ink-900)" : "transparent",
                color: activeCat === cat ? "var(--white)" : "var(--text-muted)",
                borderColor: activeCat === cat ? "var(--ink-900)" : "var(--border-default)",
              }}
            >
              {cat} <span style={{ opacity: 0.55, marginLeft: "4px" }}>({catCounts[cat]})</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <p style={{ color: "var(--text-subtle)", fontSize: "var(--fs-sm)", marginBottom: "24px" }}>
            Showing {(page - 1) * PER_PAGE + 1}–{Math.min(page * PER_PAGE, filtered.length)} of{" "}
            {filtered.length} posts
          </p>

          <div
            className="brc-blog-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}
          >
            {visible.map((p) => {
              const def = CATEGORY_DEFS[p.cat];
              return (
                <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: "none", display: "flex" }}>
                  <Card interactive style={{ height: "100%", width: "100%" }}>
                    <Badge tone={def?.tone ?? "gold"}>{def?.label ?? p.cat}</Badge>
                    <h3
                      style={{
                        fontSize: "18px",
                        lineHeight: 1.22,
                        margin: "2px 0 0",
                        color: "var(--text-strong)",
                      }}
                    >
                      {p.title}
                    </h3>
                    <div
                      style={{
                        marginTop: "auto",
                        paddingTop: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: "var(--text-subtle)",
                        fontSize: "13px",
                      }}
                    >
                      <span>{formatDate(p.date)}</span>
                      <span
                        style={{
                          color: "var(--text-accent)",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        Read <Icon name="arrowRight" size={14} />
                      </span>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                marginTop: "52px",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => handlePage(page - 1)}
                disabled={page === 1}
                style={{
                  ...btnBase,
                  opacity: page === 1 ? 0.35 : 1,
                  cursor: page === 1 ? "default" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <Icon name="arrowRight" size={14} style={{ transform: "rotate(180deg)" }} /> Prev
              </button>

              {pageNums.map((n, i) =>
                n === "…" ? (
                  <span
                    key={`e${i}`}
                    style={{ color: "var(--text-subtle)", fontSize: "14px", padding: "0 4px" }}
                  >
                    …
                  </span>
                ) : (
                  <button
                    key={n}
                    onClick={() => handlePage(n as number)}
                    style={{
                      ...btnBase,
                      padding: "7px 14px",
                      background: page === n ? "var(--ink-900)" : "transparent",
                      color: page === n ? "var(--white)" : "var(--text-muted)",
                      borderColor: page === n ? "var(--ink-900)" : "var(--border-default)",
                    }}
                  >
                    {n}
                  </button>
                )
              )}

              <button
                onClick={() => handlePage(page + 1)}
                disabled={page === totalPages}
                style={{
                  ...btnBase,
                  opacity: page === totalPages ? 0.35 : 1,
                  cursor: page === totalPages ? "default" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Next <Icon name="arrowRight" size={14} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
