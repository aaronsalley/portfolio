import Button from "./Button";

export default function CTA() {
  return (
    <aside className="flex flex-col justify-center items-center bg-salley-primary/30 py-40">
      <h4 className="text-5xl font-serif">
        Have a Vision? Let&apos;s Bring It to Life!
      </h4>
      <p className="text-center mb-8 mt-5 text-lg">
        If you’re navigating a moment where clarity matters—an inflection point,
        a new build, a system that’s outgrown itself—I’m happy to talk.
      </p>
      <Button href="/contact" variant="hollow">
        Get in Touch
      </Button>
    </aside>
  );
}
