import React from "react";

type LogoVariant = "black" | "white" | "gold";
type LogoType = "logolock" | "logo" | "mark";

interface LogoProps {
  variant?: LogoVariant;
  markOnly?: boolean;
  logolock?: boolean;
  height?: number;
  style?: React.CSSProperties;
  alt?: string;
}

export function Logo({
  variant = "black",
  markOnly = false,
  logolock = false,
  height = 44,
  style = {},
  alt = "Barabbas Road Church",
}: LogoProps) {
  let prefix: LogoType = "logo";
  if (logolock) prefix = "logolock";
  else if (markOnly) prefix = "mark";
  const file = `${prefix}-${variant}.png`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`${basePath}/assets/${file}`}
      alt={alt}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}
