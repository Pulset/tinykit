import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";
import StructuredData from "@/app/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "File Sortify - Smart File Organization for Mac | TinyKit",
    template: "%s | TinyKit"
  },
  description: "Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring. Perfect for keeping your Downloads folder tidy.",
  keywords: [
    // Product specific keywords
    "file organizer mac",
    "mac file management",
    "auto file sorter",
    "download folder organizer",
    "file automation mac",
    "file organization app",
    "mac productivity tools",
    // Brand keywords
    "tinykit",
    "file sortify",
    "mac utilities",
    // Feature keywords
    "automatic file sorting",
    "custom file rules",
    "real-time file monitoring",
  ],
  authors: [{ name: "TinyKit Team", url: "https://tinykit.app" }],
  creator: "TinyKit",
  publisher: "TinyKit",
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
    title: 'File Sortify - Smart File Organization for Mac | TinyKit',
    description: 'Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://oss.picasso-designs.com/static/logo.png',
        width: 1200,
        height: 630,
        alt: 'File Sortify - Smart File Organization for Mac',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'File Sortify - Smart File Organization for Mac | TinyKit',
    description: 'Automatically organize your files with File Sortify. The intelligent file management tool.',
    images: ['https://oss.picasso-designs.com/static/logo.png'],
    creator: '@tinykit', // 未来可以更新为真实的 Twitter 账号
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
    // 替换为真实的验证码
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
  classification: 'Mac Utilities',
  appleWebApp: {
    capable: true,
    title: 'File Sortify',
    statusBarStyle: 'default',
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
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
