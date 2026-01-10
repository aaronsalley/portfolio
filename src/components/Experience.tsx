import { roles } from "@/data/roles";
import ExperienceRow from "./ExperienceRow";
import Button from "./Button";

export default function Experience() {
  const renderExperienceItems = () => {
    return roles
      .slice(0, 4)
      .map((role, i) => <ExperienceRow key={i} {...role} />);
  };

  return (
    <section className="mx-10 my-20 max-w-7xl xl:mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 justify-evenly">
        <header className="lg:w-1/2 lg:pr-[25%] text-4xl">
          <p className="text-base mb-[1em]">Experience</p>
          <h2>Explore My Product Journey</h2>
        </header>
        <div className="lg:w-1/2">
          <p className="mb-[1.5em] text-lg text-salley-primary">
            Over the past 15+ years, I&apos;ve had the opportunity to work on a
            wide range of projects, collaborating with diverse teams and clients
            to bring creative visions to life.
          </p>
          <Button href="mailto:hello@aaronsalley.com" variant="text">
            Let&apos;s Connect
          </Button>
        </div>
      </div>
      <ol className="mt-10">{renderExperienceItems()}</ol>
    </section>
  );
}
