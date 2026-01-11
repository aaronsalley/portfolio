"use client";

import * as crm from "@/lib/freshsales";
import Button from "./Button";

export default function ContactForm() {
  return (
    <form className="flex flex-wrap gap-4" action={handleSubmit}>
      <div className="grow">
        <label className="block" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          autoComplete="given-name"
          placeholder="First Name"
          required
          className="bg-salley-light w-full border border-salley-primary/30 rounded-xl px-[1em] py-[.5em]"
        />
      </div>
      <div className="grow">
        <label className="block" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          autoComplete="family-name"
          placeholder="Last Name"
          required
          className="bg-salley-light w-full border border-salley-primary/30 rounded-xl px-[1em] py-[.5em]"
        />
      </div>
      <div className="w-full">
        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          placeholder="Email Address"
          required
          className="bg-salley-light w-full border border-salley-primary/30 rounded-xl px-[1em] py-[.5em]"
        />
      </div>
      <div className="w-full">
        <label className="block" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder={`Any other details you'd like to provide?`}
          rows={5}
          className="bg-salley-light w-full border border-salley-primary/30 rounded-xl px-[1em] py-[.5em]"
        />
      </div>
      <Button variant="text">Send</Button>
    </form>
  );
}

const handleSubmit = (formData: FormData) => {
  crm.createDeal(formData);
};
