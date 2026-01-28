import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const siteUrl = "https://zeonaqua.no";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zeon Aqua | Servicebåt for havbruk i Nord-Norge",
    template: "%s | Zeon Aqua",
  },
  description:
    "Servicebåtrederi i Nord-Norge. Vi tilbyr fortøyningsarbeid, frakt og notservice til oppdrettsnæringen. Basert i Botnhamn.",
  keywords: [
    "servicebåt havbruk",
    "havbruksservice Nord-Norge",
    "anleggsarbeid oppdrett",
    "innfestninger havbruk",
    "slep servicebåt Troms",
    "notbytte oppdrett",
    "servicearbeid havbruk",
    "fortøyning oppdrett",
    "avlusing hjelpefartøy",
    "avlusingsbistand havbruk",
    "servicefartøy aquakultur",
    "Zeon Aqua",
    "MS Akva Fighter",
  ],
  authors: [{ name: "Zeon Aqua AS" }],
  creator: "Zeon Aqua AS",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: siteUrl,
    siteName: "Zeon Aqua",
    title: "Zeon Aqua | Servicebåt for havbruk i Nord-Norge",
    description:
      "Servicebåtrederi i Nord-Norge. Fortøyningsarbeid, frakt og notservice til oppdrettsnæringen.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "MS Akva Fighter - Servicebåt for havbruk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeon Aqua | Servicebåt for havbruk",
    description:
      "Servicebåtrederi i Nord-Norge. Fortøyning, frakt og notservice til oppdrettsnæringen.",
    images: ["/images/hero.webp"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Zeon Aqua AS",
  description:
    "Servicebåtrederi i Nord-Norge. Vi tilbyr fortøyningsarbeid, frakt og notservice til oppdrettsnæringen.",
  url: siteUrl,
  telephone: "+47 481 28 453",
  email: "post@zeonaqua.no",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Botnhamn",
    postalCode: "9392",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 69.3833,
    longitude: 17.1167,
    },
  areaServed: {
    "@type": "Place",
    name: "Nord-Norge",
  },
  serviceType: [
    "Fortøyningsarbeid",
    "Frakt og logistikk",
    "Notservice",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
