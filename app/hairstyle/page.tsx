import HairstyleNavigation from './components/HairstyleNavigation';
import BeforeAfterComparison from './components/BeforeAfterComparison';
import FeatureCard from '@/app/components/FeatureCard';
import UserAvatar from '@/app/components/UserAvatar';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import SmoothScroll from '@/app/components/SmoothScroll';
import StructuredData, {
  ProductData,
  Testimonial,
} from '@/app/components/StructuredData';
import { siteConfig, productConfig } from './data/site-config';
import { features, howItWorks, testimonials } from './data/page-data';
import { Metadata } from 'next';

// Define FAQs for AI Hairstyle Studio page structured data
const aiHairstyleFAQS = [
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
    'Transform your look with AI Hairstyle Studio. Try on hundreds of hairstyles instantly using advanced AI technology. See yourself with different hair colors, lengths, and styles before making the cut.',
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
  faqs: aiHairstyleFAQS,
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
    item: `https://www.tinykit.app/hairstyle`,
  },
];

export const metadata: Metadata = {
  title: 'AI Hairstyle Studio - Virtual Hairstyle Try On & Hair Color Changer',
  description:
    'Try on hundreds of hairstyles and hair colors virtually with AI Hairstyle Studio. The #1 AI hair makeover app to transform your look instantly.',
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
    title:
      'AI Hairstyle Studio - Virtual Hairstyle Try On & Hair Color Changer',
    description:
      'Transform your look instantly with advanced AI. Try on hundreds of hairstyles and colors before you commit.',
    url: 'https://www.tinykit.app/hairstyle',
    siteName: 'TinyKit',
    images: [
      {
        url: 'https://cdn.tinykit.app/ai-hairstyle/images/preview.png',
        width: 1200,
        height: 630,
        alt: 'AI Hairstyle Studio App Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Hairstyle Studio - Virtual Hairstyle Try On',
    description:
      'Transform your look instantly with advanced AI. Try on hundreds of hairstyles and colors.',
    images: ['https://cdn.tinykit.app/ai-hairstyle/images/preview.png'],
  },
  alternates: {
    canonical: 'https://www.tinykit.app/hairstyle',
  },
};

// Helper function to generate pastel colors for features
function getFeatureColor(index: number) {
  const colors = [
    { bgColor: '#ffd6e0', iconColor: '#d63384' }, // Soft pink
    { bgColor: '#e6d5f7', iconColor: '#9775fa' }, // Soft lavender
    { bgColor: '#d4e5ff', iconColor: '#5c7cfa' }, // Soft blue
    { bgColor: '#c3fae8', iconColor: '#20c997' }, // Soft mint
    { bgColor: '#ffe8cc', iconColor: '#fd7e14' }, // Soft peach
    { bgColor: '#e5dbff', iconColor: '#7950f2' }, // Soft purple
  ];
  return colors[index % colors.length];
}

// Helper functions for step gradients and shadows
function getStepGradient(index: number) {
  const gradients = [
    'from-[#ffd6e0] to-[#e83e8c]', // Pink gradient
    'from-[#e6d5f7] to-[#9775fa]', // Lavender gradient
    'from-[#d4e5ff] to-[#5c7cfa]', // Blue gradient
  ];
  return gradients[index % gradients.length];
}

function getStepShadow(index: number) {
  const shadows = [
    'rgba(214, 51, 132, 0.25)', // Pink shadow
    'rgba(151, 117, 250, 0.25)', // Lavender shadow
    'rgba(92, 124, 250, 0.25)', // Blue shadow
  ];
  return shadows[index % shadows.length];
}

export default function HairstylePage() {
  return (
    <>
      <SmoothScroll />
      <HairstyleNavigation />
      {/* Structured Data for AI Hairstyle Studio Product Page */}
      <StructuredData
        productData={aiHairstyleProductData}
        breadcrumbList={breadcrumbList}
      />

      {/* Main Content Wrapper with soft pastel theme */}
      <main className='bg-[#fdfbf8] text-gray-800 selection:bg-pink-200 selection:text-gray-800 overflow-x-hidden'>
        {/* Hero Section */}
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
          {/* Soft Pastel Background Elements */}
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'>
            <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ffd6e0] rounded-full mix-blend-multiply filter blur-[128px] opacity-60 animate-blob'></div>
            <div className='absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#e6d5f7] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-2000'></div>
            <div className='absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-[#fce4ec] rounded-full mix-blend-multiply filter blur-[128px] opacity-50 animate-blob animation-delay-4000'></div>
          </div>

          <div className='container mx-auto px-6 relative z-10 pt-20'>
            <div className='flex flex-col lg:flex-row items-center gap-12'>
              <div className='flex-1 text-center lg:text-left'>
                <div className='inline-block px-4 py-2 mb-6 rounded-full bg-white/80 backdrop-blur-md border border-pink-200 text-[#d63384] font-medium text-sm animate-fade-in-up'>
                  ✨ The #1 AI Hairstyle App
                </div>
                <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-800'>
                  New{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#d63384] via-[#e83e8c] to-[#9775fa]'>
                    &apos;Do
                  </span>
                  , <br />
                  New{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#e83e8c] via-[#d63384] to-[#f06595]'>
                    You.
                  </span>
                </h1>
                <p className='text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
                  Transform your look instantly with our advanced AI. Try on
                  hundreds of salon-quality hairstyles and colors in real-time
                  before you commit to the cut.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                  <a
                    href={productConfig.appStoreUrl}
                    className='group relative px-8 py-4 bg-gradient-to-r from-[#d63384] to-[#e83e8c] rounded-full font-bold text-white shadow-lg shadow-[#d63384]/25 hover:shadow-[#d63384]/40 transition-all hover:scale-105 active:scale-95'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Download AI Hairstyle Studio on the App Store'
                  >
                    <span className='flex items-center justify-center gap-2'>
                      <FontAwesomeIcon
                        name='fab fa-apple'
                        className='text-xl'
                      />
                      Download Now
                    </span>
                    <div className='absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity'></div>
                  </a>
                  <a
                    href='#how-it-works'
                    className='px-8 py-4 rounded-full font-bold text-gray-700 border border-pink-200 bg-white/80 backdrop-blur-sm hover:bg-pink-50 hover:border-pink-300 transition-all hover:scale-105'
                    aria-label='See how AI Hairstyle Studio works'
                  >
                    <span className='flex items-center justify-center gap-2'>
                      <FontAwesomeIcon
                        name='fas fa-play'
                        className='text-sm text-pink-500'
                      />
                      See How It Works
                    </span>
                  </a>
                </div>
              </div>

              {/* Floating Hero Visuals */}
              <div className='flex-1 relative w-full max-w-lg lg:max-w-none'>
                <div className='relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-pink-200 shadow-2xl shadow-[#d63384]/10 bg-white/80 backdrop-blur-xl'>
                  {/* Abstract UI Representation */}
                  <div className='absolute inset-0 bg-gradient-to-br from-white to-pink-50 p-6 flex flex-col items-center'>
                    <div className='w-full h-full rounded-2xl overflow-hidden relative group'>
                      <img
                        src='https://cdn.tinykit.app/ai-hairstyle/images/preview.png'
                        alt='AI Hairstyle Studio App Interface showing virtual try-on result'
                        className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                      />
                      {/* Overlay UI elements */}
                      <div className='absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-pink-200 flex items-center justify-between'>
                        <div className='flex gap-2'>
                          <div className='w-8 h-8 rounded-full bg-[#d63384] border-2 border-white shadow-sm'></div>
                          <div className='w-8 h-8 rounded-full bg-[#9775fa] border-2 border-white opacity-80 shadow-sm'></div>
                          <div className='w-8 h-8 rounded-full bg-[#ffd6e0] border-2 border-white opacity-70 shadow-sm'></div>
                        </div>
                        <div className='text-gray-700 ml-auto'>
                          <FontAwesomeIcon
                            name='fas fa-check-circle'
                            className='text-green-500 mr-2'
                          />
                          <span className='text-sm font-medium'>Applied</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Cards */}
                <div className='absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-pink-200 shadow-xl animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-[#e6d5f7] flex items-center justify-center text-[#9775fa]'>
                      <FontAwesomeIcon name='fas fa-magic' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>AI Accuracy</p>
                      <p className='text-lg font-bold text-gray-800'>99.8%</p>
                    </div>
                  </div>
                </div>

                <div className='absolute -top-6 -right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-pink-200 shadow-xl animate-float animation-delay-2000'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-full bg-[#ffd6e0] flex items-center justify-center text-[#d63384]'>
                      <FontAwesomeIcon name='fas fa-heart' />
                    </div>
                    <div>
                      <p className='text-xs text-gray-500'>Loved by</p>
                      <p className='text-lg font-bold text-gray-800'>50K+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Before/After Comparison Section */}
        <section
          id='magic'
          className='py-24 relative bg-gradient-to-b from-[#fdfbf8] to-white/80 overflow-hidden'
        >
          {/* Decorative Background Elements */}
          <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none'>
            <div className='absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-[#ffd6e0] rounded-full mix-blend-multiply filter blur-[96px] opacity-40'></div>
            <div className='absolute bottom-[10%] left-[-5%] w-[350px] h-[350px] bg-[#e6d5f7] rounded-full mix-blend-multiply filter blur-[96px] opacity-40'></div>
          </div>

          <div className='container mx-auto relative z-10'>
            <BeforeAfterComparison
              beforeImage='/hairstyle-before.png'
              afterImage='/hairstyle-after.png'
              beforeLabel='Before'
              afterLabel='After'
            />
          </div>
        </section>

        {/* Features Section - Soft Pastel Cards */}
        <section id='features' className='py-24 relative bg-white/50'>
          <div className='container mx-auto px-6'>
            <div className='text-center mb-20'>
              <h2 className='text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#d63384] via-[#e83e8c] to-[#9775fa]'>
                Magical Features
              </h2>
              <p className='text-gray-600 text-lg'>
                Everything you need to find your perfect look
              </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className='group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-pink-100 hover:bg-white hover:shadow-lg hover:border-pink-200 transition-all duration-300 hover:-translate-y-2'
                >
                  <div
                    className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                    style={{
                      backgroundColor: getFeatureColor(index).bgColor,
                      color: getFeatureColor(index).iconColor,
                    }}
                  >
                    <FontAwesomeIcon name={feature.icon as any} />
                  </div>
                  <h3 className='text-xl font-bold mb-3 text-gray-800'>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed'>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works - Visual Path */}
        <section
          id='how-it-works'
          className='py-24 bg-gradient-to-b from-white/50 to-[#fdfbf8]'
        >
          <div className='container mx-auto px-6'>
            <div className='text-center mb-20'>
              <h2 className='text-4xl font-bold mb-4 text-gray-800'>
                Simple Steps
              </h2>
              <p className='text-gray-600 text-lg'>3 steps to your new style</p>
            </div>

            <div className='grid md:grid-cols-3 gap-12 relative'>
              {/* Connecting Line (Desktop) */}
              <div className='hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#ffd6e0] via-[#e6d5f7] to-[#ffd6e0]'></div>

              {howItWorks.map((step, index) => (
                <div
                  key={index}
                  className='relative z-10 flex flex-col items-center text-center group'
                >
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${getStepGradient(
                      index
                    )} p-1 shadow-lg mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
                    style={{
                      boxShadow: `0 10px 25px -5px ${getStepShadow(index)}`,
                    }}
                  >
                    <div className='w-full h-full bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 relative overflow-hidden border border-pink-100'>
                      <span className='relative z-10'>{step.step}</span>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getStepGradient(
                          index
                        )} opacity-10`}
                      ></div>
                    </div>
                  </div>

                  <h3 className='text-2xl font-bold mb-4 text-gray-800'>
                    {step.title}
                  </h3>
                  <p className='text-gray-600 mb-8 max-w-xs mx-auto'>
                    {step.description}
                  </p>

                  <div className='w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border border-pink-200 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white relative cursor-pointer'>
                    <img
                      src={step.image}
                      alt={`Step ${step.step}: ${step.title} - ${step.description}`}
                      className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                      loading='lazy'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-800/80 via-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                      <h3 className='text-lg font-bold text-white mb-1'>
                        {step.title}
                      </h3>
                      <p className='text-xs text-gray-200'>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className='py-24 bg-gradient-to-b from-[#fdfbf8] to-white/50'>
          <div className='container mx-auto px-6'>
            <h2 className='text-4xl font-bold mb-16 text-center text-gray-800'>
              User Love
            </h2>
            <div className='grid md:grid-cols-3 gap-8'>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className='bg-white/80 p-8 rounded-2xl border border-pink-100 shadow-lg hover:shadow-xl transition-shadow relative backdrop-blur-sm'
                >
                  <FontAwesomeIcon
                    name='fas fa-quote-left'
                    className='text-4xl text-pink-200 absolute top-6 right-6 opacity-60'
                  />
                  <div className='flex items-center mb-6'>
                    <UserAvatar
                      src={t.avatar}
                      alt={`Avatar of ${t.name}`}
                      className='w-12 h-12 mr-4 border-2 border-[#d63384]'
                    />
                    <div>
                      <h4 className='font-bold text-gray-800'>{t.name}</h4>
                      <p className='text-xs text-[#d63384]'>{t.role}</p>
                    </div>
                  </div>
                  <p className='text-gray-600 leading-relaxed italic'>
                    "{t.content}"
                  </p>
                  <div className='flex text-yellow-500 mt-4 text-sm gap-1'>
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} name='fas fa-star' />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing - Premium Card */}
        <section id='pricing' className='py-24 relative bg-white/50'>
          <div className='container mx-auto px-6'>
            <div className='max-w-md mx-auto relative group'>
              {/* Soft Glow Effect */}
              <div className='absolute -inset-1 bg-gradient-to-r from-[#ffd6e0] via-[#e6d5f7] to-[#ffd6e0] rounded-3xl blur opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200'></div>

              <div className='relative bg-white rounded-[22px] p-10 ring-1 ring-pink-200 text-center shadow-xl'>
                <div className='absolute top-0 right-0 p-4'>
                  <span className='bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                    {productConfig.pricing.free.badge}
                  </span>
                </div>

                <h3 className='text-2xl font-bold text-gray-800 mb-2'>
                  {productConfig.pricing.free.title}
                </h3>
                <div className='flex items-baseline justify-center mb-8'>
                  <span className='text-5xl font-bold text-gray-800 tracking-tight'>
                    {productConfig.pricing.free.price}
                  </span>
                  <span className='text-xl text-gray-600 ml-2'>
                    {productConfig.pricing.free.period}
                  </span>
                </div>

                <ul className='space-y-4 mb-10 text-left'>
                  {productConfig.pricing.free.features.map((feature, index) => (
                    <li key={index} className='flex items-center text-gray-600'>
                      <div className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 text-xs'>
                        <FontAwesomeIcon name='fas fa-check' />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={productConfig.appStoreUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='block w-full py-4 text-center rounded-xl bg-gradient-to-r from-[#d63384] to-[#e83e8c] text-white font-bold text-lg hover:from-[#e83e8c] hover:to-[#d63384] transition-all shadow-lg hover:shadow-xl transform hover:scale-105'
                  aria-label='Download AI Hairstyle Studio for free'
                >
                  <span className='flex items-center justify-center gap-2'>
                    <FontAwesomeIcon name='fab fa-apple' className='text-xl' />
                    Download Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className='py-12 border-t border-pink-200 bg-gradient-to-b from-white/50 to-[#fdfbf8]'>
          <div className='container mx-auto px-6 text-center'>
            <div className='flex items-center justify-center gap-3 mb-8'>
              <img
                src='/hairstyle-logo.png'
                alt='AI Hairstyle Studio Logo'
                className='w-8 h-8 rounded-lg'
              />
              <span className='text-xl font-bold text-gray-800'>
                AI Hairstyle Studio
              </span>
            </div>
            <div className='flex justify-center gap-8 mb-8 text-gray-600'>
              <a
                href={productConfig.appStoreUrl}
                className='hover:text-[#d63384] transition'
              >
                Download
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className='hover:text-[#d63384] transition'
              >
                Support
              </a>
              <a
                href='/hairstyle/privacy'
                className='hover:text-[#d63384] transition'
              >
                Privacy Policy
              </a>
              <a
                href='/hairstyle/terms'
                className='hover:text-[#d63384] transition'
              >
                Terms of Service
              </a>
            </div>
            <p className='text-gray-500 text-sm'>
              &copy; {new Date().getFullYear()} AI Hairstyle Studio. Built with
              ❤️ by TinyKit.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
