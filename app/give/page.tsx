import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Give" };

const WAYS_TO_GIVE = [
  { icon: "heart",    h: "Online",      b: "Give one-time or set up recurring giving through Subsplash — secure, simple, takes 2 minutes." },
  { icon: "users",    h: "Text Giving", b: "Text an amount to our giving number. Fast and easy from your phone — no app required." },
  { icon: "mapPin",   h: "In Person",   b: "Drop your gift in the offering during Sunday service. Checks made payable to Barabbas Road Church." },
  { icon: "calendar", h: "Mail a Check",b: "Barabbas Road Church · 7340 Miramar Rd, Suite #106 · San Diego, CA 92126" },
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

export default function GivePage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Generosity</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Give
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Giving is an act of worship. Every gift supports the mission of Barabbas Road Church — making disciple-making disciples in San Diego and beyond.
          </p>
        </div>
      </section>

      {/* Primary CTA */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}>
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Give Online</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 18px", lineHeight: 1 }}>
              Secure &amp; Simple
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.65, color: "var(--text-body)", marginBottom: "16px" }}>
              We use <strong>Subsplash</strong> for secure online giving. Set up a one-time gift or schedule recurring giving in just a few clicks.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "32px", lineHeight: 1.6 }}>
              Your giving supports Sunday services, Life Groups, Kids Church, youth programs, and missions through the Cooperative Program.
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a href="https://subsplash.com/barabbasroadchurch/give" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <Button variant="primary" size="lg">Give Now</Button>
              </a>
              <Button variant="outline" size="lg">Text to Give</Button>
            </div>
          </div>

          {/* Giving stat card */}
          <div style={{ background: "var(--ink-900)", borderRadius: "var(--radius-lg)", padding: "48px 40px", color: "var(--white)" }}>
            <blockquote style={{ margin: 0, padding: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.2rem,1rem+1.2vw,1.6rem)", textTransform: "uppercase", letterSpacing: ".02em", lineHeight: 1.3, color: "var(--white)" }}>
              &ldquo;Each one must give as he has decided in his heart, not reluctantly or under compulsion, for God loves a cheerful giver.&rdquo;
            </blockquote>
            <div style={{ marginTop: "20px", color: "var(--gold-400)", fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "14px" }}>
              2 Corinthians 9:7
            </div>
          </div>
        </div>
      </section>

      {/* Ways to give */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-card)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Options</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>Ways to Give</h2>
          </div>
          <div className="brc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
            {WAYS_TO_GIVE.map((w) => (
              <div key={w.h} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={w.icon} size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontSize: "22px", margin: "0 0 8px" }}>{w.h}</h3>
                  <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>{w.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Giving FAQ</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>Common Questions</h2>
          </div>
          <div style={{ maxWidth: "760px", display: "flex", flexDirection: "column", gap: "0" }}>
            {FAQ.map((item, i) => (
              <div
                key={item.q}
                style={{
                  padding: "24px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
                }}
              >
                <h3 style={{ fontSize: "20px", margin: "0 0 10px", lineHeight: 1.2 }}>{item.q}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0, lineHeight: 1.65, fontSize: "16px" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
