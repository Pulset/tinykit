import Image from 'next/image';
import { howItWorks } from '../data/page-data';

export default function HowItWorksSection() {
  return (
    <section
      id='how-it-works'
      className='py-20 bg-gray-50'
      aria-labelledby='how-it-works-heading'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2
            id='how-it-works-heading'
            className='text-4xl font-bold text-gray-800 mb-4'
          >
            How It Works
          </h2>
          <p className='text-xl text-gray-600'>
            Get organized in 3 simple steps
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {howItWorks.map((step, index) => (
            <article
              key={index}
              className='text-center group'
              itemScope
              itemType='https://schema.org/HowToStep'
            >
              <div
                className={`btn-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:btn-purple-700 transition-colors`}
                aria-label={`Step ${step.step}`}
              >
                {step.step}
              </div>
              <h3
                className='text-xl font-semibold text-gray-800 mb-3'
                itemProp='name'
              >
                {step.title}
              </h3>
              <p className='text-gray-600 mb-6' itemProp='text'>
                {step.description}
              </p>
              <div className='relative mx-auto max-w-sm'>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${step.gradientColors} rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform`}
                ></div>
                <div className='relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform'>
                  <Image
                    src={step.image}
                    alt={`${step.title} Interface`}
                    width={800}
                    height={600}
                    className='w-full h-auto'
                    loading='lazy'
                    itemProp='image'
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
