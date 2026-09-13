'use client';

interface BlogCardProps {
  href: string;
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  excerpt: string;
}

export function BlogCard({ href, image, imageAlt, date, title, excerpt }: BlogCardProps) {
  return (
    <a
      href={href}
      style={{
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border-subtle)',
        boxShadow: 'var(--shadow-sm)',
        transition: 'box-shadow .15s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = 'var(--shadow-md)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = 'var(--shadow-sm)')}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={imageAlt}
        style={{ width: '100%', height: '200px', objectFit: 'cover', display: 'block' }}
      />
      <div style={{ padding: '22px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'var(--font-semicond)',
          fontWeight: 700,
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          color: 'var(--gold-700)',
          marginBottom: '8px',
          display: 'block',
        }}>{date}</span>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800,
          fontSize: '1.35rem',
          color: 'var(--ink-900)',
          margin: '0 0 10px',
          lineHeight: 1.1,
        }}>{title}</h3>
        <p style={{
          fontSize: '15px',
          color: 'var(--text-muted)',
          lineHeight: 1.65,
          margin: '0 0 18px',
          flex: 1,
        }}>{excerpt}</p>
        <span style={{
          fontFamily: 'var(--font-semicond)',
          fontWeight: 700,
          fontSize: '13px',
          textTransform: 'uppercase',
          letterSpacing: '.05em',
          color: 'var(--gold-700)',
        }}>Read Article →</span>
      </div>
    </a>
  );
}
