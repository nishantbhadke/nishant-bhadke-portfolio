import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Nishant Bhadke | .NET Backend Engineer",
  description:
    "Minimal portfolio for Nishant Bhadke, a .NET backend engineer building secure banking APIs, compliance workflows, and high-performance BFSI platforms.",
  openGraph: {
    title: "Nishant Bhadke | .NET Backend Engineer",
    description:
      "Secure APIs, banking workflows, SQL performance, Redis caching, AWS, and Docker delivery.",
    url: siteUrl,
    siteName: "Nishant Bhadke Portfolio",
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
