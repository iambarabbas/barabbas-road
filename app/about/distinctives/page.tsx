import type { Metadata } from "next";
import Link from "next/link";
import { AboutSubNav } from "@/components/about/AboutSubNav";
import { Eyebrow } from "@/components/core/Eyebrow";

export const metadata: Metadata = { title: "Distinctives" };

export default function DistinctivesPage() {
  return (
    <div>
      <section style={{ background: "var(--ink-900)", padding: "64px 0 0" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Teaching</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Distinctives
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6, marginBottom: "32px" }}>
            Teaching God&apos;s Design For The Local Church
          </p>
        </div>
        <AboutSubNav />
      </section>

      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container">
          <div style={{ maxWidth: "720px" }}>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-muted)" }}>
              The distinctives of Barabbas Road Church reflect our commitment to the sufficiency of Scripture and God&apos;s design for the local church. Please reach out or visit on Sunday to learn more.
            </p>
            <div style={{ marginTop: "32px" }}>
              <Link href="/contact" style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, fontSize: "14px", textTransform: "uppercase", letterSpacing: ".06em", color: "var(--gold-700)", textDecoration: "none" }}>
                Contact Us →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
