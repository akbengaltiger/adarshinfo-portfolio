import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Adarsh Kumar Singh | IT Team Leader | System Administrator",
  description:
    "Portfolio of Adarsh Kumar Singh showcasing Infrastructure, Active Directory, Windows Server, Networking, Full Stack Development and Enterprise Projects.",
  keywords: [
    "Adarsh Kumar Singh",
    "IT Team Leader",
    "System Administrator",
    "Desktop Support",
    "Full Stack Developer",
    "Next.js",
    "Windows Server",
    "Active Directory",
    "Networking",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}