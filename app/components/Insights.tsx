import Link from 'next/link';
import { CaseStudy } from './CaseStudies';

export default function Insights({ resources }: { resources: CaseStudy[] }) {
  if (!resources || resources.length === 0) {
    return;
  }

  const insights = resources.map((resource, index) => {
    if (index > 4) return null;
    return (
      <li
        key={index}
        className='py-8 first:pt-0 border-salley-black not-last:border-b'
      >
        <Link href={resource.link} className='flex flex-col gap-6'>
          {resource.categories && resource.categories?.length > 0 ? (
            <p className='text-sm uppercase'>
              {resource.categories?.[0]?.replace('-', ' ')}
            </p>
          ) : null}
          <p className='text-3xl font-serif font-medium pr-4'>
            {resource.title}
          </p>
          <p className='text-lg font-sans font-light pr-4'>
            {resource.description}
          </p>
        </Link>
      </li>
    );
  });

  return (
    <section className='relative'>
      <div className='top-0 sm:sticky sm:h-0 sm:-z-10 sm:w-[30%] lg:w-1/2 text-6xl xl:text-8xl sm:text-center font-[oswald] font-medium uppercase'>
        <p className='flex flex-col sm:items-center pt-32 pb-16 sm:pb-32 pl-4 sm:px-5 xl:px-32'>
          I said what I said.{' '}
          <span className='hidden lg:inline'>Respectfully.</span>
        </p>
      </div>
      <ul className='sm:ml-[30%] lg:ml-[50%] pl-4 sm:pl-16 pb-32 sm:pt-32'>
        {insights}
      </ul>
    </section>
  );
}
