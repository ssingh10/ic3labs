import type { Metadata, Viewport } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.ogDescription,
    url: SITE.url,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.ogDescription,
  },
  alternates: { canonical: SITE.url },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#F5F2ED",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${newsreader.variable}`}>
      <body style={{ fontFamily: "var(--font-geist), system-ui, sans-serif", minHeight: "100vh", background: "#F5F2ED" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
