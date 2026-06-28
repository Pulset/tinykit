'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';
import type { ProductConfig } from '../data/site-config';
import { Moon } from 'lucide-react';

interface DownloadSectionProps {
  productConfig: ProductConfig;
}

export default function DownloadSection({
  productConfig,
}: DownloadSectionProps) {
  const t = useTranslations('SleepFlow.download');

  return (
    <section
      id='download'
      className='py-32 relative bg-gradient-to-b from-[#0E1020] to-[#0A0B14] overflow-hidden'
    >
      {/* Soft glow orbs */}
      <div className='absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
        <div className='absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#6B78E8] rounded-full mix-blend-screen filter blur-[140px] opacity-20'></div>
        <div className='absolute bottom-[-25%] right-[-5%] w-[480px] h-[480px] bg-[#9775FA] rounded-full mix-blend-screen filter blur-[128px] opacity-20'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10 text-center max-w-3xl'>
        <span className='inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#BCC4FF] font-medium text-sm animate-fade-in-up'>
          <Moon className='w-4 h-4' />
          {t('badge')}
        </span>

        <h2 className='text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#97A3FF] via-[#BCC4FF] to-[#9775FA]'>
          {t('heading')}
        </h2>

        <p className='text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto'>
          {t('subtitle')}
        </p>

        <a
          href={productConfig.appStoreUrl}
          className='group inline-flex items-center justify-center gap-2 md:gap-3 px-6 py-4 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg whitespace-nowrap bg-gradient-to-r from-[#6B78E8] to-[#7C8AFF] text-white shadow-xl shadow-[#6B78E8]/40 hover:shadow-[#6B78E8]/60 transition-all hover:scale-105 active:scale-95'
          target='_blank'
          rel='noopener noreferrer'
          aria-label={t('ctaAria')}
        >
          <FontAwesomeIcon name='fab fa-apple' className='text-xl md:text-2xl' />
          {t('cta')}
        </a>
      </div>
    </section>
  );
}
