import { Metadata } from "next";

import Brands from "@/components/Brands";
import { CaseStudies, Hero, Intro, Workflow } from "@/components/Landing";

export const metadata: Metadata = {
  title: "Aaron Salley – Digital Creative Studio",
  description:
    "A boutique studio crafting tailored solutions via high-end creative, execution, and strategy services. We specialize in meeting client needs with unique digital products.",
};

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-40 w-full max-w-7xl mx-auto mb-47">
      <Hero />
      <Intro />
      <Brands />
      <Workflow />
      <CaseStudies />
    </div>
  );
}
