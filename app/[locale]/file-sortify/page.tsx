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

// Define FAQs specifically for File Sortify page structured data
const fileSortifyFAQs = [
  {
    name: 'What is File Sortify?',
    text: 'File Sortify is an intelligent file organization tool for Mac that automatically sorts and organizes your files based on type, custom rules, and real-time monitoring. It is perfect for keeping your Downloads folder and desktop clean and organized.',
  },
  {
    name: 'How does File Sortify organize files?',
    text: 'File Sortify uses smart auto-categorization to sort files by type (documents, images, videos, etc.), allows you to create custom rules for specific file types or names, and monitors folders in real-time to automatically organize new files as they arrive.',
  },
  {
    name: 'Is File Sortify compatible with my Mac?',
    text: 'File Sortify is designed exclusively for macOS. It works with all modern Mac computers running macOS and integrates seamlessly with the Mac file system.',
  },
  {
    name: 'How much does File Sortify cost?',
    text: 'File Sortify is available for a one-time purchase of $20 USD. This includes lifetime access, unlimited usage, lifetime updates, and all future features with no subscription required.',
  },
  {
    name: 'Can I undo file organization changes?',
    text: 'Yes, File Sortify includes an Operation History feature that allows you to review and revert file organization actions if needed, ensuring your files are always safe.',
  },
];

// Prepare ProductData for StructuredData component
const fileSortifyProductData: ProductData = {
  name: 'File Sortify',
  description:
    'Automatically organize your Mac files with File Sortify. Smart file management tool with auto-sorting, custom rules, and real-time monitoring for Downloads folder.',
  appStoreUrl: productConfig.appStoreUrl,
  version: '1.0',
  price: '9.99',
  currency: 'USD',
  screenshots: screenshots.map((s) => s.image),
  features: features.map((f) => f.title),
  keywords: [
    'file organizer mac',
    'mac file management',
    'auto file sorter',
    'download folder organizer',
    'file automation mac',
    'file sortify',
  ].join(', '),
  faqs: fileSortifyFAQs,
  testimonials: testimonials as Testimonial[],
  // Product-specific config
  url: siteConfig.url,
  logo: siteConfig.logo,
  email: siteConfig.email,
  stats: siteConfig.stats,
};

// Define BreadcrumbList for StructuredData component
const breadcrumbList = [
  {
    name: 'Home',
    item: siteConfig.url,
  },
  {
    name: 'File Sortify',
    item: `${siteConfig.url}/file-sortify`,
  },
];

export default function Home() {
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
