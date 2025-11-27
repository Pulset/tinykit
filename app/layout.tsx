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
    default: 'TinyKit - Productivity Apps for Mac',
    template: '%s | TinyKit',
  },
  description:
    'Discover TinyKit, your comprehensive toolkit for Mac productivity. Powerful file organization, minimal tools, and smart utilities designed to streamline your daily workflow.',
  keywords: [
    'mac productivity apps',
    'mac utilities',
    'productivity tools mac',
    'mac apps',
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
    title: 'TinyKit - Productivity Apps for Mac',
    description:
      'Discover our collection of powerful, beautiful, and easy-to-use Mac applications designed to boost your productivity.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/tinykit-og-image.png',
        width: 1200,
        height: 630,
        alt: 'TinyKit - Productivity Apps for Mac',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TinyKit - Productivity Apps for Mac',
    description:
      'Discover our collection of powerful Mac applications designed to boost your productivity.',
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
  icons: {
    icon: [
      {
        url: '/tinykit-logo.png',
        sizes: 'any',
      },
      {
        url: '/tinykit-logo.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/tinykit-logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
    ],
    apple: {
      url: '/tinykit-logo.png',
      sizes: '180x180',
      type: 'image/png',
    },
    shortcut: '/tinykit-logo.png',
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
      'TinyKit provides powerful, beautiful, and easy-to-use Mac applications designed to boost productivity.',
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
