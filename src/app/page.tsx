import Button from "@/components/Button";
import Image from "next/image";
import headshot from "@/assets/images/Aaron Salley, MBA.png";
import { posts as caseStudies } from "@/assets/cases";
import Carousel from "@/components/Carousel";
import { Metadata } from "next";
import CredibilityStrip from "@/components/CredibilityStrip";
import CaseStudyRow from "@/components/CaseStudyRow";
import { fetchPosts, Post } from "@/helpers/fetchPosts";
import PostList from "@/components/PostList";

export const metadata: Metadata = {
  title: "Aaron Salley – Digital Creative Studio",
  description:
    "A boutique studio crafting tailored solutions via high-end creative, execution, and strategy services. We specialize in meeting client needs with unique digital products.",
};

export default async function HomePage() {
  const posts = await fetchPosts();

  return (
    <div className="mx-auto flex w-full flex-col">
      <Hero />
      <About />
      <CredibilityStrip />
      <WorkHighlights />
      <PostList posts={posts} />
    </div>
  );
}

const Hero = () => {
  return (
    <div className="relative z-0 flex h-screen w-screen">
      <div className="flex flex-col items-center font-light absolute left-0 top-1/10 md:top-1/6 w-full md:w-9/12 landscape:top-1/2 md:-translate-y-1/2 lg:w-2/3">
        <p className="w-full max-w-2/3 text-[40cqmin]/[.8em] md:text-[30cqmin] -tracking-widest -ml-[9cqmin] md:-ml-[7cqmin]">
          Hello
        </p>
        <h1
          className="text-xl w-full max-w-2/3 whitespace-nowrap tracking-tight before:content-['– '] before:inline-block"
          style={{ fontSize: "clamp(1rem, 3cqmin, 100vw)" }}
        >
          Aaron Salley, product creator & builder
        </h1>
      </div>
      <Image
        src={headshot}
        alt="Aaron Salley's headshot"
        className="absolute right-0 bottom-0 z-10 h-screen transform-[scaleX(-1)] object-contain object-bottom-right saturate-50 w-max"
      />
      <div
        className="absolute top-1/2 left-11 flex w-[90cqmin] min-w-sm -translate-x-1/2 -rotate-90 items-center opacity-40"
        style={{ paddingRight: "clamp(45px, 5cqmin, 72px)" }}
      >
        NYC
        <div className="mx-8 grow-1 border-b-1"></div>
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

const About = () => (
  <>
    <div className="bg-salley-primary/10 pt-20 px-10 pb-10">
      <main className="w-full max-w-7xl xl:mx-auto flex flex-col lg:flex-row gap-10">
        <header className="lg:w-[36%]">
          <h2 className="font-sans text-3xl/loose">About Me</h2>
          <p className="mb-8 font-sans text-lg text-pretty text-salley-primary">
            I'm Aaron Salley, a{" "}
            <b className="text-salley-accent-2">product leader</b> blending deep
            technical fluency with strategic thinking — turning complexity into
            clarity and momentum.
          </p>
        </header>
        <section className="grow-1 rounded-2xl "></section>
        <ul className="lg:w-[36%] sparkle-list flex flex-col items-end text-salley-primary">
          <li>
            For the past decade, I’ve led cross-functional teams navigating
            complex{" "}
            <b className="text-salley-accent-2">product, platform, and AI</b>{" "}
            decisions for organizations operating at scale—where judgment
            matters more than frameworks.
          </li>
          <li>
            I thrive in environments where product thinking, systems design, and
            technical depth are essential. From{" "}
            <b className="text-salley-accent-2">mind to market</b>, I create
            intention, idea integration, and shared conviction so illumination
            continues even after I step away.
          </li>
        </ul>
      </main>
    </div>
    <aside className="flex gap-10 bg-salley-primary/10 pb-20 pt-10 mb-20">
      <Carousel />
    </aside>
  </>
);

const WorkHighlights = () => {
  const renderCases = () => {
    return caseStudies
      .slice(0, 4)
      .map((caseStudy) => <CaseStudyRow key={caseStudy.id} {...caseStudy} />);
  };

  return (
    <section className="mx-10 my-20 max-w-7xl xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 justify-evenly">
        <header className="lg:w-1/2 lg:pr-[25%] text-4xl">
          {/* TODO: Update to "Top Hits" */}
          <p className="text-base mb-[1em]">Portfolio</p>
          <h2>Strategy Meets Momentum</h2>
        </header>
        <div className="lg:w-1/2">
          <p className="mb-[1.5em] text-lg text-salley-primary">
            I help clarify the real problem, make the decisions that matter, and
            create momentum that holds once the room clears.
          </p>
          <Button href="mailto:hello@aaronsalley.com" variant="text">
            Let's Connect
          </Button>
        </div>
      </div>
      <ol className="my-10">{renderCases()}</ol>
    </section>
  );
};
