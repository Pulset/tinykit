import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FileSortify.meta' });

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
      icon: '/file-sortify-icon.ico',
    },
    description: t('description'),
    keywords: [
      // 问题类关键词
      'messy downloads folder mac',
      'how to organize files on mac automatically',
      'mac auto sort files',
      'clean up downloads folder mac',
      // 解决方案类关键词
      'automatic file organizer mac',
      'downloads folder organizer app',
      'mac file management software',
      'auto sort files by type mac',
      // 品牌相关关键词 (保持在后面)
      'file sortify',
    ],
    alternates: {
      canonical: '/file-sortify',
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: 'https://www.tinykit.app/file-sortify',
      title: t('ogTitle'),
      description: t('ogDescription'),
      siteName: 'TinyKit',
      images: [
        {
          url: 'https://cdn.tinykit.app/file-sortify/images/og-image.png',
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
      images: ['https://cdn.tinykit.app/file-sortify/images/og-image.png'],
      creator: '@GeekfanBo',
    },
    other: {
      // AI-friendly metadata for LLMs
      'application-name': t('applicationName'),
      'product-type': t('productType'),
      'target-audience': t('targetAudience'),
      'key-features': t('keyFeatures'),
      'use-cases': t('useCases'),
    },
  };
}

export default async function FileSortifyLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'FileSortify.meta' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: t('applicationName'),
    operatingSystem: 'macOS',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '9.99',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '10000',
    },
    image: 'https://cdn.tinykit.app/file-sortify/images/logo.png',
    description: t('jsonLdDescription'),
    url: 'https://www.tinykit.app/file-sortify',
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
