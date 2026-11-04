import type { Metadata } from "next";
import { Anton, Inter, Caveat_Brush } from "next/font/google";
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

export const metadata: Metadata = {
  title: "The Kickback · Gaming · Music · Creator Culture",
  description:
    "A multi-city tour mashing the culture of gaming, music, and creator culture. For the ones who can't be put in a box. Next stop: Atlanta, Dec 12–13.",
  metadataBase: new URL("https://thekickback.gg"),
  openGraph: {
    title: "The Kickback · Gaming · Music · Creator Culture",
    description:
      "A multi-city tour mashing the culture of gaming, music, and creator culture. Next stop: Atlanta, Dec 12–13.",
    type: "website",
    siteName: "The Kickback",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Kickback",
    description:
      "Gaming · Music · Creator Culture. Next stop: Atlanta, Dec 12–13.",
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
      className={`${anton.variable} ${inter.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ink text-frost font-body">{children}</body>
    </html>
  );
}
