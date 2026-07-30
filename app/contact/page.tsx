"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/core/Eyebrow";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

// TODO: Replace with your Formspree endpoint — https://formspree.io/
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

// export const metadata: Metadata = { title: "Contact" }; // can't use with "use client"

const MAP_SRC = "https://www.google.com/maps?q=7340+Miramar+Rd,+San+Diego,+CA+92126&output=embed";

const CONTACTS = [
  { icon: "phone",   h: "Call Us",     l: "619.289.8987",       href: "tel:6192898987" },
  { icon: "mapPin",  h: "Find Us",     l: "7340 Miramar Rd, San Diego, CA 92126", href: "https://maps.google.com/?q=7340+Miramar+Rd+San+Diego+CA+92126" },
  { icon: "clock",   h: "Sunday Service", l: "Every Sunday at 10:00am", href: null },
  { icon: "users",   h: "Email Us",    l: "info@barabbas.com",  href: "mailto:info@barabbas.com" },
];

const PASTOR_EMAILS = [
  { name: "Pastor Matt Smith",      role: "Senior Pastor",             email: "matt@barabbas.com" },
  { name: "Pastor Paul Rochford",   role: "Missions & Administration",  email: "paul@barabbas.com" },
  { name: "Pastor Brett Schoeneck", role: "Care & Discipleship",        email: "brett@barabbas.com" },
  { name: "Pastor Trace Trebilco",  role: "Children & Youth",           email: "trace@barabbas.com" },
];

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container">
          <Eyebrow color="var(--gold-400)" withRule>Reach Out</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)", margin: "16px 0 12px", lineHeight: 0.98 }}>
            Contact Us
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "18px", maxWidth: "54ch", lineHeight: 1.6 }}>
            Located right off Miramar Rd in San Diego. We&apos;d love to hear from you — fill out the form, give us a call, or just show up Sunday at 10am.
          </p>
        </div>
      </section>

      {/* Contact info + map */}
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
                    <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", fontSize: "13px", color: "var(--white)" }}>{c.h}</div>
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
              <div style={{ fontFamily: "var(--font-semicond)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".08em", fontSize: "12px", color: "rgba(255,255,255,.4)", marginBottom: "16px" }}>Mailing Address</div>
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

      {/* Contact form */}
      <section style={{ padding: "var(--section-y) 0", background: "var(--surface-page)" }}>
        <div className="brc-container brc-welcome" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "start" }}>
          {/* Pastor contacts */}
          <div>
            <Eyebrow color="var(--gold-700)" withRule>Pastoral Staff</Eyebrow>
            <h2 style={{ fontSize: "clamp(1.8rem,1.4rem+1.8vw,2.6rem)", margin: "16px 0 24px", lineHeight: 1 }}>
              Reach a Pastor Directly
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {PASTOR_EMAILS.map((p, i) => (
                <div
                  key={p.name}
                  style={{
                    padding: "18px 0",
                    borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "17px", color: "var(--text-strong)" }}>{p.name}</div>
                    <div style={{ fontSize: "14px", color: "var(--text-muted)", fontFamily: "var(--font-semicond)", textTransform: "uppercase", letterSpacing: ".06em", marginTop: "2px" }}>{p.role}</div>
                  </div>
                  <a
                    href={`mailto:${p.email}`}
                    style={{
                      fontFamily: "var(--font-semicond)",
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "var(--gold-700)",
                      textTransform: "uppercase",
                      letterSpacing: ".06em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Formspree contact form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

// ── Formspree contact form ────────────────────────────────────────────────────

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "44px",
    padding: "0 14px",
    border: "1px solid var(--border-default)",
    borderRadius: "var(--radius-md)",
    fontFamily: "var(--font-sans)",
    fontSize: "15px",
    color: "var(--text-strong)",
    background: "var(--surface-page)",
    boxSizing: "border-box",
    outline: "none",
  };
  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-semicond)",
    fontWeight: 700,
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: ".08em",
    color: "var(--text-muted)",
    marginBottom: "6px",
  };

  return (
    <div style={{ background: "var(--surface-card)", borderRadius: "var(--radius-lg)", padding: "40px", boxShadow: "var(--shadow-card)", border: "1px solid var(--border-subtle)" }}>
      <Eyebrow color="var(--gold-700)" withRule>General Inquiry</Eyebrow>
      <h2 style={{ fontSize: "clamp(1.6rem,1.2rem+1.5vw,2.2rem)", margin: "16px 0 24px", lineHeight: 1 }}>Send Us a Message</h2>

      {status === "success" ? (
        <div style={{ background: "var(--success-100)", color: "var(--success-600)", borderRadius: "var(--radius-md)", padding: "20px 24px", fontFamily: "var(--font-semicond)", fontWeight: 600, fontSize: "16px" }}>
          ✓ Message sent! We&apos;ll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={labelStyle}>Name *</label>
            <input name="name" type="text" required placeholder="Your name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email *</label>
            <input name="email" type="email" required placeholder="your@email.com" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input name="phone" type="tel" placeholder="Optional" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Message *</label>
            <textarea
              name="message"
              required
              placeholder="How can we help?"
              rows={5}
              style={{
                ...inputStyle,
                height: "auto",
                padding: "12px 14px",
                resize: "vertical",
              }}
            />
          </div>
          {status === "error" && (
            <div style={{ color: "var(--danger-600)", fontSize: "14px" }}>
              Something went wrong. Please try again or email us at info@barabbas.com.
            </div>
          )}
          <Button variant="primary" size="lg" fullWidth disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>
        </form>
      )}
    </div>
  );
}
