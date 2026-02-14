import FeatureCard from './FeatureCard';
import { features } from '../data/page-data';

export default function FeaturesSection() {
  return (
    <section
      id='features'
      className='py-20 bg-white'
      aria-labelledby='features-heading'
    >
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2
            id='features-heading'
            className='text-4xl font-bold text-gray-800 mb-4'
          >
            Powerful Features
          </h2>
          <p className='text-xl text-gray-600'>
            Everything you need to keep your files perfectly organized
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              bgColor={feature.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
