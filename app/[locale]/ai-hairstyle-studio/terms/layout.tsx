import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/ai-hairstyle-studio/terms';
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;

  return {
    title: 'Terms of Service - AI Hairstyle Studio',
    description:
      'AI Hairstyle Studio Terms of Service - Legal terms and conditions for using AI Hairstyle Studio iOS application. Free download with in-app purchases, privacy protection, virtual hairstyle try-on.',
    keywords:
      'terms of service, ai hairstyle, virtual hairstyle, hair try on, hair salon app, ios app terms, user agreement, hairstyle simulator',
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
      title: 'Terms of Service - AI Hairstyle Studio',
      description:
        'AI Hairstyle Studio Terms of Service - Legal terms and conditions for using AI Hairstyle Studio.',
      url: `https://www.tinykit.app${canonicalPath}`,
      type: 'website',
    },
    twitter: {
      title: 'Terms of Service - AI Hairstyle Studio',
      description:
        'AI Hairstyle Studio Terms of Service - Legal terms and conditions.',
      card: 'summary',
    },
  };
}

export default function TermsAgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
