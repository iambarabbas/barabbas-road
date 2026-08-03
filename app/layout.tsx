import type { Metadata } from "next";
import "./globals.css";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

const SITE_URL = "https://barabbas.com";
const CHURCH_NAME = "Barabbas Road Church";

const churchSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Church", "LocalBusiness"],
      "@id": `${SITE_URL}/#church`,
      "name": CHURCH_NAME,
      "alternateName": "BRC",
      "description":
        "Barabbas Road Church is a Bible-teaching church in Miramar, San Diego committed to the supremacy and sufficiency of Scripture. We preach verse-by-verse through the Bible every Sunday at 10am at 7340 Miramar Rd, San Diego, CA 92126.",
      "url": `${SITE_URL}/`,
      "telephone": "+16192898987",
      "email": "info@barabbas.com",
      "foundingDate": "2006",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7340 Miramar Rd",
        "addressLocality": "San Diego",
        "addressRegion": "CA",
        "postalCode": "92126",
        "addressCountry": "US",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 32.8836,
        "longitude": -117.1591,
      },
      "hasMap": "https://maps.google.com/maps?q=7340+Miramar+Rd,+San+Diego,+CA+92126",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "10:00",
          "closes": "11:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Tuesday",
          "opens": "18:30",
          "closes": "19:30",
        },
      ],
      "sameAs": [
        "https://www.facebook.com/barabbasroadchurch",
        "https://www.instagram.com/barabbasroadchurch/",
        "https://www.youtube.com/user/BarabbasRoadChurch",
        "https://www.barabbas.com",
      ],
      "image": `${SITE_URL}/assets/logolock-black.png`,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/assets/logolock-black.png`,
      },
      "areaServed": [
        { "@type": "City", "name": "San Diego", "sameAs": "https://en.wikipedia.org/wiki/San_Diego" },
        { "@type": "Neighborhood", "name": "Miramar" },
        { "@type": "Neighborhood", "name": "Kearny Mesa" },
        { "@type": "Neighborhood", "name": "Scripps Ranch" },
        { "@type": "Neighborhood", "name": "Clairemont" },
      ],
      "priceRange": "Free",
      "parentOrganization": {
        "@type": "Organization",
        "name": "Southern Baptist Convention",
        "sameAs": "https://www.sbc.net",
      },
      "keywords": "churches in San Diego, church San Diego, Bible church San Diego, expository preaching San Diego, church Miramar San Diego, Sunday service San Diego",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "name": CHURCH_NAME,
      "url": `${SITE_URL}/`,
      "description": "Official website of Barabbas Road Church — a Bible-teaching church in Miramar, San Diego.",
      "publisher": { "@id": `${SITE_URL}/#church` },
      "inLanguage": "en-US",
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": CHURCH_NAME,
      "url": `${SITE_URL}/`,
      "logo": `${SITE_URL}/assets/logolock-black.png`,
      "sameAs": [
        "https://www.facebook.com/barabbasroadchurch",
        "https://www.instagram.com/barabbasroadchurch/",
        "https://www.youtube.com/user/BarabbasRoadChurch",
        "https://www.barabbas.com",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://barabbas.com"),
  title: {
    template: `%s | ${CHURCH_NAME} — San Diego`,
    default: `${CHURCH_NAME} — Bible-Teaching Church in Miramar, San Diego`,
  },
  description:
    "Barabbas Road Church is a Bible-teaching church in Miramar, San Diego. Join us Sundays at 10am at 7340 Miramar Rd for verse-by-verse expository preaching, Life Groups, and gospel community. One of San Diego's top churches for Biblical teaching.",
  keywords: [
    "churches in San Diego",
    "church San Diego",
    "Bible church San Diego",
    "church Miramar San Diego",
    "expository preaching San Diego",
    "church near me San Diego",
    "Christian church San Diego",
    "evangelical church San Diego",
    "Sunday service San Diego",
    "Bible teaching church San Diego",
    "Southern Baptist church San Diego",
    "Barabbas Road Church",
    "Barabbas Road",
    "San Diego church 10am",
    "Kearny Mesa church",
    "life groups San Diego",
    "small groups San Diego church",
  ],
  authors: [{ name: CHURCH_NAME, url: SITE_URL }],
  creator: CHURCH_NAME,
  publisher: CHURCH_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
    siteName: CHURCH_NAME,
    title: `${CHURCH_NAME} — Bible-Teaching Church in San Diego`,
    description:
      "A Bible-teaching church in Miramar, San Diego. Verse-by-verse preaching every Sunday at 10am. 7340 Miramar Rd, San Diego, CA 92126.",
    images: [
      {
        url: "/barabbas-road/assets/logolock-black.png",
        width: 1200,
        height: 630,
        alt: "Barabbas Road Church — San Diego",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${CHURCH_NAME} — San Diego`,
    description: "Bible-teaching church in Miramar, San Diego. Sundays at 10am. 7340 Miramar Rd.",
    images: ["/barabbas-road/assets/logolock-black.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "religion",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD — Church + LocalBusiness + WebSite schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
        />
        {/* Geo meta tags */}
        <meta name="geo.region" content="US-CA" />
        <meta name="geo.placename" content="San Diego" />
        <meta name="geo.position" content="32.8836;-117.1591" />
        <meta name="ICBM" content="32.8836, -117.1591" />
      </head>
      <body>
        <AnnouncementBar />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
