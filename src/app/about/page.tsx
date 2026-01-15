import { Metadata } from 'next';
import Headshot from '@/assets/images/Aaron_Salley_LLC.jpg';
import Office from '@/assets/images/aaron-salley-office-poster.jpg';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import PostList from '@/components/PostList';
import { fetchPosts } from '@/data/fetchPosts';
import Experience from '@/components/Experience';
import { getCaseStudies } from '@/data/getMDX';

export const metadata: Metadata = {
  title: 'About',
  description: `Product leader and builder helping organizations navigate complexity—turning ambiguity into clear, scalable systems built to endure.`,
};

export default async function AboutPage() {
  const posts = await fetchPosts();

  return (
    <>
      <article className="flex flex-col pt-40">
        <Hero />
        <About />
        <Experience />
        <Workflow />
      </article>
      <aside className="bg-salley-primary/10">
        <Carousel posts={getCaseStudies()} />
      </aside>
      <PostList posts={posts} />
    </>
  );
}

const Hero = () => (
  <header className="flex min-h-screen flex-col gap-20">
    <div className="mx-10 flex max-w-7xl flex-col gap-20 lg:flex-row xl:mx-auto">
      <h1 className="about-name lg:w-5/12">
        <small className="font-sans text-2xl tracking-normal lg:block">
          Hello There 👋🏽 I&apos;m
        </small>{' '}
        Aaron.
      </h1>
      <div className="lg:w-7/12">
        <p className="text-pretty">
          I work with organizations navigating complexity—where the stakes are
          high, systems are layered, and clarity is hard-won. My focus is on
          turning ambiguity into direction, and direction into products that
          scale without losing their edge.
        </p>
      </div>
    </div>
    <div className="about-headshot mx-auto w-full max-w-432">
      <Image
        src={Headshot}
        alt="Aaron Salley"
        fill
        className="object-cover portrait:object-[50%_-12cqmin] landscape:object-[50%_-12cqmax]"
      />
    </div>
  </header>
);

const About = () => (
  <main className="bg-salley-primary/10 py-20">
    <div className="mx-10 flex max-w-7xl flex-col items-center-safe gap-20 lg:flex-row-reverse xl:mx-auto">
      <section className="lg:w-7/12">
        <h2 className="text-4xl">My Philosophy</h2>
        <p className="my-4 text-balance">
          My background spans entertainment, healthcare, commerce, and platform
          businesses, from 0→1 products to systems used by millions. I’ve built
          new models, introduced new interfaces, and challenged inherited
          assumptions, then carried those ideas through design, engineering, and
          launch. The work balances creative ambition with operational
          discipline, so what’s imagined can scale.
        </p>
        <p className="my-4 text-balance">
          I believe innovation happens when strong ideas meet decisive
          leadership. When teams are aligned on what matters—and confident
          enough to say no—there’s room to build products that feel original,
          inevitable, and built to last.
        </p>
      </section>
      <Image
        src={Office}
        alt="Aaron Salley Office Poster"
        className="aspect-square rounded-2xl object-cover object-left lg:w-5/12"
      />
    </div>
  </main>
);

const Workflow = () => {
  const steps = [
    {
      phase: 'Discover',
      description:
        'I start by listening—not just for what’s being asked for, but for what’s underneath it. Where priorities feel unclear. Understanding the real stakes of the moment, not validating an existing plan.',
    },
    {
      phase: 'Define',
      description:
        'From there, the focus shifts to clarity. We surface assumptions and name trade-offs that have gone unspoken. Progress begins once the problem is framed honestly enough to hold.',
    },
    {
      phase: 'Deliver',
      description:
        'Execution follows naturally when decisions are clear. I stay close enough to ensure intent aligns with reality. When adjustments are needed, they’re made deliberately, not reactively.',
    },
  ];

  const renderSteps = () => {
    return steps.map((step, i) => {
      return (
        <li key={i} className="grid grid-cols-[5rem_auto] gap-10">
          <span className="flex h-[2em] w-[2em] items-center justify-center rounded-full bg-salley-dark font-sans text-4xl text-salley-light">
            {i + 1}
          </span>
          <div>
            <h3 className="font-sans text-3xl">{step.phase}</h3>
            <p className="w-full self-baseline-last text-pretty text-salley-primary lg:mr-7">
              {step.description}
            </p>
          </div>
        </li>
      );
    });
  };

  return (
    <section className="bg-salley-primary/10 py-40">
      <div className="mx-10 flex max-w-7xl flex-col md:mx-14 lg:flex-row xl:mx-auto">
        <div className="lg:w-1/2">
          <h2 className="mb-20 text-4xl lg:pr-[25%]">
            My Process in Three Steps
          </h2>
        </div>
        <ol className="relative flex flex-col gap-20 lg:w-1/2">
          {renderSteps()}
          <span
            className="absolute top-0 bottom-1/5 left-[calc(2.25rem-0.5px)] -z-10"
            style={{
              width: '1px',
              border: '1px dashed #000',
              borderStyle: 'none',
              backgroundImage:
                'linear-gradient(to bottom, black 50%, rgba(255, 255, 255, 0) 0%)',
              backgroundPosition: 'bottom, top',
              backgroundSize: '1px 10px',
              backgroundRepeat: 'repeat-y',
            }}
          ></span>
        </ol>
      </div>
    </section>
  );
};
