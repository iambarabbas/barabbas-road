import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = {
  title: "Life Groups",
  description:
    "Find a Life Group near you. Weekly small groups throughout San Diego for Bible study, fellowship, and community.",
};

import LifeGroupsMapLoader from "@/components/life-groups/LifeGroupsMapLoader";

export default function LifeGroupsPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Live the Truth</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Life Groups
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "54ch",
              lineHeight: 1.6,
            }}
          >
            The church was never meant to be a crowd you watch. Do life
            together in homes across San Diego — study, pray, and grow with
            people who know your name.
          </p>
        </div>
      </section>

      {/* ── Scripture bar ── */}
      <section style={{ background: "var(--gold-400)", padding: "22px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(1rem,.9rem+.8vw,1.35rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--ink-900)",
              margin: 0,
            }}
          >
            &ldquo;They devoted themselves to the apostles&apos; teaching and
            to fellowship, to the breaking of bread and to prayer.&rdquo;
            &mdash; Acts&nbsp;2:42
          </p>
        </div>
      </section>

      {/* ── Group Finder ── */}
      <section style={{ background: "var(--paper)" }}>
        <div className="brc-container" style={{ paddingTop: "48px", paddingBottom: "12px" }}>
          <Eyebrow color="var(--gold-700)" withRule>
            Find Your People
          </Eyebrow>
          <h2
            style={{
              fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)",
              margin: "12px 0 8px",
              lineHeight: 1,
            }}
          >
            Life Groups Near You
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "17px",
              maxWidth: "52ch",
              lineHeight: 1.6,
              marginBottom: "12px",
            }}
          >
            Weekly gatherings in homes across San Diego. Filter by day, find
            a group on the map, and join one that fits your life.
          </p>
        </div>

        {/* Full-width map finder — client-only (Leaflet) */}
        <LifeGroupsMapLoader />
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: "var(--surface-card)",
          padding: "var(--section-y) 0",
        }}
      >
        <div
          className="brc-container"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Eyebrow color="var(--gold-700)" align="center" withRule>
            Not Sure Where to Start?
          </Eyebrow>
          <h2
            style={{
              fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)",
              margin: "18px 0 16px",
              lineHeight: 1,
            }}
          >
            We&apos;ll Find You a Group
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "18px",
              maxWidth: "44ch",
              marginBottom: "28px",
            }}
          >
            Not sure which group is right for you? Reach out and we&apos;ll
            make the connection. It starts with one conversation.
          </p>
          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Connected
              </Button>
            </Link>
            <Link href="/new-here">
              <Button variant="outline" size="lg">
                New Here?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
