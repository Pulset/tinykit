'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { SiteConfig, ProductConfig } from '../data/site-config';
import { Moon } from 'lucide-react';

interface FooterSectionProps {
  siteConfig: SiteConfig;
  productConfig: ProductConfig;
}

export default function FooterSection({
  siteConfig,
  productConfig,
}: FooterSectionProps) {
  const t = useTranslations('SleepFlow.footer');

  return (
    <footer className='py-12 border-t border-white/10 bg-[#06070F]'>
      <div className='container mx-auto px-6 text-center'>
        <div className='flex items-center justify-center gap-3 mb-8'>
          <span className='w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B78E8] to-[#9775FA] flex items-center justify-center'>
            <Moon className='w-4 h-4 text-white' fill='currentColor' />
          </span>
          <span className='text-lg sm:text-xl font-bold text-white'>
            {t('brand')}
          </span>
        </div>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mb-8 text-gray-400 text-sm sm:text-base'>
          <a
            href={productConfig.appStoreUrl}
            className='hover:text-[#97A3FF] transition flex items-center'
          >
            {t('downloadLink')}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className='hover:text-[#97A3FF] transition flex items-center'
          >
            {t('supportLink')}
          </a>
          <Link
            href='/sleepflow/privacy'
            className='hover:text-[#97A3FF] transition flex items-center'
          >
            {t('privacyLink')}
          </Link>
          <Link
            href='/sleepflow/terms'
            className='hover:text-[#97A3FF] transition flex items-center'
          >
            {t('termsLink')}
          </Link>
        </div>
        <p className='text-gray-600 text-xs sm:text-sm'>
          {t('copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}
