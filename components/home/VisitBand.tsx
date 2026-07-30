import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import Link from "next/link";

const PHOTO_SANDIEGO = "https://images.unsplash.com/photo-1538397923211-cd9a6c4e0a8e?w=1600&q=80";

export function VisitBand() {
  return (
    <section style={{ position: "relative", background: "var(--ink-950)", overflow: "hidden" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PHOTO_SANDIEGO}
        alt=""
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }}
      />
      <div
        className="brc-container"
        style={{
          position: "relative",
          padding: "var(--section-y) 0",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Eyebrow color="var(--gold-400)" align="center" withRule>New Here?</Eyebrow>
        <h2
          style={{
            color: "var(--white)",
            fontSize: "clamp(2.4rem, 1.4rem + 4vw, 4rem)",
            margin: "18px 0 16px",
            lineHeight: 1,
          }}
        >
          We&apos;d Love To<br />Meet You This Sunday
        </h2>
        <p style={{ color: "rgba(255,255,255,.72)", fontSize: "18px", maxWidth: "52ch", marginBottom: "30px" }}>
          Know what to expect before you arrive — service times, what to wear, and where to take your kids.
        </p>
        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/new-here">
            <Button variant="primary" size="lg">Plan Your Visit</Button>
          </Link>
          <Button variant="outline-light" size="lg">Get Directions</Button>
        </div>
      </div>
    </section>
  );
}
