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
  };

  // Software Application Schema for File Sortify
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'File Sortify',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'macOS',
    offers: {
      '@type': 'Offer',
      price: '20.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: productConfig.appStoreUrl,
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
    </>
  );
}
