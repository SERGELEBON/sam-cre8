import type { Metadata } from "next";
import { Yantramanav, Roboto, Bungee, Titan_One } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const yantramanav = Yantramanav({
  variable: "--font-yantramanav",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const titanOne = Titan_One({
  variable: "--font-titan",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samcre8.gh"),
  title: "sam cre8 | Large Format Print, CNC Cutting, 3D Signage & Branding in Ghana",
  description:
    "sam cre8 is a print & signage workshop in Ghana. We deliver Large Format Print, Label Print & Cut, CNC Cutting, 3D Signage and Corporate Branding. Call 053 420 0106 or 053 419 6098.",
  keywords: [
    "large format print Ghana",
    "CNC cutting Accra",
    "label print and cut",
    "3D signage Ghana",
    "corporate branding Accra",
    "sam cre8",
    "print shop Ghana",
    "vehicle wraps Accra",
    "channel letters",
    "stickers and labels",
  ],
  authors: [{ name: "sam cre8" }],
  creator: "sam cre8",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "sam cre8 | Print, CNC Cutting, 3D Signage & Branding in Ghana",
    description:
      "Large Format Print, Label Print & Cut, CNC Cutting, 3D Signage and Corporate Branding in Ghana. Call 053 420 0106 / 053 419 6098.",
    url: "https://samcre8.gh",
    siteName: "sam cre8",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/hero-1.jpg",
        width: 1344,
        height: 768,
        alt: "Large format print and 3D signage by sam cre8, Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "sam cre8 | Print, CNC Cutting & 3D Signage in Ghana",
    description:
      "Large Format Print, Label Print & Cut, CNC Cutting, 3D Signage and Corporate Branding in Ghana. Call 053 420 0106.",
    images: ["/images/hero-1.jpg"],
  },
  alternates: { canonical: "https://samcre8.gh" },
  other: {
    "geo.region": "GH",
    "geo.placename": "Accra",
    "geo.position": "5.6037;-0.1870",
    "ICBM": "5.6037, -0.1870",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "sam cre8",
  image: "https://samcre8.gh/images/hero-1.jpg",
  "@id": "https://samcre8.gh",
  url: "https://samcre8.gh",
  telephone: "+233534200106",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 5.6037,
    longitude: -0.187,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "18:00",
  },
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.tiktok.com/",
  ],
  areaServed: "Ghana",
  description:
    "Print & signage workshop in Ghana offering Large Format Print, Label Print & Cut, CNC Cutting, 3D Signage and Corporate Branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${yantramanav.variable} ${roboto.variable} ${bungee.variable} ${titanOne.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
