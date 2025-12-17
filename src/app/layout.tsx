import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rhyan Lovell | Session Drummer",
  description: "Remote session drummer, recording artist, and music transcriptions. Based in Cheshire, UK. Professional drum tracks for your projects.",
  keywords: ["session drummer", "remote recording", "drum tracks", "music transcriptions", "UK drummer", "Rhyan Lovell"],
  authors: [{ name: "Rhyan Lovell" }],
  openGraph: {
    title: "Rhyan Lovell | Session Drummer",
    description: "Remote session drummer, recording artist, and music transcriptions. Based in Cheshire, UK.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/Favicon_Tiles/favicon.ico" sizes="any" />
        <link rel="icon" href="/Favicon_Tiles/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/Favicon_Tiles/apple-touch-icon.png" />
      </head>
      <body className="font-body">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
