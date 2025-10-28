import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "File Sortify - Smart File Organization for Mac",
    template: "%s | File Sortify"
  },
  description: "Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring. Perfect for keeping your Downloads folder tidy.",
  keywords: "file organizer, mac app, file management, auto file sorter, download folder organizer, file automation",
  authors: [{ name: "File Sortify Team" }],
  creator: "File Sortify",
  publisher: "File Sortify",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tinykit.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tinykit.app',
    title: 'File Sortify - Smart File Organization for Mac',
    description: 'Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring.',
    siteName: 'File Sortify',
    images: [
      {
        url: 'https://oss.picasso-designs.com/static/logo.png',
        width: 1200,
        height: 630,
        alt: 'File Sortify - Smart File Organization',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'File Sortify - Smart File Organization for Mac',
    description: 'Automatically organize your files with File Sortify. The intelligent file management tool.',
    images: ['https://oss.picasso-designs.com/static/logo.png'],
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
