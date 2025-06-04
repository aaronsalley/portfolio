import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const caseStudies = [
    {
      title: 'Case Study Title',
      description: 'Description of the case study.',
      imageUrl: '/path/to/image.jpg',
      link: '/case-study',
    },
    {
      title: 'Case Study Title',
      description: 'Description of the case study.',
      imageUrl: '/path/to/image.jpg',
      link: '/case-study',
    },
  ];

  const offerings = [
    {
      title: 'Portfolio',
      description: 'Description of offering 1.',
      imageUrl: '/path/to/image1.jpg',
    },
    {
      title: 'Consulting',
      description: 'Description of offering 2.',
      imageUrl: '/path/to/image1.jpg',
    },
    {
      title: 'Insights',
      description: 'Description of offering 3.',
      imageUrl: '/path/to/image1.jpg',
    },
  ];

  return (
    <main>
      <Hero />
      <Intro />
      <Offerings offerings={offerings} />
      <Positioning />
      {caseStudies.map((caseStudy, index) => (
        <CaseStudy key={index} caseStudy={caseStudy} />
      ))}
      <Services />
      <Insights />
    </main>
  );
}

function Hero() {
  return (
    <section className='will-stick flex h-screen items-center justify-center text-white bg-slate-500'>
      <div className='flex flex-col items-center gap-5 max-w-5xl'>
        <h1 className='lg:text-xl'>Your Partner for Digital Innovation</h1>
        <h2 className='text-center lg:text-8xl uppercase font-serif font-medium'>
          <span className='font-[oswald] font-semibold'>Bespoke Strategy</span>
          <p> & </p>
          Solutions
        </h2>
        <p className='text-center'>
          A boutique studio crafting tailored solutions via high-end creative,
          execution, and strategy services. We specialize in meeting client
          needs with unique digital products.
        </p>
        <Link href={'#'} className='btn'>
          Our Work
        </Link>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className='flex flex-col pt-34 pb-12 gap-8 items-center text-center'>
      <p className='uppercase'>Strategy, Innovation & Scalable Solutions</p>
      <p className='font-serif font-medium lg:text-7xl'>
        Strategy-Driven Design & Delivery
      </p>
      <p className='lg:text-3xl font-light'>
        We're a digital creative studio offering tailored solutions for clients
        needing digital product services.
      </p>
    </section>
  );
}

function Offerings({
  offerings,
}: {
  offerings: { title: string; description: string; imageUrl: string }[];
}) {
  const features = offerings.map((offering, index) => (
    <div key={index} className=''>
      <Image
        src={offering.imageUrl}
        alt={offering.title}
        width={300}
        height={500}
      />
      <h4 className='font-serif font-medium lg:text-4xl'>{offering.title}</h4>
      <p>{offering.description}</p>
    </div>
  ));

  return (
    <section className='max-w-5xl mx-auto pt-17 pb-32'>
      <h3 className='uppercase'>Our Features</h3>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>{features}</div>
    </section>
  );
}

function Positioning() {
  return (
    <section className='relative flex flex-col h-screen items-center justify-center bg-slate-950 text-white'>
      <div className='flex flex-col gap-6 max-w-3xl text-center'>
        <p className='uppercase font-serif font-medium text-8xl text-center'>
          Why work{' '}
          <span className='block font-[oswald] font-semibold'>with us?</span>
        </p>
        <p className='text-lg'>
          Unlike studios that focus on a single specific creative discipline, we
          emphasize high-end design and production, while bridging the gap
          between strategy and creation.
        </p>
      </div>
    </section>
  );
}

function CaseStudy({
  caseStudy,
}: {
  caseStudy: {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
  };
}) {
  const {
    title = 'Case Study Title',
    description = 'Description of the case study.',
    imageUrl = '',
    link = '',
  } = caseStudy;

  return (
    <article className='flex even:flex-row-reverse justify-center gap-13 my-30'>
      <div className='max-w-[50%] py-13'>
        <p className='text-sm uppercase mb-5'>Case Study</p>
        <p className='font-serif font-medium text-7xl mb-5'>{title}</p>
        <p className='text-lg font-light mb-8'>{description}</p>
        <Link href={link} className='btn filled'>
          Read More
        </Link>
      </div>
      <Image src={imageUrl} alt='Case Study Image' width={446} height={506} />
    </article>
  );
}

function Services() {
  return (
    <section className='grid grid-cols-2 justify-center bg-slate-950 text-white py-37'>
      <Image
        src='/path/to/image.jpg'
        alt='Service Image'
        width={300}
        height={500}
        className='justify-self-end'
      />
      <div className='flex flex-col justify-between gap-6 lg:pr-33'>
        <p className='uppercase'>What we do</p>
        <ul>
          <li>
            <h3 className='uppercase text-8xl font-serif font-medium'>
              Strategy
            </h3>
          </li>
          <li>
            <h3 className='uppercase text-8xl font-[oswald] font-semibold'>
              Development
            </h3>
          </li>
          <li>
            <h3 className='uppercase text-8xl font-serif font-medium'>
              Content
            </h3>
          </li>
          <li>
            <h3 className='uppercase text-8xl font-[oswald] font-semibold'>
              Launch
            </h3>
          </li>
        </ul>
        <p className='text-lg font-light'>
          Elevate your product's potential with our expert consulting services.
          Drive growth and optimize performance with our data-driven approach.
        </p>
        <Link href={''} className='btn ghost self-start'>
          Learn More
        </Link>
      </div>
    </section>
  );
}

function Insights() {
  const resources = [
    {
      title: 'Resource Title 1',
      description: 'Description of resource 1.',
      link: '/resource-1',
      category: 'Resource Category',
    },
    {
      title: 'Resource Title 2',
      description: 'Description of resource 2.',
      link: '/resource-2',
      category: 'Resource Category',
    },
    {
      title: 'Resource Title 3',
      description: 'Description of resource 3.',
      link: '/resource-3',
      category: 'Resource Category',
    },
  ];
  return (
    <section className=''>
      <ul className='ml-[50%] pl-[4rem] pt-32'>
        {resources.map((resource, index) => (
          <li key={index} className='py-8 border-slate-950 not-last:border-b'>
            <Link href={resource.link} className='flex flex-col gap-6'>
              <p className='text-sm uppercase'>{resource.category}</p>
              <p className='text-3xl font-serif font-medium'>
                {resource.title}
              </p>
              <p className='text-lg font-light'>{resource.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
