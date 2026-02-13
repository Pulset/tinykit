import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../globals.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { PerformanceTracker } from '../components/PerformanceTracker';
import { notFound } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  // ... (keeping metadata the same for now, though it should ideally be translated later)
  title: {
    default: 'TinyKit - Crafting Minimalist & Practical Apps',
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
    languages: {
      'en': '/',
      'zh': '/zh',
      'ja': '/ja',
      'es': '/es',
      'pt': '/pt',
      'de': '/de',
      'ru': '/ru',
      'ko': '/ko',
      'fr': '/fr',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tinykit.app',
    title: 'TinyKit - Crafting Minimalist & Practical Apps',
    description:
      'Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TinyKit - Crafting Minimalist & Practical Apps',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TinyKit - Crafting Minimalist & Practical Apps',
    description:
      'Find your next favorite productivity tool. TinyKit crafts minimalist & practical apps for you. Simple, lightweight software with no ads and no clutter.',
    images: ['https://cdn.tinykit.app/images/og-image.png'],
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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

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
    <html lang={locale}>
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
        <NextIntlClientProvider messages={messages}>
          <PerformanceTracker />
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
