import Link from 'next/link';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import Image from 'next/image';
import { siteConfig } from '@/app/data/site-config';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50'>
      {/* Header */}
      <header className='container mx-auto px-6 py-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center'>
              <span className='text-2xl font-bold text-white'>T</span>
            </div>
            <h1 className='text-2xl font-bold text-gray-800'>TinyKit</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className='container mx-auto px-6 py-12 md:py-20'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6'>
            Productivity Apps for Mac
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover our collection of powerful, beautiful, and easy-to-use Mac
            applications designed to boost your productivity.
          </p>
        </div>

        {/* Products Grid */}
        <div className='max-w-4xl mx-auto'>
          {/* File Sortify Card */}
          <Link
            href='/file-sortify'
            className='block bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 mb-6 md:mb-8 hover:scale-[1.02]'
          >
            <div className='flex flex-col sm:flex-row items-start sm:space-x-6 space-y-4 sm:space-y-0'>
              <div className='w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md p-3'>
                <Image
                  src={siteConfig.logo}
                  alt='File Sortify Logo'
                  width={80}
                  height={80}
                  className='w-full h-full object-contain'
                />
              </div>
              <div className='flex-1 w-full'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3'>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    File Sortify
                  </h3>
                  <span className='bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit'>
                    Available Now
                  </span>
                </div>
                <p className='text-gray-600 text-base md:text-lg mb-4'>
                  Smart file organization for Mac. Automatically sort and
                  organize your files with custom rules and real-time
                  monitoring.
                </p>
                <div className='flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500'>
                  <div className='flex items-center space-x-1'>
                    <FontAwesomeIcon
                      name='fas fa-star'
                      className='text-yellow-400'
                    />
                    <span className='font-semibold text-gray-700'>5.0</span>
                  </div>
                  <span className='hidden sm:inline'>•</span>
                  <span>$20 one-time</span>
                  <span className='hidden sm:inline'>•</span>
                  <span>macOS</span>
                </div>
              </div>
              <div className='hidden sm:flex items-center text-purple-600'>
                <span className='text-2xl'>→</span>
              </div>
            </div>
          </Link>

          {/* Coming Soon Card - Placeholder for future apps */}
          <div className='bg-gray-50 rounded-2xl md:rounded-3xl border-2 border-dashed border-gray-300 p-6 md:p-8 text-center'>
            <div className='w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4'>
              <span className='text-4xl text-gray-400'>+</span>
            </div>
            <h3 className='text-lg md:text-xl font-bold text-gray-400 mb-2'>
              More Apps Coming Soon
            </h3>
            <p className='text-sm md:text-base text-gray-500'>
              We are working on more productivity tools for Mac users. Stay
              tuned!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='container mx-auto px-6 py-8 md:py-12 mt-12 md:mt-20 border-t border-gray-200'>
        <div className='text-center text-gray-600'>
          <p className='mb-4 text-sm md:text-base'>
            © {new Date().getFullYear()} TinyKit. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
