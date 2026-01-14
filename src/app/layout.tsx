import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-open-sans",
});

const playfairDisplay = Playfair_Display({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair-display",
});

export const metadata: Metadata = {
  title: "IWD Ayacucho 2026",
  description: "© WTM Ayacucho",
  icons: {
    icon: "/logo.ico", // Agrega el favicon desde la carpeta public/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body
        className={`${openSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
