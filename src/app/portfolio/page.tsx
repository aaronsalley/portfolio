import Image from 'next/image';
import Link from 'next/link';
import FloatingImagesSection from '@/components/FloatingImagesSection';
// Floating images
import laptop from '@/assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import sketch from '@/assets/images/kelly-sikkema-wdnpaTNwOEQ-unsplash.jpg';
import lights from '@/assets/images/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg';
import desktop from '@/assets/images/aaron-salley-office-poster.jpg';
import wireframe from '@/assets/images/iphone_wireframing-1024x682.jpg';
import plants from '@/assets/images/malte-michels-s4wGZw3UuLk-unsplash.jpg';
// Case Studies
import MSKDirect from '@/assets/images/MSKDirect.jpg';
import BHPhoto from '@/assets/images/B&HPhoto.jpg';
import Intry from '@/assets/images/Intry.jpg';
import Lumifi from '@/assets/images/lumifi.png';
import Brands from '@/components/Brands';

export default function Portfolio() {
  return (
    <>
      <FloatingImagesSection
        images={[lights, sketch, desktop, wireframe, laptop]}
      >
        <h1 className='font-[Oswald] font-semibold uppercase text-5xl text-center'>
          Showcase of Work
        </h1>
        <p className='text-center font-sans max-w-xs'>
          Explore our portfolio and discover how we&apos;ve helped clients
          achieve their business goals through innovative design and strategic
          thinking. Our work spans various industries and showcases our
          expertise in crafting tailored digital solutions.
        </p>
      </FloatingImagesSection>
      <FeaturedWork />
      <CaseStudies />
      {/* <Gallery /> */}
      <Inquire />
    </>
  );
}

function FeaturedWork() {
  return (
    <div className='flex flex-col justify-center items-center py-14'>
      <h2 className='font-sans uppercase text-center mx-4'>Featured Work</h2>
      <p className='font-[Oswald] font-medium uppercase text-3xl text-center my-6 mx-4 max-w-xl'>
        Check out some of our most notable projects that demonstrate our
        expertise and creativity.
      </p>
      <p className='font-sans text-center my-6 mx-4 max-w-xl'>
        Our featured projects include a diverse range of industries and design
        challenges, showcasing our ability to adapt and innovate.
      </p>
      <Brands />
    </div>
  );
}

function Gallery() {
  return <></>;
}

function Inquire() {
  return (
    <div
      className='flex flex-col gap-8 items-center justify-center min-h-screen bg-salley-black/70 text-salley-white'
      style={{
        backgroundImage: `url(${plants.src})`,
        backgroundSize: 'cover',
        backgroundBlendMode: 'darken',
      }}
    >
      <p className='font-sans uppercase text-center'>Let&apos;s do this.</p>
      <h2 className='font-[Oswald] font-medium uppercase text-5xl text-center mx-4'>
        Inquire about your project
      </h2>
      <p className='font-sans text-center mx-4 max-w-xl'>
        Ready to bring your vision to life? Get in touch with us today to
        discuss your project and discover how we can help you achieve your
        goals.
      </p>
      <Link href='/contact' className='btn filled'>
        Get in Touch
      </Link>
    </div>
  );
}

const caseStudies = [
  {
    image: MSKDirect,
    category: 'Web Design',
    title: 'Guided Access to Expert Care',
    url: '',
  },
  {
    image: BHPhoto,
    category: 'Branding',
    title: 'Omnichannel eCommerce',
    url: '',
  },
  {
    image: Intry,
    category: 'Illustration',
    title: 'AI-powered SaaS Hybrid Resume™',
    url: '',
  },
  {
    image: Lumifi,
    category: 'Photography',
    title: 'IoT lighting control software',
    url: '',
  },
];

function CaseStudies() {
  if (caseStudies.length === 0) {
    return <p className='text-center'>No projects available at the moment.</p>;
  }

  return (
    <div className='md:grid md:grid-cols-2 md:mx-[8vi] md:gap-[8vi] items-center'>
      {caseStudies.map(({ image, category, title, url }, index: number) => {
        const width = 'w-[calc(243/320*100vi)] max-w-full';
        const style = [
          'object-cover',
          index === 0 || index === 3
            ? 'aspect-320/405 w-full'
            : `aspect-246/291 ${width}`,
        ].join(' ');
        return (
          <Link href={url} key={index}>
            <article className='flex flex-col items-center gap-4 pb-20'>
              <Image
                src={image}
                alt={`Project Image ${index + 1}`}
                className={style}
              />
              <p className={`${width} font-sans uppercase tracking-widest`}>
                {category}
              </p>
              <p
                className={`${width} font-[Oswald] uppercase text-3xl font-medium`}
              >
                {title}
              </p>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
