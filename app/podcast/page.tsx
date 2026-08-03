import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = {
  title: "A Lot of Words Podcast",
  description:
    "A conversational deep-dive podcast hosted by Pastor Matt Smith and Brett Schoeneck — biblical clarity on real questions about faith, Scripture, theology, and everyday Christian living.",
  alternates: { canonical: "https://barabbas.com/podcast/" },
  openGraph: {
    title: "A Lot of Words Podcast | Barabbas Road Church",
    description:
      "Real questions. Biblical answers. Pastor Matt Smith and Brett Schoeneck tackle theology, culture, and everyday Christian living every week.",
    url: "https://barabbas.com/podcast/",
  },
};

const FEATURED = {
  id: "1GFZ8o1DvPE",
  title: "How to Read the Bible for Understanding",
  description:
    "Pastor Matt Smith walks through what it actually looks like to read the Bible well — not just for information, but for transformation. A foundational episode.",
};

const EPISODES = [
  {
    id: "cUGrXRSiryo",
    title: "Spiritual Gifts, False Prophets & the Charismatic Church",
    description:
      "Are tongues and prophecy still for today? What is the baptism of the Holy Spirit? How should Christians think about modern prophets and the charismatic movement?",
  },
  {
    id: "x7MOVpfK5ds",
    title: "Jesus Said \"I Never Knew You\" — Who Was He Talking To?",
    description:
      "\"Depart from me, I never knew you\" may be the most sobering words Jesus ever spoke. Who was He talking to, what did they get wrong, and why does this warning still matter?",
  },
];

const PLATFORMS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ALotofWordsPodcast",
    color: "#FF0000",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/4BDk62lDqdUFdOGh81MGUT",
    color: "#1DB954",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    ),
  },
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/search?term=A+Lot+of+Words+Podcast+Matt+Smith",
    color: "#872EC4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.003 0C5.374 0 0 5.374 0 12.003c0 6.13 4.377 11.237 10.131 12.297V15.33H7.237v-3.326h2.894V9.494c0-2.866 1.707-4.45 4.317-4.45 1.25 0 2.558.224 2.558.224v2.814h-1.44c-1.419 0-1.861.882-1.861 1.786v2.143h3.168l-.506 3.326h-2.662v8.97C19.623 23.24 24 18.133 24 12.003 24 5.374 18.626 0 12.003 0z"/>
      </svg>
    ),
  },
];

export default function PodcastPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--ink-900)",
          padding: "72px 0 64px",
        }}
      >
        <div className="brc-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem,5vw,5rem)",
              alignItems: "center",
            }}
            className="brc-podcast-hero"
          >
            <div>
              <Eyebrow color="var(--gold-400)" withRule>New Episode Every Week</Eyebrow>
              <h1
                style={{
                  color: "var(--white)",
                  fontSize: "clamp(2.6rem,1.2rem+5vw,5rem)",
                  margin: "16px 0 6px",
                  lineHeight: 0.92,
                  letterSpacing: "-0.01em",
                }}
              >
                A Lot of
                <br />
                Words
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1rem,0.6rem+1.5vw,1.4rem)",
                  color: "var(--gold-400)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 20px",
                }}
              >
                Podcast
              </p>
              <p
                style={{
                  color: "rgba(255,255,255,.7)",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  maxWidth: "44ch",
                  marginBottom: "32px",
                }}
              >
                Pastor Matt Smith and Brett Schoeneck answer real questions about
                faith, Scripture, theology, and everyday Christian living — with
                biblical clarity, pastoral honesty, and a lot of words.
              </p>

              {/* Platform buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                {PLATFORMS.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "9px",
                      padding: "10px 18px",
                      borderRadius: "var(--radius-sm)",
                      background: "rgba(255,255,255,.08)",
                      border: "1px solid rgba(255,255,255,.15)",
                      color: "var(--white)",
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      textDecoration: "none",
                      transition: "background 0.15s",
                    }}
                  >
                    <span style={{ color: p.color }}>{p.icon}</span>
                    {p.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Featured embed */}
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "56.25%",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,.5)",
              }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${FEATURED.id}?rel=0&modestbranding=1`}
                title={FEATURED.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About the show ── */}
      <section style={{ background: "var(--gold-400)", padding: "28px 0" }}>
        <div className="brc-container">
          <div
            style={{
              display: "flex",
              gap: "clamp(1.5rem,4vw,4rem)",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {[
              { label: "Hosts", value: "Matt Smith & Brett Schoeneck" },
              { label: "Topics", value: "Theology · Culture · Christian Living" },
              { label: "Listen on", value: "YouTube · Spotify · Apple Podcasts" },
            ].map((item) => (
              <div key={item.label} style={{ textAlign: "center", color: "var(--ink-900)" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    opacity: 0.6,
                    marginBottom: "4px",
                  }}
                >
                  {item.label}
                </div>
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "15px" }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Episodes ── */}
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="brc-container">
          <div style={{ marginBottom: "40px" }}>
            <Eyebrow color="var(--gold-700)" withRule>More Episodes</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.2rem+2vw,2.6rem)", margin: "12px 0 0", lineHeight: 1 }}>
              Dig In
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "32px",
            }}
          >
            {EPISODES.map((ep) => (
              <div key={ep.id}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    marginBottom: "16px",
                  }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${ep.id}?rel=0&modestbranding=1`}
                    title={ep.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      border: "none",
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    margin: "0 0 8px",
                    lineHeight: 1.2,
                    color: "var(--ink-900)",
                  }}
                >
                  {ep.title}
                </h3>
                <p style={{ fontSize: "14.5px", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                  {ep.description}
                </p>
              </div>
            ))}
          </div>

          {/* See all */}
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a
              href="https://www.youtube.com/@ALotofWordsPodcast/videos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 36px",
                background: "var(--ink-900)",
                color: "var(--white)",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "14px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderRadius: "var(--radius-sm)",
                textDecoration: "none",
              }}
            >
              See All Episodes on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── Subscribe CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <Eyebrow color="var(--gold-400)" withRule align="center">Never Miss an Episode</Eyebrow>
          <h2
            style={{
              color: "var(--white)",
              fontSize: "clamp(2rem,1.2rem+3vw,3rem)",
              margin: "16px 0 16px",
              lineHeight: 1,
            }}
          >
            Subscribe Wherever You Listen
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "17px", marginBottom: "32px", lineHeight: 1.65 }}>
            New episodes every week — theology, culture, and real questions answered with biblical honesty.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "14px" }}>
            {PLATFORMS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "9px",
                  padding: "13px 22px",
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(255,255,255,.1)",
                  border: "1px solid rgba(255,255,255,.2)",
                  color: "var(--white)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "14px",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: p.color }}>{p.icon}</span>
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
