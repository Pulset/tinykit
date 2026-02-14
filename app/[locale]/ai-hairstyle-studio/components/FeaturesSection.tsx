import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import { getFeatureColor } from '../constants';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section id='features' className='py-24 relative bg-white/50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-20'>
          <h2 className='text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#d63384] via-[#e83e8c] to-[#9775fa]'>
            Magical Features
          </h2>
          <p className='text-gray-600 text-lg'>
            Everything you need to find your perfect look
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-pink-100 hover:bg-white hover:shadow-lg hover:border-pink-200 transition-all duration-300 hover:-translate-y-2'
            >
              <div
                className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}
                style={{
                  backgroundColor: getFeatureColor(index).bgColor,
                  color: getFeatureColor(index).iconColor,
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
              <h3 className='text-xl font-bold mb-3 text-gray-800'>
                {feature.title}
              </h3>
              <p className='text-gray-600 leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
