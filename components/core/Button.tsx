import React from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "outline-light" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: React.ElementType;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  href?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  as,
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  ...rest
}: ButtonProps) {
  const sizes: Record<ButtonSize, { padding: string; fontSize: string; gap: string }> = {
    sm: { padding: "8px 16px",  fontSize: "13px", gap: "7px" },
    md: { padding: "13px 26px", fontSize: "15px", gap: "9px" },
    lg: { padding: "17px 36px", fontSize: "17px", gap: "11px" },
  };
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-semicond)",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    fontSize: sizes[size].fontSize,
    padding: sizes[size].padding,
    borderRadius: "var(--radius-sm)",
    border: "var(--border-thick) solid transparent",
    cursor: "pointer",
    width: fullWidth ? "100%" : "auto",
    lineHeight: 1,
    textDecoration: "none",
    transition:
      "background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
  };
  const variants: Record<ButtonVariant, React.CSSProperties> = {
    primary:       { background: "var(--accent)",    color: "var(--accent-contrast)", borderColor: "var(--accent)" },
    secondary:     { background: "var(--ink-900)",   color: "var(--white)",           borderColor: "var(--ink-900)" },
    outline:       { background: "transparent",      color: "var(--text-strong)",     borderColor: "var(--border-strong)" },
    "outline-light":{ background: "transparent",     color: "var(--white)",           borderColor: "rgba(255,255,255,0.55)" },
    ghost:         { background: "transparent",      color: "var(--text-accent)",     borderColor: "transparent" },
  };

  const Tag = (as || "button") as React.ElementType;
  return (
    <Tag
      className={`brc-btn brc-btn--${variant}`}
      style={{ ...base, ...variants[variant], ...style }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Tag>
  );
}
