import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const oswald = localFont({
  src: "./fonts/Oswald-Variable.ttf",
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hokage Chess — The Climb Starts Here",
  description:
    "The road from low-advanced to grandmaster, told from inside the climb. No titles. No shortcuts. Just the grind, the breakthroughs, and a community ascending together.",
  keywords: [
    "chess improvement",
    "chess community",
    "road to grandmaster",
    "chess training",
    "hokage chess",
    "chess journey",
  ],
  openGraph: {
    title: "Hokage Chess — The Climb Starts Here",
    description:
      "The road from low-advanced to grandmaster, told from inside the climb.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${jetbrainsMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
