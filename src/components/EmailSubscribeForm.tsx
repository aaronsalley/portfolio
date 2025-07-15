'use client';

export default function EmailSubscribeForm({
  className,
}: {
  className?: string;
}) {
  return (
    <form
      className={`flex flex-col gap-4 ${className}`}
      action={handleSubscribe}
    >
      <h2 className='text-2xl font-bold'>
        Let&apos;s keep in touch. Get on the list.
      </h2>
      <div className='flex justify-between border border-gray-300 p-5'>
        <input
          type='email'
          name='email'
          required
          autoComplete='email'
          placeholder='Your email address'
          className='focus-visible:outline-none font-sans'
        />
        <button type='submit'>
          <svg
            width='12'
            height='13'
            viewBox='0 0 12 13'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.923077 0.5V2.34615H8.85231L0 11.1985L1.30154 12.5L10.1538 3.64769V11.5769H12V0.5H0.923077Z'
              fill='#DA7541'
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

declare const fwcrm: {
  identify: (identifier: string, contact: unknown) => void;
};

const handleSubscribe = (formData: FormData) => {
  const email = formData.get('email') as string;

  const new_contact = {
    Email: email,
  };
  const identifier = email;

  if (typeof fwcrm !== 'undefined' && typeof fwcrm.identify === 'function') {
    fwcrm.identify(identifier, new_contact);
  } else {
    console.warn('fwcrm is not available');
  }
};
