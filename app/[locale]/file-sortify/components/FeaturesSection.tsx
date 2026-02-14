'use client';

import FeatureCard from './FeatureCard';
import { features } from '../data/page-data';
import { useTranslations } from 'next-intl';

export default function FeaturesSection() {
  const t = useTranslations('FileSortify.features');

  return (
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
            {t('heading')}
          </h2>
          <p className='text-xl text-gray-600'>{t('subtitle')}</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={t(`items.${feature.titleKey}`)}
              description={t(`items.${feature.descKey}`)}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
