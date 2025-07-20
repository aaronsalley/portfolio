import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

import placeholder from '@/assets/images/aaron-salley-office-poster.jpg';
import diversity from '@/assets/images/Firefly_Diverse people working on product strategy and research to create clear, intentional  388919.jpg';
import roadmap from "@/assets/images/Firefly_Black person's hand working with a product roadmap. 864901.jpg";
import wireframes from '@/assets/images/Firefly_Black person developing a website using VS Code from a Figma mockup. 388919.jpg';
import flow from '@/assets/images/kelly-sikkema-wdnpaTNwOEQ-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Digital Product Services | Aaron Salley',
  description: `Illuminate your potential with our expert consulting services. We specialize in design, development, and lifecycle management of intentional digital products.`,
};

export default function Services() {
  return (
    <>
      <section className='will-stick flex flex-col justify-center items-center min-h-screen bg-[url("../assets/images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg")] bg-cover bg-center text-salley-white'>
        <h1 className='text-[11vi]/[11vi] lg:text-8xl uppercase text-center'>
          <pre className='font-[Oswald] font-semibold'>Creative & GTM</pre>{' '}
          Strategy
        </h1>
        <p
          className={[
            'max-w-2xs mt-5 mb-8 font-sans text-center',
            'md:max-w-md',
          ].join(' ')}
        >
          Illuminate your potential with our expert consulting services. We
          specialize in design, development, launch, and lifecycle management of
          intentional digital products. Drive growth and optimize performance
          with our integrated approach.
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
    title: 'Intentional Strategy',
    description:
      "Every impactful digital product begins with a clear, intentional strategy. Our Product Strategy & Research services are designed to illuminate your path, ensuring your product resonates with your audience and achieves your business goals. Whether you're a startup, SMB, or enterprise, we provide the expertise to navigate the complexities of the digital landscape.",
    images: [roadmap, flow],
  },
  {
    title: 'Integrated Design & Engineering',
    description:
      'A brilliant strategy deserves flawless execution. Our Integrated Design & Engineering services bridge the gap between concept and reality, delivering digital products that are not only functional but also intuitive, beautiful, and robust. From initial sketches to full-scale deployment, we handle every aspect of the build, delivering high-quality products that exceed your expectations.',
    images: [wireframes],
  },
  {
    title: 'Illuminated Results',
    description:
      "Launch is just the beginning. Our launch and growth services are dedicated to ensuring your digital product not only succeeds at launch but continues to evolve, grow, and deliver lasting value. We're here to help you sustain momentum and achieve measurable success.",
    images: [placeholder],
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
        Digital experiences so good they can&apos;t ignore you.
      </h2>
      <Image
        src={diversity}
        alt='Description of the image'
        width={500}
        height={300}
        className={[
          'm-auto w-full max-w-md py-10',
          'md:order-1 md:row-span-2 md:h-full md:object-cover md:mr-0',
        ].join(' ')}
      />
      <p className={['font-sans', 'md:order-3 md:max-w-md'].join(' ')}>
        Whether you need a new product developed from scratch or an existing
        product enhanced, we have the skills and experience to help you succeed.
        Let us help you create a product that your customers will love and that
        will drive your business forward. We believe in a collaborative
        approach, working hand-in-hand with you throughout the entire process.
        From concept to launch, we ensure that your product is not only
        functional but also user-friendly and visually appealing.
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
      image: [
        'aspect-[3/2] md:h-full md:object-cover',
        'aspect-[3/2] absolute bottom-0 right-0 translate-y-1/2 max-w-1/3 md:max-w-2/3 md:translate-x-1/4',
      ],
    },
    {
      container: '',
      text: ['text-end', 'md:text-start'].join(' '),
      image: ['ml-auto md:h-full md:object-cover'],
    },
    {
      container: 'md:flex-row-reverse',
      text: ['text-end', ''].join(' '),
      image: ['mx-auto md:h-full md:object-cover'],
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
