import { Metadata } from 'next';
import backgroundImage from '@/assets/images/aaron-salley-office-poster.jpg';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Aaron Salley – Your Partner for Innovation | Digital Creative Studio',
  description:
    'Boutique studio crafting tailored solutions via high-end creative, execution, and strategy services. We specialize in meeting client needs with unique digital products.',
};

export default async function Start() {
  return (
    <>
      <main
        className='will-stick flex flex-col items-center justify-center min-h-screen text-salley-white'
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backgroundBlendMode: 'darken',
        }}
      >
        <p className='mb-4 font-sans text-center'>
          Your Partner for Digital Innovation
        </p>
        <h1 className='text-[11vi]/[11vi] lg:text-8xl uppercase text-center'>
          <pre className='font-[Oswald] font-semibold'>Bespoke Strategic</pre>
          Solutions
        </h1>
        <p className='max-w-lg mt-5 mb-8 font-sans text-center'>
          A boutique studio crafting tailored solutions via high-end creative,
          execution, and strategy services. We specialize in meeting client
          needs with unique digital products.
        </p>
        <Link href='/portfolio' className='btn'>
          Our Work
        </Link>
      </main>
    </>
  );
}
