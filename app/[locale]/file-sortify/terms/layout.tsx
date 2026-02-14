import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - File Sortify',
  description:
    'File Sortify Terms of Service - Legal terms and conditions for using File Sortify Mac application. One-time purchase, lifetime access, offline operation.',
  keywords:
    'terms of service, tos, file sortify, license agreement, mac app terms, user agreement',
  openGraph: {
    title: 'Terms of Service - File Sortify',
    description:
      'File Sortify Terms of Service - Legal terms and conditions for using File Sortify. One-time purchase, lifetime access, complete privacy protection.',
    url: 'https://www.tinykit.app/file-sortify/terms',
    type: 'website',
  },
  twitter: {
    title: 'Terms of Service - File Sortify',
    description:
      'File Sortify Terms of Service - Legal terms and conditions for using File Sortify.',
    card: 'summary',
  },
  alternates: {
    canonical: '/file-sortify/terms',
  },
};

export default function UserAgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
