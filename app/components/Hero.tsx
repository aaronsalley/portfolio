import Link from 'next/link';
import bg2 from '@/assets/malte-michels-s4wGZw3UuLk-unsplash.jpg';
import bg from '@/assets/aaron-salley-office-poster.jpg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className={`will-stick relative flex h-screen items-center justify-center text-salley-white bg-salley-black`}
    >
      <Image
        src={bg.src}
        alt='Background Image'
        className='absolute inset-0 object-cover w-6/12 h-full opacity-70 z-0'
        width={1920}
        height={1080}
      />
      <Image
        src={bg2.src}
        alt='Background Image'
        className='absolute inset-x-6/12 object-cover w-6/12 h-full z-0'
        width={1920}
        height={1080}
      />
      <div className='flex flex-col items-center gap-5 max-w-3xl z-10'>
        <h1 className='font-sans sm:text-lg lg:text-xl'>
          Your Partner for Digital Innovation
        </h1>
        <h2 className='text-center text-4xl sm:text-7xl lg:text-8xl uppercase font-serif font-medium'>
          <span className='font-[oswald] font-semibold'>Bespoke Strategy</span>
          <p> & </p>
          Solutions
        </h2>
        <p className='font-sans text-center max-w-md text-sm sm:text-base'>
          A boutique studio crafting tailored solutions via high-end creative,
          execution, and strategy services. We specialize in meeting client
          needs with unique digital products.
        </p>
        <Link href={'#intro'} className='btn'>
          Our Work
        </Link>
      </div>
    </section>
  );
}
