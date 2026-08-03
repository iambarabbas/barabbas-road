import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function AdventureClubPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px", textAlign: "center" }}>
        <div className="brc-container" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${BASE}/assets/adventure-club-logo.png`}
            alt="Adventure Club"
            style={{ height: "140px", marginBottom: "28px" }}
          />
          <Eyebrow color="var(--gold-400)" withRule align="center">Kids Ministry</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 16px",
              lineHeight: 0.98,
            }}
          >
            Adventure Club
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "52ch",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            A monthly program combining outdoor adventure, team challenges, and
            Bible-centered discipleship for kids at Barabbas Road Church.
          </p>
        </div>
      </section>

      {/* ── Video ── */}
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ maxWidth: "860px" }}>
          <div style={{ marginBottom: "40px" }}>
            <Eyebrow color="var(--gold-700)" withRule>See It in Action</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "14px 0 0", lineHeight: 1 }}>
              What Is Adventure Club?
            </h2>
          </div>

          {/* Vimeo embed */}
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              boxShadow: "var(--shadow-lg)",
              marginBottom: "40px",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/952724789"
              title="Adventure Club — Barabbas Road Church"
              allow="autoplay; fullscreen; picture-in-picture"
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

          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", margin: 0 }}>
            Adventure Club is a monthly program for kids at Barabbas Road Church that
            takes discipleship outside the classroom. Through outdoor adventures,
            team-building challenges, and hands-on Bible teaching, kids experience
            the truth of God&apos;s Word in an unforgettable way. It&apos;s designed to
            help children build lasting friendships, develop real faith, and discover
            that following Jesus is the greatest adventure of all.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div
          className="brc-container"
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <Eyebrow color="var(--gold-400)" align="center" withRule>Get Involved</Eyebrow>
          <h2
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)",
              margin: "18px 0 16px",
              lineHeight: 1,
            }}
          >
            Questions About Adventure Club?
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "44ch",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            Reach out to Pastor Trace Trebilco, our Director of Children&apos;s Church,
            for more information or to get your child involved.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:trace@barabbas.com">
              <Button variant="primary" size="lg">Email Pastor Trace</Button>
            </a>
            <Link href="/kids">
              <Button variant="outline-light" size="lg">Back to Kids Church</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
