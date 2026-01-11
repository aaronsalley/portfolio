"use client";

import * as crm from "@/lib/freshsales";

export default function EmailSubscribeForm({
  className,
}: {
  className?: string;
}) {
  return (
    <form className={`flex flex-col gap-4 ${className}`} action={handleSubmit}>
      <p className="text-2xl font-bold">
        Let&apos;s keep in touch. Get on the list.
      </p>
      <div className="flex justify-between border border-gray-300 p-5">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="font-sans focus-visible:outline-none"
        />
        <button type="submit">
          <svg
            width="12"
            height="13"
            viewBox="0 0 12 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.923077 0.5V2.34615H8.85231L0 11.1985L1.30154 12.5L10.1538 3.64769V11.5769H12V0.5H0.923077Z"
              fill="#DA7541"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

const handleSubmit = (formData: FormData) => {
  crm.createContact(formData);
};
