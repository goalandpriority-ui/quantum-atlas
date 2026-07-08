import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "QuantumAtlas — The Encyclopedia of Quantum Computing",
    template: "%s | QuantumAtlas",
  },
  description:
    "The open encyclopedia of quantum computing — 300+ pages covering algorithms, hardware, companies, cryptography, learning paths, interactive tools, and daily challenges. From beginner to researcher.",
  keywords: [
    "quantum computing",
    "quantum algorithms",
    "qubits",
    "quantum cryptography",
    "Shor's algorithm",
    "Grover's algorithm",
    "quantum hardware",
    "IBM quantum",
    "quantum error correction",
    "post-quantum cryptography",
    "quantum certification",
    "learn quantum computing",
  ],
  authors: [{ name: "QuantumAtlas" }],
  creator: "QuantumAtlas",
  publisher: "QuantumAtlas",
  metadataBase: new URL("https://quantumatlas.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantumatlas.in",
    siteName: "QuantumAtlas",
    title: "QuantumAtlas — The Encyclopedia of Quantum Computing",
    description:
      "The open encyclopedia of quantum computing — algorithms, hardware, companies, interactive learning, and certification. From your first qubit to advanced research.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuantumAtlas — The Encyclopedia of Quantum Computing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantumAtlas — The Encyclopedia of Quantum Computing",
    description:
      "The open encyclopedia of quantum computing — 300+ pages, interactive tools, certification, and daily challenges.",
    images: ["/og-image.png"],
    creator: "@quantumatlas",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-adsense-account": "ca-pub-1202355754527023",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1202355754527023"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LVNT6GWPGK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-LVNT6GWPGK');
          `}
        </Script>
      </body>
    </html>
  );
}
