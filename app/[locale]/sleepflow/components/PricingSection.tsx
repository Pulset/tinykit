'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';
import type { ProductConfig } from '../data/site-config';

interface PricingSectionProps {
  productConfig: ProductConfig;
}

export default function PricingSection({
  productConfig,
}: PricingSectionProps) {
  const t = useTranslations('SleepFlow.pricing');

  return (
    <section
      id='pricing'
      className='py-24 relative bg-gradient-to-b from-[#0E1020] to-[#0A0B14]'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
            {t('heading')}
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
        </div>

        <div className='max-w-5xl mx-auto grid md:grid-cols-3 gap-8 items-stretch'>
          {productConfig.pricing.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[22px] p-8 flex flex-col ${
                plan.highlighted
                  ? 'bg-gradient-to-b from-[#6B78E8]/20 to-[#9775FA]/10 ring-2 ring-[#6B78E8] shadow-2xl shadow-[#6B78E8]/30 md:-translate-y-4'
                  : 'bg-white/[0.04] ring-1 ring-white/10'
              }`}
            >
              {plan.highlighted && (
                <span className='absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6B78E8] to-[#7C8AFF] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg'>
                  {plan.badgeKey ? t(plan.badgeKey) : ''}
                </span>
              )}

              <h3 className='text-xl font-bold text-white mb-2'>
                {t(plan.titleKey)}
              </h3>
              <div className='flex items-baseline mb-1'>
                <span className='text-4xl font-bold text-white tracking-tight'>
                  {plan.price}
                </span>
                <span className='text-gray-400 ml-1 text-sm'>
                  {t(plan.periodKey)}
                </span>
              </div>
              <p className='text-sm text-gray-500 mb-8 min-h-[2.5rem]'>
                {t(plan.detailKey)}
              </p>

              <ul className='space-y-3 mb-10 text-left flex-grow'>
                {plan.featureKeys.map((fk) => (
                  <li
                    key={fk}
                    className='flex items-center text-gray-300 text-sm'
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 text-[10px] flex-shrink-0 ${
                        plan.highlighted
                          ? 'bg-[#6B78E8]/30 text-[#97A3FF]'
                          : 'bg-white/10 text-gray-400'
                      }`}
                      aria-hidden='true'
                    >
                      <FontAwesomeIcon name='fas fa-check' />
                    </span>
                    {t(`features.${fk}`)}
                  </li>
                ))}
              </ul>

              <a
                href={productConfig.appStoreUrl}
                target='_blank'
                rel='noopener noreferrer'
                className={`block w-full py-3.5 text-center rounded-xl font-bold text-base transition-all hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-[#6B78E8] to-[#7C8AFF] text-white shadow-lg shadow-[#6B78E8]/30'
                    : 'bg-white/10 text-white hover:bg-white/15 border border-white/15'
                }`}
                aria-label={t('ctaAria')}
              >
                <span className='flex items-center justify-center gap-2'>
                  <FontAwesomeIcon name='fab fa-apple' className='text-lg' />
                  {t('cta')}
                </span>
              </a>
            </div>
          ))}
        </div>

        <p className='text-center text-gray-500 text-xs mt-10 max-w-xl mx-auto'>
          {t('legalNote')}
        </p>
      </div>
    </section>
  );
}
