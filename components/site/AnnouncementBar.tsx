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
            <Icon name="mapPin" size={14} /> San Diego · Sundays @ 10am
          </span>
        </div>
        <div className="brc-announcement-extras" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {(["facebook", "instagram", "youtube"] as const).map((s) => (
            <a
              key={s}
              href="#"
              style={{ color: "var(--text-on-dark)", opacity: 0.75, display: "flex" }}
              aria-label={s}
            >
              <Icon name={s} size={15} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
