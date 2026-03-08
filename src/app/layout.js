import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sleep Travel App | Wake Up Before Your Stop",
  description: "Smart travel alarm that wakes you before your destination. Relax, sleep, and travel stress-free during bus, train, or taxi rides.",
  keywords: [
    "travel alarm app",
    "wake before destination",
    "bus travel sleep app",
    "smart travel alarm",
    "commuter travel app",
    "sleep during travel",
    "smart travel alert"
  ],
  openGraph: {
    title: "Sleep Travel App | Wake Up Before Your Stop",
    description: "Smart travel alarm that wakes you before your destination. Relax, sleep, and travel stress-free during bus, train, or taxi rides.",
    type: "website",
    url: "https://nearwake.com",
    siteName: "NearWake",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Travel App | Wake Up Before Your Stop",
    description: "Smart travel alarm that wakes you before your destination. Relax, sleep, and travel stress-free during bus, train, or taxi rides.",
  },
  alternates: {
    canonical: "https://nearwake.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "NearWake",
  "operatingSystem": "ANDROID, IOS",
  "applicationCategory": "TravelApplication",
  "description": "Smart travel alarm that wakes you before your destination. Relax, sleep, and travel stress-free during bus, train, or taxi rides.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
