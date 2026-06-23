import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/sleepflow/terms';
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;

  return {
    title: 'Terms of Service - SleepFlow',
    description:
      'SleepFlow Terms of Service - The terms governing your use of the white noise and AI sound generation app, including subscriptions, auto-renewal, AI content, and user responsibilities.',
    keywords:
      'terms of service, SleepFlow, white noise app terms, AI audio terms, subscription terms, auto-renewal',
    alternates: {
      canonical: canonicalPath,
      languages: {
        en: path,
        zh: `/zh${path}`,
        ja: `/ja${path}`,
        es: `/es${path}`,
        pt: `/pt${path}`,
        de: `/de${path}`,
        ru: `/ru${path}`,
        ko: `/ko${path}`,
        fr: `/fr${path}`,
        'x-default': path,
      },
    },
    openGraph: {
      title: 'Terms of Service - SleepFlow',
      description:
        'SleepFlow Terms of Service - Subscriptions, auto-renewal, AI content, and user responsibilities.',
      url: `https://www.tinykit.app${canonicalPath}`,
      type: 'website',
    },
    twitter: {
      title: 'Terms of Service - SleepFlow',
      description:
        'SleepFlow Terms of Service - Subscriptions, auto-renewal, AI content, and user responsibilities.',
      card: 'summary',
    },
  };
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
