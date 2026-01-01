'use client';

import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterComparisonProps) {
  return (
    <div className='w-full max-w-4xl mx-auto px-4'>
      {/* Header */}
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-800'>
          See the{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#d63384] via-[#e83e8c] to-[#9775fa]'>
            Magic
          </span>
        </h2>
        <p className='text-gray-600 text-lg'>
          Drag the slider to reveal the transformation
        </p>
      </div>

      {/* Before/After Container */}
      <div className='relative rounded-3xl overflow-hidden shadow-2xl shadow-[#d63384]/20 aspect-[4/3] select-none group'>
        <ReactCompareSlider
          itemOne={
            <div className='relative w-full h-full'>
              <img
                src={beforeImage}
                alt='Before hairstyle transformation'
                className='w-full h-full object-cover'
                draggable={false}
              />
              {/* Before Label */}
              <div className='absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-pink-200'>
                <span className='text-sm font-bold text-gray-800'>{beforeLabel}</span>
              </div>
            </div>
          }
          itemTwo={
            <div className='relative w-full h-full'>
              <img
                src={afterImage}
                alt='After hairstyle transformation'
                className='w-full h-full object-cover'
                draggable={false}
              />
              {/* After Label */}
              <div className='absolute top-6 right-6 px-4 py-2 bg-gradient-to-r from-[#d63384] to-[#e83e8c] rounded-full shadow-lg'>
                <span className='text-sm font-bold text-white'>{afterLabel}</span>
              </div>
            </div>
          }
          handle={
            <ReactCompareSliderHandle
              className={`
                absolute top-0 bottom-0 w-1 bg-white cursor-col-resize shadow-lg
                group-hover:w-1.5 transition-all
                before:content-[''] before:absolute before:top-1/2 before:left-1/2
                before:transform before:-translate-x-1/2 before:-translate-y-1/2
                before:w-12 before:h-12 before:bg-white before:rounded-full
                before:shadow-xl before:flex before:items-center before:justify-center
                before:border-4 before:border-[#d63384]
                before:group-hover:scale-110 before:transition-transform
                after:content-['←'] after:absolute after:top-1/2 after:left-1/2
                after:transform after:-translate-x-1/2 after:-translate-y-1/2
                after:text-gray-800 after:font-bold after:text-lg
                after:mr-4 after:pointer-events-none
              `}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Custom handle with arrows */}
              <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-[#d63384] group-hover:scale-110 transition-transform'>
                <div className='flex items-center gap-2'>
                  <svg
                    className='w-5 h-5 text-gray-800'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2.5}
                      d='M15 19l-7-7 7-7'
                    />
                  </svg>
                  <svg
                    className='w-5 h-5 text-gray-800'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2.5}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </div>
              </div>
            </ReactCompareSliderHandle>
          }
          position={50}
          transition='0.3s'
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
          }}
        />

        {/* Gradient Overlay for Depth */}
        <div className='absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-3xl'></div>
      </div>

      {/* Feature Highlights */}
      <div className='mt-12 grid md:grid-cols-2 gap-6'>
        <div className='bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200 shadow-lg hover:shadow-xl transition-shadow'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-[#ffd6e0] flex items-center justify-center flex-shrink-0'>
              <span className='text-2xl'>✂️</span>
            </div>
            <div>
              <h3 className='font-bold text-gray-800 mb-1'>Before</h3>
              <p className='text-sm text-gray-600'>
                Short pixie cut with a fresh, modern look
              </p>
            </div>
          </div>
        </div>

        <div className='bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-pink-200 shadow-lg hover:shadow-xl transition-shadow'>
          <div className='flex items-start gap-4'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-[#d63384] to-[#e83e8c] flex items-center justify-center flex-shrink-0'>
              <span className='text-2xl'>✨</span>
            </div>
            <div>
              <h3 className='font-bold text-gray-800 mb-1'>After</h3>
              <p className='text-sm text-gray-600'>
                Stunning shoulder-length waves with volume and style
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className='mt-12 text-center'>
        <a
          href='https://apps.apple.com/app/ai-hairstyle-studio/id6476497770'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d63384] to-[#e83e8c] rounded-full font-bold text-white shadow-xl shadow-[#d63384]/30 hover:shadow-2xl hover:shadow-[#d63384]/40 transition-all hover:scale-105 active:scale-95'
        >
          <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z' />
          </svg>
          Try This Transformation
        </a>
      </div>
    </div>
  );
}
