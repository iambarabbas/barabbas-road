import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Classes",
  description:
    "Bible-teaching classes at Barabbas Road Church — Inductive Bible Study on Sundays and Theologetics on Tuesdays. Open to all, no sign-up required.",
};

export default function ClassesPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Equip Yourself</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Classes
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "clamp(16px,1rem+.5vw,18px)", maxWidth: "52ch", lineHeight: 1.65, marginBottom: "32px" }}>
            Two weekly classes open to anyone — no sign-up, no cost, no prerequisites. Just show up and dig into God&apos;s Word.
          </p>
          {/* Quick schedule pills */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {[
              { day: "Sunday", time: "8:30 – 9:30am", label: "Inductive" },
              { day: "Tuesday", time: "6:30 – 7:30pm", label: "Theologetics" },
            ].map((s) => (
              <div key={s.label} style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,.08)",
                border: "1px solid rgba(255,255,255,.12)",
                borderRadius: "var(--radius-md)",
                padding: "10px 16px",
              }}>
                <Icon name="clock" size={16} strokeWidth={2} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "11px", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--gold-400)" }}>{s.label}</div>
                  <div style={{ color: "var(--white)", fontSize: "14px", fontWeight: 600 }}>{s.day} · {s.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Class 01: Inductive ── */}
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="brc-container">
          <div className="brc-welcome" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,6vw,6rem)",
            alignItems: "center",
          }}>
            {/* Number + info */}
            <div style={{
              background: "var(--ink-900)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(32px,5vw,56px)",
              color: "var(--white)",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Big number bg */}
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "160px",
                lineHeight: 1,
                color: "rgba(255,255,255,.04)",
                userSelect: "none",
                pointerEvents: "none",
              }}>01</div>

              <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 800, fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "12px" }}>
                Class 01
              </div>
              <h2 style={{ color: "var(--white)", fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "0 0 8px", lineHeight: 1 }}>
                Inductive Class
              </h2>
              <div style={{ color: "var(--gold-400)", fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "28px" }}>
                Sundays · 8:30 – 9:30am
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: "clock",   text: "Before the Sunday service" },
                  { icon: "mapPin",  text: "Church Campus" },
                  { icon: "bookOpen",text: "No prerequisite — open to all" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Icon name={item.icon} size={15} strokeWidth={2} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,.75)", fontSize: "15px" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <Eyebrow color="var(--gold-700)" withRule>Learn to Study Scripture</Eyebrow>
              <h3 style={{ fontSize: "clamp(1.6rem,1.2rem+1.5vw,2.2rem)", margin: "16px 0 20px", lineHeight: 1.1, color: "var(--ink-900)" }}>
                How to Observe, Interpret, and Apply God&apos;s Word
              </h3>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "20px" }}>
                This class teaches you how to study the bible for yourself. Each week, the class studies the passage of scripture that will be preached that Sunday morning — so you come to the service already having engaged the text.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "28px" }}>
                There is no prerequisite for attending. Simply show up and enjoy observing God&apos;s Word with fellow believers. Whether you&apos;ve been in the church for decades or just started attending, this class meets you where you are.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Practical inductive Bible study methods",
                  "Study the Sunday text before the sermon",
                  "Learn to observe, interpret, and apply Scripture",
                  "Open discussion with fellow believers",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text-body)", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scripture break ── */}
      <section style={{ background: "var(--gold-400)", padding: "28px 0" }}>
        <div className="brc-container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1rem,.9rem+.8vw,1.25rem)", textTransform: "uppercase", letterSpacing: ".04em", color: "var(--ink-900)", margin: 0, lineHeight: 1.4 }}>
            &ldquo;Study to show yourself approved to God, a worker who does not need to be ashamed, rightly dividing the word of truth.&rdquo;
            <span style={{ display: "block", marginTop: "4px", fontSize: ".75em", opacity: 0.6 }}>2 Timothy 2:15</span>
          </p>
        </div>
      </section>

      {/* ── Class 02: Theologetics ── */}
      <section style={{ background: "var(--surface-card)", padding: "var(--section-y) 0" }}>
        <div className="brc-container">
          <div className="brc-welcome" style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,6vw,6rem)",
            alignItems: "center",
            direction: "rtl",
          }}>
            {/* Number + info */}
            <div style={{
              background: "var(--ink-900)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(32px,5vw,56px)",
              color: "var(--white)",
              position: "relative",
              overflow: "hidden",
              direction: "ltr",
            }}>
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-10px",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "160px",
                lineHeight: 1,
                color: "rgba(255,255,255,.04)",
                userSelect: "none",
                pointerEvents: "none",
              }}>02</div>

              <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 800, fontSize: "11px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: "12px" }}>
                Class 02
              </div>
              <h2 style={{ color: "var(--white)", fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "0 0 8px", lineHeight: 1 }}>
                Theologetics Class
              </h2>
              <div style={{ color: "var(--gold-400)", fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: "28px" }}>
                Tuesdays · 6:30 – 7:30pm
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  { icon: "clock",   text: "Tuesday evenings" },
                  { icon: "mapPin",  text: "Church Campus" },
                  { icon: "users",   text: "Open to all members" },
                ].map((item) => (
                  <div key={item.text} style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <Icon name={item.icon} size={15} strokeWidth={2} style={{ color: "var(--gold-400)", flexShrink: 0 }} />
                    <span style={{ color: "rgba(255,255,255,.75)", fontSize: "15px" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div style={{ direction: "ltr" }}>
              <Eyebrow color="var(--gold-700)" withRule>Know &amp; Defend the Truth</Eyebrow>
              <h3 style={{ fontSize: "clamp(1.6rem,1.2rem+1.5vw,2.2rem)", margin: "16px 0 20px", lineHeight: 1.1, color: "var(--ink-900)" }}>
                Theology + Apologetics = Theologetics
              </h3>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "20px" }}>
                This class is a combination of Theology and Apologetics — thus &ldquo;Theologetics.&rdquo; It will equip you to know and defend the truth, giving you confidence when engaging with the false theological ideas and philosophies of our time.
              </p>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "28px" }}>
                This class has no prerequisite and is open to all members of Barabbas Road Church. If you want to know what you believe and be able to articulate it clearly to the world around you, this is the class for you.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {[
                  "Systematic theology — what the Bible teaches on key doctrines",
                  "Apologetics — how to defend the faith in real conversations",
                  "Engaging with current cultural and philosophical challenges",
                  "Building confidence in your faith",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start", fontSize: "15px", color: "var(--text-body)", lineHeight: 1.5 }}>
                    <span style={{ flexShrink: 0, marginTop: "7px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Resources ── */}
      <section style={{ background: "var(--surface-page)", padding: "var(--section-y) 0" }}>
        <div className="brc-container">
          <div style={{ marginBottom: "clamp(1.5rem,4vw,3rem)" }}>
            <Eyebrow color="var(--gold-700)" withRule>Keep Learning</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+2vw,2.6rem)", margin: "14px 0 0", lineHeight: 1 }}>
              Biblical Resources
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "16px" }}>
            {[
              {
                icon: "youtube",
                label: "Whiteboard Wednesdays",
                desc: "Short video lessons on theology and apologetics topics from the pastors at Barabbas Road.",
                href: "https://www.youtube.com/playlist?list=PL9SY01HEO5BfdvkvjvrmLk5J5QgrMPi2W",
              },
              {
                icon: "bookOpen",
                label: "Recommended Books",
                desc: "A curated reading list of theology, apologetics, and Christian living books recommended by our pastors.",
                href: "https://www.goodreads.com/review/list/57616399-barabbas?shelf=recommended",
              },
            ].map((r) => (
              <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  background: "var(--white)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px",
                  border: "1px solid var(--border-subtle)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}>
                  <div style={{ width: "44px", height: "44px", borderRadius: "var(--radius-md)", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Icon name={r.icon} size={22} strokeWidth={1.8} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.1rem", margin: "0 0 8px", color: "var(--ink-900)" }}>{r.label}</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "15px", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                  </div>
                  <span style={{ color: "var(--gold-700)", fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: ".06em" }}>
                    View →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--ink-900)", padding: "var(--section-y) 0" }}>
        <div className="brc-container" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Eyebrow color="var(--gold-400)" align="center" withRule>No Sign-Up Required</Eyebrow>
          <h2 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "18px 0 16px", lineHeight: 1 }}>
            Just Show Up
          </h2>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "44ch", marginBottom: "32px", lineHeight: 1.6 }}>
            Inductive Class meets Sundays at 8:30am before service. Theologetics meets Tuesdays at 6:30pm. Both are free and open — bring a friend.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact"><Button variant="primary" size="lg">Contact Us</Button></Link>
            <Link href="/new-here"><Button variant="outline-light" size="lg">Plan Your Visit</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
