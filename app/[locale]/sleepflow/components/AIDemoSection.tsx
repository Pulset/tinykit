'use client';

import { useEffect, useRef, useState } from 'react';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';
import { Sparkles } from 'lucide-react';

// Heights (0..1) for the waveform bars — hand-tuned for an organic, layered look.
// Repeated visually; the "materializing" grow happens via a state-driven class.
const WAVEFORM = [
  0.35, 0.55, 0.8, 0.6, 0.95, 0.45, 0.75, 1, 0.65, 0.5, 0.85, 0.4, 0.7, 0.9, 0.55,
  0.75, 0.6, 0.95, 0.5, 0.8,
];

export default function AIDemoSection() {
  const t = useTranslations('SleepFlow.aiDemo');

  // Reveals the "generated" waveform when the section scrolls into view.
  // Falls back gracefully: if IntersectionObserver is unavailable, show it.
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id='ai'
      className='py-24 md:py-32 relative bg-gradient-to-b from-[#06070F] via-[#0A0B14] to-[#0E1020] overflow-hidden'
    >
      {/* Section glow — indigo core, anchored top-center */}
      <div
        className='absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[#6B78E8] rounded-full mix-blend-screen filter blur-[140px] opacity-15 pointer-events-none'
        aria-hidden='true'
      />
      <div
        className='absolute bottom-[-10%] right-[-5%] w-[420px] h-[420px] bg-[#9775FA] rounded-full mix-blend-screen filter blur-[128px] opacity-15 pointer-events-none'
        aria-hidden='true'
      />

      <div className='container mx-auto px-6 relative z-10'>
        {/* Heading block */}
        <div className='text-center mb-16 max-w-3xl mx-auto'>
          <span className='inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#6B78E8]/15 border border-[#6B78E8]/40 text-[#BCC4FF] font-medium text-sm'>
            <Sparkles className='w-4 h-4' />
            {t('badge')}
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mb-5 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#97A3FF] via-[#BCC4FF] to-[#9775FA]'>
            {t('heading')}
          </h2>
          <p className='text-gray-400 text-lg leading-relaxed'>
            {t('subtitle')}
          </p>
        </div>

        {/* Two-column: prompt (left) → living waveform (right) */}
        <div
          ref={sectionRef}
          className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto'
        >
          {/* Prompt card — looks like an input field, reads as real text */}
          <div className='order-2 lg:order-1'>
            <label
              htmlFor='ai-prompt'
              className='block text-xs uppercase tracking-widest text-[#6F7498] mb-3'
            >
              {t('promptLabel')}
            </label>
            <div className='relative p-6 rounded-2xl bg-white/[0.04] border border-white/15 backdrop-blur-sm shadow-xl'>
              {/* Faux caret + prompt text (real text, screen-reader friendly) */}
              <div className='flex items-start gap-2'>
                <span
                  className='sf-caret inline-block w-0.5 self-stretch min-h-[1.75rem] bg-[#97A3FF]'
                  aria-hidden='true'
                />
                <p
                  id='ai-prompt'
                  className='text-lg md:text-xl text-white leading-relaxed'
                >
                  {t('promptValue')}
                </p>
              </div>

              {/* "Generating" affordance */}
              <div className='mt-6 flex items-center gap-2 text-sm text-[#97A3FF]'>
                <FontAwesomeIcon name='fas fa-magic' className='text-base' />
                <span>{t('generatingLabel')}</span>
                <span className='flex gap-1 ml-1' aria-hidden='true'>
                  <span className='sf-dot w-1 h-1 rounded-full bg-[#97A3FF]' />
                  <span className='sf-dot w-1 h-1 rounded-full bg-[#97A3FF]' />
                  <span className='sf-dot w-1 h-1 rounded-full bg-[#97A3FF]' />
                </span>
              </div>
            </div>
            <p className='mt-4 text-sm text-gray-500 leading-relaxed'>
              {t('note')}
            </p>
          </div>

          {/* Living waveform — the "result" of generation */}
          <div className='order-1 lg:order-2'>
            <p className='text-xs uppercase tracking-widest text-[#6F7498] mb-3 text-center lg:text-left'>
              {t('resultLabel')}
            </p>
            <div className='relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.02] border border-white/15 backdrop-blur-sm shadow-xl overflow-hidden'>
              {/* Inner glow behind the bars */}
              <div
                className='absolute inset-0 bg-[#6B78E8]/10 blur-2xl'
                aria-hidden='true'
              />
              <div className='relative flex items-end justify-center gap-[3px] sm:gap-1.5 h-40'>
                {WAVEFORM.map((h, i) => (
                  <span
                    key={i}
                    className='sf-wave-bar w-1 sm:w-1.5 rounded-full bg-gradient-to-t from-[#5563D4] via-[#6B78E8] to-[#BCC4FF]'
                    style={{
                      // Grow from ~0 to the target height when revealed.
                      height: visible ? `${h * 100}%` : '4%',
                      animationDelay: `${i * 0.08}s`,
                      transition: `height 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${
                        i * 0.05
                      }s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
