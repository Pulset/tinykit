'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';
import type { ProductConfig } from '../data/site-config';
import { Moon, CloudRain, Wind, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  productConfig: ProductConfig;
}

// Decorative twinkling stars rendered behind the hero content.
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
      {/* Night gradient backdrop */}
      <div
        className='absolute inset-0 z-0'
        style={{
          background:
            'radial-gradient(ellipse at top, #1A1E35 0%, #0A0B14 55%, #06070F 100%)',
        }}
        aria-hidden='true'
      />

      {/* Twinkling stars */}
      <div className='absolute inset-0 z-0 pointer-events-none' aria-hidden='true'>
        {STAR_POSITIONS.map((s, i) => (
          <span
            key={i}
            className='sf-twinkle absolute rounded-full bg-white'
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

      {/* Soft glow orbs */}
      <div className='absolute inset-0 z-0 overflow-hidden' aria-hidden='true'>
        <div className='absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#6B78E8] rounded-full mix-blend-screen filter blur-[128px] opacity-25 animate-blob'></div>
        <div className='absolute bottom-[-20%] right-[-5%] w-[480px] h-[480px] bg-[#9775FA] rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000'></div>
      </div>

      <div className='container mx-auto px-6 relative z-10 pt-20'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Copy */}
          <div className='flex-1 text-center lg:text-left'>
            <div className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#BCC4FF] font-medium text-sm animate-fade-in-up'>
              <Moon className='w-4 h-4' />
              {t('badge')}
            </div>
            <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white'>
              {t('titleLine1')}{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#97A3FF] via-[#BCC4FF] to-[#9775FA]'>
                {t('titleLine2')}
              </span>
            </h1>
            <p className='text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0'>
              {t('subtitle')}
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
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
              <a
                href='#how-it-works'
                className='px-8 py-4 rounded-full font-bold text-gray-200 border border-white/15 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-all hover:scale-105'
                aria-label={t('ctaHowItWorksAria')}
              >
                <span className='flex items-center justify-center gap-2'>
                  <FontAwesomeIcon
                    name='fas fa-play'
                    className='text-sm text-[#97A3FF]'
                  />
                  {t('ctaHowItWorks')}
                </span>
              </a>
            </div>
          </div>

          {/* Phone mockup */}
          <div className='flex-1 relative w-full max-w-sm lg:max-w-none flex justify-center'>
            <div className='sf-drift relative w-[280px] aspect-[9/19] rounded-[44px] bg-gradient-to-b from-[#14172A] to-[#0A0B14] border border-white/10 shadow-2xl shadow-[#6B78E8]/20 p-3'>
              {/* Notch */}
              <div className='absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#06070F] rounded-full z-20'></div>

              <div className='relative w-full h-full rounded-[34px] overflow-hidden bg-gradient-to-b from-[#1A1E35] to-[#0A0B14] flex flex-col p-5 pt-12'>
                {/* Now playing header */}
                <p className='text-center text-[10px] uppercase tracking-widest text-[#6F7498] mb-1'>
                  {t('playing')}
                </p>
                <p className='text-center text-sm font-semibold text-white mb-5'>
                  {t('mixName')}
                </p>

                {/* Animated play orb */}
                <div className='flex justify-center mb-5'>
                  <div className='relative w-28 h-28 rounded-full bg-[#6B78E8]/20 flex items-center justify-center'>
                    <div className='absolute inset-0 rounded-full bg-[#6B78E8]/10 animate-pulse'></div>
                    <div className='w-20 h-20 rounded-full bg-gradient-to-br from-[#6B78E8] to-[#7C8AFF] flex items-center justify-center shadow-lg shadow-[#6B78E8]/40'>
                      <FontAwesomeIcon
                        name='fas fa-play'
                        className='text-2xl text-white ml-1'
                      />
                    </div>
                  </div>
                </div>

                {/* Waveform */}
                <div className='flex items-end justify-center gap-1 h-12 mb-5'>
                  {[0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.5, 0.8, 0.45, 0.7, 0.55, 0.9].map(
                    (h, i) => (
                      <span
                        key={i}
                        className='sf-wave-bar w-1 rounded-full bg-gradient-to-t from-[#5563D4] to-[#BCC4FF]'
                        style={{
                          height: `${h * 100}%`,
                          animationDelay: `${i * 0.12}s`,
                        }}
                      />
                    ),
                  )}
                </div>

                {/* Sound chips */}
                <div className='grid grid-cols-3 gap-2 mt-auto'>
                  <div className='flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 border border-white/10'>
                    <CloudRain className='w-4 h-4 text-[#84B6F0]' />
                    <span className='text-[9px] text-gray-300'>Rain</span>
                  </div>
                  <div className='flex flex-col items-center gap-1 p-2 rounded-xl bg-[#6B78E8]/15 border border-[#6B78E8]/40'>
                    <Wind className='w-4 h-4 text-[#97A3FF]' />
                    <span className='text-[9px] text-[#BCC4FF]'>Wind</span>
                  </div>
                  <div className='flex flex-col items-center gap-1 p-2 rounded-xl bg-white/5 border border-white/10'>
                    <Sparkles className='w-4 h-4 text-[#BCC4FF]' />
                    <span className='text-[9px] text-gray-300'>AI</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat chips */}
            <div className='absolute -bottom-4 -left-2 sm:-left-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 shadow-xl animate-float'>
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-full bg-[#6B78E8]/30 flex items-center justify-center text-[#97A3FF]'>
                  <FontAwesomeIcon name='fas fa-layer-group' />
                </div>
                <div>
                  <p className='text-[10px] text-gray-400'>
                    {t('mixLayersLabel')}
                  </p>
                  <p className='text-base font-bold text-white'>
                    {t('mixLayersValue')}
                  </p>
                </div>
              </div>
            </div>

            <div className='absolute -top-2 -right-2 sm:-right-6 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/15 shadow-xl animate-float animation-delay-2000'>
              <div className='flex items-center gap-3'>
                <div className='w-9 h-9 rounded-full bg-[#9775FA]/30 flex items-center justify-center text-[#BCC4FF]'>
                  <FontAwesomeIcon name='fas fa-heart' />
                </div>
                <div>
                  <p className='text-[10px] text-gray-400'>
                    {t('sleptBetterLabel')}
                  </p>
                  <p className='text-base font-bold text-white'>
                    {t('sleptBetterValue')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
