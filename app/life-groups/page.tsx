import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = {
  title: "Life Groups",
  description:
    "Find a Life Group near you. Weekly small groups throughout San Diego for Bible study, fellowship, and community.",
  alternates: { canonical: "https://barabbas.com/life-groups/" },
};

import LifeGroupsMapLoader from "@/components/life-groups/LifeGroupsMapLoader";

export default function LifeGroupsPage() {
  return (
    <div>
      {/* ── Hero — full-bleed photo ── */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "clamp(480px, 55vw, 680px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/life-groups-hero.jpg`}
          alt="Life Group Bible study in a San Diego home"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
        />
        {/* Dark gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.70) 50%, rgba(13,27,42,0.30) 100%)",
          }}
        />
        {/* Content */}
        <div className="brc-container" style={{ position: "relative", zIndex: 1, padding: "80px 0" }}>
          <Eyebrow color="var(--gold-400)" withRule>Live the Truth</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 14px",
              lineHeight: 0.98,
            }}
          >
            Life Groups
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.72)",
              fontSize: "18px",
              maxWidth: "54ch",
              lineHeight: 1.65,
            }}
          >
            The church was never meant to be a crowd you watch. Do life
            together in homes across San Diego — study, pray, and grow with
            people who know your name.
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
