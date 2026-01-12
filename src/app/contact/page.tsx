import CTA from "@/components/CTA";
import ContactForm from "@/components/FormContact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `A simple way to start a thoughtful conversation about complex product challenges and what comes next.`,
};

export default function ContactPage() {
  return (
    <>
      <main className="bg-salley-primary/10">
        <div className="mx-10 max-w-7xl lg:mx-auto my-40">
          <h1 className="text-5xl font-serif text-center">
            Schedule a Product Consultation
          </h1>
          <p className="text-center my-4 mb-10">
            I take on a small number of engagements at a time. The best first
            step is a short note with a few lines on what you’re building,
            what’s not working, and what outcome you’re aiming for. If it’s a
            fit, we’ll schedule a brief conversation.
          </p>
          <ContactForm />
        </div>
      </main>
      <CTA />
    </>
  );
}
