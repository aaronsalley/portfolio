import { posts as caseStudies } from "@/data/cases";
import CaseStudyRow from "./CaseStudyRow";
import Button from "./Button";

export const CaseStudyHighlights = () => {
  const renderCaseItems = () => {
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
            Let&apos;s Connect
          </Button>
        </div>
      </div>
      <ol className="my-10">{renderCaseItems()}</ol>
    </section>
  );
};
