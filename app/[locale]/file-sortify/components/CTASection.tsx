'use client';

import { useTranslations } from 'next-intl';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { productConfig } from '../data/site-config';

export default function CTASection() {
  const t = useTranslations('FileSortify.cta');

  return (
    <section
      className='py-20 gradient-bg text-white'
      aria-labelledby='cta-heading'
    >
      <div className='container mx-auto px-6 text-center'>
        <h2 id='cta-heading' className='text-4xl font-bold mb-6'>
          {t('heading')}
        </h2>
        <p className='text-xl mb-8 text-gray-100'>{t('subtitle')}</p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <a
            href={productConfig.appStoreUrl}
            className='bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition transform hover:scale-105 inline-block'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t('buttonAria')}
          >
            <FontAwesomeIcon
              name='fab fa-apple'
              className='inline mr-2'
              aria-hidden='true'
            />
            {t('button')}
          </a>
        </div>
      </div>
    </section>
  );
}
