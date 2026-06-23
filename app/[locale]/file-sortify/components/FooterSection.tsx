'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { siteConfig } from '../data/site-config';

export default function FooterSection() {
  const t = useTranslations('FileSortify.footer');

  return (
    <footer className='bg-gray-900 text-white py-8 sm:py-12' role='contentinfo'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-8'>
          <div className='flex items-center justify-center md:justify-start'>
            <Image
              src={siteConfig.logo}
              alt={t('logoAlt')}
              width={30}
              height={30}
              className='mr-3'
            />
            <span className='text-xl md:text-2xl font-bold text-gray-400'>
              {t('brand')}
            </span>
          </div>
          <nav
            className='flex flex-wrap justify-center items-center gap-x-5 sm:gap-x-6 gap-y-2 sm:gap-y-4'
            aria-label='Footer navigation'
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className='text-gray-400 hover:text-white transition flex items-center text-sm sm:text-base'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t('contactAria')}
            >
              <FontAwesomeIcon
                name='fas fa-envelope'
                className='mr-2'
                aria-hidden='true'
              />
              <span className='hidden sm:inline'>{siteConfig.email}</span>
              <span className='sm:hidden'>{t('emailLabel')}</span>
            </a>
            <Link
              href='/file-sortify/privacy'
              className='text-gray-400 hover:text-white transition flex items-center text-sm sm:text-base'
              aria-label={t('privacyAria')}
            >
              <FontAwesomeIcon
                name='fas fa-shield-alt'
                className='mr-2'
                aria-hidden='true'
              />
              {t('privacyLink')}
            </Link>
            <Link
              href='/file-sortify/terms'
              className='text-gray-400 hover:text-white transition flex items-center text-sm sm:text-base'
              aria-label={t('termsAria')}
            >
              <FontAwesomeIcon
                name='fas fa-file-contract'
                className='mr-2'
                aria-hidden='true'
              />
              {t('termsLink')}
            </Link>
          </nav>
        </div>
        <div className='border-t border-gray-800 mt-5 sm:mt-8 pt-4 sm:pt-6 text-center text-gray-400'>
          <p className='text-sm'>
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
