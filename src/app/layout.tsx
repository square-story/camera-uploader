import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingModeSwitch from "@/components/floating-comp";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Media Uploader",
  description: "Upload your photos and videos with drag,drop and direct camera support.",
  keywords: ["camera", "uploader", "photos", "videos", "shadcn", "ui", "next.js", "lucid icons", "drop", "drag", "support", "open-source", "dark/light", "media", "component", "tailwindcss"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Analytics />
            <FloatingModeSwitch />
          </ThemeProvider>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
