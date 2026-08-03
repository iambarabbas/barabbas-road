"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const LINKS = [
  { label: "About Us",           href: "/about" },
  { label: "What We Believe",    href: "/about/what-we-believe" },
  { label: "The Name Barabbas",  href: "/about/the-name-barabbas" },
  { label: "Church Government",  href: "/about/church-government" },
  { label: "Elders",             href: "/about/elders" },
  { label: "Church History",     href: "/about/church-history" },
  { label: "Distinctives",       href: "/about/distinctives" },
];

export function AboutSubNav() {
  const pathname = usePathname();
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Scroll active pill into center on mount / route change
  useEffect(() => {
    const nav = scrollRef.current;
    const item = activeRef.current;
    if (!nav || !item) return;
    const offset =
      item.offsetLeft - nav.offsetWidth / 2 + item.offsetWidth / 2;
    nav.scrollTo({ left: Math.max(0, offset), behavior: "smooth" });
  }, [pathname]);

  return (
    <>
      <style>{`
        .brc-subnav-pill {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 14px;
          border-radius: var(--radius-md, 6px);
          font-family: var(--font-semicond);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: .06em;
          text-transform: uppercase;
          text-decoration: none;
          text-align: center;
          transition: background .15s ease, color .15s ease;
          min-height: 40px;
          line-height: 1.2;
        }
        .brc-subnav-pill:not(.active) {
          background: rgba(255,255,255,.07);
          color: rgba(255,255,255,.55);
          border: 1px solid rgba(255,255,255,.08);
        }
        .brc-subnav-pill:not(.active):hover {
          background: rgba(255,255,255,.13);
          color: rgba(255,255,255,.9);
        }
        .brc-subnav-pill.active {
          background: var(--gold-400);
          color: var(--ink-900);
          border: 1px solid var(--gold-400);
        }
        /* Mobile: 2-col grid — all items visible at once */
        .brc-subnav-scroll {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          padding: 12px 0;
        }
        /* Desktop: horizontal row */
        @media (min-width: 640px) {
          .brc-subnav-scroll {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            padding: 10px 0;
          }
          .brc-subnav-pill {
            font-size: 12px;
            white-space: nowrap;
          }
        }
      `}</style>

      <nav
        style={{
          background: "var(--ink-950, #141311)",
          borderBottom: "1px solid rgba(255,255,255,.06)",
          position: "sticky",
          top: 0,
          zIndex: 300,
        }}
      >
        <div className="brc-container">
          <div className="brc-subnav-scroll" ref={scrollRef}>
            {LINKS.map((link) => {
              const isActive =
                link.href === "/about"
                  ? pathname === "/about"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={isActive ? activeRef : undefined}
                  className={`brc-subnav-pill${isActive ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
