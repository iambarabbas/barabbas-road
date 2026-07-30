"use client";

import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Card } from "@/components/core/Card";
import { Badge } from "@/components/core/Badge";
import { Icon } from "@/components/Icon";

const PILLARS = [
  {
    n: "01", icon: "headphones", t: "Sermons", verb: "Hear", rest: "the Truth.",
    d: "Verse-by-verse teaching through God's Word, every Sunday and on demand.",
    cta: "Watch Now", href: "/sermons",
    img: "https://images.unsplash.com/photo-1490127252417-7c393f993ee4?w=900&q=80",
  },
  {
    n: "02", icon: "users", t: "Life Groups", verb: "Live", rest: "the Truth.",
    d: "Do life together in homes across San Diego — study, pray, and grow.",
    cta: "Find a Group", href: "/life-groups",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80",
  },
  {
    n: "03", icon: "bookOpen", t: "Classes", verb: "Defend", rest: "the Truth.",
    d: "Equipping classes to know what you believe and why it matters.",
    cta: "View Schedule", href: "/classes",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80",
  },
];

export function Pillars() {
  return (
    <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
      <div className="brc-container">
        <div style={{ maxWidth: "640px", marginBottom: "52px" }}>
          <Eyebrow color="var(--gold-700)" withRule>Where To Begin</Eyebrow>
          <h2 style={{ fontSize: "clamp(2.2rem, 1.4rem + 2.4vw, 3.2rem)", margin: "16px 0 0", lineHeight: 1.0 }}>
            Three Truths. One Family.
          </h2>
        </div>
        <div className="brc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {PILLARS.map((p) => (
            <Link key={p.t} href={p.href} style={{ textDecoration: "none", display: "flex" }}>
              <Card media={p.img} mediaHeight={200} interactive style={{ height: "100%", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: "18px",
                      letterSpacing: ".05em",
                      color: "var(--ink-300)",
                    }}
                  >
                    {p.n}
                  </span>
                  <span style={{ color: "var(--ink-400)" }}>
                    <Icon name={p.icon} size={22} strokeWidth={1.8} />
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.6rem, 1rem + 1.4vw, 2.15rem)",
                    lineHeight: 0.98,
                    margin: "4px 0 0",
                  }}
                >
                  <span style={{ color: "var(--gold-500)" }}>{p.verb}</span>{" "}
                  <span style={{ color: "var(--text-strong)" }}>{p.rest}</span>
                </h3>
                <Badge tone="gold">{p.t}</Badge>
                <p style={{ color: "var(--text-muted)", fontSize: "15px", margin: 0 }}>{p.d}</p>
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    color: "var(--text-accent)",
                    fontWeight: 600,
                    fontSize: "13px",
                    gap: "5px",
                  }}
                >
                  {p.cta} <Icon name="arrowRight" size={14} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
