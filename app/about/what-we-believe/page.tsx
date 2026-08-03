import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "What We Believe" };

const ARTICLES = [
  {
    id: "holy-scriptures",
    title: "The Holy Scriptures",
    body: "We believe the Holy Scriptures of the Old and New Testaments to be the verbally inspired Word of God, the final authority for faith and life, inerrant in every matter in the original writing, infallible and God-breathed (2 Timothy 3:16–17).",
  },
  {
    id: "godhead",
    title: "The Godhead",
    body: "We believe in one Triune God, eternally existing in three persons—Father, Son, and Holy Spirit—co-eternal in being, co-identical in nature, co-equal in power and glory, and having the same attributes and perfections (Deuteronomy 6:4; 2 Corinthians 13:14).",
  },
  {
    id: "jesus-christ",
    title: "The Person and Work of Jesus Christ",
    body: "We believe that Jesus Christ, the second person of the Trinity, possesses all the divine excellencies, and in these He is co-equal, co-substantial, and co-eternal with the Father and the Holy Spirit. We believe that the Lord Jesus Christ took upon Himself human nature, yet without sin, being conceived of the Holy Spirit and of the Virgin Mary (Isaiah 7:14; Matthew 1:23; Luke 1:35). We believe in His bodily resurrection, His ascension into heaven, and His present ministry there for us as High Priest and Advocate.",
  },
  {
    id: "salvation",
    title: "Salvation",
    body: "We believe that all men are sinners by nature and by choice and are therefore under condemnation. We believe that those who repent of their sins and trust in Jesus Christ as Savior are forgiven all their sins, declared righteous before God, and given eternal life.",
  },
  {
    id: "the-church",
    title: "The Church",
    body: "We believe the church is the body of Christ, and is composed of all who are regenerated through faith in Jesus Christ. We believe in the ordinances of Baptism and the Lord's Supper.",
  },
  {
    id: "return-of-christ",
    title: "The Return of Christ",
    body: "We believe in the personal, visible return of the Lord Jesus Christ to earth, and in the establishment of His Kingdom.",
  },
];

const POSITION_PAPERS = [
  {
    id: "inerrancy",
    title: "Chicago Statement on Biblical Inerrancy",
    body: "Holy Scripture, being God's own Word, written by men prepared and superintended by His Spirit, is of infallible divine authority in all matters upon which it touches.",
  },
  {
    id: "sexuality-gender",
    title: "Biblical Statement on Sexuality & Gender",
    body: "God created human beings distinctly as male and female (Gen 1:27). The distinctness, complementarity, and relational nature of the human race as \"male and female\" is based on the created order given by God when He created humanity \"in His image.\"",
  },
  {
    id: "marriage-divorce",
    title: "Marriage & Divorce",
    body: "God hates divorce. He hates it because it always involves unfaithfulness to the solemn covenant of marriage that two partners have entered into before Him, and because it brings harmful consequences to those partners and their children (Mal. 2:14-16).",
  },
  {
    id: "men-women",
    title: "Men & Women",
    body: "Both Adam and Eve were created in God's image, equal before God as persons and distinct in their manhood and womanhood (Gen 1:26-27, 2:18). Distinctions in masculine and feminine roles are ordained by God as part of the created order.",
  },
];

export default function WhatWeBelievePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Doctrine</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 32px",
              lineHeight: 0.98,
            }}
          >
            What We Believe
          </h1>
        </div>
        <AboutSubNav />
      </section>

      {/* ── Body ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              gap: "64px",
              alignItems: "start",
            }}
          >
            {/* ── Left sticky nav ── */}
            <aside
              style={{
                position: "sticky",
                top: "88px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                Doctrinal Statement
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
                {ARTICLES.map((a) => (
                  <li key={a.id}>
                    <a
                      href={`#${a.id}`}
                      style={{
                        display: "block",
                        padding: "7px 0",
                        fontSize: "14px",
                        lineHeight: 1.4,
                        color: "var(--text-body)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      {a.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "12px",
                }}
              >
                Position Papers
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {POSITION_PAPERS.map((p) => (
                  <li key={p.id}>
                    <a
                      href={`#${p.id}`}
                      style={{
                        display: "block",
                        padding: "7px 0",
                        fontSize: "14px",
                        lineHeight: 1.4,
                        color: "var(--text-body)",
                        textDecoration: "none",
                        borderBottom: "1px solid var(--border-subtle)",
                      }}
                    >
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* ── Right content ── */}
            <div>
              {/* Doctrinal Statement */}
              <h2
                style={{
                  fontFamily: "var(--font-cond)",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem,1rem+2vw,2.4rem)",
                  color: "var(--ink-900)",
                  marginBottom: "40px",
                }}
              >
                Doctrinal Statement
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "80px" }}>
                {ARTICLES.map((article) => (
                  <div
                    key={article.id}
                    id={article.id}
                    style={{
                      borderLeft: "4px solid var(--gold-400)",
                      paddingLeft: "24px",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-cond)",
                        fontWeight: 800,
                        fontSize: "18px",
                        letterSpacing: ".03em",
                        textTransform: "uppercase",
                        color: "var(--ink-900)",
                        margin: "0 0 10px",
                      }}
                    >
                      {article.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "16px",
                        lineHeight: 1.75,
                        color: "var(--text-body)",
                        margin: 0,
                      }}
                    >
                      {article.body}
                    </p>
                  </div>
                ))}
              </div>

              {/* Position Papers */}
              <h2
                style={{
                  fontFamily: "var(--font-cond)",
                  fontWeight: 800,
                  fontSize: "clamp(1.6rem,1rem+2vw,2.4rem)",
                  color: "var(--ink-900)",
                  marginBottom: "40px",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                Position Papers
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {POSITION_PAPERS.map((paper) => (
                  <div
                    key={paper.id}
                    id={paper.id}
                    style={{
                      background: "var(--surface-card)",
                      borderRadius: "var(--radius-lg)",
                      borderTop: "4px solid var(--gold-400)",
                      padding: "28px 28px 32px",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-cond)",
                        fontWeight: 800,
                        fontSize: "20px",
                        color: "var(--ink-900)",
                        margin: "0 0 12px",
                      }}
                    >
                      {paper.title}
                    </h2>
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.75,
                        color: "var(--text-body)",
                        margin: 0,
                      }}
                    >
                      {paper.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Responsive two-column → single-column ── */}
      <style>{`
        @media (max-width: 768px) {
          .brc-container > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          aside[style*="sticky"] {
            position: static !important;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
