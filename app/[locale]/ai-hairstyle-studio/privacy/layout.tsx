import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/ai-hairstyle-studio/privacy';
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;

  return {
    title: 'Privacy Policy - AI Hairstyle Studio',
    description:
      'AI Hairstyle Studio Privacy Policy - Learn how we protect your photos and personal data. Secure photo processing with transparent data usage.',
    keywords:
      'privacy policy, AI hairstyle studio, photo protection, mobile app privacy, data security',
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
      title: 'Privacy Policy - AI Hairstyle Studio',
      description:
        'AI Hairstyle Studio Privacy Policy - We protect your photos and personal information with industry-standard security measures.',
      url: `https://www.tinykit.app${canonicalPath}`,
      type: 'website',
    },
    twitter: {
      title: 'Privacy Policy - AI Hairstyle Studio',
      description:
        'AI Hairstyle Studio Privacy Policy - Secure photo processing and transparent data usage for AI-powered hairstyle generation.',
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
