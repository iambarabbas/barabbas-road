import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        background: "var(--surface-page)",
        textAlign: "center",
      }}
    >
      {/* Heading */}
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 900,
          fontSize: "clamp(3rem,2rem+6vw,7rem)",
          color: "var(--ink-900)",
          letterSpacing: "-0.01em",
          lineHeight: 1,
          margin: "0 0 20px",
          textTransform: "uppercase",
        }}
      >
        God Is Sovereign
      </h1>

      {/* Scripture */}
      <p
        style={{
          fontSize: "clamp(16px,1rem+0.5vw,20px)",
          color: "var(--text-muted)",
          fontStyle: "italic",
          maxWidth: "60ch",
          lineHeight: 1.6,
          margin: "0 0 56px",
        }}
      >
        &ldquo;The heart of man plans his way, but the Lord establishes his steps.&rdquo;
        &nbsp;~ Proverbs 16:9
      </p>

      {/* Card */}
      <div
        style={{
          background: "var(--surface-card)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "48px 40px",
          maxWidth: "680px",
          width: "100%",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <p style={{ fontSize: "17px", color: "var(--text-muted)", margin: "0 0 8px", lineHeight: 1.65 }}>
          God may have chosen you, but the page you chose doesn&apos;t exist.
        </p>
        <p style={{ fontSize: "15px", color: "var(--text-subtle)", margin: "0 0 36px", lineHeight: 1.6 }}>
          Please double-check your URL and try again, or select a popular page below.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
            gap: "12px",
          }}
        >
          {[
            { label: "Sermons",   href: "/sermons"   },
            { label: "About Us",  href: "/about"     },
            { label: "New Here?", href: "/new-here"  },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 20px",
                border: "1px solid var(--border-default)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "15px",
                letterSpacing: "0.03em",
                color: "var(--ink-900)",
                textDecoration: "none",
                background: "var(--white)",
                transition: "border-color 0.15s ease, background 0.15s ease",
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
