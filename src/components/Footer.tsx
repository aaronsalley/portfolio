import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import EmailSubscribeForm from './FormEmailSubscribe';
import Copyright from '@/components/Copyright';
import { Suspense } from 'react';

export default function Footer() {
  return (
    <footer className="relative flex flex-wrap gap-y-12 bg-salley-dark text-salley-light md:gap-y-16">
      <p className="mt-12 w-full text-center font-serif text-[9.55vi] uppercase md:order-4 md:mt-0 xl:text-[180px]">
        Aaron Salley
      </p>
      <div className="mx-10 w-full max-w-7xl text-center font-sans md:order-5 md:ml-9 md:flex-1 md:text-left">
        <p className="md:mr-8 md:ml-auto md:max-w-xl lg:mr-16">
          I help organizations turn complex problems into clear, scalable
          products—aligning strategy, design, and technology to build systems
          that last. The work favors clarity over noise, intention over urgency,
          and durability over trends.
        </p>
      </div>
      <NavLinks className="grid w-full grid-cols-2 gap-6 text-center font-sans text-sm tracking-widest uppercase md:order-1 md:ml-9 md:flex md:flex-1 md:columns-1 md:items-center lg:gap-15" />
      {/* Instagram className='md:order-7' */}
      <div className="mx-10 flex-1 md:order-6 md:mr-9">
        <EmailSubscribeForm className="sm:mr-auto md:mr-8 md:max-w-xl lg:ml-16" />
      </div>
      <SocialLinks className="mx-auto flex justify-center gap-4 md:order-2 md:mr-9 md:items-center md:justify-end md:py-7" />
      <div className="border-warm-ivotext-salley-light absolute top-20 hidden w-full border-t opacity-30 md:order-3 md:block" />
      <Suspense>
        <Copyright />
      </Suspense>
    </footer>
  );
}
