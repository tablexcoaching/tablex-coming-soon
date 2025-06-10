import type { Metadata } from "next";
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
  title: "TableX – AI Table Tennis Coach",
  description:
    "AI-powered coaching built for serious table tennis players. Train smarter with advanced tactics, elite preparation, and intelligent feedback.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "TableX – AI Table Tennis Coach",
    description:
      "Next-gen training platform for table tennis athletes. Built by players, powered by AI.",
    url: "https://tablexcoaching.com",
    siteName: "TableX",
    images: [
      {
        url: "/og-image.png", // Add this to /public
        width: 1200,
        height: 630,
        alt: "TableX Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TableX – AI Table Tennis Coach",
    description:
      "Serious players train with TableX. Next-level coaching meets smart AI.",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://tablexcoaching.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
