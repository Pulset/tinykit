import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/sleepflow/privacy';
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;

  return {
    title: 'Privacy Policy - SleepFlow',
    description:
      'SleepFlow Privacy Policy - Learn how we collect, use, and protect your information when using the white noise and AI sound generation app. Data minimization, your rights, and international transfer details.',
    keywords:
      'privacy policy, SleepFlow, white noise app privacy, AI audio privacy, mobile app privacy, data security',
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
      title: 'Privacy Policy - SleepFlow',
      description:
        'SleepFlow Privacy Policy - How we collect, use, and protect your information for white noise and AI sound generation.',
      url: `https://www.tinykit.app${canonicalPath}`,
      type: 'website',
    },
    twitter: {
      title: 'Privacy Policy - SleepFlow',
      description:
        'SleepFlow Privacy Policy - Data minimization, your rights, and international transfer details.',
      card: 'summary',
    },
  };
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
