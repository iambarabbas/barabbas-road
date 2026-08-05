'use client';

import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useState, useEffect, useCallback } from 'react';

// ─── Types & Data ────────────────────────────────────────────────────────────

interface Group {
  id: number;
  name: string;
  day: 'Sunday' | 'Monday' | 'Wednesday' | 'Thursday';
  time: string;
  location: string;
  lat: number;
  lng: number;
  full: boolean;
  onBreak: boolean;
  note?: string;
  image: string;
}

const GROUPS: Group[] = [
  { id: 1,  name: "Brett & Kari's Group", day: "Sunday",    time: "12:30pm", location: "Church Campus",       lat: 32.8754, lng: -117.1425, full: false, onBreak: true,  image: "/assets/life-groups/brettkari.png" },
  { id: 2,  name: "Jesse's Group",         day: "Sunday",    time: "1:00pm",  location: "Scripps Ranch",        lat: 32.9000, lng: -117.1000, full: false, onBreak: false, image: "/assets/life-groups/jesse.png" },
  { id: 3,  name: "Justin's Group",        day: "Sunday",    time: "2:00pm",  location: "Lemon Grove",          lat: 32.7425, lng: -117.0314, full: false, onBreak: true,  image: "/assets/life-groups/justin.png" },
  { id: 4,  name: "Jeremy's Group",        day: "Sunday",    time: "6:00pm",  location: "Coronado",             lat: 32.6859, lng: -117.1831, full: false, onBreak: true,  image: "/assets/life-groups/jeremy.png" },
  { id: 5,  name: "Jon Paul's Group",      day: "Sunday",    time: "6:00pm",  location: "Scripps Ranch",        lat: 32.9050, lng: -117.1050, full: false, onBreak: true,  image: "/assets/life-groups/jonpaul.png" },
  { id: 6,  name: "Mark's Group",          day: "Monday",    time: "6:00pm",  location: "Cardiff",              lat: 33.0214, lng: -117.2766, full: false, onBreak: true,  image: "/assets/life-groups/mark.png" },
  { id: 7,  name: "Brett's Group",         day: "Monday",    time: "6:30pm",  location: "Bay Park",             lat: 32.7905, lng: -117.2120, full: false, onBreak: true,  image: "/assets/life-groups/brett-wheeless.png" },
  { id: 8,  name: "Jon's Group",           day: "Monday",    time: "6:30pm",  location: "Crown Point / PB",     lat: 32.7874, lng: -117.2360, full: false, onBreak: false, note: "2nd & 4th Monday", image: "/assets/life-groups/jon.png" },
  { id: 9,  name: "Rob's Group",           day: "Wednesday", time: "5:00pm",  location: "Rancho Peñasquitos",   lat: 32.9595, lng: -117.1128, full: false, onBreak: true,  image: "/assets/life-groups/rob.png" },
  { id: 11, name: "Connor's Group",        day: "Wednesday", time: "6:30pm",  location: "Santee",               lat: 32.8384, lng: -116.9739, full: false, onBreak: true,  image: "/assets/life-groups/connor.png" },
  { id: 12, name: "Beau's Group",          day: "Wednesday", time: "6:30pm",  location: "University City",      lat: 32.8660, lng: -117.2100, full: false, onBreak: true,  image: "/assets/life-groups/beau.png" },
  { id: 13, name: "Garrett's Group",       day: "Wednesday", time: "6:00pm",  location: "La Mesa",              lat: 32.7678, lng: -117.0231, full: false, onBreak: true,  image: "/assets/life-groups/garrett.png" },
  { id: 15, name: "Tyler's Group",         day: "Thursday",  time: "6:00pm",  location: "Church Campus",        lat: 32.8754, lng: -117.1425, full: false, onBreak: true,  image: "/assets/life-groups/tyler.jpg" },
  { id: 16, name: "Robert's Group",        day: "Thursday",  time: "6:30pm",  location: "Del Cerro / SDSU",     lat: 32.7700, lng: -117.0600, full: false, onBreak: true,  image: "/assets/life-groups/robert.png" },
  { id: 17, name: "Brandon's Group",       day: "Thursday",  time: "6:30pm",  location: "El Cajon",             lat: 32.7948, lng: -116.9625, full: false, onBreak: false, image: "/assets/life-groups/brandon.png" },
  { id: 18, name: "Jim's Group",           day: "Thursday",  time: "7:00pm",  location: "Clairemont",           lat: 32.8420, lng: -117.1950, full: false, onBreak: false, image: "/assets/life-groups/jim1.png" },
];

