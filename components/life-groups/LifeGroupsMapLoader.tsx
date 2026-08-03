'use client';

import dynamic from 'next/dynamic';

const LifeGroupsMap = dynamic(() => import('./LifeGroupsMap'), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: '440px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--paper)',
        color: 'var(--ink-400)',
        fontFamily: 'var(--font-sans)',
        fontSize: '15px',
      }}
    >
      Loading group finder…
    </div>
  ),
});

export default function LifeGroupsMapLoader() {
  return <LifeGroupsMap />;
}
