import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import desk from "@/assets/images/aaron-salley-office-poster.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aaron Salley",
  description: `Ready to collaborate? Contact Aaron Salley for tailored digital solutions. Fill out our form or email us directly to start transforming your vision into exceptional digital experiences.`,
};

const listItems = [
  {
    headline: "The Blog",
    bodyCopy: "Check out our blog for the latest insights.",
    link: "https://aaronsalley.medium.com/", // TODO: Make local
    target: "_blank", // TODO: Set target to self when local
  },
  {
    headline: "Instagram",
    bodyCopy: "Follow us on Instagram for behind-the-scenes content.",
    link: "https://www.instagram.com/salleyandco/",
    target: "_blank",
  },
  {
    headline: "LinkedIn",
    bodyCopy: "Connect with us on LinkedIn for professional updates.",
    link: "https://www.linkedin.com/company/salleyandco",
    target: "_blank",
  },
];

export default function ContactPage() {
  return (
    <>
      <main className={style.container}>
        <div className={style.image}></div>
        <div className={style.contactForm}>
          <h1 className={style.headline}>Let&apos;s Collaborate</h1>
          <p className="font-sans py-6 max-w-lg">
            We&apos;re eager to learn about your business and explore how our
            tailored digital solutions can help you achieve your goals. Please
            fill out the below form or email us directly at
            hello@aaronsalley.com.
          </p>
          <ContactForm className="max-w-lg" />
        </div>
      </main>
      <aside className={style.aside}>
        <div className={style.asideLinks}>
          <p className="uppercase font-mono">Until we&apos;re in touch:</p>
          <ul>
            {listItems.map(({ headline, bodyCopy, link, target }, index) => (
              <li key={index} className={style.listItem}>
                <Link
                  href={link}
                  target={target}
                  rel={target === "_blank" ? "noopener noreferrer" : undefined}
                >
                  <h2 className="uppercase font-[Oswald] text-4xl font-semibold">
                    {headline}
                  </h2>
                  <p className="font-sans">{bodyCopy}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.asideImageWrapper}>
          <Image
            src={desk}
            alt=""
            objectFit="cover"
            className={style.asideImage}
          />
        </div>
      </aside>
    </>
  );
}

const style = {
  container: ["flex flex-col flex-wrap", "md:flex-row"].join(" "),
  image: [
    "will-stick w-full aspect-[320/224] bg-soft-charcol bg-[url(../assets/images/malte-michels-s4wGZw3UuLk-unsplash.jpg)] bg-cover",
    "md:flex-1",
  ].join(" "),
  contactForm: ["mx-3 my-12", "md:flex-1 md:mx-7 md:my-20", "lg:mx-15"].join(
    " ",
  ),
  headline: [
    "font-medium text-[13vi]/[13vi] uppercase max-w-lg",
    "md:text-5xl",
    "lg:text-6xl",
  ].join(" "),
  aside: [
    "flex w-full px-8 py-20 bg-green-950 text-warm-ivory",
    "md:gap-20 md:p-20",
  ].join(" "),
  asideLinks: ["max-w-lg ml-auto", "md:w-1/2"].join(" "),
  listItem: ["border-warm-ivory py-8 not-last:border-b-1 last:pb-0"].join(" "),
  asideImageWrapper: ["flex relative", "md:w-1/2"].join(" "),
  asideImage: [
    "hidden w-full max-w-lg object-cover object-left",
    "md:block",
  ].join(" "),
};
