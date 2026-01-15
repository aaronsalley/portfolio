import { CaseStudy } from '@/data/getMDX';
import Button from './Button';

export default function CaseStudyRow(caseStudy: Partial<CaseStudy>) {
  // TODO: Redesign case
  return (
    <article className="grid grid-cols-1 gap-4 border-salley-secondary py-6 not-last:border-b md:grid-cols-3">
      <header>
        <p className="text-2xl font-light tracking-tighter">
          {caseStudy.client_name}
        </p>
      </header>
      <p className="text-salley-primary">{caseStudy.excerpt}</p>
      <div className="flex items-center justify-end">
        <Button
          href={(caseStudy.slug && `/work/${caseStudy.slug}`) ?? ''}
          variant="hollow"
        >
          Read More
        </Button>
      </div>
    </article>
  );
}
