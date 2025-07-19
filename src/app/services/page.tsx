import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <section className='flex flex-col justify-center items-center min-h-screen'>
        <h1 className='text-[11vi]/[11vi] lg:text-8xl uppercase text-center'>
          <pre className='font-[Oswald] font-semibold'>Creative & GTM</pre>{' '}
          Strategy
        </h1>
        <p className='max-w-2xs mt-5 mb-8 font-sans text-center'>
          Elevate your product&apos;s potential with our expert consulting
          services. We specialize in strategic roadmapping, crafting and
          developing your product, and executing successful go-to-market
          strategies. Drive growth and optimize performance with our data-driven
          approach.
        </p>
      </section>
      <ValueProposition />
      <Offerings />
      <SocialProof />
      <Process />
      <FAQs />
      <CTA />
    </>
  );
}

const valueProps = [
  {
    title: 'End-to-End Product Design',
    description:
      'From concept to launch, we ensure that your product is not only functional but also user-friendly and visually appealing. Our team is dedicated to delivering high-quality products that exceed your expectations.',
    images: ['/path/to/image1.jpg', '/path/to/image2.jpg'],
  },
  {
    title: 'Collaborative Development Process',
    description:
      'We believe in a collaborative approach, working hand-in-hand with you throughout the entire process. Our goal is to not only meet your expectations but to exceed them, delivering a product that truly stands out in the market.',
    images: ['/path/to/image1.jpg'],
  },
  {
    title: 'Comprehensive Product Development',
    description:
      'Whether you need a new product developed from scratch or an existing product enhanced, we have the skills and experience to help you succeed. Let us help you create a product that your customers will love and that will drive your business forward.',
    images: ['/path/to/image1.jpg'],
  },
];
function ValueProposition() {
  return (
    <section
      className={[
        'mx-3 my-20 gap-y-20 gap-x-10',
        'md:grid md:grid-cols-2 md:grid-rows-auto',
      ].join(' ')}
    >
      <h2
        className={[
          'font-[Oswald] text-4xl font-medium uppercase text-center',
          'md:order-2 md:max-w-md',
        ].join(' ')}
      >
        Digital Products so good they can&apos;t ignore you.
      </h2>
      <Image
        src='/path/to/image.jpg'
        alt='Description of the image'
        width={500}
        height={300}
        className={[
          'm-auto w-full max-w-md py-10',
          'md:order-1 md:row-span-2',
        ].join(' ')}
      />
      <p className={['font-sans', 'md:order-3 md:max-w-md'].join(' ')}>
        Our product development services focus on turning your ideas into
        reality. We work closely with you to understand your vision, and then we
        leverage our expertise in design and engineering to create innovative
        solutions that meet your needs.
      </p>
      <ol
        className={[
          'flex flex-col clear-both',
          'md:gap-20 md:order-last md:col-span-full',
        ].join(' ')}
      >
        {valueProps.map(({ title, description, images }, index) => (
          <li
            key={index}
            className={[
              'flex flex-col my-4 gap-10',
              'md:flex-row md:gap-20 md:m-auto',
              style.listItems[index].container,
            ].join(' ')}
          >
            <div className='relative max-w-md'>
              {images.map((image, imgIndex) => (
                <Image
                  src={image}
                  key={imgIndex}
                  alt={`${title} image ${imgIndex + 1}`}
                  width={300}
                  height={200}
                  className={style.listItems[index].image[imgIndex]}
                />
              ))}
            </div>
            <div className='flex flex-col gap-3 max-w-md'>
              <span
                className={['text-6xl', style.listItems[index]?.text].join(' ')}
              >
                {'0' + (index + 1)}
              </span>
              <h3
                className={[
                  'font-[Oswald] text-2xl font-semibold uppercase',
                  style.listItems[index]?.text,
                ].join(' ')}
              >
                {title}
              </h3>
              <p
                className={['font-sans', style.listItems[index]?.text].join(
                  ' '
                )}
              >
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
const style = {
  listItems: [
    {
      container: 'md:flex-row-reverse',
      text: ['text-start', 'md:text-end'].join(' '),
      image: ['', 'absolute bottom-0 right-0 translate-y-1/2 max-w-1/3'],
    },
    {
      container: '',
      text: ['text-end', 'md:text-start'].join(' '),
      image: ['ml-auto'],
    },
    {
      container: 'md:flex-row-reverse',
      text: ['text-end', ''].join(' '),
      image: ['mx-auto'],
    },
  ],
};

const offerings = [
  {
    title: 'UI/UX Design & Web Development',
    description: [
      'Elevate Your Digital Experience',
      'Enhance your online presence with our expert UI/UX design and web development services. We specialize in creating stunning, user-friendly websites and mobile apps, backed by thorough UX research and testing.',
    ],
  },
  {
    title: 'Product Design & Prototyping',
    description: [
      'Bring Your Digital Vision to Life',
      'Transform your product ideas into reality with our expert product design and prototyping services. We specialize in creating intuitive and visually appealing digital products, interactive prototypes, wireframes, and comprehensive design systems for SaaS, fintech, and healthtech industries.',
    ],
  },
  {
    title: 'Content Creation & Digital Marketing',
    description: [
      'Captivate Your Audience',
      `Elevate your brand's online presence with our compelling content creation and digital marketing services. We specialize in crafting engaging social media content, campaign assets, and persuasive copywriting that drives results.`,
    ],
  },
  {
    title: 'GTM Strategy & consulting',
    description: [
      'Launch Your Product with Confidence',
      'Achieve successful product launches with our expert GTM strategy consulting. We provide comprehensive market research, competitive analysis, positioning and messaging, sales and distribution strategies, and marketing & demand generation to ensure your product reaches its full potential.',
    ],
  },
];
function Offerings() {
  return (
    <main>
      <ol>
        {offerings.map(({ title, description }, index) => (
          // Style to cards
          <li key={index} className='m-3 p-6'>
            <h2 className='font-[Oswald] text-2xl font-medium uppercase my-4 pb-4 border-b-1 border-salley-black'>
              {title}
            </h2>
            {description.map((desc, i) => (
              <p key={i} className='my-2 last-of-type:font-sans'>
                {desc}
              </p>
            ))}
            <Link href='/contact' className='btn'>
              Contact Us
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}

function SocialProof() {
  return <></>;
}

function Process() {
  return <></>;
}

function FAQs() {
  return <></>;
}

function CTA() {
  return (
    <div className='flex flex-col items-center gap-4 p-20 bg-[url("../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg")] bg-cover bg-center text-salley-white'>
      <h2 className='font-[Oswald] uppercase max-w-sm text-5xl font-semibold text-center'>
        Shall we begin?
      </h2>
      <p className='text-center font-sans max-w-sm'>
        Contact us today to learn more about our product development services
        and how we can help you achieve your goals.
      </p>
      <Link href='/contact' className='btn filled'>
        Get Started
      </Link>
    </div>
  );
}
