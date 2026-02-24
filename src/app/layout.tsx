import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import NavigationLoader from "@/components/NavigationLoader";
import PageTransition from "@/components/PageTransition";
import ScrollAnimations from "@/components/ScrollAnimations";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nihal Pardeshi – Product-Oriented AI Builder",
  description:
    "Product-oriented AI builder focused on decision-making under constraints. Designing and shipping AI-driven products with clear problem definition and deliberate tradeoffs.",
  openGraph: {
    title: "Nihal Pardeshi – Product-Oriented AI Builder",
    description:
      "Product-oriented AI builder focused on decision-making under constraints.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Nihal Pardeshi – Product-Oriented AI Builder",
    description:
      "Product-oriented AI builder focused on decision-making under constraints.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <PageLoader />
        <NavigationLoader />
        <PageTransition />
        {children}
        <ScrollAnimations />
      </body>
    </html>
  );
}
