import { getCaseStudies } from '@/data/getMDX';

export default function CaseStudy() {
  const caseStudies = getCaseStudies();
  console.log(caseStudies);

  return <div>Case Study Page</div>;
}
