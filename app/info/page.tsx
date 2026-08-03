import type { Metadata } from "next";
import Link from "next/link";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Info | Barabbas Road Church",
  description: "Links, resources, and info from Barabbas Road Church — Miramar, San Diego.",
  alternates: { canonical: "https://iambarabbas.github.io/barabbas-road/info/" },
};

const LINKS = [
  { label: "Life Group Signup",    href: "/life-groups",            internal: true  },
  { label: "Calendar",             href: "/calendar",               internal: true  },
  { label: "Baptism Signup",       href: "/life-groups",            internal: true  },
  { label: "Give",                 href: "/give",                   internal: true  },
  { label: "Download Our App",     href: "/app-download",           internal: true  },
  { label: "Doctrinal Statement",  href: "/about/what-we-believe",  internal: true  },
];

const SOCIALS = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/user/BarabbasRoadChurch",
    path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/barabbasroadchurch/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/barabbasroadchurch",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function InfoPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--ink-900)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px 64px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "480px", display: "flex", flexDirection: "column", alignItems: "center", gap: "0" }}>

        {/* ── Tagline ── */}
        <p
          style={{
            color: "rgba(255,255,255,.5)",
            fontSize: "13px",
            fontFamily: "var(--font-semicond)",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            margin: "0 0 28px",
            textAlign: "center",
          }}
        >
          Miramar, San Diego &nbsp;·&nbsp; Sundays 10am
        </p>

        {/* ── Nav links ── */}
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
          {LINKS.map(({ label, href, internal }) => {
            const style: React.CSSProperties = {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              minHeight: "62px",
              padding: "16px 24px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "var(--white)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "17px",
              letterSpacing: "0.03em",
              textDecoration: "none",
              textAlign: "center",
              boxSizing: "border-box",
            };
            return internal ? (
              <Link key={label} href={href} style={style} className="brc-info-btn">{label}</Link>
            ) : (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" style={style} className="brc-info-btn">{label}</a>
            );
          })}
        </div>

        {/* ── Mere Membership book ── */}
        <div
          style={{
            width: "100%",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            marginBottom: "40px",
          }}
        >
          <a
            href="https://www.amazon.com/Mere-Membership-Belonging-Visible-Through/dp/B0GQ6FQT34/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/assets/mere-membership-book.jpg`}
              alt="Mere Membership by Matthew P. Smith"
              style={{ width: "100%", display: "block" }}
            />
            <div
              style={{
                background: "rgba(255,255,255,0.07)",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <div>
                <p style={{ color: "var(--white)", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px", margin: "0 0 3px", lineHeight: 1.2 }}>
                  Mere Membership
                </p>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: "13px", margin: 0, fontFamily: "var(--font-semicond)", fontWeight: 600 }}>
                  New book by Pastor Matt Smith
                </p>
              </div>
              <span
                style={{
                  flexShrink: 0,
                  background: "var(--gold-400)",
                  color: "var(--ink-900)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  whiteSpace: "nowrap",
                }}
              >
                Buy on Amazon
              </span>
            </div>
          </a>
        </div>

        {/* ── Social icons ── */}
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{ color: "rgba(255,255,255,.4)", display: "flex" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
