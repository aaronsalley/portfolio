import { Metadata } from "next";
import Headshot from "@/assets/images/Aaron_Salley_LLC.jpg";
import Office from "@/assets/images/aaron-salley-office-poster.jpg";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import PostList from "@/components/PostList";
import { fetchPosts } from "@/data/fetchPosts";
import Experience from "@/components/Experience";

export const metadata: Metadata = {
  title: "About",
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
        <Carousel />
      </aside>
      <PostList posts={posts} />
    </>
  );
}

const Hero = () => (
  <header className="flex flex-col min-h-screen gap-20">
    <div className="flex flex-col lg:flex-row gap-20 mx-10 max-w-7xl xl:mx-auto">
      <h1 className="lg:w-5/12 about-name">
        <small className="lg:block text-2xl tracking-normal font-sans">
          Hello There 👋🏽 I&apos;m
        </small>{" "}
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
    <div className="about-headshot w-full max-w-[1728px] mx-auto">
      <Image
        src={Headshot}
        alt="Aaron Salley"
        fill
        className="object-cover landscape:object-[50%_-12cqmax] portrait:object-[50%_-12cqmin]"
      />
    </div>
  </header>
);

const About = () => (
  <main className="py-20 bg-salley-primary/10">
    <div className="flex flex-col lg:flex-row-reverse mx-10 gap-20 max-w-7xl xl:mx-auto items-center-safe">
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
        className="lg:w-5/12 aspect-square object-cover object-left rounded-2xl"
      />
    </div>
  </main>
);

const Workflow = () => {
  const steps = [
    {
      phase: "Discover",
      description:
        "I start by listening—not just for what’s being asked for, but for what’s underneath it. Where priorities feel unclear. Understanding the real stakes of the moment, not validating an existing plan.",
    },
    {
      phase: "Define",
      description:
        "From there, the focus shifts to clarity. We surface assumptions and name trade-offs that have gone unspoken. Progress begins once the problem is framed honestly enough to hold.",
    },
    {
      phase: "Deliver",
      description:
        "Execution follows naturally when decisions are clear. I stay close enough to ensure intent aligns with reality. When adjustments are needed, they’re made deliberately, not reactively.",
    },
  ];

  const renderSteps = () => {
    return steps.map((step, i) => {
      return (
        <li key={i} className="grid grid-cols-[5rem_auto] gap-10">
          <span className="flex justify-center items-center font-sans text-4xl bg-salley-dark text-salley-light rounded-full h-[2em] w-[2em]">
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
      <div className="flex flex-col lg:flex-row mx-10 md:mx-14 max-w-7xl xl:mx-auto">
        <div className="lg:w-1/2">
          <h2 className="lg:pr-[25%] text-4xl mb-20">
            My Process in Three Steps
          </h2>
        </div>
        <ol className="flex flex-col gap-20 lg:w-1/2 relative">
          {renderSteps()}
          <span
            className="absolute top-0 bottom-1/5 -z-10 left-[calc(2.25rem-0.5px)]"
            style={{
              width: "1px",
              border: "1px dashed #000",
              borderStyle: "none",
              backgroundImage:
                "linear-gradient(to bottom, black 50%, rgba(255, 255, 255, 0) 0%)",
              backgroundPosition: "bottom, top",
              backgroundSize: "1px 10px",
              backgroundRepeat: "repeat-y",
            }}
          ></span>
        </ol>
      </div>
    </section>
  );
};
