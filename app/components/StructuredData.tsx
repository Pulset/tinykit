import { siteConfig } from '@/app/data/site-config';

// Define the structure for a testimonial, which can be reused.
export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

// Define the structure for product-specific data, making the component dynamic.
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
}

interface StructuredDataProps {
  productData?: ProductData;
  breadcrumbList?: { name: string; item: string }[];
}

export default function StructuredData({
  productData,
  breadcrumbList,
}: StructuredDataProps) {
  // Always include Organization and WebSite schema for brand consistency.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TinyKit',
    url: siteConfig.url,
    logo: siteConfig.logo,
    email: siteConfig.email,
    description: 'Developer of productivity apps for Mac users',
    foundingDate: '2025',
    knowsAbout: [
      'Mac software development',
      'File organization',
      'Productivity tools',
      'macOS utilities',
    ],
  };

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
        ratingValue: siteConfig.stats.rating,
        ratingCount: productData.testimonials.length, // Dynamic count
        bestRating: 5,
        worstRating: 1,
      },
      description: productData.description,
      author: { '@type': 'Organization', name: 'TinyKit' },
      creator: { '@type': 'Organization', name: 'TinyKit' },
      downloadUrl: productData.appStoreUrl,
      screenshot: productData.screenshots,
      featureList: productData.features,
      keywords: productData.keywords,
      applicationSubCategory: 'File Management',
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
      image: [siteConfig.logo, ...productData.screenshots],
      brand: { '@type': 'Brand', name: 'TinyKit' },
      offers: softwareSchema.offers, // Reuse from software schema
      aggregateRating: softwareSchema.aggregateRating, // Reuse from software schema
      category: 'Mac Utility Software',
    };

    const reviewSchemas = productData.testimonials.map((testimonial) => ({
      '@context': 'https://schema.org',
      '@type': 'Review',
      itemReviewed: {
        '@type': 'SoftwareApplication',
        name: productData.name,
      },
      author: { '@type': 'Person', name: testimonial.name },
      reviewRating: { '@type': 'Rating', ratingValue: 5, bestRating: 5 },
      reviewBody: testimonial.content,
      datePublished: '2024-12-01', // This could also be part of the dynamic data
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
