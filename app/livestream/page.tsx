"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

function LivestreamEmbed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("subsplash-embed-livestream");
      if (!target || target.dataset.loaded) return;
      target.dataset.loaded = "1";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function () {
        (window as any).subsplashEmbed(
          "u/-Z9H3R5/media/ms/+live?embed=true",
          "https://subsplash.com/",
          "subsplash-embed-livestream"
        );
      };
      script.src =
        "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
      target.parentElement!.insertBefore(script, target);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ minHeight: "520px", width: "100%" }}>
      <div id="subsplash-embed-livestream" />
    </div>
  );
}

export default function LivestreamPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Watch Live</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Livestream
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "8px" }}>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", margin: 0 }}>
              <strong style={{ color: "var(--gold-400)" }}>Sunday Service</strong> &mdash; Sundays 10am
            </p>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", margin: 0 }}>
              <strong style={{ color: "var(--gold-400)" }}>Apologetics Class</strong> &mdash; Tuesdays 7pm
            </p>
          </div>
        </div>
      </section>

      {/* ── Live embed ── */}
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="brc-container">
          <LivestreamEmbed />
        </div>
      </section>

      {/* ── Resources ── */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "40px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Resources</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Follow Along
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(260px,1fr))", gap: "16px" }}>
            {[
              { label: "Sermon Notes", href: "https://www.barabbas.com/wp-content/uploads/2024/06/sermonnotes.pdf", desc: "Download and print this week's sermon notes to follow along." },
              { label: "Application Questions", href: "http://www.barabbas.com/wp-content/uploads/2015/10/242Questions2.pdf", desc: "Weekly discussion questions for your Life Group." },
              { label: "Previous Sermons", href: "/sermons", desc: "Browse our full sermon archive by book, series, or topic.", internal: true },
            ].map((r) => (
              r.internal ? (
                <Link key={r.label} href={r.href} style={{ textDecoration: "none" }}>
                  <div style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "24px", border: "1px solid var(--border-subtle)", borderTop: "4px solid var(--gold-400)", height: "100%" }}>
                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 8px", color: "var(--ink-900)" }}>{r.label}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                  </div>
                </Link>
              ) : (
                <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                  <div style={{ background: "var(--white)", borderRadius: "var(--radius-lg)", padding: "24px", border: "1px solid var(--border-subtle)", borderTop: "4px solid var(--gold-400)", height: "100%" }}>
                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 8px", color: "var(--ink-900)" }}>{r.label}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>About Us</Eyebrow>
          <p style={{ color: "rgba(255,255,255,.75)", fontSize: "18px", maxWidth: "58ch", lineHeight: 1.7, margin: "20px 0 28px" }}>
            Barabbas Road Church in San Diego is on mission to make disciple-making disciples through the personal investment of our lives. We are a church that teaches and preaches the whole counsel of God and we trust that God will grow His church through the means that He has set forth in His inerrant and infallible Word.
          </p>
          <Link href="/new-here">
            <Button variant="primary" size="lg">Plan Your Visit</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
