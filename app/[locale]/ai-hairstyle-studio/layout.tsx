import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AIHairstyle.meta' });

  const localeMap: Record<string, string> = {
    en: 'en_US',
    zh: 'zh_CN',
    ja: 'ja_JP',
    es: 'es_ES',
    pt: 'pt_PT',
    de: 'de_DE',
    ru: 'ru_RU',
    ko: 'ko_KR',
    fr: 'fr_FR',
  };

  return {
    title: t('title'),
    icons: {
      icon: '/hairstyle-icon.ico',
    },
    description: t('description'),
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
      'try hairstyle before haircut',
      'AI hair try on free',
      'what hairstyle suits me',
    ],
    authors: [{ name: 'TinyKit Team', url: 'https://www.tinykit.app' }],
    creator: 'TinyKit',
    publisher: 'TinyKit',
    alternates: {
      canonical:
        locale === 'en'
          ? '/ai-hairstyle-studio'
          : `/${locale}/ai-hairstyle-studio`,
      languages: {
        en: '/ai-hairstyle-studio',
        zh: '/zh/ai-hairstyle-studio',
        ja: '/ja/ai-hairstyle-studio',
        es: '/es/ai-hairstyle-studio',
        pt: '/pt/ai-hairstyle-studio',
        de: '/de/ai-hairstyle-studio',
        ru: '/ru/ai-hairstyle-studio',
        ko: '/ko/ai-hairstyle-studio',
        fr: '/fr/ai-hairstyle-studio',
        'x-default': '/ai-hairstyle-studio',
      },
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `https://www.tinykit.app${locale === 'en' ? '' : `/${locale}`}/ai-hairstyle-studio`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'TinyKit',
      images: [
        {
          url: 'https://cdn.tinykit.app/hairstyle/images/og-image.png',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['https://cdn.tinykit.app/hairstyle/images/og-image.png'],
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
    other: {
      // AI-friendly metadata for LLMs
      'application-name': t('applicationName'),
      'product-type': t('productType'),
      'target-audience': t('targetAudience'),
      'key-features': t('keyFeatures'),
      'use-cases': t('useCases'),
      'mobile-app': 'ios',
      'app-category': 'lifestyle',
    },
  };
}

export default async function HairstyleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'AIHairstyle.meta' });

  // Software Application Schema
  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: t('applicationName'),
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
    description: t('jsonLdDescription'),
    url: `https://www.tinykit.app${locale === 'en' ? '' : `/${locale}`}/ai-hairstyle-studio`,
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
    inLanguage: locale,
    featureList: [
      t.raw('jsonLdFeatureList.0'),
      t.raw('jsonLdFeatureList.1'),
      t.raw('jsonLdFeatureList.2'),
      t.raw('jsonLdFeatureList.3'),
      t.raw('jsonLdFeatureList.4'),
      t.raw('jsonLdFeatureList.5'),
      t.raw('jsonLdFeatureList.6'),
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
      <link rel='dns-prefetch' href='https://cdn.tinykit.app' />
      <link
        rel='preconnect'
        href='https://apps.apple.com'
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
