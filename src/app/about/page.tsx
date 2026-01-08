import { Metadata } from "next";
import Headshot from "@/assets/images/Aaron_Salley_LLC.jpg";
import Image from "next/image";
import formatOrderedList from "@/helpers/formatOrderedList";

export const metadata: Metadata = {
  title: "Who We Are | Aaron Salley",
  description: ``,
};

export default function AboutPage() {
  return (
    <main className="relative mx-4 my-40 max-w-7xl gap-4 md:mx-14 md:gap-8 xl:mx-auto">
      <h1 className="mb-4 font-serif text-4xl">About Me</h1>
      <Image
        src={Headshot}
        alt="Aaron Salley"
        style={{ objectFit: "cover" }}
        className="md:float-right md:ml-8 md:max-w-1/2"
      />
      <p className="my-4 text-balance">
        I build products that make complex work simple. As a seasoned
        entrepreneurial leader with over 15 years of experience driving digital
        transformation and scaling digital products from concept to market
        across a wide array of sectors, I combine strategic vision with
        technical expertise to create meaningful impact.
      </p>
      <p className="my-4 text-balance">
        For the past decade, I’ve led cross-functional teams to create
        AI-enabled platforms, modernize enterprise systems, and transform
        operations at scale. Whether it’s improving healthcare workflows,
        scaling ecommerce platforms, or designing patented AI tools, I focus on
        solving real problems with meaningful impact.
      </p>
      <p className="my-4 text-balance">
        My unique blend of technical proficiency and business acumen is
        complemented by my commitment to purposeful innovation. I thrive in
        environments where product thinking, systems design, and technical depth
        are essential. I specialize in turning complex workflows into scalable
        SaaS products that drive measurable business outcomes. My work
        consistently accelerates productivity, improves user experience, and
        unlocks new revenue opportunities.
      </p>
      <p className="my-4 text-balance">
        I hold an MBA from NYU Stern School of Business, and have completed
        advanced coursework at Harvard, Stanford, Yale, and UNC Chapel Hill. My
        expertise spans the full product lifecycle—from strategic planning and
        stakeholder alignment to cross-functional team leadership and
        performance optimization.
      </p>
      {/* <Workflow /> */}
    </main>
  );
}

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
        "aspect-square p-8 bg-salley-primary/10 flex flex-wrap justify-between",
        i === 0 && "col-start-2",
      ].join(" ");
      return (
        <li key={i} className={classNames}>
          <span className="font-sans font-bold text-salley-accent">
            {formatOrderedList(i + 1)}
          </span>
          <h3 className="font-sans text-4xl font-semibold text-salley-accent">
            {step.phase}
          </h3>
          <p className="w-full self-baseline-last text-sm text-pretty text-salley-primary lg:mr-7">
            {step.description}
          </p>
        </li>
      );
    });
  };

  return (
    <section className="mx-4 md:mx-14 w-full max-w-7xl xl:mx-auto">
      <div className="relative md:items-end md:justify-between lg:flex"></div>
      <ul className="mt-12 flex w-full flex-col gap-4 max-md:px-15 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {renderSteps()}
      </ul>
    </section>
  );
};
