import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const path = '/file-sortify/terms';
  const canonicalPath = locale === 'en' ? path : `/${locale}${path}`;

  return {
    title: 'Terms of Service - File Sortify',
    description:
      'File Sortify Terms of Service - Legal terms and conditions for using File Sortify Mac application. One-time purchase, lifetime access, offline operation.',
    keywords:
      'terms of service, tos, file sortify, license agreement, mac app terms, user agreement',
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
      title: 'Terms of Service - File Sortify',
      description:
        'File Sortify Terms of Service - Legal terms and conditions for using File Sortify. One-time purchase, lifetime access, complete privacy protection.',
      url: `https://www.tinykit.app${canonicalPath}`,
      type: 'website',
    },
    twitter: {
      title: 'Terms of Service - File Sortify',
      description:
        'File Sortify Terms of Service - Legal terms and conditions for using File Sortify.',
      card: 'summary',
    },
  };
}

export default function UserAgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
