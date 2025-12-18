import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Hairstyle Studio - New 'Do, New You",
  description:
    'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly using advanced AI technology. See yourself with different hair colors, lengths, and styles before making the cut.',
  keywords: [
    'AI hairstyle',
    'virtual hairstyle try on',
    'hair color changer',
    'hairstyle simulator',
    'AI hair makeover',
    'virtual hair salon',
    'hairstyle app',
    'AI beauty',
  ],
  alternates: {
    canonical: '/hairstyle',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tinykit.app/hairstyle',
    title: "AI Hairstyle Studio - New 'Do, New You | TinyKit",
    description:
      'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly using advanced AI technology. See yourself with different hair colors, lengths, and styles.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/ai-hairstyle/images/og-image.png',
        width: 1200,
        height: 630,
        alt: "AI Hairstyle Studio - New 'Do, New You",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Hairstyle Studio - New 'Do, New You | TinyKit",
    description:
      'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly.',
    images: ['https://cdn.tinykit.app/ai-hairstyle/images/og-image.png'],
    creator: '@GeekfanBo',
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
  },
};

export default function HairstyleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
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
    },
    image: 'https://cdn.tinykit.app/hairStyle/images/logo.png',
    description:
      'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly using advanced AI technology. See yourself with different hair colors, lengths, and styles before making the cut.',
    url: 'https://www.tinykit.app/hairstyle',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
