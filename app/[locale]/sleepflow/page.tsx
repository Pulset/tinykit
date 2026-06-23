import SleepFlowNavigation from './components/SleepFlowNavigation';
// Night-theme animations, loaded only on the SleepFlow landing page.
import './sleepflow.css';
import SmoothScroll from '@/app/components/SmoothScroll';
import StructuredData, {
  ProductData,
  Testimonial,
} from '@/app/components/StructuredData';
import { siteConfig, productConfig } from './data/site-config';
import { features, testimonials } from './data/page-data';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import DownloadSection from './components/DownloadSection';
import FooterSection from './components/FooterSection';
import { getTranslations } from 'next-intl/server';

// Define FAQs key references for SleepFlow page structured data
const faqKeys = [
  { qKey: 'items.0.question', aKey: 'items.0.answer' },
  { qKey: 'items.1.question', aKey: 'items.1.answer' },
  { qKey: 'items.2.question', aKey: 'items.2.answer' },
  { qKey: 'items.3.question', aKey: 'items.3.answer' },
  { qKey: 'items.4.question', aKey: 'items.4.answer' },
];

export default async function SleepFlowPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tFaq = await getTranslations({ locale, namespace: 'SleepFlow.faq' });
  const tBreadcrumb = await getTranslations({
    locale,
    namespace: 'SleepFlow.breadcrumb',
  });
  const tPage = await getTranslations({ locale, namespace: 'SleepFlow.page' });
  const tMeta = await getTranslations({ locale, namespace: 'SleepFlow.meta' });
  const tTestimonial = await getTranslations({
    locale,
    namespace: 'SleepFlow.testimonials',
  });
  const tFeatures = await getTranslations({
    locale,
    namespace: 'SleepFlow.features',
  });

  // Build FAQ list from translation keys
  const sleepFlowFAQs = faqKeys.map((faq) => ({
    name: tFaq.raw(faq.qKey),
    text: tFaq.raw(faq.aKey),
  }));

  // Build testimonials with translated content
  const sleepFlowTestimonials: Testimonial[] = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    content: tTestimonial.raw(t.contentKey),
    // StructuredData expects an avatar string; reuse the logo as a stand-in.
    avatar: siteConfig.logo,
  }));

  // Prepare ProductData for StructuredData component
  const sleepFlowProductData: ProductData = {
    name: 'SleepFlow',
    description: tMeta('jsonLdDescription'),
    appStoreUrl: productConfig.appStoreUrl,
    version: '1.0',
    price: '0',
    currency: 'USD',
    screenshots: [],
    features: features.map((f) => tFeatures.raw(`items.${f.titleKey}`)),
    keywords: [
      'white noise',
      'sleep sounds',
      'ambient sound',
      'sound mixer',
      'rain sounds for sleep',
      'nature sounds',
      'AI sound generator',
      'sleep timer',
      'baby sleep sounds',
    ].join(', '),
    faqs: sleepFlowFAQs,
    testimonials: sleepFlowTestimonials,
    url: `https://www.tinykit.app${locale === 'en' ? '' : `/${locale}`}/sleepflow`,
    logo: siteConfig.logo,
    email: siteConfig.email,
    stats: siteConfig.stats,
  };

  // Define BreadcrumbList for StructuredData component
  const baseUrl = `https://www.tinykit.app${locale === 'en' ? '' : `/${locale}`}`;
  const breadcrumbList = [
    { name: tBreadcrumb('home'), item: baseUrl },
    { name: tBreadcrumb('product'), item: `${baseUrl}/sleepflow` },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#6B78E8] focus:rounded-lg focus:font-bold focus:text-white'
      >
        {tPage('skipToContent')}
      </a>

      <SmoothScroll />
      <SleepFlowNavigation />
      {/* Structured Data for SleepFlow Product Page */}
      <StructuredData
        productData={sleepFlowProductData}
        breadcrumbList={breadcrumbList}
      />

      {/* Main Content Wrapper with night theme */}
      <main
        id='main-content'
        className='bg-[#0A0B14] text-gray-200 selection:bg-[#6B78E8]/40 selection:text-white overflow-x-hidden'
        lang={locale}
      >
        <HeroSection productConfig={productConfig} />
        <FeaturesSection features={features} />
        {/* <TestimonialsSection testimonials={testimonials} /> */}
        <DownloadSection productConfig={productConfig} />
        <FooterSection siteConfig={siteConfig} productConfig={productConfig} />
      </main>
    </>
  );
}
