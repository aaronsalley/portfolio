import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import EmailSubscribeForm from "./FormEmailSubscribe";

export default function Footer() {
  return (
    <footer className="relative flex flex-wrap gap-y-12 bg-salley-dark text-salley-light md:gap-y-16">
      <p className={style.name}>Aaron Salley</p>
      <div className={style.paragraph}>
        <p className="md:mr-8 md:ml-auto md:max-w-xl lg:mr-16">
          I help organizations turn complex problems into clear, scalable
          products—aligning strategy, design, and technology to build systems
          that last. The work favors clarity over noise, intention over urgency,
          and durability over trends.
        </p>
      </div>
      <NavLinks className={style.nav} />
      {/* Instagram className={style.instagram} */}
      <div className={style.email}>
        <EmailSubscribeForm className="sm:mr-auto md:mr-8 md:max-w-xl lg:ml-16" />
      </div>
      <SocialLinks className={style.socialLinks} />
      <div className={style.divider} />
      <p className="mb-12 w-full text-center font-sans text-xs opacity-30 md:order-last">
        © {new Date().getFullYear()} Aaron Salley LLC. All rights reserved.
      </p>
    </footer>
  );
}

const style = {
  nav: [
    "grid grid-cols-2 gap-6 w-full text-center uppercase font-sans text-sm tracking-widest",
    "md:order-1 md:flex md:flex-1 md:columns-1 md:items-center md:ml-9",
    "lg:gap-15",
  ].join(" "),
  socialLinks: [
    "flex justify-center gap-4 mx-3",
    "md:order-2 md:justify-end md:py-7 md:items-center md:mr-9",
  ].join(" "),
  divider:
    "hidden absolute top-[80px] w-full border-t border-warm-ivotext-salley-light opacity-30 md:block md:order-3",
  name: [
    "w-full uppercase font-serif text-[9.55vi] text-center mt-12",
    "md:order-4 xl:text-[180px] md:mt-0",
  ].join(" "),
  paragraph: [
    "w-full max-w-7xl text-center font-sans mx-3",
    "md:order-5 md:flex-1 md:text-left md:ml-9",
  ].join(" "),
  email: ["flex-1 mx-3", "md:order-6 md:mr-9"].join(" "),
  instagram: ["md:order-7"].join(" "),
};
