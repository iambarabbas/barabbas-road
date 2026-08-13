"use client";

import { useEffect } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";

// Note: metadata export is ignored in "use client" components in Next.js App Router.
// SEO is handled via the parent layout and the page's visible content.

function PageHeader() {
  return (
    <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 56px" }}>
      <div className="brc-container">
        <Eyebrow color="var(--gold-400)" withRule>Theologetics Class</Eyebrow>
        <h1
          style={{
            color: "var(--white)",
            fontSize: "clamp(2.4rem,1.4rem+4vw,4rem)",
            margin: "16px 0 12px",
            lineHeight: 0.98,
          }}
        >
          Past Classes
        </h1>
        <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
          Browse the full archive of Theologetics class recordings — theology, apologetics, and defending the faith.
        </p>
        <div style={{ marginTop: "28px" }}>
          <Link
            href="/classes"
            style={{
              fontFamily: "var(--font-semicond)",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: ".06em",
              textTransform: "uppercase",
              color: "var(--gold-400)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            ← Back to Classes
          </Link>
        </div>
      </div>
    </section>
  );
}

function TheologeticsArchiveEmbed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("subsplash-embed-2hfnzc3");
      if (!target) return;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
      script.onload = () => {
        (window as any).subsplashEmbed(
          "+495b/lb/ms/+8rmjyh7?embed&1786634613744",
          "https://subsplash.com/",
          "subsplash-embed-2hfnzc3"
        );
      };
      target.parentElement!.insertBefore(script, target);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return <div id="subsplash-embed-2hfnzc3" />;
}

export default function TheologeticsPastPage() {
  return (
    <div>
      <PageHeader />
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <TheologeticsArchiveEmbed />
        </div>
      </section>
    </div>
  );
}
