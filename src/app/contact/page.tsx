import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import desk from '@/assets/images/aaron-salley-office-poster.jpg';

const listItems = [
  {
    headline: 'The Blog',
    bodyCopy: 'Check out our blog for the latest insights.',
    link: '/blog',
  },
  {
    headline: 'Instagram',
    bodyCopy: 'Follow us on Instagram for behind-the-scenes content.',
    link: 'https://www.instagram.com/aaronsalley/',
  },
  {
    headline: 'LinkedIn',
    bodyCopy: 'Connect with us on LinkedIn for professional updates.',
    link: 'https://www.linkedin.com/company/aaronsalley/',
  },
];

export default function Contact() {
  return (
    <div className={['flex flex-col flex-wrap', 'md:flex-row'].join(' ')}>
      <div
        className={[
          'w-full aspect-[320/224] bg-salley-black bg-[url(../assets/images/malte-michels-s4wGZw3UuLk-unsplash.jpg)] bg-cover',
          'md:flex-1',
        ].join(' ')}
      ></div>
      <div
        className={[
          'mx-3 my-12',
          'md:flex-1 md:mx-7 md:my-20',
          'lg:mx-15',
        ].join(' ')}
      >
        <h1
          className={[
            'font-medium text-[13vi]/[13vi] uppercase max-w-lg',
            'md:text-5xl',
            'lg:text-6xl',
          ].join(' ')}
        >
          Let's Collaborate
        </h1>
        <p className={['font-sans py-6 max-w-lg'].join(' ')}>
          We're eager to learn about your business and explore how our tailored
          digital solutions can help you achieve your goals. Please fillout the
          below form or email us directly at hello@aaronsalley.com.
        </p>
        <ContactForm className={['max-w-lg'].join(' ')} />
      </div>
      <aside
        className={[
          'flex w-full px-8 py-20 bg-green-950 text-salley-white',
          'md:gap-20 md:p-20',
        ].join(' ')}
      >
        <div className={['max-w-lg ml-auto', 'md:w-1/2'].join(' ')}>
          <h2 className='uppercase font-mono'>Until we're in touch:</h2>
          <ul>
            {listItems.map(({ headline, bodyCopy, link }, index) => (
              <li
                key={index}
                className='border-salley-white py-8 not-last:border-b-1 last:pb-0'
              >
                <Link href={link}>
                  <h3 className='uppercase font-[Oswald] text-4xl font-semibold'>
                    {headline}
                  </h3>
                  <p className='font-sans'>{bodyCopy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={['flex relative', 'md:w-1/2'].join(' ')}>
          <Image
            src={desk}
            alt=''
            objectFit='cover'
            className='hidden md:block w-full max-w-lg object-cover object-left'
          />
        </div>
      </aside>
    </div>
  );
}