const DAYS = ['All', 'Sunday', 'Monday', 'Wednesday', 'Thursday'] as const;
type DayFilter = (typeof DAYS)[number];

// Vivid day colors — warm/earthy family, clearly distinct
const DAY_BG: Record<string, string> = {
  Sunday:    '#d97706', // amber-orange
  Monday:    '#2563eb', // clear blue
  Wednesday: '#dc2626', // strong red
  Thursday:  '#16a34a', // forest green
};
const DAY_TEXT: Record<string, string> = {
  Sunday:    '#ffffff',
  Monday:    '#ffffff',
  Wednesday: '#ffffff',
  Thursday:  '#ffffff',
};

// ─── Avatar with fallback ──────────────────────────────────────────────────────

function Avatar({ src, name, size, style }: { src: string; name: string; size: number; style?: React.CSSProperties }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split("'")[0].trim().split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase();
  const colors = ['#d97706','#2563eb','#dc2626','#16a34a','#7c3aed','#0891b2','#b45309','#be185d'];
  const color = colors[name.charCodeAt(0) % colors.length];

  if (failed) {
    return (
      <div style={{ width: size, height: size, borderRadius: '50%', background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: size * 0.35, color: '#fff', ...style }}>
        {initials}
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={name} onError={() => setFailed(true)} style={{ width: size, height: size, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, ...style }} />;
}

// ─── Map controller child ────────────────────────────────────────────────────

function FlyTo({ target }: { target: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo(target, 14, { duration: 0.7 });
  }, [target, map]);
  return null;
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function LifeGroupsMap() {
  const [activeDay, setActiveDay] = useState<DayFilter>('All');
  const [flyTarget, setFlyTarget] = useState<[number, number] | null>(null);
  const [modalGroup, setModalGroup] = useState<Group | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeDay === 'All' ? GROUPS : GROUPS.filter(g => g.day === activeDay);

  const openModal = useCallback((g: Group) => {
    setModalGroup(g);
    setSubmitted(false);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setModalGroup(null);
    setSubmitting(false);
    setSubmitted(false);
    document.body.style.overflow = '';
  }, []);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeModal]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xnjypjpj', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) { setSubmitted(true); }
      else { throw new Error(); }
    } catch {
      alert('Something went wrong. Please try again or call the church at 619.289.8987.');
    } finally {
      setSubmitting(false);
    }
  }

  function markerIcon(g: Group): L.DivIcon {
    const color = g.full ? '#b3ad9f' : g.onBreak ? '#d3ab64' : (DAY_BG[g.day] ?? '#d3ab64');
    const opacity = g.full || g.onBreak ? '0.6' : '1';
    return L.divIcon({
      className: '',
      html: `<div style="width:26px;height:26px;border-radius:50%;background:${color};border:3px solid white;box-shadow:0 2px 6px rgba(0,0,0,.3);opacity:${opacity};"></div>`,
      iconSize: [26, 26],
      iconAnchor: [13, 13],
      popupAnchor: [0, -16],
    });
  }

  const visibleGroups = activeDay === 'All' ? GROUPS : GROUPS.filter(g => g.day === activeDay);

  return (
    <>
      {/* Leaflet popup brand override */}
      <style>{`
        .leaflet-popup-content-wrapper{border-radius:8px;padding:0;overflow:hidden;box-shadow:0 6px 24px rgba(0,0,0,.16);}
        .leaflet-popup-content{margin:0;}
        .leaflet-popup-tip{background:white;}
        .leaflet-container a.leaflet-popup-close-button{color:#6c675c;font-size:20px;top:6px;right:8px;}
        .leaflet-container{font-family:var(--font-sans,system-ui,sans-serif);}
      `}</style>

      {/* ── Filter bar ────────────────────────────────────────────────────── */}
      <div style={{
        background: 'var(--white)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '14px 0',
        position: 'sticky',
        top: 0,
        zIndex: 400,
      }}>
        <div className="brc-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-semicond)',
            fontWeight: 600,
            fontSize: '12px',
            letterSpacing: '.07em',
            textTransform: 'uppercase',
            color: 'var(--ink-400)',
            marginRight: '4px',
            whiteSpace: 'nowrap',
          }}>Day</span>

          {DAYS.map(day => {
            const active = activeDay === day;
            const bg   = active ? (day === 'All' ? 'var(--ink-900)' : DAY_BG[day]) : 'transparent';
            const fg   = active ? (day === 'All' ? '#ffffff' : (DAY_TEXT[day] ?? '#fff')) : 'var(--text-body)';
            const bdColor = active ? 'transparent' : 'var(--border-default)';
            return (
              <button
                key={day}
                onClick={() => { setActiveDay(day); setFlyTarget(null); }}
                style={{
                  padding: '7px 16px',
                  border: `1.5px solid ${bdColor}`,
                  borderRadius: 'var(--radius-pill)',
                  background: bg,
                  color: fg,
                  fontFamily: 'var(--font-semicond)',
                  fontWeight: 600,
                  fontSize: '14px',
                  letterSpacing: '.02em',
                  cursor: 'pointer',
                  transition: 'all .15s ease',
                  minHeight: '36px',
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Map ───────────────────────────────────────────────────────────── */}
      <div style={{ height: '440px', width: '100%' }}>
        <MapContainer
          center={[32.83, -117.10]}
          zoom={11}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='© OpenStreetMap contributors, © CARTO'
            subdomains={['a', 'b', 'c', 'd']}
            maxZoom={19}
          />
          <FlyTo target={flyTarget} />

          {visibleGroups.map(g => (
            <Marker key={g.id} position={[g.lat, g.lng]} icon={markerIcon(g)}>
              <Popup>
                <div style={{ padding: '14px 16px', minWidth: '210px', fontFamily: 'var(--font-sans)' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <Avatar src={g.image} name={g.name} size={46} style={{ border: '2px solid #d3ab64' }} />
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '17px', color: '#1e1d1b', lineHeight: 1.1 }}>{g.name}</div>
                      <div style={{ fontSize: '13px', color: '#6c675c', marginTop: '3px' }}>{g.day}s · {g.time}</div>
                      <div style={{ fontSize: '13px', color: '#6c675c' }}>📍 {g.location}</div>
                      {g.note && <div style={{ fontSize: '12px', color: '#b8903b', marginTop: '2px' }}>{g.note}</div>}
                    </div>
                  </div>
                  {g.onBreak && <div style={{ fontSize: '12px', color: '#b8903b', fontWeight: 700, marginBottom: '4px' }}>Currently on break</div>}
                  {g.full    && <div style={{ fontSize: '12px', color: '#8a8477', fontWeight: 700, marginBottom: '4px' }}>Group is full</div>}
                  {!g.onBreak && !g.full && (
                    <button
                      onClick={() => openModal(g)}
                      style={{ padding: '6px 14px', background: '#d3ab64', color: '#1e1d1b', border: 'none', borderRadius: '3px', fontFamily: 'var(--font-semicond)', fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '.05em', cursor: 'pointer' }}
                    >
                      Join Group
                    </button>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* ── Group Cards ───────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--paper)', padding: '36px 0 48px' }}>
        <div className="brc-container">
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.6rem', margin: 0, color: 'var(--ink-900)' }}>
              {filtered.length} Life Group{filtered.length !== 1 ? 's' : ''}
            </h3>
            {activeDay !== 'All' && (
              <span style={{
                padding: '3px 12px',
                borderRadius: 'var(--radius-pill)',
                background: DAY_BG[activeDay] ?? 'var(--gold-400)',
                color: DAY_TEXT[activeDay] ?? 'var(--ink-900)',
                fontFamily: 'var(--font-semicond)',
                fontWeight: 700,
                fontSize: '13px',
                textTransform: 'uppercase',
                letterSpacing: '.05em',
              }}>{activeDay}</span>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            gap: '14px',
          }}>
            {filtered.map(g => (
              <div
                key={g.id}
                onClick={() => {
                  if (!g.full && !g.onBreak) openModal(g);
                  else setFlyTarget([g.lat, g.lng]);
                }}
                style={{
                  background: 'var(--white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '16px',
                  border: '1px solid var(--border-subtle)',
                  borderLeft: `4px solid ${g.full ? 'var(--ink-200)' : g.onBreak ? '#d3ab64' : (DAY_BG[g.day] ?? '#d3ab64')}`,
                  cursor: !g.full && !g.onBreak ? 'pointer' : 'default',
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  transition: 'box-shadow .15s ease',
                  opacity: g.full ? 0.65 : 1,
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 4px 18px rgba(0,0,0,.10)')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                <Avatar src={g.image} name={g.name} size={52} style={{ border: '2px solid var(--gold-100)' }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '18px', color: 'var(--ink-900)', lineHeight: 1.1, marginBottom: '4px' }}>
                    {g.name}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--ink-500)', marginBottom: '10px', lineHeight: 1.4 }}>
                    {g.time} · {g.location}
                    {g.note && <span style={{ display: 'block', color: 'var(--gold-600)', marginTop: '2px' }}>{g.note}</span>}
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
                    {/* Day badge */}
                    <span style={{
                      padding: '2px 9px',
                      borderRadius: 'var(--radius-pill)',
                      background: DAY_BG[g.day] ?? 'var(--gold-400)',
                      color: DAY_TEXT[g.day] ?? 'var(--ink-900)',
                      fontFamily: 'var(--font-semicond)',
                      fontWeight: 700,
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '.04em',
                    }}>{g.day}</span>

                    {g.onBreak && (
                      <span style={{ padding: '2px 9px', borderRadius: 'var(--radius-pill)', background: 'var(--gold-50)', color: 'var(--gold-700)', fontFamily: 'var(--font-semicond)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.04em' }}>
                        On Break
                      </span>
                    )}
                    {g.full && (
                      <span style={{ padding: '2px 9px', borderRadius: 'var(--radius-pill)', background: 'var(--ink-100)', color: 'var(--ink-500)', fontFamily: 'var(--font-semicond)', fontWeight: 700, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '.04em' }}>
                        Full
                      </span>
                    )}
                    {!g.onBreak && !g.full && (
                      <span style={{
                        fontSize: '12px',
                        color: 'var(--gold-700)',
                        fontFamily: 'var(--font-semicond)',
                        fontWeight: 700,
                        letterSpacing: '.03em',
                      }}>Join Group →</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modal ─────────────────────────────────────────────────────────── */}
      {modalGroup && (
        <div
          onClick={e => { if (e.target === e.currentTarget) closeModal(); }}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,.6)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div style={{
            background: 'var(--white)',
            borderRadius: 'var(--radius-xl)',
            width: '100%',
            maxWidth: '480px',
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(0,0,0,.35)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}>
            {/* Header */}
            <div style={{ background: 'var(--ink-900)', padding: '20px 24px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <Avatar src={modalGroup.image} name={modalGroup.name} size={52} style={{ border: '2px solid var(--gold-400)' }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '20px', color: 'var(--white)', lineHeight: 1.1 }}>{modalGroup.name}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,.6)', marginTop: '3px' }}>{modalGroup.day}s at {modalGroup.time} · {modalGroup.location}</div>
              </div>
              <button
                onClick={closeModal}
                aria-label="Close"
                style={{ background: 'none', border: 'none', color: 'rgba(255,255,255,.6)', fontSize: '24px', cursor: 'pointer', padding: '4px 6px', lineHeight: 1, flexShrink: 0 }}
              >×</button>
            </div>

            {/* Body */}
            <div style={{ padding: '24px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '16px 0 8px' }}>
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'var(--gold-100)', color: 'var(--gold-700)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 18px', fontSize: '26px', fontWeight: 700,
                  }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '26px', margin: '0 0 8px', color: 'var(--ink-900)' }}>You&apos;re In!</h3>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.5 }}>
                    We&apos;ll connect you with {modalGroup.name} soon.
                  </p>
                  <button
                    onClick={closeModal}
                    style={{ padding: '12px 32px', background: 'var(--gold-400)', color: 'var(--ink-900)', border: 'none', borderRadius: 'var(--radius-sm)', fontFamily: 'var(--font-semicond)', fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '.05em', cursor: 'pointer' }}
                  >Done</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="group" value={`${modalGroup.name} (${modalGroup.day} ${modalGroup.time}, ${modalGroup.location})`} />

                  {[
                    { id: 'name',  label: 'Your Name',         type: 'text',  required: true,  placeholder: 'First and Last Name' },
                    { id: 'email', label: 'Email',             type: 'email', required: true,  placeholder: 'you@example.com' },
                    { id: 'phone', label: 'Phone (optional)',  type: 'tel',   required: false, placeholder: '(619) 555-1234' },
                  ].map(f => (
                    <div key={f.id} style={{ marginBottom: '16px' }}>
                      <label htmlFor={f.id} style={{
                        display: 'block',
                        fontFamily: 'var(--font-semicond)',
                        fontWeight: 600,
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '.06em',
                        color: 'var(--ink-500)',
                        marginBottom: '6px',
                      }}>{f.label}</label>
                      <input
                        id={f.id}
                        name={f.id}
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          border: '1.5px solid var(--border-default)',
                          borderRadius: 'var(--radius-md)',
                          fontFamily: 'var(--font-sans)',
                          fontSize: '15px',
                          color: 'var(--ink-900)',
                          outline: 'none',
                          boxSizing: 'border-box',
                          background: 'var(--white)',
                        }}
                      />
                    </div>
                  ))}

                  {[
                    { name: 'talkToPastor', label: 'I would like to talk to a Pastor' },
                    { name: 'baptism',      label: "I'm interested in baptism" },
                  ].map(c => (
                    <label key={c.name} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', cursor: 'pointer', fontSize: '15px', color: 'var(--text-body)' }}>
                      <input type="checkbox" name={c.name} value="Yes" style={{ width: '18px', height: '18px', flexShrink: 0, accentColor: 'var(--gold-500)' }} />
                      {c.label}
                    </label>
                  ))}

                  <button
                    type="submit"
                    disabled={submitting}
                    style={{
                      width: '100%',
                      marginTop: '10px',
                      padding: '14px',
                      background: 'var(--gold-400)',
                      color: 'var(--ink-900)',
                      border: 'none',
                      borderRadius: 'var(--radius-sm)',
                      fontFamily: 'var(--font-semicond)',
                      fontWeight: 700,
                      fontSize: '16px',
                      textTransform: 'uppercase',
                      letterSpacing: '.06em',
                      cursor: submitting ? 'wait' : 'pointer',
                      opacity: submitting ? 0.7 : 1,
                      transition: 'opacity .15s',
                    }}
                  >
                    {submitting ? 'Sending…' : 'Join This Group'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
