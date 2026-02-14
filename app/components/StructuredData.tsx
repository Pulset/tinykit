'use client';

import { useTranslations } from 'next-intl';

// Define structure for a testimonial, which can be reused.
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

// Define structure for product-specific data, making component dynamic.
export interface ProductData {
  name: string;
  description: string;
  appStoreUrl: string;
  version: string;
  price: string;
  currency: string;
  screenshots: string[];
  features: string[];
  keywords: string;
  faqs: { name: string; text: string }[];
  testimonials: Testimonial[];
  // Add product-specific config fields
  url: string;
  logo: string;
  email: string;
  stats?: {
    rating?: number;
    happyUsers?: string;
  };
}

interface StructuredDataProps {
  productData?: ProductData;
  breadcrumbList?: { name: string; item: string }[];
}

export default function StructuredData({
  productData,
  breadcrumbList,
}: StructuredDataProps) {
  const t = useTranslations('StructuredData');

  // Use productData or fallback to defaults
  const organizationName = 'TinyKit';
  const organizationUrl = productData?.url || 'https://www.tinykit.app';
  const organizationLogo =
    productData?.logo || 'https://cdn.tinykit.app/logo.png';
  const organizationEmail = productData?.email || 'support@tinykit.app';
  const rating = productData?.stats?.rating || 5;

  // Always include Organization and WebSite schema for brand consistency.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: organizationName,
    url: organizationUrl,
    logo: organizationLogo,
    email: organizationEmail,
    description: t('orgDescription'),
    foundingDate: '2025',
    knowsAbout: [
      t('orgKnowsAbout.0'),
      t('orgKnowsAbout.1'),
      t('orgKnowsAbout.2'),
      t('orgKnowsAbout.3'),
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: organizationName,
    url: organizationUrl,
    description: t('websiteDescription'),
    publisher: {
      '@type': 'Organization',
      name: organizationName,
    },
  };

  // Start with base schemas and conditionally add more.
  const schemas: object[] = [organizationSchema, websiteSchema];

  if (productData) {
    const softwareSchema = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: productData.name,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'macOS',
      softwareVersion: productData.version,
      offers: {
        '@type': 'Offer',
        price: productData.price,
        priceCurrency: productData.currency,
        availability: 'https://schema.org/InStock',
        url: productData.appStoreUrl,
        priceValidUntil: '2026-12-31',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        ratingCount: productData.testimonials.length, // Dynamic count
        bestRating: 5,
        worstRating: 1,
      },
      description: productData.description,
      author: { '@type': 'Organization', name: organizationName },
      creator: { '@type': 'Organization', name: organizationName },
      downloadUrl: productData.appStoreUrl,
      screenshot: productData.screenshots,
      featureList: productData.features,
      keywords: productData.keywords,
      applicationSubCategory: t('fileManagement'),
      installUrl: productData.appStoreUrl,
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: productData.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.name,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.text,
        },
      })),
    };

    const productSchema = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: productData.name,
      description: productData.description,
      image: [organizationLogo, ...productData.screenshots],
      brand: { '@type': 'Brand', name: organizationName },
      offers: softwareSchema.offers, // Reuse from software schema
      aggregateRating: softwareSchema.aggregateRating, // Reuse from software schema
      category: t('productCategory'),
    };

    const reviewSchemas = productData.testimonials.map((testimonial) => ({
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'SoftwareApplication',
        name: productData.name,
      },
      author: {
        '@type': 'Person',
        name: testimonial.name,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: 5,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: {
        '@type': 'Text',
        '@value': testimonial.content,
      },
      datePublished: '2025-12-01', // This could also be part of dynamic data
    }));

    schemas.push(softwareSchema, faqSchema, productSchema, ...reviewSchemas);
  }

  if (breadcrumbList) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbList.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.item,
      })),
    };
    schemas.push(breadcrumbSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`ld-json-${index}`}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
