import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Kids" };

const PHOTO_COMMUNITY = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80";

const AGES = [
  { label: "Nursery",    ages: "Birth – 2 years",  desc: "A safe, loving environment for your littlest ones during the service." },
  { label: "Preschool",  ages: "3 – 5 years",      desc: "Bible stories, worship, and play — all designed for young hearts." },
  { label: "Elementary", ages: "K – 5th Grade",    desc: "Age-appropriate teaching that builds a real foundation of faith." },
];

export default function KidsPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>For Families</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Kids Church
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch" }}>
            Every Sunday during the 10am service, we run age-appropriate Kids Church for birth through 5th grade. Your kids are safe, loved, and learning.
          </p>
        </div>
      </section>

      {/* Age groups */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Every Sunday</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>Something for Every Age</h2>
          </div>
          <div className="brc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
            {AGES.map((a) => (
              <div key={a.label} style={{ paddingTop: "28px", borderTop: "3px solid var(--gold-400)" }}>
                <h3 style={{ fontSize: "clamp(1.6rem,1.2rem+1vw,2rem)", margin: "0 0 4px" }}>{a.label}</h3>
                <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "13px", color: "var(--text-accent)", marginBottom: "14px" }}>{a.ages}</div>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO_COMMUNITY} alt="Kids at church" style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover" }} />
          <div>
            <Eyebrow color="var(--gold-700)" withRule>First Visit?</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 18px", lineHeight: 1.05 }}>We Make It Easy</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "26px", fontSize: "17px", lineHeight: 1.6 }}>
              Look for our Kids Check-in station in the lobby before the service. Our volunteers will walk you through everything — check-in, the room, pickup procedures. No stress.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button variant="primary">Plan Your Visit</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
