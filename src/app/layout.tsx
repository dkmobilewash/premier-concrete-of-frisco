import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://premierconcreteofrisco.com"),
  title: {
    default: "Premier Concrete Of Frisco | Driveways, Patios & More",
    template: "%s | Premier Concrete Of Frisco",
  },
  description:
    "Frisco's trusted concrete contractors. We pour driveways, patios, pool decks, and more across Frisco and surrounding communities. Get a free estimate today.",
  openGraph: {
    siteName: "Premier Concrete Of Frisco",
    locale: "en_US",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
