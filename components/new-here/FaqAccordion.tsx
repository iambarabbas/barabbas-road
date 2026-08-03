"use client";

import { useState } from "react";
import { Icon } from "@/components/Icon";

export interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const toggle = (i: number) =>
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {items.map((item, i) => {
        const open = openSet.has(i);
        return (
          <div
            key={i}
            style={{
              background: "var(--white)",
              borderRadius: "var(--radius-lg)",
              border: `1px solid ${open ? "var(--gold-300)" : "var(--border-subtle)"}`,
              borderLeft: `4px solid ${open ? "var(--gold-400)" : "var(--border-subtle)"}`,
              overflow: "hidden",
              transition: "border-color 0.2s ease",
            }}
          >
            {/* Question row */}
            <button
              onClick={() => toggle(i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 22px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: open ? "var(--gold-700)" : "var(--ink-900)",
                  lineHeight: 1.25,
                  transition: "color 0.15s ease",
                }}
              >
                {item.q}
              </span>
              <span
                style={{
                  flexShrink: 0,
                  color: "var(--gold-600)",
                  display: "flex",
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.25s ease",
                }}
              >
                <Icon name="chevronDown" size={20} strokeWidth={2.2} />
              </span>
            </button>

            {/* Answer — max-height slide */}
            <div
              style={{
                maxHeight: open ? "600px" : "0",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p
                style={{
                  margin: 0,
                  padding: "0 22px 20px",
                  color: "var(--text-muted)",
                  fontSize: "16px",
                  lineHeight: 1.75,
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "16px",
                }}
              >
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
