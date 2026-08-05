import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import LoaderProvider from "@/components/LoaderProvider";
import StructuredData from "@/components/StructuredData";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.adarshinfo.in"),

  title: {
    default: "Adarsh Kumar Singh | IT Team Leader | System Administrator",
    template: "%s | Adarsh Kumar Singh",
  },

  description:
    "Official portfolio of Adarsh Kumar Singh - IT Team Leader, System Administrator, Infrastructure Engineer and Full Stack Developer specializing in Windows Server, Active Directory, Networking, Virtualization, Automation and Enterprise IT Solutions.",

  keywords: [
    "Adarsh Kumar Singh",
    "IT Team Leader",
    "System Administrator",
    "Infrastructure Engineer",
    "Desktop Support",
    "Windows Server",
    "Active Directory",
    "Networking",
    "VMware",
    "Virtualization",
    "Docker",
    "Linux",
    "Ubuntu",
    "Next.js",
    "React",
    "Portfolio",
  ],

  authors: [
    {
      name: "Adarsh Kumar Singh",
      url: "https://www.adarshinfo.in",
    },
  ],

  creator: "Adarsh Kumar Singh",

  publisher: "Adarsh Kumar Singh",

  applicationName: "Adarsh Portfolio",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://www.adarshinfo.in",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.adarshinfo.in",
    siteName: "Adarsh Kumar Singh Portfolio",

    title: "Adarsh Kumar Singh | IT Team Leader | System Administrator",

    description:
      "Explore the professional portfolio of Adarsh Kumar Singh featuring Enterprise Infrastructure, Windows Server, Active Directory, Networking, Automation and Full Stack Development.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adarsh Kumar Singh Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Adarsh Kumar Singh Portfolio",

    description:
      "IT Team Leader | Infrastructure Engineer | System Administrator | Full Stack Developer",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <StructuredData />

        <SmoothScroll />

        <LoaderProvider>
          {children}
        </LoaderProvider>
      </body>
    </html>
  );
}