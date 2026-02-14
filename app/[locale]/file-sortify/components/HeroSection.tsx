'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { productConfig } from '../data/site-config';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('FileSortify.hero');
  return (
    <section
      className='gradient-bg text-white py-32'
      aria-labelledby='hero-heading'
    >
      <div className='container mx-auto px-6 text-center'>
        <div className='max-w-4xl mx-auto'>
          <h1 id='hero-heading' className='text-5xl md:text-7xl font-bold mb-8'>
            {t('title')}
          </h1>
          <p
            className='text-xl md:text-2xl mb-12 text-gray-100 leading-relaxed'
            role='doc-subtitle'
          >
            {t('subtitle')}
          </p>
          <div className='flex flex-col sm:flex-row gap-6 justify-center mb-12'>
            <a
              href={productConfig.appStoreUrl}
              className='bg-white text-purple-600 px-10 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 text-lg inline-block'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t('ctaDownloadAria')}
              itemProp='downloadUrl'
            >
              <FontAwesomeIcon
                name='fab fa-apple'
                className='inline mr-2'
                aria-hidden='true'
              />
              {t('ctaDownload')}
            </a>
            <a
              href='https://youtu.be/dDRc3kqf3N8'
              className='border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition text-lg'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t('ctaDemoAria')}
            >
              <FontAwesomeIcon
                name='fas fa-play-circle'
                className='inline mr-2'
                aria-hidden='true'
              />
              {t('ctaDemo')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
