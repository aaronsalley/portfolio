import Link from 'next/link';
import SocialLinks from './SocialLinks';
import EmailSubscribeForm from './EmailSubscribeForm';

interface BottomBar {
  pages: any[];
  images: any[];
  socials: Record<string, { href: string; icon: string }>;
}

export default function BottomBar({ pages, images, socials }: BottomBar) {
  return (
    <footer className='flex flex-col gap-15 bg-salley-black text-salley-white'>
      <div className='order-3 sm:order-1 flex justify-between pb-7 sm:px-9 sm:py-7 sm:border-b border-salley-white/20'>
        <nav className='grid grid-cols-2 w-full sm:w-auto sm:flex items-center gap-5 sm:gap-10 lg:gap-15'>
          {pages.map((page) => (
            <Link key={page.name} href={page.href} className='list-none'>
              <li className='font-sans uppercase text-center text-xs lg:text-base'>
                {page.name}
              </li>
            </Link>
          ))}
        </nav>
        <SocialLinks socials={socials} className='hidden sm:flex' />
      </div>
      <p className='order-1 sm:order-2 flex justify-center font-serif uppercase text-nowrap pt-15 sm:pt-0 text-4xl md:text-8xl lg:text-9xl xl:mx-60 xl:text-[11.25rem]'>
        Aaron Salley
      </p>
      <div className='order-2 sm:order-3 grid sm:grid-cols-2 sm:mb-9 mx-10 sm:gap-10 lg:mx-20 lg:gap-20 xl:gap-66 xl:mx-60'>
        <p className='font-sans font-light text-center sm:text-left text-sm lg:text-base'>
          Explore our portfolio and discover how we've helped clients achieve
          their business goals through innovative design and strategic thinking.
          Our work spans various industries and showcases our expertise in
          crafting tailored digital solutions.
        </p>
        <div>
          <p className='mb-12 hidden sm:block font-sans font-light text-sm lg:text-base'>
            Get in touch with us to discuss your next project. We're eager to
            learn about your business and explore how our tailored digital
            solutions can help you achieve your goals.
          </p>
          <EmailSubscribeForm />
        </div>
      </div>
    </footer>
  );
}
