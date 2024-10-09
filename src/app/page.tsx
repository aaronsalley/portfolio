import Link from "next/link";
import styles from "./home.module.scss";

import Brands from "../components/BrandsComponent";
import { fetchProjects } from "../services/Behance";
import CaseStudies from "../components/CaseStudiesComponent";
import JumpButton from "../components/JumpButtonComponent";

export default async function Page() {
  const studies = await fetchProjects();

  const services = [
    { title: "Research & Discovery" },
    { title: "Project Management" },
    { title: "Solution Engineering" },
    { title: "Go-to-Market Strategy" },
    { title: "Organizational Transformation" },
  ];

  const AboutMe = () => (
    <aside>
      <h4>{`About me`}</h4>
      <p>
        {`A passionate product leader with a proven track record of building
            and scaling digital products. Over 10 years leading collaborative,
            cross-functional teams, managing budgets, and driving innovation
            across healthcare, e-commerce, nonprofits and tech industries. Known
            translating complex business needs into clear, actionable
            strategies. Passionate about crafting user-centric solutions that
            deliver exceptional results and make a positive impact on both users
            and businesses.`}
      </p>
      <h4>{`Contact`}</h4>
      <Link href={"mailto:me@aaronsalley.com"}>me@aaronsalley.com</Link>
      <Link href={"tel:2122875859"}>(212) 287-5859</Link>
      <address>New York, NY</address>
      <Link href={process.env.NEXT_PUBLIC_RESUME_URL} target={"_blank"}>
        Download Resume (PDF)
      </Link>
    </aside>
  );

  const Services = () => (
    <div className={styles.services}>
      <h2>{`Services`}</h2>
      <div>
        <p>{`I shepherd ideas from mind to market through an integrated approach, translating complex needs into actionable strategies and delivering solutions for people-centric problems.`}</p>
        <ServiceItems list={services} />
      </div>
    </div>
  );

  function ServiceItems({ list }: { list: any[] }) {
    const items = [];

    const ServiceItem = ({
      title,
      number,
    }: {
      title: string;
      number: number;
    }) => (
      <li>
        <h3>
          <small>{number.toString().padStart(2, "0")} </small>
          {title}
        </h3>
      </li>
    );

    list.map((service: any, i: number) => {
      const { title } = service;
      items.push(<ServiceItem title={title} number={i + 1} key={i} />);
    });

    return <ul>{items}</ul>;
  }

  return (
    <main className={styles.container}>
      <section id="hero" className={styles.hero}>
        <h1>
          <small>{`Hi, I’m Aaron`}</small>
          <br />
          {`I craft solutions for your business that delight and
          engage.`}
        </h1>
        <JumpButton />
      </section>
      <section id="work" className={styles.work}>
        <Brands />
        <CaseStudies list={studies} />
      </section>
      <section className={styles.offerings}>
        <Services />
        <AboutMe />
      </section>
    </main>
  );
}
