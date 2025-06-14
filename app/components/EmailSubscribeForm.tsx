'use client';

import { useState } from 'react';

declare global {
  interface Window {
    fwcrm?: {
      identify: (email: string, data: { Email: string }) => void;
    };
  }
}

export default function EmailSubscribeForm() {
  const [, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const emailInput = event.currentTarget.elements.namedItem(
      'email'
    ) as HTMLInputElement;
    if (emailInput && emailInput.value) {
      if (window && typeof window.fwcrm !== 'undefined') {
        window.fwcrm.identify(emailInput.value, {
          Email: emailInput.value,
        });

        setIsSubmitted(true);

        emailInput.value = ''; // Clear the input after submission
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='hidden sm:flex justify-center items-center gap-3.5 px-7 py-4 border-1 border-salley-white/50 uppercase'
    >
      <input
        type='email'
        name='email'
        placeholder='Your email address'
        className='font-sans flex-grow-1'
      ></input>
      <button type='submit' aria-label='Subscribe'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          fill='none'
          viewBox='0 0 24 24'
          stroke='var(--color-salley-accent)'
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
    </form>
  );
}
