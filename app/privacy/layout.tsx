import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - File Sortify',
  description:
    'File Sortify Privacy Policy - Learn how we protect your data and privacy. No personal information collection, all data stored locally.',
  keywords: 'privacy policy, file sortify, data protection, mac app privacy',
  openGraph: {
    title: 'Privacy Policy - File Sortify',
    description:
      'File Sortify Privacy Policy - We never collect personal information. All data stays local on your Mac.',
    url: 'https://www.tinykit.app/privacy',
    type: 'website',
  },
  twitter: {
    title: 'Privacy Policy - File Sortify',
    description:
      'File Sortify Privacy Policy - We never collect personal information. All data stays local on your Mac.',
    card: 'summary',
  },
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
