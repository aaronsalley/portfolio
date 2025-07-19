import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import EmailSubscribeForm from './EmailSubscribeForm';

export default function Footer() {
  return (
    <footer className='relative flex flex-wrap bg-salley-black text-salley-white gap-y-12 md:gap-y-16'>
      <p className={style.name}>Aaron Salley</p>
      <div className={style.paragraph}>
        <p className='md:max-w-xl md:ml-auto md:mr-8 lg:mr-16'>
          We&apos;re a studio offering tailored solutions for clients requiring
          effective and user-centered digital experiences. Unlike studios that
          focus on a single, specific creative discipline, we emphasize high-end
          design and production, while bridging the gap between strategy and
          delivery.
        </p>
      </div>
      <NavLinks className={style.nav} />
      {/* Instagram className={style.instagram} */}
      <div className={style.email}>
        <EmailSubscribeForm className='md:max-w-xl sm:mr-auto md:mr-8 lg:ml-16' />
      </div>
      <SocialLinks className={style.socialLinks} />
      <div className={style.divider} />
      <p className='w-full text-center md:order-last font-sans text-xs mb-12 opacity-30'>
        © {new Date().getFullYear()} Aaron Salley LLC. All rights reserved.
      </p>
    </footer>
  );
}

const style = {
  nav: [
    'grid grid-cols-2 gap-6 w-full text-center uppercase font-sans text-sm tracking-widest',
    'md:order-1 md:flex md:flex-1 md:columns-1 md:items-center md:ml-9',
    'lg:gap-15',
  ].join(' '),
  socialLinks: [
    'flex justify-center gap-4 mx-3',
    'md:order-2 md:justify-end md:py-7 md:items-center md:mr-9',
  ].join(' '),
  divider:
    'hidden absolute top-[80px] w-full border-t border-salley-white opacity-30 md:block md:order-3',
  name: [
    'w-full uppercase text-[11vi] text-center mt-12',
    'md:order-4 xl:text-[180px] md:mt-0',
  ].join(' '),
  paragraph: [
    'w-full text-center font-sans mx-3',
    'md:order-5 md:flex-1 md:text-left md:ml-9',
  ].join(' '),
  email: ['flex-1 mx-3', 'md:order-6 md:mr-9'].join(' '),
  instagram: ['md:order-7'].join(' '),
};
