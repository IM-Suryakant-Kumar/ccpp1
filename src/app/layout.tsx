import "~/styles/globals.css";

import { type Metadata } from "next";
import { Josefin_Sans, Cinzel } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "CCPP1",
  description:
    "CCPP1 is a social media app where you can explore great people and share your thoughts.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
    <ClerkProvider>
      <html lang="en" className={`${josefin.variable} ${cinzel.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
