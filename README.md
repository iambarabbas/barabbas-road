# Barabbas Road Church — Website

2026 redesign of barabbasroad.com. Built with Next.js (App Router) + vanilla CSS design tokens.

## Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Vanilla CSS custom properties (design tokens) — no Tailwind
- **Fonts:** Barlow superfamily via Google Fonts
- **Icons:** Lucide (inline SVG)
- **Deploy:** Cloudflare Pages (→ `barabbas-road.pages.dev`)

## Dev

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Structure

```
app/
  layout.tsx        # Announcement bar + header + footer
  page.tsx          # Homepage (Bold hero)
  sermons/          # Sermons + featured player
  new-here/         # First-time visitor page
  kids/             # Kids Church
  classes/          # Equipping classes
components/
  core/             # Button, Badge, Card, Eyebrow
  brand/            # Logo
  site/             # AnnouncementBar, SiteHeader, SiteFooter
  home/             # HeroBold, Pillars, WelcomeSection, EventsSection, BlogSection, VisitBand, TimesLocation
  Icon.tsx          # Lucide icon set (inline SVG)
public/
  assets/           # Logo + mark PNGs (black/white/gold)
```

## Design System

Brand tokens live in `app/globals.css`:
- Gold: `#d3ab64` (primary accent)
- Ink: `#1e1d1b` (near-black)
- Paper: `#faf8f2` (warm off-white)
- Fonts: Barlow Condensed (display), Barlow (body), Barlow Semi Condensed (labels/nav)

## Pages Still Needed

- `/about`
- `/life-groups`
- `/youth`
- `/give`
- `/contact`
- `/blog`

## Notes

- Live site is at barabbas.com — DNS untouched until Brett approves staging
- Staging deploys to Cloudflare Pages
- Photography is Unsplash placeholders — replace with real church photos before launch
- Font is a Google Fonts match for the condensed display style — confirm with client
