import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";
import Footer from "../components/Footer";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  // themeColor: "#e141c0",
  themeColor: "#FF5733",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "IBaoHiem | %s",
    default: "IBaoHiem | NextJS SaaS Landing",
  },
  description:
    "Landing page.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "IBaoHiem",
    siteName: "IBaoHiem",
    description:
      "Landing page.",
    url: "http://localhost:3000/",
    type: "website",
    locale: "hu_HU",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "IBaoHiem",
      },
    ],
  },
  twitter: {
    title: "IBaoHiem",
    creator: "@KienTran",
    site: "@KienTran",
    description:
      "Landing page",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Landing page",
      },
    ],
  },
  alternates: {
    canonical: "http://localhost:3000/",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
