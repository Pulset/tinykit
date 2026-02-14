import HairstyleNavigation from './components/HairstyleNavigation';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import SmoothScroll from '@/app/components/SmoothScroll';
import StructuredData, {
  ProductData,
  Testimonial,
} from '@/app/components/StructuredData';
import { siteConfig, productConfig } from './data/site-config';
import { features, howItWorks, testimonials } from './data/page-data';
import { Metadata } from 'next';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import FooterSection from './components/FooterSection';

// Define FAQs for AI Hairstyle Studio page structured data
const aiHairstyleFAQs = [
  {
    name: 'What is AI Hairstyle Studio?',
    text: 'AI Hairstyle Studio is an innovative app that uses advanced AI technology to let you try on hundreds of different hairstyles and hair colors virtually. Upload your photo and see how you would look with a new hairstyle before making any commitment.',
  },
  {
    name: 'How does AI Hairstyle Studio work?',
    text: 'Simply upload a clear front-facing photo of yourself, browse through our extensive collection of hairstyles and colors, and our AI instantly applies them to your photo with realistic results. You can try unlimited styles and save or share your favorites.',
  },
  {
    name: 'Is my photo data safe?',
    text: 'Absolutely! Your privacy is our top priority. All photos are processed securely and are never stored on our servers. Your images are deleted immediately after processing.',
  },
  {
    name: 'How much does AI Hairstyle Studio cost?',
    text: 'AI Hairstyle Studio is available for a one-time purchase of $9.99 USD. This gives you lifetime access with unlimited hairstyle try-ons, access to all collections, HD exports, and all future updates.',
  },
  {
    name: 'Can I save and share my new looks?',
    text: 'Yes! You can save your transformed photos in high-definition quality and easily share them with friends, family, or your hairstylist to show them exactly what you want.',
  },
];

// Prepare ProductData for StructuredData component
const aiHairstyleProductData: ProductData = {
  name: 'AI Hairstyle Studio',
  description:
    'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly using advanced AI technology. See yourself with different hair colors, lengths, and styles before making a cut.',
  appStoreUrl: productConfig.appStoreUrl,
  version: '1.0',
  price: '9.99',
  currency: 'USD',
  screenshots: howItWorks.map((step) => step.image),
  features: features.map((f) => f.title),
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
  testimonials: testimonials as Testimonial[],
};

// Define BreadcrumbList for StructuredData component
const breadcrumbList = [
  {
    name: 'Home',
    item: 'https://www.tinykit.app',
  },
  {
    name: 'AI Hairstyle Studio',
    item: `https://www.tinykit.app/ai-hairstyle-studio`,
  },
];

// Page metadata is inherited from layout.tsx to maintain consistency
// Only page-specific overrides if needed
export const metadata: Metadata = {
  title: 'AI Hairstyle Try On Free - Virtual Hair Makeover',
  description:
    'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles and hair colors instantly using advanced AI technology. Free download, lifetime access.',
  keywords: [
    'AI hairstyle',
    'virtual hairstyle try on',
    'hair color changer',
    'hairstyle simulator',
    'AI hair makeover',
    'women hairstyle app',
    'men hairstyle app',
    'hair dye app',
  ],
  openGraph: {
    title: 'AI Hairstyle Studio - Virtual Hairstyle Try On',
    description:
      'Transform your look with AI. Try on hundreds of hairstyles and hair colors instantly. Free download with lifetime access.',
    url: 'https://www.tinykit.app/ai-hairstyle-studio',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/hairstyle/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Hairstyle Studio App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Hairstyle Studio - Virtual Hairstyle Try On',
    description:
      'Transform your look with AI. Try on hundreds of hairstyles and hair colors instantly.',
    images: ['https://cdn.tinykit.app/hairstyle/images/og-image.png'],
  },
};

export default function HairstylePage() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href='#main-content'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pink-100 focus:rounded-lg focus:font-bold'
      >
        Skip to main content
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
        lang='en'
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
              beforeLabel='Before'
              afterLabel='After'
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
