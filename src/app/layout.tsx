import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bloom Care Foundation Kenya",
    template: "%s | Bloom Care Foundation Kenya",
  },
  description:
    "Therapeutic and sensory support for children with autism, sensory processing disorder, developmental delays, and intellectual disabilities across Kenya.",
  openGraph: {
    title: "Bloom Care Foundation Kenya",
    description:
      "Therapeutic and sensory support for children with developmental conditions and their families.",
    url: "https://bloomcarefoundation.org",
    siteName: "Bloom Care Foundation Kenya",
    locale: "en_KE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
