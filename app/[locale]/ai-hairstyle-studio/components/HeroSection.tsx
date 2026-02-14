import Image from 'next/image';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import type { ProductConfig } from '../data/site-config';

interface HeroSectionProps {
  productConfig: ProductConfig;
}

export default function HeroSection({ productConfig }: HeroSectionProps) {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Soft Pastel Background Elements - Decorative only */}
      <div
        className='absolute top-0 left-0 w-full h-full overflow-hidden z-0'
        aria-hidden='true'
      >
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
              before you commit to a cut.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
              <a
                href={productConfig.appStoreUrl}
                className='group relative px-8 py-4 bg-gradient-to-r from-[#d63384] to-[#e83e8c] rounded-full font-bold text-white shadow-lg shadow-[#d63384]/25 hover:shadow-[#d63384]/40 transition-all hover:scale-105 active:scale-95'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Download AI Hairstyle Studio on App Store'
              >
                <span className='flex items-center justify-center gap-2'>
                  <FontAwesomeIcon name='fab fa-apple' className='text-xl' />
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
                  <Image
                    src='https://cdn.tinykit.app/hairstyle/images/step3.png'
                    alt='AI Hairstyle Studio app screenshot showing virtual hairstyle try-on result with side-by-side comparison of original and transformed hair'
                    width={800}
                    height={600}
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
  );
}
