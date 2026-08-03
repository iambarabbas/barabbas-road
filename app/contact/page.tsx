import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Icon } from "@/components/Icon";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Barabbas Road Church. Call 619.289.8987, email info@barabbas.com, or visit us at 7340 Miramar Rd, San Diego, CA 92126 every Sunday at 10am.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/contact/" },
};

const MAP_SRC =
  "https://maps.google.com/maps?q=7340+Miramar+Rd,+San+Diego,+CA+92126&hl=en&z=16&ie=UTF8&iwloc=B&output=embed";

const CONTACTS = [
  { icon: "phone",  h: "Call Us",        l: "619.289.8987",                    href: "tel:6192898987" },
  { icon: "mapPin", h: "Find Us",        l: "7340 Miramar Rd, San Diego, CA 92126", href: "https://maps.google.com/?q=7340+Miramar+Rd+San+Diego+CA+92126" },
  { icon: "clock",  h: "Sunday Service", l: "Every Sunday at 10:00am",         href: null },
  { icon: "users",  h: "Email Us",       l: "info@barabbas.com",               href: "mailto:info@barabbas.com" },
];

export default function ContactPage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Reach Out</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Contact Us
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Located right off Miramar Rd in San Diego. We&apos;d love to hear from
            you — give us a call, send an email, or just show up Sunday at 10am.
          </p>
        </div>
      </section>

      {/* ── Info + Map ── */}
      <section style={{ background: "var(--ink-900)" }}>
        <div className="brc-times-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          {/* Info panel */}
          <div style={{ padding: "var(--section-y) clamp(2rem,5vw,5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Eyebrow color="var(--gold-400)" withRule>Find Us</Eyebrow>
            <h2 style={{ color: "var(--white)", fontSize: "clamp(2rem,1.4rem+2.5vw,3rem)", margin: "16px 0 28px", lineHeight: 1 }}>
              Times &amp; Location
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "22px", marginBottom: "36px" }}>
              {CONTACTS.map((c) => (
                <div key={c.h} style={{ display: "flex", gap: "16px" }}>
                  <div style={{ color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }}>
                    <Icon name={c.icon} size={22} strokeWidth={1.8} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", fontSize: "13px", color: "var(--white)" }}>
                      {c.h}
                    </div>
                    {c.href ? (
                      <a href={c.href} style={{ color: "rgba(255,255,255,.7)", fontSize: "16px", marginTop: "3px", display: "block" }}>{c.l}</a>
                    ) : (
                      <div style={{ color: "rgba(255,255,255,.7)", fontSize: "16px", marginTop: "3px" }}>{c.l}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,.15)", paddingTop: "28px" }}>
              <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", fontSize: "12px", color: "rgba(255,255,255,.4)", marginBottom: "16px" }}>
                Mailing Address
              </div>
              <div style={{ color: "rgba(255,255,255,.6)", fontSize: "15px", lineHeight: 1.7 }}>
                Barabbas Road Church<br />
                7340 Miramar Rd, Suite #106<br />
                San Diego, CA 92126
              </div>
            </div>
          </div>

          {/* Map */}
          <div style={{ position: "relative", minHeight: "500px" }}>
            <iframe
              title="Barabbas Road Church location"
              src={MAP_SRC}
              loading="lazy"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0, filter: "grayscale(0.2) contrast(1.05)" }}
            />
          </div>
        </div>
      </section>

      {/* ── Get in Touch ── */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container" style={{ maxWidth: "640px" }}>
          <Eyebrow color="var(--gold-700)" withRule>Get in Touch</Eyebrow>
          <h2 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "16px 0 20px", lineHeight: 1 }}>
            We&apos;d Love to Hear from You
          </h2>
          <p style={{ fontSize: "17px", lineHeight: 1.75, color: "var(--text-body)", marginBottom: "28px" }}>
            Have a question, want to learn more about the church, or just need
            someone to talk to? Send us an email and we&apos;ll get back to you as
            soon as we can.
          </p>
          <a
            href="mailto:info@barabbas.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "var(--ink-900)",
              color: "var(--white)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.04em",
              padding: "16px 32px",
              borderRadius: "var(--radius-sm)",
              textDecoration: "none",
            }}
          >
            <Icon name="users" size={18} strokeWidth={2} />
            info@barabbas.com
          </a>
        </div>
      </section>
    </div>
  );
}
