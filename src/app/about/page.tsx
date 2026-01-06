import { Metadata } from "next";
import Headshot from "@/assets/images/Aaron_Salley_LLC.jpg";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Who We Are | Aaron Salley",
  description: ``,
};

export default function AboutPage() {
  return (
    <main className="relative my-40 max-w-7xl gap-4 md:gap-8 mx-4 md:mx-14 xl:mx-auto">
      <h1 className="text-4xl font-serif mb-4">About Me</h1>
      <Image
        src={Headshot}
        alt="Aaron Salley"
        style={{ objectFit: "cover" }}
        className="md:float-right md:max-w-1/2 md:ml-8"
      />
      <p className="text-balance my-4">
        I build products that make complex work simple. As a seasoned
        entrepreneurial leader with over 15 years of experience driving digital
        transformation and scaling digital products from concept to market
        across a wide array of sectors, I combine strategic vision with
        technical expertise to create meaningful impact.
      </p>
      <p className="text-balance my-4">
        For the past decade, I’ve led cross-functional teams to create
        AI-enabled platforms, modernize enterprise systems, and transform
        operations at scale. Whether it’s improving healthcare workflows,
        scaling ecommerce platforms, or designing patented AI tools, I focus on
        solving real problems with meaningful impact.
      </p>
      <p className="text-balance my-4">
        My unique blend of technical proficiency and business acumen is
        complemented by my commitment to purposeful innovation. I thrive in
        environments where product thinking, systems design, and technical depth
        are essential. I specialize in turning complex workflows into scalable
        SaaS products that drive measurable business outcomes. My work
        consistently accelerates productivity, improves user experience, and
        unlocks new revenue opportunities.
      </p>
      <p className="text-balance my-4">
        I hold an MBA from NYU Stern School of Business, and have completed
        advanced coursework at Harvard, Stanford, Yale, and UNC Chapel Hill. My
        expertise spans the full product lifecycle—from strategic planning and
        stakeholder alignment to cross-functional team leadership and
        performance optimization.
      </p>
    </main>
  );
}
