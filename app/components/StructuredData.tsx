import { siteConfig, productConfig } from '@/app/data/site-config';

export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TinyKit',
    url: siteConfig.url,
    logo: siteConfig.logo,
    email: siteConfig.email,
    description: 'Developer of productivity apps for Mac users',
    sameAs: [
      // 未来可以添加社交媒体链接
      // 'https://twitter.com/tinykit',
      // 'https://github.com/tinykit',
    ],
    foundingDate: '2024',
    knowsAbout: [
      'Mac software development',
      'File organization',
      'Productivity tools',
      'macOS utilities',
    ],
  };

  // Software Application Schema for File Sortify
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'File Sortify',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS',
    softwareVersion: '1.0',
    offers: {
      '@type': 'Offer',
      price: '20.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: productConfig.appStoreUrl,
      priceValidUntil: '2026-12-31',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.stats.rating,
      ratingCount: 500, // 可以根据实际情况调整
      bestRating: 5,
      worstRating: 1,
    },
    description: siteConfig.description,
    author: {
      '@type': 'Organization',
      name: 'TinyKit',
    },
    creator: {
      '@type': 'Organization',
      name: 'TinyKit',
    },
    downloadUrl: productConfig.appStoreUrl,
    screenshot: [
      'https://oss.picasso-designs.com/static/dashboard.png',
      'https://oss.picasso-designs.com/static/rules.png',
      'https://oss.picasso-designs.com/static/revert.png',
    ],
    featureList: [
      'Smart Auto-Categorization',
      'Custom Rules Engine',
      'Real-Time Monitoring',
      'Operation History',
      'Safe & Secure',
      'Lightning Fast',
    ],
    keywords:
      'file organizer, mac app, file management, auto file sorter, download folder organizer',
    applicationSubCategory: 'File Management',
    installUrl: productConfig.appStoreUrl,
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TinyKit',
    url: siteConfig.url,
    description: 'Productivity apps for Mac users',
    publisher: {
      '@type': 'Organization',
      name: 'TinyKit',
    },
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
    ],
  };

  // FAQ Schema - AI-friendly
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is File Sortify?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'File Sortify is an intelligent file organization tool for Mac that automatically sorts and organizes your files based on type, custom rules, and real-time monitoring. It is perfect for keeping your Downloads folder and desktop clean and organized.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does File Sortify organize files?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'File Sortify uses smart auto-categorization to sort files by type (documents, images, videos, etc.), allows you to create custom rules for specific file types or names, and monitors folders in real-time to automatically organize new files as they arrive.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is File Sortify compatible with my Mac?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'File Sortify is designed exclusively for macOS. It works with all modern Mac computers running macOS and integrates seamlessly with the Mac file system.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does File Sortify cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'File Sortify is available for a one-time purchase of $20 USD. This includes lifetime access, unlimited usage, lifetime updates, and all future features with no subscription required.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I undo file organization changes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, File Sortify includes an Operation History feature that allows you to review and revert file organization actions if needed, ensuring your files are always safe.',
        },
      },
    ],
  };

  // Product Schema for better AI understanding
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'File Sortify',
    description: siteConfig.description,
    brand: {
      '@type': 'Brand',
      name: 'TinyKit',
    },
    offers: {
      '@type': 'Offer',
      price: '20.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: productConfig.appStoreUrl,
      seller: {
        '@type': 'Organization',
        name: 'TinyKit',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: siteConfig.stats.rating,
      ratingCount: 500,
      bestRating: 5,
    },
    category: 'Mac Utility Software',
    audience: {
      '@type': 'Audience',
      audienceType: 'Mac users seeking file organization solutions',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
}
