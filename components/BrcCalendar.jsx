"use client";
// Drop-in calendar for the barabbas.com Next.js site.
// Usage (app/calendar/page.jsx):  <BrcCalendar />   in place of the Subsplash <iframe>.
import { useEffect, useRef, useState } from "react";

const CALENDAR_URL = "https://brc-calendar.brett-c32.workers.dev";

export default function BrcCalendar() {
  const ref = useRef(null);
  const [src, setSrc] = useState(null);
  const [height, setHeight] = useState(800);

  useEffect(() => {
    // Support shared links like /calendar/?event=youth-connect&date=2026-11-27
    const p = new URLSearchParams(window.location.search);
    const ev = p.get("event"), date = p.get("date");
    const share = encodeURIComponent(window.location.origin + window.location.pathname);
    const path = ev ? `/e/${encodeURIComponent(ev)}${date ? "/" + date : ""}` : "/embed";
    setSrc(`${CALENDAR_URL}${path}?share=${share}`);

    const onMsg = (e) => {
      if (e.source !== ref.current?.contentWindow) return;
      if (e.data?.type === "brc-calendar:height") setHeight(e.data.height);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, []);

  return src ? (
    <iframe
      ref={ref}
      src={src}
      title="Events calendar"
      scrolling="no"
      style={{ width: "100%", height, border: 0, display: "block", background: "transparent" }}
    />
  ) : <div style={{ minHeight: 800 }} />;
}
