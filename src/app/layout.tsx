import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Footer from "./components/Footer";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMART CLIMA",
  description: "Smart Clima - Clima em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
      </head>
      <body className={`${redHatDisplay.className} antialiased px-4 md:px-0`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
