import NavLinks from './NavLinks';
import SocialLinks from './SocialLinks';
import EmailSubscribeForm from './EmailSubscribeForm';

const style = {
  nav: [
    'grid grid-cols-2 gap-6 w-full text-center uppercase font-sans text-sm tracking-widest',
    'lg:order-1 lg:flex lg:gap-15 lg:flex-1 lg:columns-1 lg:items-center lg:ml-9',
  ].join(' '),
  socialLinks: [
    'flex justify-center gap-4 mx-3',
    'lg:order-2 lg:justify-end lg:py-7 lg:items-center lg:mr-9',
  ].join(' '),
  divider:
    'hidden absolute top-[80px] w-full border-t border-salley-white opacity-30 lg:block lg:order-3',
  name: [
    'w-full uppercase text-[11vi] text-center mt-12',
    'lg:order-4 xl:text-[180px] lg:mt-0',
  ].join(' '),
  paragraph: [
    'w-full text-center font-sans mx-3',
    'lg:order-5 lg:flex-1 lg:text-left lg:ml-9',
  ].join(' '),
  email: ['flex-1 mx-3', 'lg:order-6 lg:mr-9'].join(' '),
  instagram: ['lg:order-7'].join(' '),
};

export default function Footer() {
  return (
    <footer className='relative flex flex-wrap bg-salley-black text-salley-white gap-y-12 lg:gap-y-16'>
      <p className={style.name}>Aaron Salley</p>
      <div className={style.paragraph}>
        <p className='lg:max-w-xl lg:ml-auto lg:mr-16'>
          We&apos;re a digital creative studio offering tailored solutions for
          clients needing digital product services. Unlike studios that focus on
          a single specific creative discipline, we emphasize high-end design
          and production, while bridging the gap between strategy and creation.
        </p>
      </div>
      {/* <NavLinks className={style.nav} /> */}
      {/* Instagram className={style.instagram} */}
      <div className={style.email}>
        <EmailSubscribeForm className='lg:max-w-xl lg:mr-auto lg:ml-16' />
      </div>
      <SocialLinks className={style.socialLinks} />
      <div className={style.divider} />
      <p className='w-full text-center lg:order-last font-sans text-xs mb-12 opacity-30'>
        © {new Date().getFullYear()} Aaron Salley LLC. All rights reserved.
      </p>
    </footer>
  );
}
