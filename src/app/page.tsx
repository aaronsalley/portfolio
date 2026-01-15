import Image from 'next/image';
import headshot from '@/assets/images/Aaron Salley, MBA.png';
import Carousel from '@/components/Carousel';
import { Metadata } from 'next';
import CredibilityStrip from '@/components/CredibilityStrip';
import { fetchPosts } from '@/data/fetchPosts';
import PostList from '@/components/PostList';
import { CaseStudyHighlights } from '@/components/CaseStudyHighlights';
import { getCaseStudies } from '@/data/getMDX';

export const metadata: Metadata = {
  description:
    'Product Creator and Builder based in New York City. Product invention, strategy, and execution for organizations navigating complexity, scale, and moments that demand clarity.',
};

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="mx-auto flex w-full flex-col">
      <Hero />
      <Welcome />
      <CredibilityStrip />
      <CaseStudyHighlights />
      <PostList posts={posts} />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="relative z-0 flex h-screen w-screen">
      <div className="absolute top-1/10 left-0 flex w-full flex-col items-center font-light md:top-1/6 md:w-9/12 md:-translate-y-1/2 lg:w-2/3 landscape:top-1/2">
        <p className="-ml-[9cqmin] w-full max-w-2/3 font-serif text-[40cqmin]/[.8em] tracking-tighter md:-ml-[7cqmin] md:text-[30cqmin]">
          Hello
        </p>
        <h1
          className="w-full max-w-2/3 text-xl tracking-tight whitespace-nowrap before:inline-block before:content-['– ']"
          style={{ fontSize: 'clamp(1rem, 3cqmin, 100vw)' }}
        >
          Aaron Salley, product creator & builder
        </h1>
      </div>
      <Image
        src={headshot}
        alt="Aaron Salley's headshot"
        className="absolute right-0 bottom-0 z-10 h-screen w-max transform-[scaleX(-1)] object-contain object-bottom-right saturate-70"
        loading="eager"
      />
      <div
        className="absolute top-1/2 left-11 flex w-[90cqmin] min-w-sm -translate-x-1/2 -rotate-90 items-center opacity-40"
        style={{ paddingRight: 'clamp(45px, 5cqmin, 72px)' }}
      >
        NYC
        <div className="mx-8 grow border-b"></div>
        Product Manager
      </div>
      <div className="absolute bottom-8 left-22 flex items-center">
        Scroll down
        <svg
          width="16"
          height="16"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M16 6v20M16 26l-8-8M16 26l8-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

const Welcome = () => (
  <>
    <div className="bg-salley-primary/10 px-10 pt-20 pb-10">
      <main className="flex w-full max-w-7xl flex-col gap-10 lg:flex-row xl:mx-auto">
        <header className="lg:w-[36%]">
          <h2 className="font-sans text-3xl/loose">Welcome</h2>
          <p className="mb-8 font-sans text-lg text-pretty text-salley-primary">
            I&apos;m Aaron Salley, a{' '}
            <b className="text-salley-tertiary">product leader</b> blending deep
            technical fluency with strategic thinking — turning complexity into
            clarity and momentum.
          </p>
        </header>
        {/* TODO: make bg-salley-light */}
        <section className="grow rounded-2xl"></section>
        <ul className="sparkle-list flex flex-col items-end text-salley-primary lg:w-[36%]">
          <li>
            For the past decade, I&apos;ve led cross-functional teams navigating
            complex{' '}
            <b className="text-salley-tertiary">product, platform, and AI</b>{' '}
            decisions for organizations operating at scale—where judgment
            matters more than frameworks.
          </li>
          <li>
            I thrive in environments where product thinking, systems design, and
            technical depth are essential. From{' '}
            <b className="text-salley-tertiary">mind to market</b>, I create
            intention, idea integration, and shared conviction so illumination
            continues even after I step away.
          </li>
        </ul>
      </main>
    </div>
    <aside className="mb-20 flex gap-10 bg-salley-primary/10 pt-10 pb-20">
      <Carousel posts={getCaseStudies()} />
    </aside>
  </>
);
