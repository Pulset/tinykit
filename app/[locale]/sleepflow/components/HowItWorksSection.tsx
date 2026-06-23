'use client';

import { useTranslations } from 'next-intl';

interface Step {
  step: number;
  titleKey: string;
  descKey: string;
  gradientColors: string;
}

interface HowItWorksSectionProps {
  howItWorks: Step[];
}

export default function HowItWorksSection({
  howItWorks,
}: HowItWorksSectionProps) {
  const t = useTranslations('SleepFlow.howItWorks');

  return (
    <section
      id='how-it-works'
      className='py-24 bg-gradient-to-b from-[#0E1020] to-[#0A0B14]'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-white'>
            {t('heading')}
          </h2>
          <p className='text-gray-400 text-lg'>{t('subtitle')}</p>
        </div>

        <div className='grid md:grid-cols-3 gap-12 relative'>
          {/* Connecting line (desktop) */}
          <div className='hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#6B78E8]/40 via-[#9775FA]/40 to-[#6B78E8]/40'></div>

          {howItWorks.map((step, index) => (
            <div
              key={index}
              className='relative z-10 flex flex-col items-center text-center group'
            >
              <div
                className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.gradientColors} p-1 shadow-lg mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-[#6B78E8]/30`}
              >
                <div className='w-full h-full bg-[#0A0B14] rounded-full flex items-center justify-center text-2xl font-bold text-white relative overflow-hidden border border-white/10'>
                  <span className='relative z-10'>{step.step}</span>
                </div>
              </div>

              <h3 className='text-2xl font-bold mb-4 text-white'>
                {t(`steps.${step.titleKey}`)}
              </h3>
              <p className='text-gray-400 max-w-xs mx-auto leading-relaxed'>
                {t(`steps.${step.descKey}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
