import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = { title: "Youth" };

const PHOTO_COMMUNITY = "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80";

const PROGRAMS = [
  {
    name: "Youth Connect",
    tagline: "Fun, Friendship & Fellowship",
    when: "4th Friday of the Month · 5:30–7:30pm",
    ages: "Ages 12–16",
    location: "Location changes monthly",
    icon: "users",
    color: "var(--gold-100)",
    textColor: "var(--gold-700)",
    description:
      "Youth Connect is a monthly meetup focused on fun, friendship, and fellowship. Meeting on the fourth Friday of each month, students ages 12–16 get a chance to hang out, laugh, and build community together outside of regular church gatherings.",
    details:
      "Each month features a different activity — movie nights, beach hangouts, roller skating, game nights, or other local adventures. In a world where everything moves fast, Youth Connect exists to strengthen friendships and remind students that the family of faith is meant to enjoy life together.",
    contact: "Email Pastor Trace for the monthly location: Trace@barabbas.com",
  },
  {
    name: "Youth Discuss",
    tagline: "Real Questions. Real Scripture.",
    when: "2nd Friday of the Month · 6:00–7:30pm",
    ages: "Ages 12–17",
    location: "Church Campus · 7340 Miramar Rd",
    icon: "bookOpen",
    color: "var(--ink-900)",
    textColor: "var(--gold-400)",
    description:
      "Youth Discuss is a monthly gathering where students talk openly about the world they live in and learn to see it through the lens of Scripture. Students bring dinner to the church and take part in honest, guided discussions about current events, global and local issues, and cultural changes shaping our generation.",
    details:
      'From topics like gender and identity to justice, war, economics, and social movements — Youth Discuss gives students the space to ask real questions and engage real issues together. As in Acts 17:11, the goal is to be like the Bereans who "examined the Scriptures daily to see if these things are so."',
    contact: "Email Pastor Trace: Trace@barabbas.com",
  },
];

export default function YouthPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>For Students</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Youth
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Two monthly programs for students ages 12–17. One built around fellowship. One built around truth. Both led by Pastor Trace.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "600px", marginBottom: "56px" }}>
            <Eyebrow color="var(--gold-700)" withRule>Monthly Gatherings</Eyebrow>
            <h2 style={{ fontSize: "clamp(2.2rem,1.4rem+2.4vw,3rem)", margin: "16px 0 0", lineHeight: 1 }}>
              Two Nights a Month
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {PROGRAMS.map((p) => (
              <div
                key={p.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "0",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "var(--shadow-card)",
                }}
                className="brc-featured"
              >
                {/* Color band */}
                <div
                  style={{
                    background: p.color,
                    width: "8px",
                    flexShrink: 0,
                  }}
                />
                {/* Content */}
                <div style={{ padding: "36px 40px", background: "var(--surface-card)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", marginBottom: "20px" }}>
                    <div>
                      <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+1.5vw,2.6rem)", margin: "0 0 4px", lineHeight: 1 }}>{p.name}</h2>
                      <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", fontSize: "13px", color: "var(--gold-700)" }}>{p.tagline}</div>
                    </div>
                    <div
                      style={{
                        background: p.name === "Youth Connect" ? "var(--gold-100)" : "var(--ink-900)",
                        color: p.name === "Youth Connect" ? "var(--gold-700)" : "var(--gold-400)",
                        width: "52px", height: "52px", borderRadius: "var(--radius-md)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}
                    >
                      <Icon name={p.icon} size={24} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Meta */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px", marginBottom: "20px" }}>
                    {[
                      { icon: "clock",  label: p.when },
                      { icon: "users",  label: p.ages },
                      { icon: "mapPin", label: p.location },
                    ].map(({ icon, label }) => (
                      <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: "var(--text-muted)", fontSize: "15px" }}>
                        <Icon name={icon} size={15} style={{ color: "var(--gold-600)" }} />
                        {label}
                      </span>
                    ))}
                  </div>

                  <p style={{ color: "var(--text-body)", fontSize: "17px", lineHeight: 1.65, marginBottom: "12px" }}>{p.description}</p>
                  <p style={{ color: "var(--text-muted)", fontSize: "16px", lineHeight: 1.6, marginBottom: "20px" }}>{p.details}</p>
                  <p style={{ color: "var(--text-accent)", fontSize: "15px", fontFamily: "var(--font-semicond)", fontWeight: 600, margin: 0 }}>{p.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pastor Trace CTA */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PHOTO_COMMUNITY} alt="Youth at Barabbas Road" style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover" }} />
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Questions?</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 18px", lineHeight: 1.05 }}>Talk to Pastor Trace</h2>
            <p style={{ color: "var(--text-muted)", marginBottom: "12px", fontSize: "17px", lineHeight: 1.6 }}>
              Pastor Trace oversees our Children&apos;s ministry and both youth programs. He has a heart for evangelism and discipleship — especially for families and students navigating a changing world.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "28px", fontSize: "17px", lineHeight: 1.6 }}>
              Reach him directly at <a href="mailto:Trace@barabbas.com" style={{ color: "var(--gold-700)", fontWeight: 600 }}>Trace@barabbas.com</a>
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/contact"><Button variant="primary">Contact Us</Button></Link>
              <Link href="/team"><Button variant="outline">Meet the Team</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
