import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { productConfig } from '../data/site-config';

export default function CTASection() {
  return (
    <section
      className='py-20 gradient-bg text-white'
      aria-labelledby='cta-heading'
    >
      <div className='container mx-auto px-6 text-center'>
        <h2 id='cta-heading' className='text-4xl font-bold mb-6'>
          Ready to Organize Your Digital Life?
        </h2>
        <p className='text-xl mb-8 text-gray-100'>
          Join thousands of Mac users who&apos;ve simplified their file
          management
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
  );
}
