"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/core/Eyebrow";

const FORMSPREE = "https://formspree.io/f/xnjypjpj";

const OPPORTUNITIES = [
  { id: "slide", label: "Sunday Slide Operator", desc: "Run the slides during the Sunday morning service." },
  { id: "welcome", label: "Welcome Team", desc: "Greet visitors and members as they arrive on Sunday." },
  { id: "music", label: "Music Team", desc: "Play an instrument or sing on the worship team." },
  { id: "children", label: "Children's Church", desc: "Serve and teach kids during the Sunday service." },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1.5px solid var(--border-default)",
  background: "var(--white)",
  color: "var(--ink-900)",
  boxSizing: "border-box",
  fontFamily: "var(--font-body)",
  outline: "none",
};

export default function ServePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [areas, setAreas] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function toggleArea(id: string) {
    setAreas((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || areas.length === 0) {
      setError("Please fill in your name, email, and select at least one area.");
      return;
    }
    setSubmitting(true);
    try {
      const selectedLabels = OPPORTUNITIES.filter((o) =>
        areas.includes(o.id)
      ).map((o) => o.label);
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone.trim() || "—",
          service_areas: selectedLabels.join(", "),
          _subject: `Serve Interest: ${name}`,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError("Something went wrong. Please try again or email info@barabbas.com.");
    } finally {
      setSubmitting(false);
    }
  }

  /* ── Success ── */
  if (submitted) {
    return (
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          textAlign: "center",
          background: "var(--surface-page)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            background: "var(--gold-100)",
            color: "var(--gold-700)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "28px",
            fontWeight: 700,
          }}
        >
          ✓
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)",
            margin: "0 0 16px",
            lineHeight: 1,
            color: "var(--ink-900)",
          }}
        >
          Thanks for Signing Up!
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--text-muted)",
            maxWidth: "44ch",
            lineHeight: 1.65,
          }}
        >
          We&apos;ll be in touch soon to get you connected with the right team.
          See you Sunday!
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section style={{ background: "var(--ink-900)", padding: "64px 0 56px" }}>
        <div className="brc-container" style={{ maxWidth: "680px" }}>
          <Eyebrow color="var(--gold-400)" withRule>
            Get Involved
          </Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 14px",
              lineHeight: 0.98,
            }}
          >
            Want to Serve?
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "52ch",
              lineHeight: 1.65,
            }}
          >
            The church is built by people who show up and give their gifts.
            Fill out the form below and we&apos;ll connect you with the right
            team.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ background: "var(--surface-page)", padding: "56px 0 80px" }}>
        <div className="brc-container" style={{ maxWidth: "600px" }}>
          <form
            onSubmit={handleSubmit}
            noValidate
            style={{ display: "flex", flexDirection: "column", gap: "24px" }}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                  color: "var(--ink-500)",
                  marginBottom: "7px",
                }}
              >
                Your Name <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="First and Last Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                  color: "var(--ink-500)",
                  marginBottom: "7px",
                }}
              >
                Email <span style={{ color: "#dc2626" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                style={{
                  display: "block",
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                  color: "var(--ink-500)",
                  marginBottom: "7px",
                }}
              >
                Phone{" "}
                <span style={{ color: "var(--ink-400)", fontWeight: 500, textTransform: "none", letterSpacing: 0 }}>
                  (optional)
                </span>
              </label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(619) 555-1234"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={inputStyle}
              />
            </div>

            {/* Service areas */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: ".08em",
                  color: "var(--ink-500)",
                  marginBottom: "12px",
                }}
              >
                Where would you like to serve?{" "}
                <span style={{ color: "#dc2626" }}>*</span>
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {OPPORTUNITIES.map((opp) => {
                  const active = areas.includes(opp.id);
                  return (
                    <button
                      key={opp.id}
                      type="button"
                      onClick={() => toggleArea(opp.id)}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "14px",
                        padding: "16px 18px",
                        borderRadius: "10px",
                        border: `2px solid ${active ? "var(--gold-400)" : "var(--border-default)"}`,
                        background: active ? "var(--gold-50, #fffbeb)" : "var(--white)",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "all .15s ease",
                        width: "100%",
                      }}
                    >
                      {/* Checkbox indicator */}
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: "2px",
                          width: "20px",
                          height: "20px",
                          borderRadius: "5px",
                          border: `2px solid ${active ? "var(--gold-500)" : "var(--border-default)"}`,
                          background: active ? "var(--gold-400)" : "transparent",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "var(--ink-900)",
                          fontSize: "13px",
                          fontWeight: 800,
                          transition: "all .15s ease",
                        }}
                      >
                        {active ? "✓" : ""}
                      </span>
                      <span>
                        <span
                          style={{
                            display: "block",
                            fontFamily: "var(--font-display)",
                            fontWeight: 800,
                            fontSize: "16px",
                            color: "var(--ink-900)",
                            lineHeight: 1.2,
                            marginBottom: "3px",
                          }}
                        >
                          {opp.label}
                        </span>
                        <span
                          style={{
                            display: "block",
                            fontSize: "14px",
                            color: "var(--text-muted)",
                            lineHeight: 1.4,
                          }}
                        >
                          {opp.desc}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                style={{
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: "8px",
                  padding: "12px 16px",
                  color: "#991b1b",
                  fontSize: "14px",
                }}
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              style={{
                padding: "16px 40px",
                background: submitting ? "var(--border-default)" : "var(--ink-900)",
                color: "var(--white)",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "15px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                borderRadius: "8px",
                border: "none",
                cursor: submitting ? "not-allowed" : "pointer",
                alignSelf: "flex-start",
                transition: "background .15s ease",
              }}
            >
              {submitting ? "Sending…" : "I Want to Serve"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
