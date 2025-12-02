import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'TinyKit: Crafting Minimalist & Practical Apps',
    template: '%s | TinyKit',
  },
  description:
    'Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.',
  keywords: [
    'productivity apps',
    'mac utilities',
    'productivity tools',
    'minimalist apps',
    'practical apps',
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
    title: 'TinyKit: Crafting Minimalist & Practical Apps',
    description:
      'Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/tinykit-og-image.png',
        width: 1200,
        height: 630,
        alt: 'TinyKit: Crafting Minimalist & Practical Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TinyKit: Crafting Minimalist & Practical Apps',
    description:
      'Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.',
    images: ['https://cdn.tinykit.app/tinykit-og-image.png'],
    creator: '@GeekfanBo',
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
  appleWebApp: {
    capable: true,
    title: 'TinyKit',
    statusBarStyle: 'default',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TinyKit',
    url: 'https://www.tinykit.app',
    logo: 'https://www.tinykit.app/tinykit-logo.png',
    description:
      'Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.',
    sameAs: ['https://twitter.com/tinykit_app'],
  };

  return (
    <html lang='en'>
      <head>
        <meta name='apple-mobile-web-app-title' content='TinyKit' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          src='https://cloud.umami.is/script.js'
          data-website-id='ab9992f4-ff7b-43d3-839c-08d5fdba599e'
        ></script>
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
