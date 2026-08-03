import { Icon } from "@/components/Icon";

export function AnnouncementBar() {
  return (
    <div style={{ background: "var(--ink-950)", color: "var(--text-on-dark)", fontSize: "13px" }}>
      <div
        className="brc-container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "40px" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <Icon name="phone" size={14} /> 619.289.8987
          </span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span style={{ display: "flex", alignItems: "center", gap: "7px" }}>
            <Icon name="mapPin" size={14} /> Miramar, San Diego · Sundays @ 10am
          </span>
        </div>
        <div className="brc-announcement-extras" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {([
            { name: "facebook",  href: "https://www.facebook.com/barabbasroadchurch" },
            { name: "instagram", href: "https://www.instagram.com/barabbasroadchurch/" },
            { name: "youtube",   href: "https://www.youtube.com/user/BarabbasRoadChurch" },
          ] as const).map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--text-on-dark)", opacity: 0.75, display: "flex" }}
              aria-label={s.name}
            >
              <Icon name={s.name} size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
