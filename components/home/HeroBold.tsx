import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

const PHOTO_BIBLE = "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=1600&q=80";

const TAGLINE = [
  ["Hear", "the Truth."],
  ["Live", "the Truth."],
  ["Defend", "the Truth."],
];

function Tagline() {
  return (
    <h1
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "-0.01em",
        lineHeight: 0.94,
        fontSize: "clamp(2.5rem, 6.2vw, 6rem)",
        margin: 0,
        color: "var(--text-strong)",
      }}
    >
      {TAGLINE.map(([verb, rest], i) => (
        <div key={i} style={{ whiteSpace: "nowrap" }}>
          <span style={{ color: "var(--gold-400)" }}>{verb}</span> {rest}
        </div>
      ))}
    </h1>
  );
}

function ServiceChips() {
  return (
    <div style={{ display: "flex", gap: "22px", flexWrap: "wrap", color: "var(--text-body)", fontSize: "15px" }}>
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon name="clock" size={17} /> Sundays · 10:00am
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Icon name="mapPin" size={17} /> Mission Valley, San Diego
      </span>
    </div>
  );
}

export function HeroBold() {
  return (
    <section style={{ background: "var(--surface-page)", paddingTop: "72px" }}>
      <div
        className="brc-container"
        style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Eyebrow color="var(--gold-700)" align="center" withRule>
          A Church For San Diego
        </Eyebrow>
        <div style={{ marginTop: "22px" }}>
          <Tagline />
        </div>
        <div style={{ display: "flex", gap: "14px", marginTop: "32px", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/new-here">
            <Button variant="primary" size="lg">Plan Your Visit</Button>
          </Link>
          <Link href="/sermons">
            <Button
              variant="outline"
              size="lg"
              iconLeft={<Icon name="play" size={15} fill="currentColor" />}
            >
              Watch Livestream
            </Button>
          </Link>
        </div>
        <div style={{ marginTop: "26px" }}>
          <ServiceChips />
        </div>
      </div>
      <div style={{ marginTop: "56px", position: "relative", height: "380px", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PHOTO_BIBLE}
          alt="Open Bible"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, var(--surface-page) 0%, rgba(250,248,242,0) 18%)",
          }}
        />
      </div>
    </section>
  );
}
