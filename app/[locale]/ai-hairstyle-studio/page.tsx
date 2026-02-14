import HairstyleNavigation from './components/HairstyleNavigation';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import SmoothScroll from '@/app/components/SmoothScroll';
import StructuredData, {
  ProductData,
  Testimonial,
} from '@/app/components/StructuredData';
import { siteConfig, productConfig } from './data/site-config';
import { features, howItWorks, testimonials } from './data/page-data';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FooterSection from './components/FooterSection';
import { getTranslations } from 'next-intl/server';

// Define FAQs key references for AI Hairstyle Studio page structured data
const faqKeys = [
  { qKey: 'items.0.question', aKey: 'items.0.answer' },
  { qKey: 'items.1.question', aKey: 'items.1.answer' },
  { qKey: 'items.2.question', aKey: 'items.2.answer' },
  { qKey: 'items.3.question', aKey: 'items.3.answer' },
  { qKey: 'items.4.question', aKey: 'items.4.answer' },
];

export default async function HairstylePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const tFaq = await getTranslations({ locale, namespace: 'AIHairstyle.faq' });
  const tBreadcrumb = await getTranslations({
    locale,
    namespace: 'AIHairstyle.breadcrumb',
  });
  const tPage = await getTranslations({
    locale,
    namespace: 'AIHairstyle.page',
  });
  const tMeta = await getTranslations({
    locale,
    namespace: 'AIHairstyle.meta',
  });
  const tBeforeAfter = await getTranslations({
    locale,
    namespace: 'AIHairstyle.beforeAfter',
  });

  // Build FAQ list from translation keys
  const aiHairstyleFAQs = faqKeys.map((faq) => ({
    name: tFaq.raw(faq.qKey),
    text: tFaq.raw(faq.aKey),
  }));

  // Build testimonials with translated content
  const tTestimonial = await getTranslations({
    locale,
    namespace: 'AIHairstyle.testimonials',
  });
  const aiHairstyleTestimonials: Testimonial[] = testimonials.map((t) => ({
    name: t.name,
    role: t.role,
    content: tTestimonial.raw(t.contentKey),
    avatar: t.avatar,
  }));

  // Prepare ProductData for StructuredData component
  const aiHairstyleProductData: ProductData = {
    name: 'AI Hairstyle Studio',
    description: tMeta('jsonLdDescription'),
    appStoreUrl: productConfig.appStoreUrl,
    version: '1.0',
    price: '9.99',
    currency: 'USD',
    screenshots: howItWorks.map((step) => step.image),
    features: features.map((f) => f.titleKey),
    keywords: [
      'AI hairstyle',
      'virtual hairstyle try on',
      'hair color changer',
      'hairstyle simulator',
      'AI hair makeover',
      'women hairstyle app',
      'men hairstyle app',
      'hair dye app',
    ].join(', '),
    faqs: aiHairstyleFAQs,
    testimonials: aiHairstyleTestimonials,
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
      item: `${siteConfig.url}/ai-hairstyle-studio`,
    },
  ];

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pink-100 focus:rounded-lg focus:font-bold'
      >
        {tPage('skipToContent')}
      </a>

      <SmoothScroll />
      <HairstyleNavigation />
      {/* Structured Data for AI Hairstyle Studio Product Page */}
      <StructuredData
        productData={aiHairstyleProductData}
        breadcrumbList={breadcrumbList}
      />

      {/* Main Content Wrapper with soft pastel theme */}
      <main
        id='main-content'
        className='bg-[#fdfbf8] text-gray-800 selection:bg-pink-200 selection:text-gray-800 overflow-x-hidden'
        lang={locale}
      >
        {/* Hero Section */}
        <HeroSection productConfig={productConfig} />

        {/* Before/After Comparison Section */}
        <section
          id='magic'
          className='py-24 relative bg-gradient-to-b from-[#fdfbf8] to-white/80 overflow-hidden'
        >
          {/* Decorative Background Elements */}
          <div
            className='absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none'
            aria-hidden='true'
          >
            <div className='absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#ffd6e0] rounded-full mix-blend-multiply filter blur-[96px] opacity-40'></div>
            <div className='absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-[#e6d5f7] rounded-full mix-blend-multiply filter blur-[96px] opacity-40'></div>
          </div>

          <div className='container mx-auto relative z-10'>
            <BeforeAfterComparison
              beforeImage='https://cdn.tinykit.app/hairstyle/images/hairstyle-before.png'
              afterImage='https://cdn.tinykit.app/hairstyle/images/hairstyle-after.png'
              beforeLabel={tBeforeAfter('beforeLabel')}
              afterLabel={tBeforeAfter('afterLabel')}
            />
          </div>
        </section>

        {/* Features Section - Soft Pastel Cards */}
        <FeaturesSection features={features} />

        {/* How It Works - Visual Path */}
        <HowItWorksSection howItWorks={howItWorks} />

        {/* Testimonials */}
        <TestimonialsSection testimonials={testimonials} />

        {/* Pricing - Premium Card */}
        <PricingSection productConfig={productConfig} />

        {/* Footer */}
        <FooterSection siteConfig={siteConfig} productConfig={productConfig} />
      </main>
    </>
  );
}
