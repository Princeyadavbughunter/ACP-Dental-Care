import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ACP Dental Care | Best Dentist in Rajkot, Gujarat | Multi-Specialty Dentistry",
  description: "Dr. Ashish Chhajlani Jain - M.D.S. Endodontist & Microscopic Surgery Specialist with 15+ years experience. Advanced dental care in Rajkot. Book appointment: +91 8866697133",
  keywords: "dentist Rajkot, dental clinic Gujarat, Dr. Ashish Chhajlani Jain, Endodontist, Dental Implants, Root Canal, ACP Dental Care, Rajkot Dentist",
  authors: [{ name: "Dr. Ashish Chhajlani Jain" }],
  creator: "ACP Dental Care",
  publisher: "ACP Dental Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://acpdentalcare.com/'), // Hypothetical URL, better than old one
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "ACP Dental Care | Best Dentist in Rajkot, Gujarat",
    description: "Dr. Ashish Chhajlani Jain - M.D.S. Endodontist with 15+ years experience. Advanced dental care in Rajkot.",
    url: 'https://acpdentalcare.com/',
    siteName: "ACP Dental Care",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Precigem Dental World",
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ACP Dental Care",
    description: "Advanced dental care with 15+ years experience in Rajkot, Gujarat",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
