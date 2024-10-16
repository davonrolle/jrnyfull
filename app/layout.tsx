import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JRNY Auto",
  description: "An all-in-one car rental and services platform in the Bahamas, offering vehicle rentals, car washes, mechanic services, and ride-share options.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
