import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SleepFlow.meta' });

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

  const localizedPath = locale === 'en' ? '/sleepflow' : `/${locale}/sleepflow`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'white noise',
      'sleep sounds',
      'ambient sound',
      'sound mixer',
      'rain sounds for sleep',
      'nature sounds',
      'AI sound generator',
      'sleep timer',
      'baby sleep sounds',
      'relaxing sounds',
      'ASMR sleep',
      'brown noise',
      'pink noise',
      'fan sound sleep',
      'sleep app',
      'white noise app',
      'SleepFlow',
      'fall asleep',
      'insomnia relief',
    ],
    authors: [{ name: 'TinyKit Team', url: 'https://www.tinykit.app' }],
    creator: 'TinyKit',
    publisher: 'TinyKit',
    alternates: {
      canonical: localizedPath,
      languages: {
        en: '/sleepflow',
        zh: '/zh/sleepflow',
        ja: '/ja/sleepflow',
        es: '/es/sleepflow',
        pt: '/pt/sleepflow',
        de: '/de/sleepflow',
        ru: '/ru/sleepflow',
        ko: '/ko/sleepflow',
        fr: '/fr/sleepflow',
        'x-default': '/sleepflow',
      },
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `https://www.tinykit.app${localizedPath}`,
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'TinyKit',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
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

export default async function SleepFlowLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'SleepFlow.meta' });

  const localizedPath = locale === 'en' ? '/sleepflow' : `/${locale}/sleepflow`;

  // Software Application Schema
  const softwareAppJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: t('applicationName'),
    operatingSystem: 'iOS',
    applicationCategory: 'HealthAndFitnessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '10000',
      bestRating: '5',
      worstRating: '1',
    },
    description: t('jsonLdDescription'),
    url: `https://www.tinykit.app${localizedPath}`,
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
    ],
  };

  // Organization Schema
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TinyKit',
    url: 'https://www.tinykit.app',
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
