'use client';

import UserAvatar from './UserAvatar';
import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { useTranslations } from 'next-intl';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  contentKey: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({
  testimonials,
}: TestimonialsSectionProps) {
  const t = useTranslations('AIHairstyle.testimonials');

  return (
    <section className='py-24 bg-gradient-to-b from-[#fdfbf8] to-white/50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-4xl font-bold mb-16 text-center text-gray-800'>
          {t('heading')}
        </h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className='bg-white/80 p-8 rounded-2xl border border-pink-100 shadow-lg hover:shadow-xl transition-shadow relative backdrop-blur-sm'
            >
              <FontAwesomeIcon
                name='fas fa-quote-left'
                className='text-4xl text-pink-200 absolute top-6 right-6 opacity-60'
                aria-hidden='true'
              />
              <div className='flex items-center mb-6'>
                <UserAvatar
                  src={testimonial.avatar}
                  alt={t('avatarAlt', { name: testimonial.name })}
                  className='w-12 h-12 mr-4 border-2 border-[#d63384]'
                />
                <div>
                  <h4 className='font-bold text-gray-800'>
                    {testimonial.name}
                  </h4>
                  <p className='text-xs text-[#d63384]'>{testimonial.role}</p>
                </div>
              </div>
              <p className='text-gray-600 leading-relaxed italic'>
                &quot;{t(`${testimonial.contentKey}`)}&quot;
              </p>
              <div
                className='flex text-yellow-500 mt-4 text-sm gap-1'
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
