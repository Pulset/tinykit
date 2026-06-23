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
    <section className='py-24 bg-gradient-to-b from-[#0A0B14] to-[#0E1020]'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl md:text-5xl font-bold mb-16 text-center text-white'>
          {t('heading')}
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className='bg-white/[0.04] p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl hover:border-white/20 transition-all relative backdrop-blur-sm'
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
