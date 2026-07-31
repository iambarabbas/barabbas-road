"use client";

import { useEffect } from "react";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Icon } from "@/components/Icon";

// ── Subsplash giving form ─────────────────────────────────────────────────────

function GivingEmbed() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const target = document.getElementById("subsplash-embed-495b");
      if (!target || target.dataset.loaded) return;
      target.dataset.loaded = "1";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.onload = function () {
        (window as any).subsplashEmbed(
          "u/-Z9H3R5/give?&embed=true",
          "https://subsplash.com/",
          "subsplash-embed-495b"
        );
      };
      script.src =
        "https://dashboard.static.subsplash.com/production/web-client/external/embed-1.1.0.js";
      target.parentElement!.insertBefore(script, target);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return <div id="subsplash-embed-495b" />;
}

// ── Data ─────────────────────────────────────────────────────────────────────

const WAYS_TO_GIVE = [
  {
    icon: "heart" as const,
    h: "Give Stock",
    b: "Transfer appreciated stock or securities directly to Barabbas Road Church.",
    href: "https://platform.engiven.com/give/16126/widget/29625",
  },
  {
    icon: "heart" as const,
    h: "Give Crypto",
    b: "Donate Bitcoin, Ethereum, and other cryptocurrencies through Engiven.",
    href: "https://platform.engiven.com/give/16126/widget/29624",
  },
  {
    icon: "heart" as const,
    h: "Online",
    b: "Give one-time or set up recurring giving through Subsplash — secure, simple, takes 2 minutes.",
    href: null,
  },
  {
    icon: "mapPin" as const,
    h: "In Person",
    b: "Drop your gift in the offering during Sunday service. Checks made payable to Barabbas Road Church.",
    href: null,
  },
  {
    icon: "calendar" as const,
    h: "Mail a Check",
    b: "Barabbas Road Church · 7340 Miramar Rd, Suite #106 · San Diego, CA 92126",
    href: null,
  },
];

const FAQ = [
  {
    q: "Can I make a one-time or recurring donation?",
    a: "Yes. Subsplash allows you to give either a one-time donation or set up recurring giving — weekly, monthly, or any schedule you choose.",
  },
  {
    q: "Can I change my credit card or adjust the amount?",
    a: "Yes. Both options are available anytime in the Subsplash system through your donor account.",
  },
  {
    q: "Is online giving secure?",
    a: "Yes. We've taken steps to ensure the giving process is safe from beginning to end. All data is secured including SSL encryption through your web browser.",
  },
  {
    q: "Can I give to a specific ministry?",
    a: "All giving is unto the Lord. Know that every offering given to Barabbas Road goes directly to supporting the mission and vision of the church.",
  },
  {
    q: "How do I get a year-end statement?",
    a: "Year-end statements for the previous year are sent by post or email each January. For online giving, you can access your giving records anytime in the Subsplash system.",
  },
  {
    q: "What is the Cooperative Program?",
    a: "A portion of our giving supports the Southern Baptist Convention's Cooperative Program — funding church planting, missions, and theological education globally.",
  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export default function GivePage() {
  return (
    <div>

      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Generosity</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Give
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "54ch",
              lineHeight: 1.6,
            }}
          >
            Giving is an act of worship. Every gift supports the mission of
            Barabbas Road Church — making disciple-making disciples in San Diego
            and beyond.
          </p>
        </div>
      </section>

      {/* Giving form + sidebar */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div
            className="brc-give-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "48px",
              alignItems: "start",
            }}
          >
            {/* Form */}
            <div>
              <GivingEmbed />
            </div>

            {/* Sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

              {/* Scripture */}
              <div
                style={{
                  background: "var(--ink-900)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px",
                  color: "var(--white)",
                }}
              >
                <blockquote
                  style={{
                    margin: 0,
                    padding: 0,
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                    fontSize: "18px",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,.9)",
                  }}
                >
                  &ldquo;Each one must give as he has decided in his heart, not
                  reluctantly or under compulsion, for God loves a cheerful
                  giver.&rdquo;
                </blockquote>
                <div
                  style={{
                    marginTop: "16px",
                    color: "var(--gold-400)",
                    fontFamily: "var(--font-semicond)",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: ".1em",
                    fontSize: "13px",
                  }}
                >
                  2 Corinthians 9:7
                </div>
              </div>

              {/* Ways to give */}
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-cond)",
                    fontSize: "22px",
                    margin: "0 0 20px",
                  }}
                >
                  Other Ways to Give
                </h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {WAYS_TO_GIVE.map((w) => {
                    const inner = (
                      <>
                        <div
                          style={{
                            flexShrink: 0,
                            width: "40px",
                            height: "40px",
                            borderRadius: "var(--radius-md)",
                            background: "var(--gold-100)",
                            color: "var(--gold-700)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon name={w.icon} size={18} strokeWidth={1.8} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: "16px",
                              marginBottom: "2px",
                              color: w.href ? "var(--gold-700)" : "var(--text-heading)",
                              textDecoration: w.href ? "underline" : "none",
                            }}
                          >
                            {w.h} {w.href && <span style={{ fontSize: "12px", opacity: 0.7 }}>↗</span>}
                          </div>
                          <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "14px", lineHeight: 1.55 }}>
                            {w.b}
                          </p>
                        </div>
                      </>
                    );
                    return w.href ? (
                      <a
                        key={w.h}
                        href={w.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ display: "flex", gap: "16px", alignItems: "flex-start", textDecoration: "none" }}
                      >
                        {inner}
                      </a>
                    ) : (
                      <div key={w.h} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                        {inner}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Giving FAQ</Eyebrow>
            <h2
              style={{
                fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)",
                margin: "16px 0 0",
                lineHeight: 1,
              }}
            >
              Common Questions
            </h2>
          </div>
          <div
            style={{
              maxWidth: "760px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {FAQ.map((item, i) => (
              <div
                key={item.q}
                style={{
                  padding: "24px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
                }}
              >
                <h3 style={{ fontSize: "20px", margin: "0 0 10px", lineHeight: 1.2 }}>
                  {item.q}
                </h3>
                <p
                  style={{
                    color: "var(--text-muted)",
                    margin: 0,
                    lineHeight: 1.65,
                    fontSize: "16px",
                  }}
                >
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive grid */}
      <style>{`
        @media (min-width: 900px) {
          .brc-give-grid {
            grid-template-columns: 1fr 340px !important;
          }
        }
      `}</style>

    </div>
  );
}
