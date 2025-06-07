import Link from 'next/link';
import Image from 'next/image';
import wallpaper from '@/assets/malte-michels-s4wGZw3UuLk-unsplash.jpg';

export default function Services() {
  const services = ['Strategy', 'Development', 'Content', 'Launch'];

  return (
    <section className='grid md:grid-cols-2 gap-10 justify-center bg-salley-black text-salley-white pt-10 sm:py-37'>
      <Image
        src={wallpaper}
        alt='Service Image'
        height={300}
        className='justify-self-end order-last md:order-first sm:aspect-3/4 object-cover w-auto md:pl-10'
      />
      <div className='order-first md:order-last flex flex-col justify-between gap-6 xl:pr-33 xl:max-w-2xl max-md:mx-4'>
        <p className='font-sans uppercase'>What we do</p>
        <ul>
          {services.map((service, index) => (
            <li key={index}>
              <h3
                className={`uppercase text-5xl sm:text-6xl lg:text-7xl xl:text-8xl ${
                  index % 2 === 0
                    ? 'font-serif font-medium'
                    : 'font-[oswald] font-semibold'
                }`}
              >
                {service}
              </h3>
            </li>
          ))}
        </ul>
        <p className='font-sans xl:text-lg font-light lg:max-w-sm xl:max-w-xl'>
          Elevate your product's potential with our expert consulting services.
          Drive growth and optimize performance with our data-driven approach.
        </p>
        <Link
          href={'/services'}
          className='btn hollow border-salley-white self-start'
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
