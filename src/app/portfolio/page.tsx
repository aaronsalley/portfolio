import Image from 'next/image';
import laptop from '@/assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
import sketch from '@/assets/images/kelly-sikkema-wdnpaTNwOEQ-unsplash.jpg';
import plants from '@/assets/images/malte-michels-s4wGZw3UuLk-unsplash.jpg';
import lights from '@/assets/images/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg';
import desktop from '@/assets/images/aaron-salley-office-poster.jpg';
import Link from 'next/link';

export default function Portfolio() {
  return (
    <>
      <div className='will-stick flex flex-col items-center justify-center min-h-screen bg-salley-black text-salley-white overflow-x-clip w-[100vw] relative'>
        <div className='flex flex-col gap-4 z-10 justify-center items-center mx-4'>
          <h1 className='font-[Oswald] font-semibold uppercase text-5xl text-center'>
            Showcase of Work
          </h1>
          <p className='text-center font-sans max-w-xs'>
            Explore our portfolio and discover how we&apos;ve helped clients
            achieve their business goals through innovative design and strategic
            thinking. Our work spans various industries and showcases our
            expertise in crafting tailored digital solutions.
          </p>
        </div>
        <Images />
      </div>
      <FeaturedWork />
      <Projects />
      {/* Gallery */}
      <Inquire />
    </>
  );
}

function FeaturedWork() {
  return (
    <div className='py-14'>
      <h2 className='font-sans uppercase text-center mx-4'>Featured Work</h2>
      <p className='font-[Oswald] font-medium uppercase text-3xl text-center my-6 mx-4'>
        Check out some of our most notable projects that demonstrate our
        expertise and creativity.
      </p>
      <p className='font-sans text-center my-6 mx-4'>
        Our featured projects include a diverse range of industries and design
        challenges, showcasing our ability to adapt and innovate.
      </p>
      {/* Brands */}
    </div>
  );
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
      <p className='font-sans text-center mx-4'>
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

function Images() {
  const style = {
    image: [
      // TODO: Add fix for iPhone SE, Samsung Galaxy S8+
      [
        'aspect-ratio-108/561',
        'w-[calc(205/320*100vi)]',
        'translate-x-[50vi]',
        '-translate-y-[calc(431px-108/561*100vi)]',
        'max-w-[464px]',
        'lg:translate-x-[512px]',
        'lg:-translate-y-[234px]',
      ],
      [
        'aspect-ratio-141/561',
        'w-[calc(130/320*100vi)]',
        'translate-x-[42vi]',
        'translate-y-[calc(141/561*100vi)]',
        'max-w-[301px]',
        'md:translate-y-[193px]',
        'lg:translate-x-[429.66px]',
      ],
      // TODO: Add fix for iPhone SE, iPhone 14 Pro Max, Samsung Galaxy S8+, Samsung Galaxy S20 Ultra, Pixel 7, iPad mini, iPad Air, Surface Pro 7, Surface Duo, Asus ZenBook Fold, Samsung Galaxy A51/71,
      // Nest Hub, Nest Hub Max
      [
        'aspect-ratio-141/561',
        'w-[calc(205/320*100vi)]',
        'translate-x-[0vi]',
        'translate-y-[calc(400px-141/561*50vi)]',
        'max-w-[495.516px]',
        'lg:-translate-x-[0px]',
        'lg:translate-y-[0px]',
        'lg:bottom-[-30px]',
      ],
      [
        'aspect-ratio-109/561',
        'w-[calc(120/320*100vi)]',
        '-translate-x-[50vi]',
        'translate-y-[calc(10vi)]',
        'max-w-[281.32px]',
        'lg:-translate-x-[511.5px]',
        'lg:translate-y-[102.3px]',
      ],
      [
        'aspect-ratio-117/561',
        'w-[calc(180/320*100vi)]',
        '-translate-x-[50vi]',
        '-translate-y-[calc(19vi)]',
        'max-w-[496px]',
        'lg:-translate-x-[511px]',
        'lg:-translate-y-[153px]',
      ],
    ],
  };

  const images = [laptop, sketch, plants, lights, desktop];

  return (
    <>
      {images.map((image, index) => (
        <Image
          src={image}
          alt='Portfolio Image'
          className={['absolute object-cover', ...style.image[index]].join(' ')}
          key={index}
        />
      ))}
    </>
  );
}

function Projects() {
  const projects = [{}, {}, {}, {}]; // Placeholder for project data
  if (projects.length === 0) {
    return <p className='text-center'>No projects available at the moment.</p>;
  }

  return projects.map((project, index) => (
    <article key={index}>
      <Image
        src={desktop}
        alt={`Project Image ${index + 1}`}
        className='w-full h-auto'
      />
      <p>Category</p>
      <p>Project Title</p>
    </article>
  ));
}
