import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/data/cases";

export default function CaseStudyCard(caseStudy: CaseStudy) {
  return (
    <Link
      href={caseStudy.url}
      target="_blank" // TODO: Remove target when local
      rel="noopener noreferrer" // TODO: Remove rel when local
    >
      <article className="pb-20">
        <Image
          src={caseStudy.image}
          alt={`${caseStudy.title}} Project Image`}
          className={"aspect-[2/3] h-auto w-full object-cover pb-2"}
        />
        <p className={`pb-1 font-sans text-sm`}>{caseStudy.client}</p>
        <h3 className={`font-sans text-xl`}>{caseStudy.title}</h3>
      </article>
    </Link>
  );
}
