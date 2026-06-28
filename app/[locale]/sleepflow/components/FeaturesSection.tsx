'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';
import { getAccent, type AccentName } from '../constants';

interface Feature {
  icon: string;
  titleKey: string;
  descKey: string;
  accent: AccentName;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  const t = useTranslations('SleepFlow.features');

  return (
    <section
      id='features'
      className='py-24 relative bg-gradient-to-b from-[#0E1020] via-[#0A0B14] to-[#0E1020] overflow-hidden'
    >
      {/* Subtle glow — echoes the hero/ai orb language */}
      <div
        className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#6B78E8] rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none'
        aria-hidden='true'
      />

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#97A3FF] via-[#BCC4FF] to-[#9775FA]'>
            {t('heading')}
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            {t('subtitle')}
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => {
            const accent = getAccent(feature.accent);
            return (
              <div
                key={index}
                className='group p-8 rounded-3xl bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-2'
              >
                <div
                  className='w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform'
                  style={{
                    backgroundColor: accent.bg,
                    color: accent.text,
                  }}
                >
                  <FontAwesomeIcon
                    name={
                      feature.icon as React.ComponentProps<
                        typeof FontAwesomeIcon
                      >['name']
                    }
                  />
                </div>
                <h3 className='text-xl font-bold mb-3 text-white'>
                  {t(`items.${feature.titleKey}`)}
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  {t(`items.${feature.descKey}`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
