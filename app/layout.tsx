import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import StructuredData from '@/app/components/StructuredData';
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'File Sortify - Smart File Organization for Mac | TinyKit',
    template: '%s | TinyKit',
  },
  description:
    'Automatically organize your Mac files with File Sortify. Smart file management tool with auto-sorting, custom rules, and real-time monitoring for Downloads folder.',
  // Note: Meta keywords are ignored by Google/Bing since 2009, but kept minimal for potential AI crawlers
  keywords: [
    'file organizer mac',
    'mac file management',
    'auto file sorter',
    'download folder organizer',
    'file automation mac',
    'file sortify',
    'tinykit',
  ],
  authors: [{ name: 'TinyKit Team', url: 'https://www.tinykit.app' }],
  creator: 'TinyKit',
  publisher: 'TinyKit',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.tinykit.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tinykit.app',
    title: 'File Sortify - Smart File Organization for Mac | TinyKit',
    description:
      'Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring.',
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
    description:
      'Automatically organize your files with File Sortify. The intelligent file management tool.',
    images: ['https://oss.picasso-designs.com/static/logo.png'],
    creator: '@tinykit_app', // 未来可以更新为真实的 Twitter 账号
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
  category: 'technology',
  classification: 'Mac Utilities',
  other: {
    // AI-friendly metadata for LLMs
    'application-name': 'File Sortify',
    'product-type': 'Mac Utility Software',
    'target-audience': 'Mac users who need to organize files automatically',
    'key-features':
      'Auto-categorization, Custom rules, Real-time monitoring, Operation history',
    'use-cases':
      'Organize downloads folder, Sort files by type, Automate file management, Clean up desktop files',
  },
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
    <html lang='en'>
      <head>
        <StructuredData />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
        <Analytics />
      </body>
      <script
        defer
        src='https://cloud.umami.is/script.js'
        data-website-id='ab9992f4-ff7b-43d3-839c-08d5fdba599e'
      ></script>
    </html>
  );
}
