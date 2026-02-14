import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - AI Hairstyle Studio',
  description:
    'AI Hairstyle Studio Terms of Service - Legal terms and conditions for using AI Hairstyle Studio iOS application. Free download with in-app purchases, privacy protection, virtual hairstyle try-on.',
  keywords:
    'terms of service, ai hairstyle, virtual hairstyle, hair try on, hair salon app, ios app terms, user agreement, hairstyle simulator',
  openGraph: {
    title: 'Terms of Service - AI Hairstyle Studio',
    description:
      'AI Hairstyle Studio Terms of Service - Legal terms and conditions for using AI Hairstyle Studio.',
    url: 'https://www.tinykit.app/ai-hairstyle-studio/terms',
    type: 'website',
  },
  twitter: {
    title: 'Terms of Service - AI Hairstyle Studio',
    description:
      'AI Hairstyle Studio Terms of Service - Legal terms and conditions.',
    card: 'summary',
  },
  alternates: {
    canonical: '/ai-hairstyle-studio/terms',
  },
};

export default function TermsAgreementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
