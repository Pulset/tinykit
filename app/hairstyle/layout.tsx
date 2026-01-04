import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "AI Hairstyle Studio - Virtual Hairstyle Try On & Hair Color Changer",
    template: "%s | AI Hairstyle Studio",
  },
  icons: {
    icon: '/hairstyle-icon.ico',
  },
  description:
    'Try on hundreds of hairstyles and hair colors virtually with AI Hairstyle Studio. The #1 AI hair makeover app to transform your look instantly before making the cut.',
  keywords: [
    'AI hairstyle',
    'virtual hairstyle try on',
    'hair color changer',
    'hairstyle simulator',
    'AI hair makeover',
    'virtual hair salon',
    'hairstyle app',
    'AI beauty',
    'women hairstyle app',
    'men hairstyle app',
    'hair dye app',
    'haircut simulator',
    'virtual salon',
  ],
  authors: [{ name: 'TinyKit Team', url: 'https://www.tinykit.app' }],
  creator: 'TinyKit',
  publisher: 'TinyKit',
  alternates: {
    canonical: 'https://www.tinykit.app/hairstyle',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tinykit.app/hairstyle',
    title: 'AI Hairstyle Studio - Virtual Hairstyle Try On & Hair Color Changer',
    description:
      'Transform your look instantly with AI. Try on hundreds of hairstyles and colors before you commit. The #1 virtual hairstyle app.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/ai-hairstyle/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Hairstyle Studio - Virtual Hairstyle Try On App Interface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Hairstyle Studio - Virtual Hairstyle Try On & Hair Color Changer',
    description:
      'Transform your look instantly with advanced AI. Try on hundreds of hairstyles and colors.',
    images: ['https://cdn.tinykit.app/ai-hairstyle/images/og-image.png'],
    creator: '@GeekfanBo',
    site: '@tinykitapp',
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
    google: 'google-site-verification-token', // Replace with actual token
  },
  other: {
    // AI-friendly metadata for LLMs
    'application-name': 'AI Hairstyle Studio',
    'product-type': 'AI Beauty & Lifestyle App',
    'target-audience':
      'Anyone looking to try different hairstyles before committing to a new look',
    'key-features':
      'AI-powered try-on, Hundreds of styles, Hair color simulator, Instant results, Privacy first, HD export',
    'use-cases':
      'Try hairstyles before salon visit, Experiment with hair colors, Find perfect haircut, Share looks with stylist',
    'mobile-app': 'ios',
    'app-category': 'lifestyle',
  },
};

export default function HairstyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Software Application Schema
  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AI Hairstyle Studio',
    operatingSystem: 'iOS',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '50000',
      bestRating: '5',
      worstRating: '1',
    },
    image: 'https://cdn.tinykit.app/hairstyle/images/logo.png',
    description:
      'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly using advanced AI technology. See yourself with different hair colors, lengths, and styles before making the cut.',
    url: 'https://www.tinykit.app/hairstyle',
    author: {
      '@type': 'Organization',
      name: 'TinyKit',
      url: 'https://www.tinykit.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TinyKit',
      url: 'https://www.tinykit.app',
    },
    inLanguage: 'en',
    featureList: [
      'AI-powered hairstyle try-on',
      'Hundreds of hairstyle options',
      'Hair color simulator',
      'Instant results',
      'Privacy-focused',
      'HD photo export',
      'Regular style updates',
    ],
  };

  // Organization Schema
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TinyKit',
    url: 'https://www.tinykit.app',
    logo: 'https://cdn.tinykit.app/hairstyle/images/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'geek.bo@hotmail.com',
    },
  };

  return (
    <>
      {/* Resource Hints for Performance */}
      <link
        rel='preconnect'
        href='https://cdn.tinykit.app'
        crossOrigin='anonymous'
      />
      <link
        rel='dns-prefetch'
        href='https://cdn.tinykit.app'
      />
      <link
        rel='preconnect'
        href='https://apps.apple.com'
        crossOrigin='anonymous'
      />

      {/* Preload Critical Fonts */}
      <link
        rel='preload'
        href='/fonts/inter-var.woff2'
        as='font'
        type='font/woff2'
        crossOrigin='anonymous'
      />

      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {children}
    </>
  );
}
