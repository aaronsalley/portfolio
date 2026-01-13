import Button from './Button';

export default function CTA() {
  return (
    <aside className="flex flex-col items-center justify-center bg-salley-primary/20 py-40">
      <h4 className="mx-10 text-center font-serif text-4xl">
        Have a Vision? Let&apos;s Bring It to Life!
      </h4>
      <p className="mx-10 mt-5 mb-8 text-center text-lg">
        If you’re navigating a moment where clarity matters—an inflection point,
        a new build, a system that’s outgrown itself—I’m happy to talk.
      </p>
      <Button href="/contact" variant="hollow">
        Get in Touch
      </Button>
    </aside>
  );
}
