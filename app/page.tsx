import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50'>
      {/* Header */}
      <header className='container mx-auto px-6 py-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 rounded-xl flex items-center justify-center'>
              <Image
                src='/tinykit-logo.png'
                alt='TinyKit Logo'
                width={48}
                height={48}
                className='w-full h-full object-contain rounded-xl'
              />
            </div>
            <p className='text-2xl font-bold text-gray-800'>TinyKit</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className='container mx-auto px-6 py-12 md:py-20'>
        <div className='text-center mb-12 md:mb-16'>
          <h1 className='text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6'>
            Crafting Minimalist & Practical Apps
          </h1>
          <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
            Discover TinyKit, where we build simple, beautiful, and effective
            tools designed to streamline your daily digital life without the
            clutter.
          </p>
        </div>

        {/* Products Grid */}
        <div className='max-w-4xl mx-auto'>
          {/* File Sortify Card */}
          <Link
            href='/file-sortify'
            className='group block bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 mb-6 md:mb-8 hover:scale-[1.02]'
          >
            <div className='flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0'>
              <div
                className='w-20 h-20 flex-shrink-0 overflow-hidden'
                style={{
                  borderRadius: '20px',
                  boxShadow:
                    '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src='https://cdn.tinykit.app/file-sortify/images/fileSortify-logo.png'
                  alt='File Sortify Logo'
                  width={80}
                  height={80}
                  className='w-full h-full object-cover'
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
              </div>
              <div className='hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 transition-all duration-300 group-hover:bg-purple-100'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </div>
            </div>
          </Link>

          {/* AI Hairstyle Card */}
          <Link
            href='/ai-hairstyle-studio'
            className='group block bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 md:p-8 mb-6 md:mb-8 hover:scale-[1.02]'
          >
            <div className='flex flex-col sm:flex-row items-start sm:items-center sm:space-x-6 space-y-4 sm:space-y-0'>
              <div
                className='w-20 h-20 flex-shrink-0 overflow-hidden'
                style={{
                  borderRadius: '20px',
                  boxShadow:
                    '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Image
                  src='https://cdn.tinykit.app/hairstyle/images/logo.png'
                  alt='AI Hairstyle Logo'
                  width={80}
                  height={80}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='flex-1 w-full'>
                <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3'>
                  <h3 className='text-2xl md:text-3xl font-bold text-gray-800'>
                    AI Hairstyle
                  </h3>
                  {/* <span className='bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit'>
                    In Development
                  </span> */}
                  <span className='bg-green-100 text-green-700 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full w-fit'>
                    Available Now
                  </span>
                </div>
                <p className='text-gray-600 text-base md:text-lg mb-4'>
                  New &apos;Do, New You. Try on hundreds of hairstyles instantly
                  with AI. Experiment with different cuts, colors, and styles
                  risk-free.
                </p>
              </div>
              <div className='hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-purple-50 text-purple-600 transition-all duration-300 group-hover:bg-purple-100'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
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
              We are working on more productivity tools for you. Stay tuned!
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
