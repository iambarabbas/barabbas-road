"use client";

import React, { useState } from "react";

interface CardProps {
  children: React.ReactNode;
  media?: string | React.ReactNode | null;
  mediaHeight?: number;
  interactive?: boolean;
  padding?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function Card({
  children,
  media = null,
  mediaHeight = 200,
  interactive = false,
  padding = "var(--space-5)",
  style = {},
  onClick,
}: CardProps) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      onClick={onClick}
      style={{
        background: "var(--surface-card)",
        borderRadius: "var(--radius-lg)",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-card)",
        border: "1px solid var(--border-subtle)",
        overflow: "hidden",
        transition:
          "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        transform: hover ? "translateY(-3px)" : "none",
        cursor: interactive ? "pointer" : "default",
        display: "flex",
        flexDirection: "column",
        ...style,
      }}
    >
      {media && (
        <div style={{ height: mediaHeight, overflow: "hidden", flexShrink: 0, position: "relative" }}>
          {typeof media === "string" ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={media}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "transform var(--dur-slow) var(--ease-out)",
                transform: hover ? "scale(1.04)" : "none",
              }}
            />
          ) : (
            media
          )}
        </div>
      )}
      <div
        style={{
          padding,
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
