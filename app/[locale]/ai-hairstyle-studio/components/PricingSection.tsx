import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import type { ProductConfig } from '../data/site-config';

interface PricingSectionProps {
  productConfig: ProductConfig;
}

export default function PricingSection({ productConfig }: PricingSectionProps) {
  return (
    <section id='pricing' className='py-24 relative bg-white/50'>
      <div className='container mx-auto px-6'>
        <div className='max-w-md mx-auto relative group'>
          {/* Soft Glow Effect */}
          <div className='absolute -inset-1 bg-gradient-to-r from-[#ffd6e0] via-[#e6d5f7] to-[#ffd6e0] rounded-3xl blur opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200'></div>

          <div className='relative bg-white rounded-[22px] p-10 ring-1 ring-pink-200 text-center shadow-xl'>
            <div className='absolute top-0 right-0 p-4'>
              <span className='bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full'>
                {productConfig.pricing.free.badge}
              </span>
            </div>

            <h3 className='text-2xl font-bold text-gray-800 mb-2'>
              {productConfig.pricing.free.title}
            </h3>
            <div className='flex items-baseline justify-center mb-8'>
              <span className='text-5xl font-bold text-gray-800 tracking-tight'>
                {productConfig.pricing.free.price}
              </span>
              <span className='text-xl text-gray-600 ml-2'>
                {productConfig.pricing.free.period}
              </span>
            </div>

            <ul className='space-y-4 mb-10 text-left'>
              {productConfig.pricing.free.features.map((feature, index) => (
                <li key={index} className='flex items-center text-gray-600'>
                  <div
                    className='w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 text-green-600 text-xs'
                    aria-hidden='true'
                  >
                    <FontAwesomeIcon name='fas fa-check' />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={productConfig.appStoreUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='block w-full py-4 text-center rounded-xl bg-gradient-to-r from-[#d63384] to-[#e83e8c] text-white font-bold text-lg hover:from-[#e83e8c] hover:to-[#d63384] transition-all shadow-lg hover:shadow-xl transform hover:scale-105'
              aria-label='Download AI Hairstyle Studio for free'
            >
              <span className='flex items-center justify-center gap-2'>
                <FontAwesomeIcon name='fab fa-apple' className='text-xl' />
                Download Now
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
