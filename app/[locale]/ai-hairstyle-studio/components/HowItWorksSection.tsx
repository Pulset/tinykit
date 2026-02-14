import Image from 'next/image';
import { getStepGradient, getStepShadow } from '../constants';

interface Step {
  step: number;
  title: string;
  description: string;
  image: string;
}

interface HowItWorksSectionProps {
  howItWorks: Step[];
}

export default function HowItWorksSection({
  howItWorks,
}: HowItWorksSectionProps) {
  return (
    <section
      id='how-it-works'
      className='py-24 bg-gradient-to-b from-white/50 to-[#fdfbf8]'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl font-bold mb-4 text-gray-800'>
            Simple Steps
          </h2>
          <p className='text-gray-600 text-lg'>3 steps to your new style</p>
        </div>

        <div className='grid md:grid-cols-3 gap-12 relative'>
          {/* Connecting Line (Desktop) */}
          <div className='hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-[#ffd6e0] via-[#e6d5f7] to-[#ffd6e0]'></div>

          {howItWorks.map((step, index) => (
            <div
              key={index}
              className='relative z-10 flex flex-col items-center text-center group'
            >
              <div
                className={`w-24 h-24 rounded-full bg-gradient-to-br ${getStepGradient(
                  index,
                )} p-1 shadow-lg mb-8 transform transition-transform group-hover:scale-110 group-hover:rotate-3`}
                style={{
                  boxShadow: `0 10px 25px -5px ${getStepShadow(index)}`,
                }}
              >
                <div className='w-full h-full bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 relative overflow-hidden border border-pink-100'>
                  <span className='relative z-10'>{step.step}</span>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${getStepGradient(
                      index,
                    )} opacity-10`}
                  ></div>
                </div>
              </div>

              <h3 className='text-2xl font-bold mb-4 text-gray-800'>
                {step.title}
              </h3>
              <p className='text-gray-600 mb-8 max-w-xs mx-auto'>
                {step.description}
              </p>

              <div className='w-full max-w-xs aspect-[3/4] rounded-2xl overflow-hidden border border-pink-200 shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white relative cursor-pointer'>
                <Image
                  src={step.image}
                  alt={`AI Hairstyle Studio step ${step.step}: ${step.title}. ${step.description}`}
                  width={600}
                  height={800}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  loading='lazy'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-800/80 via-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4'>
                  <h3 className='text-lg font-bold text-white mb-1'>
                    {step.title}
                  </h3>
                  <p className='text-xs text-gray-200'>{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
