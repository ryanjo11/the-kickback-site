import type { Metadata } from "next";
import { Anton, Inter, Caveat_Brush, Archivo_Black } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import AnalyticsEvents from "./components/AnalyticsEvents";
import "./globals.css";

const anton = Anton({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const caveat = Caveat_Brush({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
});

const chunk = Archivo_Black({
  weight: "400",
  variable: "--font-chunk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Kickback · Gaming · Music · Creator Culture",
  description:
    "A multi-city tour mashing the culture of gaming, music, and creator culture. For the ones who can't be put in a box. Next stop: Atlanta, Dec 11-13.",
  metadataBase: new URL("https://thekickbackatl.com"),
  openGraph: {
    title: "The Kickback · ATL · Dec 11-13",
    description:
      "Gaming, music, and creator culture across 3 nights in Atlanta. LVRN Studios, SkateATL, and The Tabernacle. Tickets on sale now.",
    type: "website",
    siteName: "The Kickback",
    url: "https://thekickbackatl.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Kickback · Atlanta · Dec 11-13",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kickback · ATL · Dec 11-13",
    description:
      "Gaming, music, and creator culture across 3 nights in Atlanta. Tickets on sale now.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${caveat.variable} ${chunk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-frost font-body">
        {children}
        <AnalyticsEvents />
      </body>
      <GoogleAnalytics gaId="G-K875KZSM0C" />
    </html>
  );
}
