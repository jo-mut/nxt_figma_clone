import type { Metadata } from "next";
import localFont from "next/font/local";
import {Work_Sans} from "next/font/google"
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const workSans = Work_Sans({
  subsets:  ["latin"],
  variable: '--font-work-sans',
  weight:   ['400', '600', '700']
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Figma Clone",
  description: "Figma clone built with Next.js, Live blocks for collaboration and ClojureScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`&{workSans.className} bg-primary-grey-200`}>
        {children}
      </body>
    </html>
  );
}
