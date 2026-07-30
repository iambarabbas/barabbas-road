import React from "react";

type BadgeTone = "gold" | "ink" | "outline" | "success" | "info" | "live";

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  style?: React.CSSProperties;
}

export function Badge({ children, tone = "gold", style = {} }: BadgeProps) {
  const tones: Record<BadgeTone, { background: string; color: string; border: string }> = {
    gold:    { background: "var(--gold-100)",    color: "var(--gold-800)",    border: "transparent" },
    ink:     { background: "var(--ink-900)",     color: "var(--white)",       border: "transparent" },
    outline: { background: "transparent",        color: "var(--text-body)",   border: "var(--border-default)" },
    success: { background: "var(--success-100)", color: "var(--success-600)", border: "transparent" },
    info:    { background: "var(--info-100)",    color: "var(--info-600)",    border: "transparent" },
    live:    { background: "var(--danger-600)",  color: "var(--white)",       border: "transparent" },
  };
  const t = tones[tone] || tones.gold;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-semicond)",
        fontWeight: 700,
        fontSize: "12px",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        lineHeight: 1,
        padding: "5px 10px",
        borderRadius: "var(--radius-sm)",
        background: t.background,
        color: t.color,
        border: `1px solid ${t.border}`,
        ...style,
      }}
    >
      {tone === "live" && (
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "currentColor" }} />
      )}
      {children}
    </span>
  );
}
