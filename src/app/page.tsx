import { Metadata } from "next";
import Button from "@/components/Button";
import Image from "next/image";
import Brands from "@/components/Brands";
import formatOrderedList from "@/helpers/formatOrderedList";
import headshot from "@/assets/images/Aaron_Salley_MBA.jpg";

export const metadata: Metadata = {
  title: "Aaron Salley – Digital Creative Studio",
  description:
    "A boutique studio crafting tailored solutions via high-end creative, execution, and strategy services. We specialize in meeting client needs with unique digital products.",
};

export default async function Start() {
  return (
    <div className="flex flex-col gap-40 w-full max-w-7xl mx-auto">
      <Hero />
      <Intro />
      <Brands />
      <CaseStudies />
      <Workflow />
    </div>
  );
}

const Hero = () => {
  const classNames = {
    title: [
      "mx-4 mt-20 mb-8 font-serif font-semibold text-moss text-5xl md:absolute md:w-md md:-translate-y-9/12 md:-translate-x-27/48 md:text-[7.3rem] md:leading-[.9] xl:w-xl xl:top-20 xl:text-8xl xl:-translate-x-1/3",
      "md:absolute md:bottom-0 md:translate-x-1/16 xl:translate-x-2/3",
    ],
    paragraph:
      "mt-4 text-sm font-sans lg:w-[250px] md:absolute md:translate-y-full md:-bottom-20 xl:bottom-0 xl:translate-y-0",
    container: "relative flex flex-col items-center",
  };

  return (
    <section className="will-stick flex items-center h-screen">
      <div className={`${classNames.container} w-full`}>
        <h1 className={`${classNames.title[0]} z-0`}>
          Strategy <br className="md:hidden" />
          Meets <span className={classNames.title[1]}>Movement</span>
        </h1>
        <div className={`${classNames.container} overflow-hidden`}>
          <p
            className={`hidden md:block ${classNames.title[0]} z-20 md:mix-blend-plus-lighter xl:mix-blend-color-dodge`}
          >
            Strategy Meets <span className={classNames.title[1]}>Movement</span>
          </p>
          <Image
            src={headshot}
            alt="Aaron Salley's headshot"
            className="z-10"
          />
        </div>
        <div className={`${classNames.paragraph} lg:left-14`}>
          <p>Aaron Salley</p>
          <p>Product Strategy • Digital Transformation • Executive Advisory</p>
          <p className="mt-4">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
        <div className={`${classNames.paragraph} hidden md:block lg:right-14`}>
          <p className="mb-4">
            Based in NYC
            <br />
            Working Worldwide
          </p>
          <p>
            Product Leader.
            <br />
            Where intention meets illumination.
          </p>
        </div>
      </div>
    </section>
  );
};

const Intro = () => (
  <main className="mx-4 md:mx-14 md:flex md:justify-between">
    <h2 className="text-moss font-bold font-sans">About Me</h2>
    <div className="max-w-[780px] xl:w-8/12">
      <p className="mb-8 font-serif text-justify text-xl/[1.6] md:text-4xl/[1.6]">
        <span className="text-end block">Aaron Salley is a</span>{" "}
        <b className="text-moss">product leader</b> blending deep technical
        fluency with strategic thinking — turning complexity into clarity and
        momentum.
      </p>
      <p className="font-sans text-lg text-warm-gray md:w-1/2">
        Navigating complex product, platform, and AI decisions for organizations
        operating at scale—where judgment matters more than frameworks.
      </p>
    </div>
  </main>
);

const CaseStudies = () => {
  const cases = [
    { id: 1, client: "MSK Direct", outcome: "Outcome A" },
    { id: 2, client: "B&H Photo Video", outcome: "Outcome B" },
    { id: 3, client: "Intry", outcome: "Outcome C" },
    { id: 4, client: "DaVincian", outcome: "Outcome D" },
    { id: 5, client: "LumiFi", outcome: "Outcome E" },
  ];

  const renderCases = () => {
    return cases.map((caseStudy, i) => (
      <article
        key={caseStudy.id}
        className="border-b border-burnt-umber py-6 flex items-center gap-4"
      >
        <span className="self-start">{formatOrderedList(i + 1)}</span>
        <div>
          <h3 className="font-semibold text-xl">{caseStudy.client}</h3>
          <p className="text-warm-gray">{caseStudy.outcome}</p>
        </div>
        <span className="flex-grow" />
        <Button href={`/case-study-${caseStudy.id}`} variant="hollow">
          Read More
        </Button>
      </article>
    ));
  };

  return (
    <section className="mx-4 md:mx-14 contain-inline-size">
      <h2
        className="font-serif font-bold text-center text-nowrap overflow-hidden text-moss max-md:text-[9.55vi]! max-lg:text-[8.85vi]!"
        style={{
          fontSize: "clamp(1rem, 9.25vi, 121px)",
          height: "clamp(1rem, 10.1vi, 128px)",
        }}
      >
        Strategic Outcomes
      </h2>
      <ol>{renderCases()}</ol>
    </section>
  );
};

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
      phase: "Develop",
      description:
        "Only then does direction emerge. A small set of decisions that create momentum. What to prioritize. What to stop. What can wait. A shared conviction—so teams can move without revisiting the same debates.",
    },
    {
      phase: "Deliver",
      description:
        "Execution follows naturally when decisions are clear. I stay close enough to ensure intent aligns with reality. When adjustments are needed, they’re made deliberately, not reactively.",
    },
  ];

  const renderSteps = () => {
    return steps.map((step, i) => {
      const classNames = [
        "aspect-square p-8 bg-warm-gray/10 flex flex-wrap justify-between",
        i === 0 && "col-start-2",
      ].join(" ");
      return (
        <li key={i} className={classNames}>
          <span className="font-bold font-sans text-burnt-umber">
            {formatOrderedList(i + 1)}
          </span>
          <h3 className="text-4xl text-burnt-umber font-sans font-semibold">
            {step.phase}
          </h3>
          <p className="text-warm-gray w-full self-baseline-last text-sm text-pretty lg:mr-7">
            {step.description}
          </p>
        </li>
      );
    });
  };

  return (
    <section className="mb-47 mx-4 md:mx-14">
      <div className="relative md:flex md:justify-between md:items-end">
        <h2 className="text-moss font-bold font-sans mb-4 md:absolute md:right-0 md:top-0">
          My Workflow
        </h2>
        <p className="font-serif text-justify mb-8 max-w-[780px] text-xl/[1.6] md:text-4xl/[1.6]">
          <span className="text-end block">
            From <b className="text-moss">mind to market</b>,
          </span>{" "}
          each step is designed to create intention, idea integration, and
          shared conviction so illumination continues even after I step away.
        </p>
        <p className="text-sm text-warm-gray max-w-[366px] md:w-1/3 md:absolute md:right-0 md:max-xl:-bottom-1/12">
          I help leaders clarify the real problem, make the decisions that
          matter, and create momentum that holds once the room clears.
        </p>
      </div>
      <ul className="w-full mt-12 flex flex-col gap-4 max-md:px-15 md:grid md:gap-8 md:grid-cols-3">
        {renderSteps()}
      </ul>
    </section>
  );
};
