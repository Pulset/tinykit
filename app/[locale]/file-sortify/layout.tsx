import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Automatically Organize Mac Files | File Sortify',
  icons: {
    icon: '/file-sortify-icon.ico',
  },
  description:
    'Automatically organize your Mac files with File Sortify. Smart file management tool with auto-sorting, custom rules, and real-time monitoring for Downloads folder.',
  keywords: [
    // 问题类关键词
    'messy downloads folder mac',
    'how to organize files on mac automatically',
    'mac auto sort files',
    'clean up downloads folder mac',
    // 解决方案类关键词
    'automatic file organizer mac',
    'downloads folder organizer app',
    'mac file management software',
    'auto sort files by type mac',
    // 品牌相关关键词 (保持在后面)
    'file sortify',
  ],
  alternates: {
    canonical: '/file-sortify',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tinykit.app/file-sortify',
    title: 'Automatically Organize Mac Files | File Sortify',
    description:
      'Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring.',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/file-sortify/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Automatically Organize Mac Files | File Sortify',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automatically Organize Mac Files | File Sortify',
    description:
      'Automatically organize your files with File Sortify. The intelligent file management tool.',
    images: ['https://cdn.tinykit.app/file-sortify/images/og-image.png'],
    creator: '@GeekfanBo',
  },
  other: {
    // AI-friendly metadata for LLMs
    'application-name': 'File Sortify',
    'product-type': 'Mac Utility Software',
    'target-audience': 'Mac users who need to organize files automatically',
    'key-features':
      'Auto-categorization, Custom rules, Real-time monitoring, Operation history',
    'use-cases':
      'Organize downloads folder, Sort files by type, Automate file management, Clean up desktop files',
  },
};

export default function FileSortifyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'File Sortify',
    operatingSystem: 'macOS',
    applicationCategory: 'UtilitiesApplication',
    offers: {
      '@type': 'Offer',
      price: '9.99',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      ratingCount: '10000',
    },
    image: 'https://cdn.tinykit.app/file-sortify/images/logo.png',
    description:
      'Automatically organize your files with File Sortify. The intelligent file management tool that sorts files by type, custom rules, and real-time monitoring.',
    url: 'https://www.tinykit.app/file-sortify',
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
