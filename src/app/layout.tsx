import "~/styles/globals.css";

import { type Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";

export const metadata: Metadata = {
  title: "CCPP1",
  description: "A full stack social media app",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${josefin.variable} ${cinzel.variable} font-josefin`}
    >
      <body>{children}</body>
    </html>
  );
}
