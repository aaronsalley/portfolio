import { CaseStudy } from "@/data/cases";
import Button from "./Button";

export default function CaseStudyRow(caseStudy: CaseStudy) {
  // TODO: Redesign case
  return (
    <article
      key={caseStudy.id}
      className="grid grid-cols-1 md:grid-cols-3 gap-4 not-last:border-b border-salley-secondary py-6"
    >
      <header>
        <p className="text-2xl font-light tracking-tighter">
          {caseStudy.client}
        </p>
      </header>
      <p className="text-salley-primary">{caseStudy.excerpt}</p>
      <div className="flex justify-end items-center">
        <Button href={`${caseStudy.url}`} variant="hollow" target="_blank">
          Read More
        </Button>
      </div>
    </article>
  );
}
