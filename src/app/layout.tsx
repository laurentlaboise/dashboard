import type { Metadata } from "next";
// FIX: Switched from Geist to the standard Inter font to resolve the build error.
import { Inter } from "next/font/google";
import "./globals.css";

// Configure the Inter font for use in the application.
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the application, which is good for SEO.
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "A modern admin dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* This link is important for the dashboard icons to work. */}
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      {/* Apply the Inter font class to the body tag. */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
