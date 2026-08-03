import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

const MAP_SRC = "https://maps.google.com/maps?q=7340+Miramar+Rd,+San+Diego,+CA+92126&hl=en&z=16&ie=UTF8&iwloc=B&output=embed";

const DETAILS = [
  { icon: "clock",    h: "Sunday Service",   l: "Every Sunday at 10:00am" },
  { icon: "mapPin",   h: "Location",         l: "7340 Miramar Rd, San Diego, CA 92126" },
  { icon: "users",    h: "Kids & Youth",     l: "Programs for every age, all morning" },
  { icon: "phone",    h: "Get in Touch",     l: "619.289.8987" },
];

export function TimesLocation() {
  return (
    <section style={{ background: "var(--ink-900)", color: "var(--white)" }}>
      <div className="brc-times-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* Info */}
        <div
          style={{
            padding: "var(--section-y) clamp(2rem,5vw,5rem)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Eyebrow color="var(--gold-400)" withRule>Plan Your Visit</Eyebrow>
          <h2
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.2rem, 1.4rem + 3vw, 3.4rem)",
              margin: "16px 0 28px",
              lineHeight: 1.02,
            }}
          >
            Times &amp; Location
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "26px 32px", marginBottom: "32px" }}>
            {DETAILS.map((d) => (
              <div key={d.h} style={{ display: "flex", gap: "14px" }}>
                <div style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }}>
                  <Icon name={d.icon} size={24} strokeWidth={1.8} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-semicond)",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      fontSize: "14px",
                      color: "var(--white)",
                    }}
                  >
                    {d.h}
                  </div>
                  <div style={{ color: "rgba(255,255,255,.66)", fontSize: "15px", marginTop: "3px" }}>{d.l}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button variant="primary">Get Directions</Button>
            <Button variant="outline-light">What to Expect</Button>
          </div>
        </div>

        {/* Map */}
        <div style={{ position: "relative", minHeight: "440px" }}>
          <iframe
            title="Map to Barabbas Road Church"
            src={MAP_SRC}
            loading="lazy"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: 0,
              filter: "grayscale(0.3) contrast(1.05)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
