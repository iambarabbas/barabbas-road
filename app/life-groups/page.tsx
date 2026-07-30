import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Life Groups" };

const PHOTO_COMMUNITY = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80";
const PHOTO_GROUP = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80";

const GROUP_TYPES = [
  {
    number: "01",
    name: "2:42 Groups",
    scripture: "Acts 2:42",
    freq: "Weekly",
    size: "5–10 people",
    where: "Homes across San Diego",
    icon: "bookOpen",
    description:
      "Based on Acts 2:42, these are small gatherings of 5–10 people who meet in homes on a weekly basis. The purpose is discipleship. Each week, the group discusses how to apply the message from Sunday's sermon to everyday life.",
    details: [
      "Weekly meetings in members' homes",
      "5–10 people per group",
      "Focused on applying Sunday's sermon",
      "Bible study, prayer, and accountability",
    ],
  },
  {
    number: "02",
    name: "Life-Stage Groups",
    scripture: "Ecclesiastes 3:1",
    freq: "Monthly",
    size: "Varies",
    where: "Ministry Center",
    icon: "users",
    description:
      "Life-Stage Groups meet at the Barabbas Road Ministry Center, generally once a month. The purpose is to learn how the Bible addresses the specific issues of your current life stage — whether you're single, newly married, raising kids, or an empty nester.",
    details: [
      "Monthly gatherings at the Ministry Center",
      "Organized by life stage",
      "Biblical teaching on where you are right now",
      "Larger community feel, varied group sizes",
    ],
  },
];

export default function LifeGroupsPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Live the Truth</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Life Groups
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            The church was never meant to be a crowd you watch. Do life together in homes and at the Ministry Center — study, pray, and grow with people who know your name.
          </p>
        </div>
      </section>

      {/* Scripture callout */}
      <section style={{ background: "var(--gold-400)", padding: "24px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1rem,.9rem+.8vw,1.35rem)", textTransform: "uppercase", letterSpacing: "0.04em", color: "var(--ink-900)", margin: 0 }}>
            &ldquo;They devoted themselves to the apostles&apos; teaching and to fellowship, to the breaking of bread and to prayer.&rdquo; — Acts 2:42
          </p>
        </div>
      </section>

      {/* Group types */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "60px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Two Ways to Connect</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Find Your People
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
            {GROUP_TYPES.map((g, i) => (
              <div
                key={g.name}
                className="brc-welcome"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "clamp(2rem,5vw,5rem)",
                  alignItems: "center",
                  direction: i % 2 === 1 ? "rtl" : "ltr",
                }}
              >
                {/* Info */}
                <div style={{ direction: "ltr" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
                    <div style={{ width: "56px", height: "56px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name={g.icon} size={26} strokeWidth={1.8} />
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", letterSpacing: ".06em", color: "var(--ink-300)" }}>{g.number}</div>
                      <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+1.5vw,2.5rem)", margin: 0, lineHeight: 1 }}>{g.name}</h2>
                    </div>
                  </div>
                  <p style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--text-body)", marginBottom: "24px" }}>{g.description}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px", marginBottom: "28px" }}>
                    {[
                      { icon: "clock", label: g.freq },
                      { icon: "users", label: g.size },
                      { icon: "mapPin", label: g.where },
                      { icon: "bookOpen", label: g.scripture },
                    ].map(({ icon, label }) => (
                      <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)", fontSize: "15px" }}>
                        <Icon name={icon} size={15} style={{ color: "var(--gold-600)", flexShrink: 0 }} />
                        {label}
                      </div>
                    ))}
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {g.details.map((d) => (
                      <li key={d} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text-body)" }}>
                        <span style={{ flexShrink: 0, marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button variant="primary">Find a Group</Button>
                  </Link>
                </div>
                {/* Photo */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={i === 0 ? PHOTO_COMMUNITY : PHOTO_GROUP}
                  alt={g.name}
                  style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover", direction: "ltr" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-700)" align="center" withRule>Ready to Join?</Eyebrow>
          <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            Don&apos;t Do Life Alone
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "18px", maxWidth: "44ch", marginBottom: "28px" }}>
            Reach out and we&apos;ll connect you with the right group for your stage of life. It starts with one conversation.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact"><Button variant="primary" size="lg">Get Connected</Button></Link>
            <Link href="/new-here"><Button variant="outline" size="lg">Learn More About Us</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
