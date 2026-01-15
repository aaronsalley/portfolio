import Link from 'next/link';
import Image from 'next/image';
import { CaseStudy } from '@/data/getMDX';

export default function CaseStudyCard(caseStudy: Partial<CaseStudy>) {
  return (
    <Link href={(caseStudy.slug && `/work/${caseStudy.slug}`) ?? ''}>
      <article className="pb-20">
        {caseStudy.feature_image && (
          <Image
            src={caseStudy.feature_image}
            alt={`${caseStudy.title}} Project Image`}
            className={'aspect-2/3 h-auto w-full object-cover pb-2'}
            width={400}
            height={600}
          />
        )}
        <p className={`pb-1 font-sans text-sm`}>{caseStudy.client_name}</p>
        <h3 className={`font-sans text-xl`}>{caseStudy.title}</h3>
      </article>
    </Link>
  );
}
