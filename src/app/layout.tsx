import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SFX Studio — AI Sound Effects for Video Editors",
  description:
    "Upload your footage. Our AI detects scenes, actions, and mood — then places perfectly timed sound effects on your timeline.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
