import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Icon } from "@/components/Icon";

const FOOTER_LINKS = [
  { heading: "Connect", items: [{ label: "I'm New", href: "/new-here" }, { label: "Plan a Visit", href: "/new-here" }, { label: "Life Groups", href: "/life-groups" }, { label: "Contact", href: "/contact" }] },
  { heading: "Grow",    items: [{ label: "Sermons",  href: "/sermons" }, { label: "Livestream", href: "/livestream" }, { label: "Classes", href: "/classes" }, { label: "Kids", href: "/kids" }, { label: "Youth", href: "/youth" }] },
  { heading: "Give",    items: [{ label: "Give Online", href: "/give" }, { label: "Ways to Give", href: "/give" }, { label: "Missions", href: "/missions" }] },
];

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--ink-950)", color: "var(--text-on-dark)" }}>
      <div className="brc-container" style={{ paddingTop: "64px", paddingBottom: "40px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px", justifyContent: "space-between" }}>
          {/* Brand */}
          <div style={{ maxWidth: "320px" }}>
            <Logo variant="white" logolock height={60} />
            <p style={{ marginTop: "20px", color: "rgba(255,255,255,.6)", fontSize: "15px", lineHeight: 1.6 }}>
              A church in San Diego that exists to know Jesus and make Him known. Hear the Truth. Live the Truth. Defend the Truth.
            </p>
            <div style={{ display: "flex", gap: "14px", marginTop: "20px" }}>
              {([
                { name: "facebook",  href: "https://www.facebook.com/barabbasroadchurch" },
                { name: "instagram", href: "https://www.instagram.com/barabbasroadchurch/" },
                { name: "youtube",   href: "https://www.youtube.com/user/BarabbasRoadChurch" },
              ] as const).map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} style={{ color: "var(--gold-400)", display: "flex" }}>
                  <Icon name={s.name} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="brc-footer-links" style={{ display: "flex", gap: "56px", flexWrap: "wrap" }}>
            {FOOTER_LINKS.map(({ heading, items }) => (
              <div key={heading}>
                <h4 style={{ color: "var(--white)", fontSize: "16px", marginBottom: "16px" }}>{heading}</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} style={{ color: "rgba(255,255,255,.65)", fontSize: "14.5px" }}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.12)",
            marginTop: "48px",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            color: "rgba(255,255,255,.45)",
            fontSize: "13px",
          }}
        >
          <span>© {new Date().getFullYear()} Barabbas Road Church · San Diego, CA</span>
          <span style={{ display: "flex", gap: "20px" }}>
            <Link href="/privacy" style={{ color: "rgba(255,255,255,.45)" }}>Privacy</Link>
            <Link href="/beliefs" style={{ color: "rgba(255,255,255,.45)" }}>Beliefs</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
