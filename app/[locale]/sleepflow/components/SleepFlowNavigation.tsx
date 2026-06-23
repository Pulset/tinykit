'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { productConfig } from '../data/site-config';
import { navItems } from '../data/page-data';
import { Menu, X } from 'lucide-react';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import Image from 'next/image';

export default function SleepFlowNavigation() {
  const t = useTranslations('SleepFlow.nav');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-[#14172A]/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-white/10'>
      <div className='container mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <div className='flex items-center'>
            <Image
              src='https://cdn.tinykit.app/sleepflow/images/logo.png'
              alt={t('logoAlt')}
              width={40}
              height={40}
              className='w-10 h-10 mr-3 rounded-lg'
            />
            <div className='flex flex-col'>
              <span className='text-xl font-bold text-white leading-tight'>
                {t('brand')}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='text-gray-300 hover:text-white transition font-medium'
              >
                {t(item.labelKey)}
              </a>
            ))}
            <Link
              href={productConfig.appStoreUrl}
              className='group px-6 py-2.5 bg-gradient-to-r from-[#6B78E8] to-[#7C8AFF] rounded-full font-semibold text-white shadow-lg shadow-[#6B78E8]/30 hover:shadow-[#6B78E8]/50 transition-all hover:scale-105 active:scale-95 inline-flex items-center'
              target='_blank'
              rel='noopener noreferrer'
              aria-label={t('downloadAria')}
            >
              <FontAwesomeIcon name='fab fa-apple' className='text-lg mr-2' />
              {t('download')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='text-gray-300 hover:text-white focus:outline-none transition'
              aria-label={isOpen ? t('closeMenu') : t('openMenu')}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className='md:hidden mt-6 pb-4'>
            <div className='flex flex-col space-y-4'>
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className='text-gray-300 hover:text-white transition font-medium py-2'
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </a>
              ))}

              <Link
                href={productConfig.appStoreUrl}
                className='group px-6 py-3 bg-gradient-to-r from-[#6B78E8] to-[#7C8AFF] rounded-full font-semibold text-white shadow-lg shadow-[#6B78E8]/30 inline-flex items-center justify-center'
                target='_blank'
                rel='noopener noreferrer'
                aria-label={t('downloadAria')}
                onClick={() => setIsOpen(false)}
              >
                <FontAwesomeIcon name='fab fa-apple' className='text-lg mr-2' />
                {t('downloadNow')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
