import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProviderLayout from "./SessionProviderLayout";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BRACE Development",
  description: `
  It is a software specializing in creating Applications and Systems related to the tourism sector, as a result of accumulated experience for more than 15 years. We work on providing technological solutions for all tourism specialties ( Flight reservations, Visa issuance, Hotels management, Transfer, Car Rentals, General and Private Tourist Groups), and other services according to the needs of the Target Audience.`,
  keywords: `
    get a technical team with extensive experience in product design and development
    We create beautiful, fast, and secure web applications tailored exclusively for your business goals.

    UI/UX DESIGN
    We design beautiful, easy-to-use mobile and web products that meet your business and users needs.

    Mobile Applications
    We Develop Amazing iOS, Android, and Cross-platform apps.

    Content and Wed Migration.
    We build digital solutions to help you scale.

    Software development
    We build digital solutions to help you scale.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderLayout>
      <html lang="en" className="dark scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-[#34231E] via-[#1C1A1A] to-[#1C1A1A] text-white`}
        >
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <NextTopLoader color="#F16722" />
          {children}
        </body>
      </html>
    </SessionProviderLayout>
  );
}
