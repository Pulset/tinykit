'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { productConfig } from '../data/site-config';
import { useTranslations } from 'next-intl';

export default function PricingSection() {
  const t = useTranslations('FileSortify.pricing');
  return (
    <section
      id='pricing'
      className='py-20 hero-gradient'
      aria-labelledby='pricing-heading'
      itemScope
      itemType='https://schema.org/Offer'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2
            id='pricing-heading'
            className='text-4xl font-bold text-gray-800 mb-4'
          >
            {t('heading')}
          </h2>
          <p className='text-xl text-gray-700'>{t('subtitle')}</p>
        </div>
        <div className='max-w-md mx-auto'>
          <div
            className='btn-purple-600 text-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition relative'
            itemScope
            itemType='https://schema.org/Product'
          >
            <meta itemProp='name' content={t('licenseName')} />
            <meta itemProp='description' content={t('licenseDescription')} />
            <meta
              itemProp='image'
              content='https://cdn.tinykit.app/file-sortify/images/logo.png'
            />
            <div
              itemProp='offers'
              itemScope
              itemType='https://schema.org/Offer'
            >
              <meta itemProp='price' content='9.99' />
              <meta itemProp='priceCurrency' content='USD' />
              <meta
                itemProp='availability'
                content='https://schema.org/InStock'
              />
              <meta itemProp='url' content={productConfig.appStoreUrl} />
              <meta itemProp='priceValidUntil' content='2026-12-31' />
            </div>
            <div
              itemProp='aggregateRating'
              itemScope
              itemType='https://schema.org/AggregateRating'
            >
              <meta itemProp='ratingValue' content='5' />
              <meta itemProp='ratingCount' content='500' />
              <meta itemProp='bestRating' content='5' />
            </div>
            <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold'>
              {t(productConfig.pricing.lifetime.badgeKey)}
            </div>
            <h3 className='text-2xl font-bold mb-4'>
              {t(productConfig.pricing.lifetime.titleKey)}
            </h3>
            <div className='text-4xl font-bold mb-6'>
              {productConfig.pricing.lifetime.price}
              <span className='text-lg text-purple-200'>
                {t(productConfig.pricing.lifetime.periodKey)}
              </span>
            </div>
            <ul className='space-y-3 mb-8'>
              {productConfig.pricing.lifetime.featureKeys.map(
                (featureKey, index) => (
                  <li key={index} className='flex items-center'>
                    <FontAwesomeIcon
                      name='fas fa-check'
                      className='text-green-300 mr-3'
                    />
                    {t(`features.${featureKey}`)}
                  </li>
                ),
              )}
            </ul>
            <a
              href={productConfig.appStoreUrl}
              className='w-full bg-white text-purple-600 py-3 rounded-full font-semibold hover:bg-gray-100 transition inline-block text-center'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon name='fab fa-apple' className='inline mr-2' />
              {t('cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
