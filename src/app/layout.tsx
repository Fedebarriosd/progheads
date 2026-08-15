import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dunbarLow = localFont({
  src: [
    { path: "../fonts/DunbarLow-Regular.otf", weight: "400", style: "normal" },
    { path: "../fonts/DunbarLow-Medium.otf", weight: "500", style: "normal" },
    { path: "../fonts/DunbarLow-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-dunbar",
  display: "swap",
});

const siteUrl = "https://progheads.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Progheads Paraguay",
    template: "%s | Progheads Paraguay",
  },
  description:
    "Comunidad paraguaya de rock y metal progresivo: reseñas, notas y análisis sobre la escena prog.",
  keywords: [
    "progheads",
    "rock progresivo",
    "metal progresivo",
    "prog rock",
    "prog metal",
    "Paraguay",
  ],
  authors: [{ name: "Progheads Paraguay" }],
  alternates: { canonical: siteUrl },
  openGraph: {
    type: "website",
    locale: "es_PY",
    url: siteUrl,
    siteName: "Progheads Paraguay",
    title: "Progheads Paraguay",
    description:
      "Comunidad paraguaya de rock y metal progresivo: reseñas, notas y análisis sobre la escena prog.",
    images: [{ url: "/brand/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Progheads Paraguay",
    description:
      "Comunidad paraguaya de rock y metal progresivo: reseñas, notas y análisis sobre la escena prog.",
    images: ["/brand/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`h-full antialiased ${dunbarLow.variable}`}>
      <body className="min-h-full flex flex-col bg-navy text-yellow">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
