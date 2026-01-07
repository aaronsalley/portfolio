"use client";

import * as crm from "@/lib/freshsales";

const style = ["w-full border-salley-dark py-4 focus:outline-none"].join(" ");

export default function ContactForm({ className }: { className?: string }) {
  return (
    <form
      className={`flex flex-col items-end gap-4 font-mono ${className}`}
      action={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="name"
        placeholder="Your Name"
        required
        className={`${style} border-b-1`}
      />
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        placeholder="Email Address"
        required
        className={`${style} border-b-1`}
      />
      <input
        id="subject"
        name="subject"
        placeholder="Subject of Inquiry"
        required
        className={`${style} border-b-1`}
      />
      <input
        type="text"
        id="referrer"
        placeholder="Referred By"
        name="referrer"
        className={`${style} border-b-1`}
      />
      <textarea
        id="message"
        name="message"
        placeholder={`Any other details you'd like to provide?`}
        rows={5}
        className={style}
      ></textarea>
      <button type="submit" className="btn filled">
        Send
      </button>
    </form>
  );
}

const handleSubmit = (formData: FormData) => {
  crm.createDeal(formData);
};
