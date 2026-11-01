"use client";

import { useState } from "react";
import { Eyebrow } from "@/components/core/Eyebrow";

const FORMSPREE = "https://formspree.io/f/xnjypjpj";

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

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-semicond)",
  fontWeight: 700,
  fontSize: "12px",
  textTransform: "uppercase",
  letterSpacing: ".08em",
  color: "var(--ink-500)",
  marginBottom: "7px",
};

export default function BaptismSignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Baptism Signup: ${name}`,
          type: "Baptism Signup",
          name,
          email,
          phone: phone.trim() || "—",
          notes: notes.trim() || "—",
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
          We&apos;ll Be in Touch!
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "var(--text-muted)",
            maxWidth: "44ch",
            lineHeight: 1.65,
          }}
        >
          Thanks for signing up for baptism. Someone from the church will
          reach out to you soon to walk through the next steps.
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
            Next Steps
          </Eyebrow>
          <h1
            style={{
              color: "var(--white)",
              fontSize: "clamp(2.6rem,1.6rem+4vw,4.5rem)",
              margin: "16px 0 14px",
              lineHeight: 0.98,
            }}
          >
            Baptism Signup
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,.65)",
              fontSize: "18px",
              maxWidth: "52ch",
              lineHeight: 1.65,
            }}
          >
            Baptism is a public declaration of your faith in Jesus Christ.
            If you&apos;ve committed your life to Him and want to be baptized,
            fill out the form below and we&apos;ll connect with you.
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
              <label htmlFor="name" style={labelStyle}>
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
              <label htmlFor="email" style={labelStyle}>
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
              <label htmlFor="phone" style={labelStyle}>
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

            {/* Notes */}
            <div>
              <label htmlFor="notes" style={labelStyle}>
                Anything you&apos;d like us to know{" "}
                <span style={{ color: "var(--ink-400)", fontWeight: 500, textTransform: "none", letterSpacing: 0 }}>
                  (optional)
                </span>
              </label>
              <textarea
                id="notes"
                placeholder="Questions, background, or anything else..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                style={{
                  ...inputStyle,
                  resize: "vertical",
                  lineHeight: 1.6,
                }}
              />
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
              {submitting ? "Sending…" : "Sign Me Up"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
