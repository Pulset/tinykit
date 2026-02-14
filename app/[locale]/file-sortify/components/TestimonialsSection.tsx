import FontAwesomeIcon from '@/app/components/FontAwesomeIcon';
import UserAvatar from './UserAvatar';
import { testimonials } from '../data/page-data';

export default function TestimonialsSection() {
  return (
    <section className='py-20 bg-white' aria-labelledby='testimonials-heading'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2
            id='testimonials-heading'
            className='text-4xl font-bold text-gray-800 mb-4'
          >
            Loved by Mac Users
          </h2>
          <p className='text-xl text-gray-600'>
            See what our customers are saying
          </p>
        </div>
        <div className='grid md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className='bg-gray-50 p-8 rounded-2xl'
              itemScope
              itemType='https://schema.org/Review'
            >
              <div
                itemProp='itemReviewed'
                itemScope
                itemType='https://schema.org/SoftwareApplication'
              >
                <meta itemProp='name' content='File Sortify' />
                <meta itemProp='operatingSystem' content='macOS' />
                <meta
                  itemProp='applicationCategory'
                  content='UtilitiesApplication'
                />
                <div
                  itemProp='offers'
                  itemScope
                  itemType='https://schema.org/Offer'
                >
                  <meta itemProp='price' content='9.99' />
                  <meta itemProp='priceCurrency' content='USD' />
                </div>
                <div
                  itemProp='aggregateRating'
                  itemScope
                  itemType='https://schema.org/AggregateRating'
                >
                  <meta itemProp='ratingValue' content='5' />
                  <meta itemProp='ratingCount' content='500' />
                </div>
              </div>
              <div
                className='flex text-yellow-400 mb-4'
                aria-label='5 star rating'
              >
                <div
                  itemProp='reviewRating'
                  itemScope
                  itemType='https://schema.org/Rating'
                >
                  <meta itemProp='ratingValue' content='5' />
                  <meta itemProp='bestRating' content='5' />
                </div>
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    name='fas fa-star'
                    className='inline'
                    aria-hidden='true'
                  />
                ))}
              </div>
              <p className='text-gray-700 mb-4' itemProp='reviewBody'>
                {testimonial.content}
              </p>
              <div
                className='flex items-center'
                itemProp='author'
                itemScope
                itemType='https://schema.org/Person'
              >
                <UserAvatar
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className='mr-4'
                />
                <div>
                  <p className='font-semibold text-gray-800' itemProp='name'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm text-gray-600' itemProp='jobTitle'>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
