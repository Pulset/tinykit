import Navigation from './components/Navigation';
import SmoothScroll from '@/app/components/SmoothScroll';
import StructuredData, {
  ProductData,
  Testimonial,
} from '@/app/components/StructuredData';
import { siteConfig, productConfig } from './data/site-config';
import { features, screenshots, testimonials } from './data/page-data';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import ScreenshotsSection from './components/ScreenshotsSection';
import PricingSection from './components/PricingSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import { getTranslations } from 'next-intl/server';

// Define FAQs key references for File Sortify page structured data
const faqKeys = [
  { qKey: 'items.0.question', aKey: 'items.0.answer' },
  { qKey: 'items.1.question', aKey: 'items.1.answer' },
  { qKey: 'items.2.question', aKey: 'items.2.answer' },
  { qKey: 'items.3.question', aKey: 'items.3.answer' },
  { qKey: 'items.4.question', aKey: 'items.4.answer' },
];

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tFaq = await getTranslations({ locale, namespace: 'FileSortify.faq' });
  const tBreadcrumb = await getTranslations({
    locale,
    namespace: 'FileSortify.breadcrumb',
  });
  const tMeta = await getTranslations({
    locale,
    namespace: 'FileSortify.meta',
  });

  // Build FAQ list from translation keys
  const fileSortifyFAQs = faqKeys.map((faq) => ({
    name: tFaq.raw(faq.qKey),
    text: tFaq.raw(faq.aKey),
  }));

  // Build testimonials with translated content
  const tTestimonial = await getTranslations({
    locale,
    namespace: 'FileSortify.testimonials',
  });
  const fileSortifyTestimonials: Testimonial[] = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    content: tTestimonial.raw(`${t.contentKey}.content`),
    avatar: t.avatar,
  }));

  // Prepare ProductData for StructuredData component
  const fileSortifyProductData: ProductData = {
    name: 'File Sortify',
    description: tMeta('jsonLdDescription'),
    appStoreUrl: productConfig.appStoreUrl,
    version: '1.0',
    price: '9.99',
    currency: 'USD',
    screenshots: screenshots.map((s) => s.image),
    features: features.map((f) => f.titleKey),
    keywords: [
      'file organizer mac',
      'mac file management',
      'auto file sorter',
      'download folder organizer',
      'file automation mac',
      'file sortify',
    ].join(', '),
    faqs: fileSortifyFAQs,
    testimonials: fileSortifyTestimonials,
    // Product-specific config
    url: siteConfig.url,
    logo: siteConfig.logo,
    email: siteConfig.email,
    stats: siteConfig.stats,
  };

  // Define BreadcrumbList for StructuredData component
  const breadcrumbList = [
    {
      name: tBreadcrumb('home'),
      item: siteConfig.url,
    },
    {
      name: tBreadcrumb('product'),
      item: `${siteConfig.url}/file-sortify`,
    },
  ];

  return (
    <>
      <SmoothScroll />
      <Navigation />
      {/* Structured Data for File Sortify Product Page */}
      <StructuredData
        productData={fileSortifyProductData}
        breadcrumbList={breadcrumbList}
      />

      {/* Page Sections */}
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ScreenshotsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </>
  );
}
