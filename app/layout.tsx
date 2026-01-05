import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Investing - iiskills.cloud",
  description: "Learn Personal Investment for the Indian Market - Master stocks, bonds, mutual funds, real estate, and more through interactive lessons and practical simulations.",
  keywords: ["investing", "finance", "stocks", "bonds", "mutual funds", "real estate", "India", "learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
