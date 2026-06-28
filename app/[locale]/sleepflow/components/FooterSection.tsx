'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { SiteConfig, ProductConfig } from '../data/site-config';
import Image from 'next/image';
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
    <footer className='py-4 sm:py-6 border-t border-white/10 bg-[#191C31]'>
      <div className='container mx-auto px-4 text-center'>
        <div className='flex items-center justify-center gap-3 mb-4 sm:mb-6'>
          <Image
            src='https://cdn.tinykit.app/sleepflow/images/logo.png'
            alt='logo'
            width={32}
            height={32}
            className='w-8 h-8 rounded-lg'
          />
          <span className='text-lg sm:text-xl font-bold text-white'>
            {t('brand')}
          </span>
        </div>
        <div className='flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-6 gap-y-2 sm:gap-y-3 mb-4 sm:mb-6 text-gray-400 text-sm sm:text-base'>
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
          {t.rich('copyright', {
            year: new Date().getFullYear(),
            link: (chunks) => (
              <a
                href='https://tinykit.app'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-[#97A3FF] transition'
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </footer>
  );
}
