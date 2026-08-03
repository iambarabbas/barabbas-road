import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";

export const metadata: Metadata = {
  title: "Baptism",
  description:
    "Learn about baptism at Barabbas Road Church — what it is, who should be baptized, and how to sign up.",
};

export default function BaptismPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Next Steps</Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 12px",
              lineHeight: 0.98,
            }}
          >
            Baptism
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "54ch",
              lineHeight: 1.6,
            }}
          >
            Baptism is a step of obedience and a public declaration of your
            faith in Jesus Christ. If you&apos;ve committed your life to Him,
            we want to celebrate that with you.
          </p>
        </div>
      </section>

      {/* ── What Is Baptism / Who Should Be Baptized ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div
          className="brc-container brc-welcome"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(2rem,5vw,5rem)",
            alignItems: "start",
          }}
        >
          {/* What is baptism */}
          <div>
            <Eyebrow color="var(--gold-700)" withRule>What Is Baptism?</Eyebrow>
            <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
              An Act of Obedience
            </h2>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "18px" }}>
              When Christians are baptized, they take a step of obedience in
              fulfilling the command of Jesus (Matt. 28:19–20) and are
              submerged in water to identify with the death of Jesus and rise
              out of the water to identify with his resurrection (Rom. 6:1–10;
              Col. 2:12).
            </p>
            <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)" }}>
              This identification with the death, burial, and resurrection
              through baptism testifies to the fact that we believe in faith
              that Jesus died for our sins, was buried, rose three days later,
              and now is alive and Lord over all of creation.
            </p>
          </div>

          {/* Who should be baptized */}
          <div
            style={{
              background: "var(--ink-900)",
              borderRadius: "var(--radius-lg)",
              padding: "40px",
              color: "var(--white)",
            }}
          >
            <Eyebrow color="var(--gold-400)" withRule>Who Should Be Baptized?</Eyebrow>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.75, marginTop: "16px", marginBottom: "16px" }}>
              If you&apos;ve made a commitment to Jesus, we encourage you to
              follow Jesus&apos; command to be baptized as a public profession
              of your faith in Him.
            </p>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "17px", lineHeight: 1.75, marginBottom: 0 }}>
              Baptism does not save you, but is the outward expression of the
              inward reality that you are a follower of Christ.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sign Up ── */}
      <section style={{ background: "var(--gold-400)", padding: "var(--section-y) 0" }}>
        <div
          className="brc-container"
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Eyebrow color="var(--ink-700)" align="center" withRule>Ready?</Eyebrow>
          <h2
            style={{
              fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)",
              margin: "18px 0 16px",
              lineHeight: 1,
              color: "var(--ink-900)",
            }}
          >
            Sign Up for Baptism
          </h2>
          <p
            style={{
              color: "var(--ink-700)",
              fontSize: "18px",
              maxWidth: "44ch",
              marginBottom: "28px",
              lineHeight: 1.6,
            }}
          >
            To sign up for baptism, please see the connect desk after church on
            Sunday morning or reach out to us below and we&apos;ll be in touch.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/contact">
              <Button variant="secondary" size="lg">Get in Touch</Button>
            </Link>
            <Link href="/new-here">
              <Button variant="outline" size="lg">New Here?</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
