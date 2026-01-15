import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import GlowBackground from "@/components/ui/GlowBackground";

export const metadata: Metadata = {
  title: "satonodoka portfolio",
  description: "ポートフォリオサイト",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <GlowBackground />
        <Header />
        {children}
      </body>
    </html>
  );
}
