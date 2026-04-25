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
  metadataBase: new URL("https://hokagechess.com"),
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
  authors: [{ name: "Rob Bonavoglia", url: "https://www.youtube.com/@HokageChess" }],
  creator: "Rob Bonavoglia",
  openGraph: {
    title: "Hokage Chess — The Climb Starts Here",
    description:
      "The road from low-advanced to grandmaster, told from inside the climb.",
    url: "https://hokagechess.com",
    siteName: "Hokage Chess",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Hokage Chess — The Climb Starts Here",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hokage Chess — The Climb Starts Here",
    description:
      "The road from low-advanced to grandmaster, told from inside the climb.",
    images: ["/og.png"],
    creator: "@HokageChess",
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
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
