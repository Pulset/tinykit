import Navigation from '@/app/components/Navigation';
import FeatureCard from '@/app/components/FeatureCard';
import UserAvatar from '@/app/components/UserAvatar';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import SmoothScroll from '@/app/components/SmoothScroll';
import StructuredData, {
  ProductData,
  Testimonial,
} from '@/app/components/StructuredData'; // Import StructuredData and types
import Image from 'next/image';
import { siteConfig, productConfig } from '@/app/data/site-config';
import {
  features,
  howItWorks,
  screenshots,
  testimonials,
} from '@/app/data/page-data';

// Define FAQs specifically for File Sortify page structured data
const fileSortifyFAQS = [
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
  faqs: fileSortifyFAQS,
  testimonials: testimonials as Testimonial[], // Cast to Testimonial[]
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

      {/* Hero Section */}
      <section
        className='gradient-bg text-white py-32'
        aria-labelledby='hero-heading'
      >
        <div className='container mx-auto px-6 text-center'>
          <div className='max-w-4xl mx-auto'>
            {/* <div
              className='bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-8'
              role='status'
              aria-label='Product ranking badge'
            >
              <FontAwesomeIcon
                name='fas fa-star'
                className='inline mr-2'
                aria-hidden='true'
              />
              #1 File Organization Tool on Mac
            </div> */}
            <h1
              id='hero-heading'
              className='text-5xl md:text-7xl font-bold mb-8'
            >
              Sortify Your Files,{' '}
              <span className='text-yellow-300'>Automatically!</span>
            </h1>
            <p
              className='text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed'
              role='doc-subtitle'
            >
              Transform your chaotic Downloads folder into an organized
              paradise. File Sortify intelligently categorizes your files based
              on type, custom rules, and real-time monitoring.
            </p>
            <div className='flex flex-col sm:flex-row gap-6 justify-center mb-12'>
              <a
                href={productConfig.appStoreUrl}
                className='bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 text-lg inline-block'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Download File Sortify on the Mac App Store'
                itemProp='downloadUrl'
              >
                <FontAwesomeIcon
                  name='fab fa-apple'
                  className='inline mr-2'
                  aria-hidden='true'
                />
                Download on the Mac App Store
              </a>
              <a
                href='https://youtu.be/dDRc3kqf3N8'
                className='border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition text-lg'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Watch demo video'
              >
                <FontAwesomeIcon
                  name='fas fa-play-circle'
                  className='inline mr-2'
                  aria-hidden='true'
                />
                Watch Demo
              </a>
            </div>
            {/* <div className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8'>
              <div className='flex -space-x-2'>
                <UserAvatar
                  src='https://picsum.photos/seed/user1/48/48.jpg'
                  alt='User 1'
                  size='medium'
                  className='border-2 border-white'
                />
                <UserAvatar
                  src='https://picsum.photos/seed/user2/48/48.jpg'
                  alt='User 2'
                  size='medium'
                  className='border-2 border-white'
                />
                <UserAvatar
                  src='https://picsum.photos/seed/user3/48/48.jpg'
                  alt='User 3'
                  size='medium'
                  className='border-2 border-white'
                />
                <UserAvatar
                  src='https://picsum.photos/seed/user4/48/48.jpg'
                  alt='User 4'
                  size='medium'
                  className='border-2 border-white'
                />
              </div>
              <div className='text-center'>
                <div className='flex text-yellow-300 justify-center mb-2'>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      name='fas fa-star'
                      className='inline'
                    />
                  ))}
                </div>
                <p className='text-base font-medium'>
                  {siteConfig.stats.happyUsers} happy Mac users
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id='features'
        className='py-20 bg-white'
        aria-labelledby='features-heading'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2
              id='features-heading'
              className='text-4xl font-bold text-gray-800 mb-4'
            >
              Powerful Features
            </h2>
            <p className='text-xl text-gray-600'>
              Everything you need to keep your files perfectly organized
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id='how-it-works'
        className='py-20 bg-gray-50'
        aria-labelledby='how-it-works-heading'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2
              id='how-it-works-heading'
              className='text-4xl font-bold text-gray-800 mb-4'
            >
              How It Works
            </h2>
            <p className='text-xl text-gray-600'>
              Get organized in 3 simple steps
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {howItWorks.map((step, index) => (
              <article
                key={index}
                className='text-center group'
                itemScope
                itemType='https://schema.org/HowToStep'
              >
                <div
                  className={`btn-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:btn-purple-700 transition-colors`}
                  aria-label={`Step ${step.step}`}
                >
                  {step.step}
                </div>
                <h3
                  className='text-xl font-semibold text-gray-800 mb-3'
                  itemProp='name'
                >
                  {step.title}
                </h3>
                <p className='text-gray-600 mb-6' itemProp='text'>
                  {step.description}
                </p>
                <div className='relative mx-auto max-w-sm'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.gradientColors} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform`}
                  ></div>
                  <div className='relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform'>
                    <Image
                      src={step.image}
                      alt={`${step.title} Interface`}
                      width={800}
                      height={600}
                      className='w-full h-auto'
                      loading='lazy'
                      itemProp='image'
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section
        id='screenshots'
        className='py-20 bg-white'
        aria-labelledby='screenshots-heading'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2
              id='screenshots-heading'
              className='text-4xl font-bold text-gray-800 mb-4'
            >
              Beautiful & Intuitive Interface
            </h2>
            <p className='text-xl text-gray-600'>
              Designed exclusively for macOS
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {screenshots.map((screenshot, index) => (
              <article
                key={index}
                className='rounded-2xl overflow-hidden shadow-xl'
                itemScope
                itemType='https://schema.org/ImageObject'
              >
                <Image
                  src={screenshot.image}
                  alt={screenshot.title}
                  width={1200}
                  height={800}
                  className='w-full'
                  loading='lazy'
                  itemProp='contentUrl'
                />
                <div className='p-4 bg-gray-50'>
                  <h3 className='font-semibold text-gray-800' itemProp='name'>
                    {screenshot.title}
                  </h3>
                  <p className='text-sm text-gray-600' itemProp='description'>
                    {screenshot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id='pricing'
        className='py-20 hero-gradient'
        aria-labelledby='pricing-heading'
        itemScope
        itemType='https://schema.org/Offer'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2
              id='pricing-heading'
              className='text-4xl font-bold text-gray-800 mb-4'
            >
              One-Time Purchase
            </h2>
            <p className='text-xl text-gray-700'>
              Get lifetime access to File Sortify
            </p>
          </div>
          <div className='max-w-md mx-auto'>
            {/* Lifetime License */}
            <div
              className='btn-purple-600 text-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition relative'
              itemScope
              itemType='https://schema.org/Product'
            >
              <meta itemProp='name' content='File Sortify Lifetime License' />
              <meta
                itemProp='description'
                content='Lifetime access to File Sortify with all features and updates'
              />
              <meta
                itemProp='image'
                content='https://cdn.tinykit.app/file-sortify/images/logo.png'
              />
              <div
                itemProp='offers'
                itemScope
                itemType='https://schema.org/Offer'
              >
                <meta itemProp='price' content='9.99' />
                <meta itemProp='priceCurrency' content='USD' />
                <meta
                  itemProp='availability'
                  content='https://schema.org/InStock'
                />
                <meta itemProp='url' content={productConfig.appStoreUrl} />
                <meta itemProp='priceValidUntil' content='2026-12-31' />
              </div>
              <div
                itemProp='aggregateRating'
                itemScope
                itemType='https://schema.org/AggregateRating'
              >
                <meta itemProp='ratingValue' content='5' />
                <meta itemProp='ratingCount' content='500' />
                <meta itemProp='bestRating' content='5' />
              </div>
              <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold'>
                {productConfig.pricing.lifetime.badge}
              </div>
              <h3 className='text-2xl font-bold mb-4'>
                {productConfig.pricing.lifetime.title}
              </h3>
              <div className='text-4xl font-bold mb-6'>
                {productConfig.pricing.lifetime.price}
                <span className='text-lg text-purple-200'>
                  {productConfig.pricing.lifetime.period}
                </span>
              </div>
              <ul className='space-y-3 mb-8'>
                {productConfig.pricing.lifetime.features.map(
                  (feature, index) => (
                    <li key={index} className='flex items-center'>
                      <FontAwesomeIcon
                        name='fas fa-check'
                        className='text-green-300 mr-3'
                      />
                      {feature}
                    </li>
                  )
                )}
              </ul>
              <a
                href={productConfig.appStoreUrl}
                className='w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block text-center'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon name='fab fa-apple' className='inline mr-2' />
                Buy for $9.99
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        className='py-20 bg-white'
        aria-labelledby='testimonials-heading'
      >
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2
              id='testimonials-heading'
              className='text-4xl font-bold text-gray-800 mb-4'
            >
              Loved by Mac Users
            </h2>
            <p className='text-xl text-gray-600'>
              See what our customers are saying
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className='bg-gray-50 p-8 rounded-2xl'
                itemScope
                itemType='https://schema.org/Review'
              >
                <div
                  itemProp='itemReviewed'
                  itemScope
                  itemType='https://schema.org/SoftwareApplication'
                >
                  <meta itemProp='name' content='File Sortify' />
                  <meta itemProp='operatingSystem' content='macOS' />
                  <meta
                    itemProp='applicationCategory'
                    content='UtilitiesApplication'
                  />
                  <div
                    itemProp='offers'
                    itemScope
                    itemType='https://schema.org/Offer'
                  >
                    <meta itemProp='price' content='9.99' />
                    <meta itemProp='priceCurrency' content='USD' />
                  </div>
                  <div
                    itemProp='aggregateRating'
                    itemScope
                    itemType='https://schema.org/AggregateRating'
                  >
                    <meta itemProp='ratingValue' content='5' />
                    <meta itemProp='ratingCount' content='500' />
                  </div>
                </div>
                <div
                  className='flex text-yellow-400 mb-4'
                  aria-label='5 star rating'
                >
                  <div
                    itemProp='reviewRating'
                    itemScope
                    itemType='https://schema.org/Rating'
                  >
                    <meta itemProp='ratingValue' content='5' />
                    <meta itemProp='bestRating' content='5' />
                  </div>
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      name='fas fa-star'
                      className='inline'
                      aria-hidden='true'
                    />
                  ))}
                </div>
                <p className='text-gray-700 mb-4' itemProp='reviewBody'>
                  {testimonial.content}
                </p>
                <div
                  className='flex items-center'
                  itemProp='author'
                  itemScope
                  itemType='https://schema.org/Person'
                >
                  <UserAvatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='mr-4'
                  />
                  <div>
                    <p className='font-semibold text-gray-800' itemProp='name'>
                      {testimonial.name}
                    </p>
                    <p className='text-sm text-gray-600' itemProp='jobTitle'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className='py-20 gradient-bg text-white'
        aria-labelledby='cta-heading'
      >
        <div className='container mx-auto px-6 text-center'>
          <h2 id='cta-heading' className='text-4xl font-bold mb-6'>
            Ready to Organize Your Digital Life?
          </h2>
          <p className='text-xl mb-8 text-gray-100'>
            Join thousands of Mac users who've simplified their file management
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href={productConfig.appStoreUrl}
              className='bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-block'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Download File Sortify on Mac App Store'
            >
              <FontAwesomeIcon
                name='fab fa-apple'
                className='inline mr-2'
                aria-hidden='true'
              />
              Download on Mac App Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8' role='contentinfo'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center mb-4 md:mb-0'>
              <Image
                src={siteConfig.logo}
                alt='File Sortify Logo'
                width={30}
                height={30}
                className='mr-3'
              />
              <span className='text-2xl font-bold text-gray-400'>
                File Sortify
              </span>
            </div>
            <nav
              className='flex items-center space-x-6'
              aria-label='Footer navigation'
            >
              <a
                href={`mailto:${siteConfig.email}`}
                className='text-gray-400 hover:text-white transition'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Contact us via email'
              >
                <FontAwesomeIcon
                  name='fas fa-envelope'
                  className='mr-2'
                  aria-hidden='true'
                />
                {siteConfig.email}
              </a>
              <a
                href='/file-sortify/privacy'
                className='text-gray-400 hover:text-white transition'
                aria-label='View privacy policy'
              >
                <FontAwesomeIcon
                  name='fas fa-shield-alt'
                  className='mr-2'
                  aria-hidden='true'
                />
                Privacy Policy
              </a>
            </nav>
          </div>
          <div className='border-t border-gray-800 mt-6 pt-6 text-center text-gray-400'>
            <p>
              &copy; {new Date().getFullYear()} File Sortify. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
