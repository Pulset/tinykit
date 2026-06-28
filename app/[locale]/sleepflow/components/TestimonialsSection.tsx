'use client';

import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';

interface Testimonial {
  name: string;
  role: string;
  contentKey: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

const AVATAR_GRADIENTS = [
  'from-[#6B78E8] to-[#7C8AFF]',
  'from-[#9775FA] to-[#BCC4FF]',
  'from-[#5563D4] to-[#6B78E8]',
];

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const t = useTranslations('SleepFlow.testimonials');

  return (
    <section
      id='testimonials'
      className='py-24 relative bg-gradient-to-b from-[#0E1020] to-[#0A0B14] overflow-hidden'
    >
      {/* Soft glow echoing the hero/ai orbs */}
      <div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-[#9775FA] rounded-full mix-blend-screen filter blur-[140px] opacity-10 pointer-events-none'
        aria-hidden='true'
      />
      <div className='container mx-auto px-6 relative z-10'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#97A3FF] via-[#BCC4FF] to-[#9775FA]'>
          {t('heading')}
        </h2>
        <p className='text-gray-400 text-lg text-center mb-16 max-w-2xl mx-auto'>
          {t('subtitle')}
        </p>
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className='group bg-white/[0.04] p-8 rounded-3xl border border-white/10 shadow-lg hover:shadow-xl hover:border-white/20 hover:-translate-y-2 transition-all duration-300 relative backdrop-blur-sm'
            >
              <FontAwesomeIcon
                name='fas fa-quote-left'
                className='text-4xl text-[#9775FA]/30 absolute top-6 right-6'
                aria-hidden='true'
              />
              <div className='flex items-center mb-6'>
                <span
                  className={`w-12 h-12 mr-4 rounded-full bg-gradient-to-br ${AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length]} flex items-center justify-center text-white font-bold text-lg border-2 border-white/20`}
                >
                  {testimonial.name.charAt(0)}
                </span>
                <div>
                  <h4 className='font-bold text-white'>{testimonial.name}</h4>
                  <p className='text-xs text-[#97A3FF]'>{testimonial.role}</p>
                </div>
              </div>
              <p className='text-gray-400 leading-relaxed italic'>
                &quot;{t(`${testimonial.contentKey}`)}&quot;
              </p>
              <div
                className='flex text-yellow-400 mt-4 text-sm gap-1'
                aria-label={t('ratingAria')}
              >
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    name='fas fa-star'
                    aria-hidden='true'
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
