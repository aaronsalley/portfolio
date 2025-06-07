import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

export interface CaseStudy {
  title: string;
  description: string;
  imageUrl: string | StaticImageData;
  link: string;
  categories?: string[];
}

export default function CaseStudies({
  caseStudies,
}: {
  caseStudies: CaseStudy[];
}) {
  return (
    <>
      {caseStudies.map((caseStudy, index) => {
        if (index > 1) return null;

        return (
          <article
            key={index}
            className='flex flex-col-reverse md:odd:flex-row md:even:flex-row-reverse justify-center items-center mx-5 my-20 gap-5 sm:m-20 sm:gap-10 lg:gap-13 lg:my-30'
          >
            <div className='w-full md:w-[50%]'>
              <p className='font-sans text-sm uppercase mb-5'>Case Study</p>
              <p className='font-serif font-medium mb-5 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl'>
                {caseStudy.title}
              </p>
              <p className='font-sans font-light mb-8 xl:text-lg'>
                {caseStudy.description}
              </p>
              <Link href={caseStudy.link} className='btn filled'>
                Read More
              </Link>
            </div>
            <Image
              src={caseStudy.imageUrl}
              alt='Case Study Image'
              width={500}
              height={500}
              className='object-cover sm:w-1/1 md:max-w-1/2'
            />
          </article>
        );
      })}
    </>
  );
}
