import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ateliê Cunha | Itens Personalizados",
  description:
    "Transformamos suas ideias em produtos únicos. Chaveiros, bonés, garrafas, agendas e muito mais com personalização exclusiva.",
  keywords: [
    "personalização",
    "brindes",
    "chaveiros",
    "bonés",
    "garrafas personalizadas",
    "agendas",
    "presentes",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
