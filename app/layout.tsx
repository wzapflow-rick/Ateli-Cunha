import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ateliê Cunha | Presentes Personalizados Exclusivos",
  description:
    "Transformamos fotos e ideias em presentes inesquecíveis. Canecas, kits, chaveiros, garrafas e lembranças personalizadas. Faça seu pedido pelo WhatsApp.",
  keywords: [
    "presentes personalizados",
    "canecas personalizadas",
    "kits presenteáveis",
    "chaveiros personalizados",
    "garrafas personalizadas",
    "lembranças personalizadas",
    "Ateliê Cunha",
    "Aracaju",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#c2188f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased bg-background`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
