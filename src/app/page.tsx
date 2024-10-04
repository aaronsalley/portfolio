import { Metadata } from "next";
import Link from "next/link";
import styles from "./home.module.scss";

export const metadata: Metadata = {
  title: {
    absolute:
      "Aaron Salley, MBA, POPM, JEDI Master | Intention. Integration. Illumination.",
  },
};

const CaseStudy = () => (
  <article>
    <h3>Title</h3>
    <p>Lede</p>
  </article>
);

export default function Page() {
  const ServiceItems = ({ services }: { services: any[] }) => {
    const items = [];

    const ServiceItem = ({ title, number }: any) => (
      <li>
        <h3>
          <small>{number.toString().padStart(2, "0")} </small>
          {title}
        </h3>
      </li>
    );

    services.map((service: any, i: number) => {
      const { title } = service;
      items.push(<ServiceItem title={title} number={i + 1} key={i} />);
    });

    return <ul>{items}</ul>;
  };

  const Services = () => (
    <div className={styles.services}>
      <h2>{`Services`}</h2>
      <div>
        <p>{`I shepherd ideas from mind to market through an integrated approach, translating complex needs into actionable strategies and delivering solutions for people-centric problems.`}</p>
        <ServiceItems
          services={[
            { title: "Research & Discovery" },
            { title: "Project Management" },
            { title: "Solution Engineering" },
            { title: "Go-to-Market Strategy" },
            { title: "Organizational Transformation" },
          ]}
        />
      </div>
    </div>
  );

  return (
    <main className={styles.container}>
      <section id="hero" className={styles.hero}>
        <h1>
          <small>{`Hi, I’m Aaron`}</small>
          <br />
          {`I craft solutions for your business that delight and
          engage.`}
        </h1>
      </section>
      <section id="work" className={styles.work}>
        <aside>
          <h2>{`Some brands I’ve had the pleasure to work with`}</h2>
          <div>
            <ul></ul>
          </div>
        </aside>
        <div>
          <CaseStudy />
          <CaseStudy />
          <Link href={"#"}>{`View all cases`}</Link>
        </div>
      </section>
      <section className={styles.offerings}>
        <Services />
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
          <Link href={process.env.NEXT_PUBLIC_RESUME_URL}>
            Download Resume (PDF)
          </Link>
        </aside>
      </section>
    </main>
  );
}
