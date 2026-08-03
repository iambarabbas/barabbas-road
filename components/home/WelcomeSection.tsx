import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import Link from "next/link";

const PHOTO_COMMUNITY = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1200&q=80";

export function WelcomeSection() {
  return (
    <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
      <div
        className="brc-container brc-welcome"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}
      >
        <div style={{ position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PHOTO_COMMUNITY}
            alt="Our community"
            style={{ width: "100%", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-md)", aspectRatio: "4/3", objectFit: "cover" }}
          />
          <div
            className="brc-welcome-badge"
            style={{
              position: "absolute",
              bottom: "-24px",
              right: "-24px",
              background: "var(--ink-900)",
              color: "var(--white)",
              padding: "22px 26px",
              borderRadius: "var(--radius-md)",
              maxWidth: "220px",
            }}
          >
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "40px", color: "var(--gold-400)", lineHeight: 1 }}>
              2009
            </div>
            <div style={{ fontSize: "14px", color: "rgba(255,255,255,.7)", marginTop: "4px" }}>
              Planted in San Diego to make disciples of Jesus.
            </div>
          </div>
        </div>

        <div>
          <Eyebrow color="var(--gold-700)" withRule>Welcome Home</Eyebrow>
          <h2 style={{ fontSize: "44px", margin: "16px 0 18px", lineHeight: 1.05 }}>
            A Church Family<br />For Every Season
          </h2>
          <p className="brc-lead" style={{ marginBottom: "16px" }}>
            We&apos;re an ordinary group of people who have been changed by an extraordinary God. Whether you&apos;re exploring faith for the first time or have followed Jesus for years, there&apos;s a place for you here.
          </p>
          <p style={{ color: "var(--text-muted)", marginBottom: "26px" }}>
            Come as you are. We gather Sundays at 10am for worship and teaching, and throughout the week in Life Groups across the city.
          </p>
          <Link href="/about">
            <Button variant="outline">Learn About Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
