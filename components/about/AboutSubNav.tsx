"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <nav
      style={{
        background: "var(--ink-900)",
        borderBottom: "1px solid rgba(255,255,255,.08)",
      }}
    >
      <div className="brc-container">
        <div
          style={{
            display: "flex",
            gap: "0",
            overflowX: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {LINKS.map((link) => {
            const isActive =
              link.href === "/about"
                ? pathname === "/about"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "inline-block",
                  padding: "14px 18px",
                  whiteSpace: "nowrap",
                  fontFamily: "var(--font-semicond)",
                  fontWeight: 700,
                  fontSize: "12.5px",
                  letterSpacing: ".07em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive ? "var(--gold-400)" : "rgba(255,255,255,.55)",
                  borderBottom: isActive
                    ? "2px solid var(--gold-400)"
                    : "2px solid transparent",
                  transition: "color 0.15s ease, border-color 0.15s ease",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
