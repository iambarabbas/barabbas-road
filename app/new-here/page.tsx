import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Card } from "@/components/core/Card";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "I'm New" };

const PHOTO_WORSHIP  = "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=1600&q=80";
const PHOTO_BUILDING = "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80";

const WHAT_TO_EXPECT = [
  { icon: "clock",    h: "About 90 Minutes",        b: "Our Sunday gathering includes worship music and a full sermon. Plan for about an hour and a half." },
  { icon: "users",    h: "Come As You Are",          b: "We mean it. Jeans, sneakers, coffee in hand — whatever's comfortable. No dress code here." },
  { icon: "heart",    h: "Kids Are Welcome",         b: "We have Kids Church running during the service for birth through 5th grade. Youth group meets separately." },
  { icon: "mapPin",   h: "Easy Parking",             b: "Free parking is available on-site. We'll have volunteers to help you find your way." },
];

export default function NewHerePage() {
  return (
    <div>
      {/* Hero */}
      <section style={{ background: "var(--ink-900)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={PHOTO_WORSHIP} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.3 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(20,19,17,.85) 0%, rgba(20,19,17,.5) 100%)" }} />
        <div className="brc-container" style={{ position: "relative", padding: "80px 0 72px" }}>
          <Eyebrow color="var(--gold-400)" withRule>Welcome</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.8rem,1.6rem+5vw,5rem)", margin: "16px 0 20px", lineHeight: 0.96 }}>
            We&apos;re Glad<br />You&apos;re Here.
          </h1>
          <p style={{ color: "rgba(255,255,255,.72)", fontSize: "20px", maxWidth: "52ch", marginBottom: "32px" }}>
            Wherever you&apos;re coming from, there&apos;s a seat for you on Sunday. Here&apos;s everything you need to know before your first visit.
          </p>
          <Button variant="primary" size="lg">Plan Your Visit</Button>
        </div>
      </section>

      {/* What to expect */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "52px" }}>
            <Eyebrow color="var(--gold-700)" withRule>What to Expect</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3.2rem)", margin: "16px 0 0", lineHeight: 1 }}>
              No Surprises. Just Church.
            </h2>
          </div>
          <div className="brc-pillars" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px" }}>
            {WHAT_TO_EXPECT.map((item) => (
              <div key={item.h} style={{ display: "flex", gap: "20px" }}>
                <div style={{ flexShrink: 0, width: "52px", height: "52px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name={item.icon} size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 style={{ fontSize: "22px", margin: "0 0 8px" }}>{item.h}</h3>
                  <p style={{ color: "var(--text-muted)", margin: 0 }}>{item.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Times & Location */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}>
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Find Us</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 20px", lineHeight: 1 }}>Times &amp; Location</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Icon name="clock" size={22} style={{ color: "var(--gold-600)", marginTop: "2px", flexShrink: 0 }} />
                <div><strong>Sunday Service</strong><br /><span style={{ color: "var(--text-muted)" }}>Every Sunday at 10:00am</span></div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Icon name="mapPin" size={22} style={{ color: "var(--gold-600)", marginTop: "2px", flexShrink: 0 }} />
                <div><strong>Mission Valley, San Diego</strong><br /><span style={{ color: "var(--text-muted)" }}>Free on-site parking</span></div>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                <Icon name="phone" size={22} style={{ color: "var(--gold-600)", marginTop: "2px", flexShrink: 0 }} />
                <div><strong>Questions?</strong><br /><span style={{ color: "var(--text-muted)" }}>619.289.8987</span></div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Button variant="primary">Get Directions</Button>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO_BUILDING} alt="Church building" style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover" }} />
        </div>
      </section>
    </div>
  );
}
