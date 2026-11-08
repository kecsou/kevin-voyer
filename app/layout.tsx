import type { Metadata, Viewport } from "next";
import { Italiana, Outfit } from "next/font/google";
import "./globals.css";

const display = Italiana({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-display" });
const body = Outfit({ weight: ["200", "300", "400", "500"], subsets: ["latin"], display: "swap", variable: "--font-body" });

const title = "Kevin Voyer, senior software engineer and founder of Passionly";
const description =
  "Senior software engineer in Geneva. Ten years building platforms for banks, travel and telecom. Founder of Passionly, a creator monetization platform focused on anonymization technology.";

export const metadata: Metadata = {
  // Unset on Vercel: Next falls back to the production URL.
  metadataBase: process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined,
  title,
  description,
  openGraph: { type: "website", title, description },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#000000" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
