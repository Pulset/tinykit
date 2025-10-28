import Navigation from '@/app/components/Navigation';
import FeatureCard from '@/app/components/FeatureCard';
import UserAvatar from '@/app/components/UserAvatar';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import SmoothScroll from '@/app/components/SmoothScroll';
import { siteConfig, productConfig } from '@/app/data/site-config';
import {
  features,
  howItWorks,
  screenshots,
  testimonials,
} from '@/app/data/page-data';

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navigation />

      {/* Hero Section */}
      <section className='gradient-bg text-white py-32' aria-label="Hero section">
        <div className='container mx-auto px-6 text-center'>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-8' role="banner">
              <FontAwesomeIcon name='fas fa-star' className='inline mr-2' aria-hidden="true" />
              #1 File Organization Tool on Mac
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-8'>
              Sortify Your Files,{' '}
              <span className='text-yellow-300'>Automatically!</span>
            </h1>
            <p className='text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed'>
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
                aria-label="Download File Sortify on the Mac App Store"
              >
                <FontAwesomeIcon name='fab fa-apple' className='inline mr-2' aria-hidden="true" />
                Download on the Mac App Store
              </a>
            </div>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8'>
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
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-white' aria-labelledby="features-heading">
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 id='features-heading' className='text-4xl font-bold text-gray-800 mb-4'>
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
      <section id='how-it-works' className='py-20 bg-gray-50' aria-labelledby="how-it-works-heading">
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 id='how-it-works-heading' className='text-4xl font-bold text-gray-800 mb-4'>
              How It Works
            </h2>
            <p className='text-xl text-gray-600'>
              Get organized in 3 simple steps
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {howItWorks.map((step, index) => (
              <div key={index} className='text-center group'>
                <div
                  className={`btn-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:btn-purple-700 transition-colors`}
                >
                  {step.step}
                </div>
                <h3 className='text-xl font-semibold text-gray-800 mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-600 mb-6'>{step.description}</p>
                <div className='relative mx-auto max-w-sm'>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.gradientColors} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform`}
                  ></div>
                  <div className='relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform'>
                    <img
                      src={step.image}
                      alt={`${step.title} Interface`}
                      className='w-full h-auto'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id='screenshots' className='py-20 bg-white' aria-labelledby="screenshots-heading">
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 id='screenshots-heading' className='text-4xl font-bold text-gray-800 mb-4'>
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
              >
                <img
                  src={screenshot.image}
                  alt={screenshot.title}
                  className='w-full'
                  loading="lazy"
                />
                <div className='p-4 bg-gray-50'>
                  <h4 className='font-semibold text-gray-800'>
                    {screenshot.title}
                  </h4>
                  <p className='text-sm text-gray-600'>
                    {screenshot.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='pricing' className='py-20 hero-gradient' aria-labelledby="pricing-heading">
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 id='pricing-heading' className='text-4xl font-bold text-gray-800 mb-4'>
              One-Time Purchase
            </h2>
            <p className='text-xl text-gray-700'>
              Get lifetime access to File Sortify
            </p>
          </div>
          <div className='max-w-md mx-auto'>
            {/* Lifetime License */}
            <div className='btn-purple-600 text-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition relative'>
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
                Buy for $20
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-20 bg-white' aria-labelledby="testimonials-heading">
        <div className='container mx-auto px-6'>
          <div className='text-center mb-16'>
            <h2 id='testimonials-heading' className='text-4xl font-bold text-gray-800 mb-4'>
              Loved by Mac Users
            </h2>
            <p className='text-xl text-gray-600'>
              See what our customers are saying
            </p>
          </div>
          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <article key={index} className='bg-gray-50 p-8 rounded-2xl'>
                <div className='flex text-yellow-400 mb-4' aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      name='fas fa-star'
                      className='inline'
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className='text-gray-700 mb-4'>{testimonial.content}</p>
                <div className='flex items-center'>
                  <UserAvatar
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className='mr-4'
                  />
                  <div>
                    <p className='font-semibold text-gray-800'>
                      {testimonial.name}
                    </p>
                    <p className='text-sm text-gray-600'>{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 gradient-bg text-white' aria-label="Call to action">
        <div className='container mx-auto px-6 text-center'>
          <h2 className='text-4xl font-bold mb-6'>
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
              aria-label="Download File Sortify on Mac App Store"
            >
              <FontAwesomeIcon name='fab fa-apple' className='inline mr-2' aria-hidden="true" />
              Download on Mac App Store
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-white py-8' role="contentinfo">
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='flex items-center mb-4 md:mb-0'>
              <img
                src={siteConfig.logo}
                alt='File Sortify Logo'
                className='mr-3'
                style={{ width: '30px', height: 'auto' }}
                width="30"
                height="30"
              />
              <span className='text-2xl font-bold text-gray-400'>
                File Sortify
              </span>
            </div>
            <nav className='flex items-center space-x-6' aria-label="Footer navigation">
              <a
                href={`mailto:${siteConfig.email}`}
                className='text-gray-400 hover:text-white transition'
                target='_blank'
                rel='noopener noreferrer'
                aria-label="Contact us via email"
              >
                <FontAwesomeIcon name='fas fa-envelope' className='mr-2' aria-hidden="true" />
                {siteConfig.email}
              </a>
              <a
                href='/privacy'
                className='text-gray-400 hover:text-white transition'
                aria-label="View privacy policy"
              >
                <FontAwesomeIcon name='fas fa-shield-alt' className='mr-2' aria-hidden="true" />
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
