import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - AI Hairstyle Studio',
  description:
    'AI Hairstyle Studio Privacy Policy - Learn how we protect your photos and personal data. Secure photo processing with transparent data usage.',
  keywords:
    'privacy policy, AI hairstyle studio, photo protection, mobile app privacy, data security',
  openGraph: {
    title: 'Privacy Policy - AI Hairstyle Studio',
    description:
      'AI Hairstyle Studio Privacy Policy - We protect your photos and personal information with industry-standard security measures.',
    url: 'https://www.tinykit.app/ai-hairstyle-studio/privacy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy - AI Hairstyle Studio',
    description:
      'AI Hairstyle Studio Privacy Policy - Secure photo processing and transparent data usage for AI-powered hairstyle generation.',
    card: 'summary',
  },
  alternates: {
    canonical: '/ai-hairstyle-studio/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
