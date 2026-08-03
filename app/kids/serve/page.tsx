"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Eyebrow } from "@/components/core/Eyebrow";

/* ── Supabase ─────────────────────────────────────────────── */
const FORMSPREE = "https://formspree.io/f/xzdnnqen";

/* ── Shared styles ─────────────────────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "1px solid var(--border-default)",
  background: "var(--white)",
  color: "var(--text-body)",
  boxSizing: "border-box",
  fontFamily: "var(--font-body)",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontWeight: 700,
  fontSize: "14px",
  color: "var(--ink-900)",
  marginBottom: "6px",
};

const errorStyle: React.CSSProperties = {
  color: "#dc2626",
  fontSize: "13px",
  marginTop: "5px",
};

const sectionHeadStyle: React.CSSProperties = {
  borderTop: "1px solid var(--border-subtle)",
  paddingTop: "36px",
  marginTop: "36px",
};

/* ── Yes/No toggle ─────────────────────────────────────────── */
function YesNo({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {["Yes", "No"].map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            style={{
              padding: "10px 28px",
              borderRadius: "8px",
              border: `2px solid ${active ? (opt === "Yes" ? "var(--gold-500)" : "var(--ink-900)") : "var(--border-default)"}`,
              background: active ? (opt === "Yes" ? "var(--gold-100)" : "var(--ink-900)") : "transparent",
              color: active ? (opt === "Yes" ? "var(--gold-800)" : "var(--white)") : "var(--text-muted)",
              cursor: "pointer",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: "15px",
              letterSpacing: "0.04em",
              transition: "all 0.15s ease",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

/* ── Textarea with counter ─────────────────────────────────── */
function CountedTextarea({
  value,
  onChange,
  placeholder = "",
  maxLen = 500,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  maxLen?: number;
}) {
  return (
    <div style={{ position: "relative" }}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, maxLen))}
        placeholder={placeholder}
        rows={5}
        style={{
          ...inputStyle,
          resize: "vertical",
          lineHeight: 1.6,
          paddingBottom: "28px",
        }}
      />
      <span
        style={{
          position: "absolute",
          bottom: "10px",
          right: "12px",
          fontSize: "12px",
          color: value.length >= maxLen ? "#dc2626" : "var(--text-subtle)",
          fontFamily: "var(--font-body)",
        }}
      >
        {value.length}/{maxLen}
      </span>
    </div>
  );
}

/* ── Field wrapper ─────────────────────────────────────────── */
function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>
        {label}
        {required && <span style={{ color: "#dc2626", marginLeft: "3px" }}>*</span>}
      </label>
      {children}
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

/* ── Initial form state ────────────────────────────────────── */
const INIT = {
  firstName: "", lastName: "",
  address1: "", address2: "", city: "", state: "", zip: "",
  email: "", areaCode: "", phone: "",
  backgroundCheck: "",
  howBecameChristian: "",
  baptized: "",
  readDoctrinal: "",
  agreeDoctrinal: "",
  taughtChildren: "",
  howBecomeChristian: "",
  signatureName: "", date: "",
};

/* ── Main component ────────────────────────────────────────── */
export default function KidsServePage() {
  const [form, setForm]           = useState(INIT);
  const [errors, setErrors]       = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const topRef = useRef<HTMLDivElement>(null);

  const set = (field: keyof typeof INIT) => (val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  const err = (field: string) => errors[field] || "";

  function validate() {
    const e: Record<string, string> = {};
    const req = (f: keyof typeof INIT, label: string) => { if (!form[f].trim()) e[f] = `${label} is required`; };
    req("firstName", "First name"); req("lastName", "Last name");
    req("address1", "Street address"); req("city", "City");
    req("state", "State"); req("zip", "ZIP code");
    req("areaCode", "Area code"); req("phone", "Phone number");
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.backgroundCheck) e.backgroundCheck = "Please select yes or no";
    if (!form.howBecameChristian.trim()) e.howBecameChristian = "Required";
    if (!form.baptized) e.baptized = "Please select yes or no";
    if (!form.readDoctrinal) e.readDoctrinal = "Please select yes or no";
    if (!form.agreeDoctrinal) e.agreeDoctrinal = "Please select yes or no";
    if (!form.taughtChildren) e.taughtChildren = "Please select yes or no";
    if (!form.howBecomeChristian.trim()) e.howBecomeChristian = "Required";
    req("signatureName", "Signature name"); req("date", "Date");
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError("");
    const e2 = validate();
    if (Object.keys(e2).length > 0) {
      setErrors(e2);
      topRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: `(${form.areaCode}) ${form.phone}`,
          address: `${form.address1}${form.address2 ? `, ${form.address2}` : ""}, ${form.city}, ${form.state} ${form.zip}`,
          background_check_consent: form.backgroundCheck,
          how_became_christian: form.howBecameChristian,
          baptized: form.baptized,
          read_doctrinal_statement: form.readDoctrinal,
          agree_doctrinal_statement: form.agreeDoctrinal,
          taught_children_before: form.taughtChildren,
          how_become_christian: form.howBecomeChristian,
          signature: form.signatureName,
          date: form.date,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong. Please try again or email trace@barabbas.com directly.");
    } finally {
      setSubmitting(false);
    }
  }

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "var(--gold-100)", color: "var(--gold-700)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px", fontSize: "28px" }}>✓</div>
        <h1 style={{ fontSize: "clamp(2rem,1.4rem+2vw,2.8rem)", margin: "0 0 16px", lineHeight: 1 }}>Application Received</h1>
        <p style={{ fontSize: "18px", color: "var(--text-muted)", maxWidth: "44ch", lineHeight: 1.65, marginBottom: "32px" }}>
          Thank you for your interest in serving in Children&apos;s Ministry. Trace Trebilco will be in touch with you soon.
        </p>
        <Link href="/kids" style={{ textDecoration: "none", background: "var(--ink-900)", color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 32px", borderRadius: "8px" }}>
          Back to Kids Church
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* ── Hero ── */}
      <section ref={topRef} style={{ background: "var(--ink-900)", padding: "56px 0 48px" }}>
        <div className="brc-container" style={{ maxWidth: "760px" }}>
          <Eyebrow color="var(--gold-400)" withRule>Children&apos;s Ministry</Eyebrow>
          <h1 style={{ color: "var(--white)", fontSize: "clamp(2.2rem,1.4rem+3vw,3.4rem)", margin: "16px 0 14px", lineHeight: 1 }}>
            Service Application
          </h1>
          <p style={{ color: "rgba(255,255,255,.65)", fontSize: "17px", lineHeight: 1.65, margin: 0, maxWidth: "52ch" }}>
            Thank you for your interest in serving our kids. Fill out all sections below — Trace Trebilco will follow up with you after reviewing your application.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section style={{ background: "var(--surface-page)", padding: "56px 0 80px" }}>
        <div className="brc-container" style={{ maxWidth: "760px" }}>
          {Object.keys(errors).length > 0 && (
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "16px 20px", marginBottom: "32px", color: "#991b1b", fontSize: "15px" }}>
              Please fix the errors below before submitting.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* ── 1. Personal Information ── */}
            <div>
              <Eyebrow color="var(--gold-700)" withRule>Personal Information</Eyebrow>
              <h2 style={{ fontSize: "1.6rem", margin: "12px 0 24px", lineHeight: 1 }}>About You</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Name */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <Field label="First Name" required error={err("firstName")}>
                    <input style={inputStyle} value={form.firstName} onChange={(e) => set("firstName")(e.target.value)} autoComplete="given-name" />
                  </Field>
                  <Field label="Last Name" required error={err("lastName")}>
                    <input style={inputStyle} value={form.lastName} onChange={(e) => set("lastName")(e.target.value)} autoComplete="family-name" />
                  </Field>
                </div>

                {/* Address */}
                <Field label="Street Address" required error={err("address1")}>
                  <input style={inputStyle} value={form.address1} onChange={(e) => set("address1")(e.target.value)} autoComplete="address-line1" />
                </Field>
                <Field label="Street Address Line 2" error={err("address2")}>
                  <input style={inputStyle} value={form.address2} onChange={(e) => set("address2")(e.target.value)} autoComplete="address-line2" placeholder="Apt, suite, unit (optional)" />
                </Field>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "16px" }}>
                  <Field label="City" required error={err("city")}>
                    <input style={inputStyle} value={form.city} onChange={(e) => set("city")(e.target.value)} autoComplete="address-level2" />
                  </Field>
                  <Field label="State" required error={err("state")}>
                    <input style={inputStyle} value={form.state} onChange={(e) => set("state")(e.target.value)} autoComplete="address-level1" maxLength={2} placeholder="CA" />
                  </Field>
                  <Field label="ZIP Code" required error={err("zip")}>
                    <input style={inputStyle} value={form.zip} onChange={(e) => set("zip")(e.target.value)} autoComplete="postal-code" maxLength={10} />
                  </Field>
                </div>

                {/* Email */}
                <Field label="Email Address" required error={err("email")}>
                  <input style={inputStyle} type="email" value={form.email} onChange={(e) => set("email")(e.target.value)} autoComplete="email" placeholder="you@example.com" />
                </Field>

                {/* Phone */}
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: "16px" }}>
                  <Field label="Area Code" required error={err("areaCode")}>
                    <input style={inputStyle} value={form.areaCode} onChange={(e) => set("areaCode")(e.target.value)} autoComplete="tel-area-code" maxLength={3} placeholder="619" />
                  </Field>
                  <Field label="Phone Number" required error={err("phone")}>
                    <input style={inputStyle} value={form.phone} onChange={(e) => set("phone")(e.target.value)} autoComplete="tel-local" placeholder="289-8987" />
                  </Field>
                </div>

                {/* Background check */}
                <Field
                  label="Are you willing to allow Barabbas Road Church to perform a thorough and confidential background check (including identity verification, past addresses, civil and criminal history, etc.)?"
                  required
                  error={err("backgroundCheck")}
                >
                  <div style={{ marginTop: "10px" }}>
                    <YesNo value={form.backgroundCheck} onChange={set("backgroundCheck")} />
                  </div>
                </Field>
              </div>
            </div>

            {/* ── 2. Your Faith ── */}
            <div style={sectionHeadStyle}>
              <Eyebrow color="var(--gold-700)" withRule>Your Faith</Eyebrow>
              <h2 style={{ fontSize: "1.6rem", margin: "12px 0 24px", lineHeight: 1 }}>Faith Background</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

                <Field label="Please explain how and when you became a Christian." required error={err("howBecameChristian")}>
                  <div style={{ marginTop: "6px" }}>
                    <CountedTextarea value={form.howBecameChristian} onChange={set("howBecameChristian")} placeholder="Share your story..." />
                  </div>
                </Field>

                <Field label="Have you been baptized?" required error={err("baptized")}>
                  <div style={{ marginTop: "10px" }}>
                    <YesNo value={form.baptized} onChange={set("baptized")} />
                  </div>
                </Field>

                <Field
                  label="Have you read the Barabbas Road doctrinal statement?"
                  required
                  error={err("readDoctrinal")}
                >
                  <p style={{ fontSize: "13.5px", color: "var(--text-muted)", margin: "4px 0 10px" }}>
                    You can read it on our{" "}
                    <Link href="/about/what-we-believe" target="_blank" style={{ color: "var(--gold-700)", textDecoration: "underline" }}>
                      What We Believe
                    </Link>{" "}
                    page.
                  </p>
                  <YesNo value={form.readDoctrinal} onChange={set("readDoctrinal")} />
                </Field>

                <Field label="Are you in full agreement with the Barabbas Road doctrinal statement?" required error={err("agreeDoctrinal")}>
                  <div style={{ marginTop: "10px" }}>
                    <YesNo value={form.agreeDoctrinal} onChange={set("agreeDoctrinal")} />
                  </div>
                </Field>
              </div>
            </div>

            {/* ── 3. Experience ── */}
            <div style={sectionHeadStyle}>
              <Eyebrow color="var(--gold-700)" withRule>Experience</Eyebrow>
              <h2 style={{ fontSize: "1.6rem", margin: "12px 0 24px", lineHeight: 1 }}>Prior Ministry</h2>
              <Field label="Have you taught or cared for children in any church ministry before?" required error={err("taughtChildren")}>
                <div style={{ marginTop: "10px" }}>
                  <YesNo value={form.taughtChildren} onChange={set("taughtChildren")} />
                </div>
              </Field>
            </div>

            {/* ── 4. Theology ── */}
            <div style={sectionHeadStyle}>
              <Eyebrow color="var(--gold-700)" withRule>Theology</Eyebrow>
              <h2 style={{ fontSize: "1.6rem", margin: "12px 0 8px", lineHeight: 1 }}>One Question</h2>
              <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, margin: "0 0 20px" }}>
                This is not a theological quiz — it&apos;s a measuring marker so we can help you grow if needed.
              </p>
              <Field label="How does someone become a Christian?" required error={err("howBecomeChristian")}>
                <div style={{ marginTop: "6px" }}>
                  <CountedTextarea value={form.howBecomeChristian} onChange={set("howBecomeChristian")} placeholder="In your own words..." />
                </div>
              </Field>
            </div>

            {/* ── 5. Standards & Acknowledgment ── */}
            <div style={sectionHeadStyle}>
              <Eyebrow color="var(--gold-700)" withRule>Standards</Eyebrow>
              <h2 style={{ fontSize: "1.6rem", margin: "12px 0 20px", lineHeight: 1 }}>Acknowledgment</h2>

              <div style={{ background: "var(--white)", border: "1px solid var(--border-subtle)", borderLeft: "4px solid var(--gold-400)", borderRadius: "8px", padding: "24px 28px", marginBottom: "28px" }}>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-body)", margin: "0 0 20px" }}>
                  We thank the Lord that you are interested in serving Him in the Children&apos;s ministry. We believe that Jesus Christ is the true head of Barabbas Road Church and that we need to honor His headship in all that we do. We believe that it is a privilege, not a right, to be able to serve in the children&apos;s ministry knowing that it is Christ&apos;s church. Because of this, there is a degree of standards that need to be met in order to serve. Our desire is for you to succeed in this ministry while honoring Christ and being an example to the kids.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text-body)", margin: "0 0 20px" }}>
                  Read through the list in Galatians 5:19–21 and Ephesians 5:1–12. These two passages give a good summary of the type of lifestyle that should not be exhibited by a Christian. If you struggle in any of these areas we want to help, but understand that if a situation arises where you are consistently falling into these temptations we will need to remove you from your position with the hopes of helping you grow and placing you back into the ministry.
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "4px" }}>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-900)", margin: "0 0 10px" }}>Expectations for You</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {["Be Prompt", "Be in the Bible throughout the week", "Be prepared", "Be praying for the kids"].map((item) => (
                        <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14.5px", color: "var(--text-muted)" }}>
                          <span style={{ flexShrink: 0, marginTop: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--ink-900)", margin: "0 0 10px" }}>Expectations for the Church</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                      {["Give you proper training", "Give you proper support", "Be available for help and counsel", "Be praying for you"].map((item) => (
                        <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", fontSize: "14.5px", color: "var(--text-muted)" }}>
                          <span style={{ flexShrink: 0, marginTop: "8px", width: "6px", height: "6px", borderRadius: "50%", background: "var(--gold-400)", display: "block" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Field label="Type your full name to confirm you have read and agree to the above." required error={err("signatureName")}>
                  <input style={inputStyle} value={form.signatureName} onChange={(e) => set("signatureName")(e.target.value)} placeholder="Your full name" />
                </Field>
                <Field label="Date" required error={err("date")}>
                  <input style={{ ...inputStyle, maxWidth: "220px" }} type="date" value={form.date} onChange={(e) => set("date")(e.target.value)} />
                </Field>
              </div>
            </div>

            {/* ── Submit ── */}
            {submitError && (
              <div style={{ background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "14px 18px", color: "#991b1b", fontSize: "15px" }}>
                {submitError}
              </div>
            )}
            <div style={{ paddingTop: "8px" }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  display: "inline-block",
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
                }}
              >
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            </div>

          </form>
        </div>
      </section>
    </div>
  );
}
