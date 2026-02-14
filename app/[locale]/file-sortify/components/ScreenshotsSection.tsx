'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { screenshots } from '../data/page-data';

export default function ScreenshotsSection() {
  const t = useTranslations('FileSortify.screenshots');

  return (
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
            {t('heading')}
          </h2>
          <p className='text-xl text-gray-600'>{t('subtitle')}</p>
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
                alt={t(`items.${screenshot.titleKey}`)}
                width={1200}
                height={800}
                className='w-full'
                loading='lazy'
                itemProp='contentUrl'
              />
              <div className='p-4 bg-gray-50'>
                <h3 className='font-semibold text-gray-800' itemProp='name'>
                  {t(`items.${screenshot.titleKey}`)}
                </h3>
                <p className='text-sm text-gray-600' itemProp='description'>
                  {t(`items.${screenshot.descKey}`)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
