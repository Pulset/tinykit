'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';
import type { ProductConfig } from '../data/site-config';
import { Moon, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  productConfig: ProductConfig;
}

// Decorative twinkling stars rendered behind the hero copy.
// Counts drop on small screens (handled inline) to protect perf.
const STAR_POSITIONS = [
  { top: '8%', left: '12%', size: 2, delay: '0s' },
  { top: '18%', left: '82%', size: 3, delay: '1.2s' },
  { top: '28%', left: '46%', size: 2, delay: '0.6s' },
  { top: '42%', left: '8%', size: 3, delay: '2.1s' },
  { top: '52%', left: '90%', size: 2, delay: '0.3s' },
  { top: '62%', left: '30%', size: 2, delay: '1.8s' },
  { top: '72%', left: '70%', size: 3, delay: '2.6s' },
  { top: '84%', left: '20%', size: 2, delay: '0.9s' },
  { top: '14%', left: '64%', size: 2, delay: '1.5s' },
  { top: '88%', left: '58%', size: 3, delay: '2.3s' },
];

export default function HeroSection({ productConfig }: HeroSectionProps) {
  const t = useTranslations('SleepFlow.hero');

  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0B14]'>
      {/* Night gradient backdrop — the base of the dreamscape */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background:
            'radial-gradient(ellipse at top, #1A1E35 0%, #0A0B14 55%, #06070F 100%)',
        }}
        aria-hidden='true'
      />

      {/* Drifting glow orbs — the "breathing" of the dreamscape */}
      <div className='absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] sm:w-[640px] sm:h-[640px] bg-[#6B78E8] rounded-full mix-blend-screen filter blur-[128px] opacity-25 animate-blob'></div>
        <div className='absolute bottom-[-20%] right-[-5%] w-[480px] h-[480px] sm:w-[600px] sm:h-[600px] bg-[#9775FA] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000'></div>
      </div>

      {/* Twinkling stars — decorative, hidden on the tiniest screens */}
      <div className='absolute inset-0 z-0 pointer-events-none' aria-hidden='true'>
        {STAR_POSITIONS.map((s, i) => (
          <span
            key={i}
            className='sf-twinkle absolute rounded-full bg-white hidden sm:block'
            style={{
              top: s.top,
              left: s.left,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: s.delay,
            }}
          />
        ))}
      </div>

      {/* Centered poetic copy + single CTA */}
      <div className='container mx-auto px-6 relative z-10 pt-24 pb-16 text-center'>
        <div className='inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#BCC4FF] font-medium text-sm animate-fade-in-up'>
          <Moon className='w-4 h-4' />
          {t('badge')}
        </div>

        <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight text-white animate-fade-in-up max-w-4xl mx-auto'>
          {t('titleLine1')}{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#97A3FF] via-[#BCC4FF] to-[#9775FA]'>
            {t('titleLine2')}
          </span>
        </h1>

        <p className='text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up'>
          {t('subtitle')}
        </p>

        <div className='flex justify-center animate-fade-in-up'>
          <a
            href={productConfig.appStoreUrl}
            className='group relative px-8 py-4 bg-gradient-to-r from-[#6B78E8] to-[#7C8AFF] rounded-full font-bold text-white shadow-lg shadow-[#6B78E8]/30 hover:shadow-[#6B78E8]/50 transition-all hover:scale-105 active:scale-95'
            target='_blank'
            rel='noopener noreferrer'
            aria-label={t('ctaDownloadAria')}
          >
            <span className='flex items-center justify-center gap-2'>
              <FontAwesomeIcon name='fab fa-apple' className='text-xl' />
              {t('ctaDownload')}
            </span>
          </a>
        </div>

        {/* Quiet hint that there's more below — AI magic */}
        <a
          href='#ai'
          className='mt-20 inline-flex flex-col items-center gap-2 text-gray-500 hover:text-[#BCC4FF] transition-colors group'
          aria-label='Explore AI sound generation'
        >
          <span className='text-xs uppercase tracking-widest flex items-center gap-1.5'>
            <Sparkles className='w-3 h-3' />
            AI Magic
          </span>
          <span className='w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5 group-hover:border-[#BCC4FF]/40 transition-colors'>
            <span className='w-0.5 h-1.5 rounded-full bg-white/40 group-hover:bg-[#BCC4FF] transition-colors animate-bounce' />
          </span>
        </a>
      </div>
    </div>
  );
}
