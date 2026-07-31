import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "Member Testimonies" };

const MEMBERS = ["Alison", "Angelina", "Josh", "Kassie", "Krystal", "Melissa", "Michelle", "Luke"];

export default function MemberTestimoniesPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Testimonies</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            Member Testimonies
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "760px" }}>

            {/* Scripture */}
            <blockquote style={{
              margin: "0 0 56px",
              padding: "32px 36px",
              borderLeft: "4px solid var(--gold-400)",
              background: "var(--surface-card)",
              borderRadius: "0 var(--radius-md) var(--radius-md) 0",
            }}>
              <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 12px" }}>
                &ldquo;I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. And the life I now live in the flesh I live by faith in the Son of God, who loved me and gave himself for me.&rdquo;
              </p>
              <cite style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "12px", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold-700)", fontStyle: "normal" }}>
                Galatians 2:20
              </cite>
            </blockquote>

            <p style={{ fontSize: "17px", lineHeight: 1.7, color: "var(--text-muted)", marginBottom: "40px" }}>
              Read the testimonies of what God has done and is doing in the lives of our members.
            </p>

            {/* Member list */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
              {MEMBERS.map((name) => (
                <div
                  key={name}
                  style={{
                    padding: "20px 24px",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--surface-card)",
                    boxShadow: "var(--shadow-card)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                  }}
                >
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "var(--ink-900)",
                    color: "var(--gold-400)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-cond)",
                    fontWeight: 800,
                    fontSize: "18px",
                    flexShrink: 0,
                  }}>
                    {name[0]}
                  </div>
                  <span style={{ fontWeight: 600, fontSize: "17px", color: "var(--text-heading)" }}>
                    {name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
