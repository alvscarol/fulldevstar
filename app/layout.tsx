import type { Metadata } from "next";
import "./globals.css";
//import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "FullDevStar",
  description: "The most be great dev!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
