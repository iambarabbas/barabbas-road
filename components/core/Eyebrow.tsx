import React from "react";

interface EyebrowProps {
  children: React.ReactNode;
  color?: string;
  align?: "left" | "center";
  withRule?: boolean;
  style?: React.CSSProperties;
}

export function Eyebrow({
  children,
  color = "var(--text-accent)",
  align = "left",
  withRule = false,
  style = {},
}: EyebrowProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        gap: "12px",
        fontFamily: "var(--font-semicond)",
        fontWeight: 700,
        fontSize: "var(--fs-eyebrow)",
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {withRule && (
        <span style={{ width: "32px", height: "2px", background: "currentColor", opacity: 0.8, flexShrink: 0 }} />
      )}
      <span>{children}</span>
    </div>
  );
}
