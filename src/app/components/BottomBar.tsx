import Link from 'next/link';

export default function BottomBar({
  pages,
}: {
  pages: { name: string; href: string }[];
}) {
  const images = [
    {
      src: '/path/to/image1.jpg',
      alt: 'Image 1',
    },
    {
      src: '/path/to/image2.jpg',
      alt: 'Image 2',
    },
    {
      src: '/path/to/image3.jpg',
      alt: 'Image 3',
    },
  ];

  return (
    <footer className='flex flex-col gap-15 bg-slate-950 text-slate-50'>
      <div className='flex justify-between px-9 py-7 border-b border-slate-50/20'>
        <nav className='flex items-center gap-15'>
          {pages.map((page) => (
            <Link
              key={page.name}
              href={page.href}
              className='list-none uppercase'
            >
              <li>{page.name}</li>
            </Link>
          ))}
        </nav>
        <ul className='flex items-center gap-4'>
          <li>insta</li>
          <li>github</li>
          <li>LinkedIn</li>
        </ul>
      </div>
      <p className='flex justify-center font-serif uppercase text-nowrap lg:mx-60 lg:text-[11.25rem]'>
        Aaron Salley
      </p>
      <div className='mx-60 grid grid-cols-2 lg:gap-66 mb-9'>
        <p>
          Explore our portfolio and discover how we've helped clients achieve
          their business goals through innovative design and strategic thinking.
          Our work spans various industries and showcases our expertise in
          crafting tailored digital solutions.
        </p>
        <form>
          <p className='mb-12'>
            Get in touch with us to discuss your next project. We're eager to
            learn about your business and explore how our tailored digital
            solutions can help you achieve your goals.
          </p>
          <div className='flex justify-center items-center gap-3.5 px-7 py-4 border-1 border-slate-50 uppercase'>
            <input
              type='email'
              name='email'
              placeholder='Your email address'
              className='flex-grow-1'
            ></input>
            <button type='submit' aria-label='Subscribe'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                stroke='var(--color-amber-600)'
                strokeWidth={2}
                className='w-6 h-6'
              >
                <path
                  d='M3 12l18-7-7 18-2.5-7L3 12z'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  fill='none'
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <div className='overflow-hidden'>
        <ul className='flex flex-nowrap'>
          {images.map((image, index) => (
            <li key={index} className='size-80 first:ml-20'>
              <img src={image.src} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
