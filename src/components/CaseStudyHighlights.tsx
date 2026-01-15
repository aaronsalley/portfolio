import CaseStudyRow from './CaseStudyRow';
import Button from './Button';
import { getCaseStudies } from '@/data/getMDX';

export const CaseStudyHighlights = () => {
  const caseStudies = getCaseStudies();

  const renderCaseItems = () => {
    return caseStudies
      .filter((caseStudy) => caseStudy.featured)
      .slice(0, 4)
      .map((caseStudy) => <CaseStudyRow key={caseStudy.slug} {...caseStudy} />);
  };

  return (
    <section className="mx-10 my-20 max-w-7xl xl:mx-auto">
      <div className="flex flex-col justify-evenly gap-10 lg:flex-row">
        <header className="text-4xl lg:w-1/2 lg:pr-[25%]">
          <h2 className="mb-[1em] text-base">Work</h2>
          <p>Strategy Meets Momentum</p>
        </header>
        <div className="lg:w-1/2">
          <p className="mb-[1.5em] text-lg text-salley-primary">
            I help clarify the real problem, make the decisions that matter, and
            create momentum that holds once the room clears.
          </p>
          <Button href="/contact" variant="text">
            Let&apos;s Connect
          </Button>
        </div>
      </div>
      <ol className="my-10">{renderCaseItems()}</ol>
    </section>
  );
};
