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
  { label: "Member Testimonies", href: "/about/member-testimonies" },
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
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          border-radius: 999px;
          font-family: var(--font-semicond);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: .06em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          transition: background .15s ease, color .15s ease;
          min-height: 36px;
        }
        .brc-subnav-pill:not(.active) {
          background: rgba(255,255,255,.08);
          color: rgba(255,255,255,.6);
        }
        .brc-subnav-pill:not(.active):hover {
          background: rgba(255,255,255,.14);
          color: rgba(255,255,255,.9);
        }
        .brc-subnav-pill.active {
          background: var(--gold-400);
          color: var(--ink-900);
        }
        .brc-subnav-scroll {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 10px 0 10px;
          /* Fade right edge to hint more items */
          -webkit-mask-image: linear-gradient(to right, black 80%, transparent 100%);
          mask-image: linear-gradient(to right, black 80%, transparent 100%);
        }
        .brc-subnav-scroll::-webkit-scrollbar { display: none; }
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
