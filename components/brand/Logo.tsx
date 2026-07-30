import React from "react";

type LogoVariant = "black" | "white" | "gold";

interface LogoProps {
  variant?: LogoVariant;
  markOnly?: boolean;
  height?: number;
  style?: React.CSSProperties;
  alt?: string;
}

export function Logo({
  variant = "black",
  markOnly = false,
  height = 44,
  style = {},
  alt = "Barabbas Road Church",
}: LogoProps) {
  const file = markOnly ? `mark-${variant}.png` : `logo-${variant}.png`;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/${file}`}
      alt={alt}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}
