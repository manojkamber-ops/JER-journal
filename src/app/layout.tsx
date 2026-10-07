import type { Metadata } from "next";
import { Source_Sans_3, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Demo deployment: keep search engines away from the sample content
  robots: { index: false, follow: false },
  title: "Journal of Economic Research | Hanyang University, Seoul",
  description:
    "The Journal of Economic Research is a peer-reviewed, open-access economics journal published by the Department of Economics at Hanyang University, Seoul. ISSN 1226-4261, eISSN 2713-6418. ABDC rating B (Applied Economics); KCI-listed.",
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
    "eISSN 2713-6418",
    "KCI",
  ],
  authors: [{ name: "Hanyang University, Department of Economics" }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
    apple: "/jer-logo.svg",
  },
  openGraph: {
    title: "Journal of Economic Research — Hanyang University, Seoul",
    description:
      "Peer-reviewed, open-access economics journal. ISSN 1226-4261 · eISSN 2713-6418. ABDC rating B (Applied Economics); KCI-listed. Published by Hanyang University, Seoul.",
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
        className={`${sourceSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div role="note" className="bg-amber-100 text-amber-950 text-center text-[12.5px] sm:text-[13px] font-sans font-semibold px-3 py-1.5 border-b border-amber-300">
          Demo website with sample content — not an official journal site. Please do not submit manuscripts or payments.
        </div>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
