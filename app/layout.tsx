import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AIProvider } from "@/components/ai/AIProvider";
import DanBot from "@/components/ai/DanBot";
import ScrollProgress from "@/components/ScrollProgress";

const sans = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "vietnamese"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tư tưởng Hồ Chí Minh — Nhà nước của dân, do dân, vì dân",
  description:
    "Một hành trình tương tác để hiểu tư tưởng Hồ Chí Minh về Nhà nước của dân, do dân, vì dân. Don't read the theory. Experience it.",
  keywords: [
    "Tư tưởng Hồ Chí Minh",
    "Nhà nước của dân do dân vì dân",
    "Nhà nước pháp quyền",
    "HCM202",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${sans.variable} ${serif.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-paper font-sans text-ink antialiased">
        <AIProvider>
          <ScrollProgress />
          <Navbar />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
          <DanBot />
        </AIProvider>
      </body>
    </html>
  );
}
