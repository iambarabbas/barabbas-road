import type { Metadata } from "next";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "Distinctives" };

export default function DistinctivesPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", color: "var(--white)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Teaching</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 32px", lineHeight: 0.98 }}>
            Distinctives
          </h1>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "720px" }}>
            <h2 style={{ fontSize: "clamp(1.8rem,1.2rem+2vw,2.4rem)", margin: "0 0 20px", lineHeight: 1.1 }}>
              Teaching God's Design For The Local Church
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "32px" }}>
              The Distinctives series walks through God's design for the local church — what the church is, how it is to be governed, and what it is to do. These teachings are foundational to how we operate as a body at Barabbas Road.
            </p>
            <a
              href="https://www.barabbas.com/distinctives/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 28px",
                background: "var(--ink-900)",
                color: "var(--gold-400)",
                fontFamily: "var(--font-semicond)",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: ".08em",
                textTransform: "uppercase",
                textDecoration: "none",
                borderRadius: "var(--radius-md)",
              }}
            >
              Watch the Series ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
