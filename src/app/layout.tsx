import type { Metadata } from "next";
import { Inter, Source_Serif_4, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Journal of Economic Research | Hanyang University, Seoul",
  description:
    "The Journal of Economic Research is a peer-reviewed, open-access economics journal published by the Department of Economics at Hanyang University, Seoul. ISSN 1226-4261. Indexed in Scopus, KCI, EconLit, EBSCO and DOAJ. ABDC rating: B.",
  keywords: [
    "Journal of Economic Research",
    "Hanyang University",
    "economics journal",
    "applied economics",
    "Korean economics",
    "Asia-Pacific economics",
    "open access economics",
    "ABDC B journal",
    "ISSN 1226-4261",
  ],
  authors: [{ name: "Hanyang University, Department of Economics" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Journal of Economic Research — Hanyang University, Seoul",
    description:
      "Peer-reviewed, open-access economics journal. ISSN 1226-4261. ABDC rating: B. Published by Hanyang University, Seoul.",
    url: "https://jer.hanyang.ac.kr",
    siteName: "Journal of Economic Research",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal of Economic Research",
    description: "Peer-reviewed, open-access economics journal — Hanyang University, Seoul.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${sourceSerif.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
