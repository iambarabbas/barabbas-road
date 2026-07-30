"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/core/Button";
import { Icon } from "@/components/Icon";

const NAV = [
  { label: "I'm New",    href: "/new-here" },
  { label: "About",      href: "/about" },
  { label: "Sermons",    href: "/sermons" },
  { label: "Life Groups",href: "/life-groups" },
  { label: "Classes",    href: "/classes" },
  { label: "Kids",       href: "/kids" },
  { label: "Youth",      href: "/youth" },
  { label: "Give",       href: "/give" },
  { label: "Contact",    href: "/contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: "var(--z-header)",
        background: "var(--white)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-out)",
      }}
    >
      <div
        className="brc-container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px", gap: "24px" }}
      >
        <Link href="/" style={{ display: "flex", flexShrink: 0 }} aria-label="Barabbas Road Church — home">
          <Logo variant="black" logolock height={40} />
        </Link>

        <nav className="brc-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "26px", flexWrap: "nowrap" }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: pathname === item.href ? "var(--gold-700)" : "var(--text-strong)",
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <Button
            size="sm"
            variant="primary"
            iconLeft={<Icon name="play" size={13} fill="currentColor" />}
          >
            Livestream
          </Button>
          <button
            className="brc-menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "var(--ink-900)", padding: 0 }}
          >
            <Icon name={menuOpen ? "x" : "menu"} size={26} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--white)", borderTop: "1px solid var(--border-subtle)", padding: "16px 0 24px" }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "12px var(--gutter)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "16px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: pathname === item.href ? "var(--gold-700)" : "var(--text-strong)",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
