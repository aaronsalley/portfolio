import Button from '@/components/Button';
import CTA from '@/components/CTA';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Ideas',
  description: `Essays and perspectives on product invention, systems thinking, and making clear decisions in complex environments.`,
};

export default function BlogPage() {
  return (
    <>
      <div className="flex flex-col bg-salley-primary/10 py-40">
        <header className="mx-10 lg:mx-auto lg:max-w-7xl">
          <h1 className="w-3/4 font-serif text-5xl">
            Latest Insights & Trends
          </h1>
          <p className="w-3/4">
            I write about product invention, systems, and the decisions that
            shape what gets built. The focus is less on tactics and more on
            clarity—how good judgment, restraint, and original thinking lead to
            work that endures.
          </p>
        </header>
        <div>
          <ul></ul>
          <menu></menu>
        </div>
        <section className="mx-10 flex items-start justify-between lg:mx-auto lg:max-w-7xl">
          <header className="w-3/4">
            <h2 className="text-4xl">Product Tips & Tutorials</h2>
            <p>
              Focus on the practical side of product work—tools, techniques, and
              patterns that hold up in real systems. The emphasis is on
              approaches that create clarity, reduce friction, and make complex
              work easier to sustain.
            </p>
          </header>
          <Button href="">See more</Button>
        </section>
        <section className="mx-10 flex items-start justify-between lg:mx-auto lg:max-w-7xl">
          <header className="w-3/4">
            <h2 className="text-4xl">Case Studies & Project Highlights</h2>
            <p>
              Highlights of selected work across product invention, platform
              strategy, and system design. Each case reflects a specific
              moment—an inflection point, a constraint, or a decision—that
              shaped what was built and why it endured.
            </p>
          </header>
          <Button href="">See more</Button>
        </section>
      </div>
      <CTA />
    </>
  );
}
