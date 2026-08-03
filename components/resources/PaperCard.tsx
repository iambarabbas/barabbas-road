"use client";

import { Card } from "@/components/core/Card";
import { Badge } from "@/components/core/Badge";
import { Icon } from "@/components/Icon";

interface PaperCardProps {
  number: string;
  title: string;
  description: string;
  file: string;
  type: "pdf" | "doc";
  base: string;
}

export function PaperCard({ number, title, description, file, type, base }: PaperCardProps) {
  const isPdf = type === "pdf";
  const href = `${base}/resources/${file}`;

  return (
    <a
      href={href}
      target={isPdf ? "_blank" : undefined}
      download={!isPdf ? true : undefined}
      rel="noopener noreferrer"
      style={{ textDecoration: "none", display: "flex" }}
    >
      <Card interactive style={{ height: "100%", width: "100%" }}>
        {/* Top row: number + icon */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "18px",
              letterSpacing: ".05em",
              color: "var(--ink-300)",
            }}
          >
            {number}
          </span>
          <span style={{ color: "var(--ink-400)" }}>
            <Icon name="bookOpen" size={22} strokeWidth={1.8} />
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(1rem, 0.7rem + 1vw, 1.2rem)",
            lineHeight: 1.2,
            margin: "4px 0 0",
            color: "var(--text-strong)",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
          }}
        >
          {title}
        </h3>

        {/* Badge */}
        <Badge tone={isPdf ? "gold" : "outline"}>{isPdf ? "PDF" : "Word Doc"}</Badge>

        {/* Description */}
        <p style={{ color: "var(--text-muted)", fontSize: "14.5px", margin: 0, lineHeight: 1.65 }}>
          {description}
        </p>

        {/* CTA */}
        <div
          style={{
            marginTop: "auto",
            paddingTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            color: "var(--text-accent)",
            fontWeight: 600,
            fontSize: "13px",
            gap: "5px",
          }}
        >
          {isPdf ? "Read" : "Download"} <Icon name="arrowRight" size={14} />
        </div>
      </Card>
    </a>
  );
}
