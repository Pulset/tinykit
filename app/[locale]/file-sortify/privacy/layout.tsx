import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/file-sortify/privacy';
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;

  return {
    title: 'Privacy Policy - File Sortify',
    description:
      'File Sortify Privacy Policy - Learn how we protect your data and privacy. No personal information collection, all data stored locally.',
    keywords: 'privacy policy, file sortify, data protection, mac app privacy',
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
      title: 'Privacy Policy - File Sortify',
      description:
        'File Sortify Privacy Policy - We never collect personal information. All data stays local on your Mac.',
      url: `https://www.tinykit.app${canonicalPath}`,
      type: 'website',
    },
    twitter: {
      title: 'Privacy Policy - File Sortify',
      description:
        'File Sortify Privacy Policy - We never collect personal information. All data stays local on your Mac.',
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
