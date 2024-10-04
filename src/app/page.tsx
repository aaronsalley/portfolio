import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { memoji, site } from "../context/testdata";
import styles from "./home.module.scss";

export const metadata: Metadata = {
  title: {
    absolute:
      "Aaron Salley, MBA, POPM, JEDI Master | Intention. Integration. Illumination.",
  },
};

const CaseStudy = () => (
  <article>
    <h3></h3>
    <p></p>
  </article>
);

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

export default function Page() {
  const memojiSize = 150;

  return (
    <main className={styles.container}>
      <section>
        <h1>
          <small>{`Hi, I’m Aaron`}</small>
          <br />
          {`I craft solutions for your business that delight and
          engage.`}
        </h1>
        <Image
          src={memoji.waving}
          alt={`${site.title} memoji`}
          width={memojiSize}
          height={memojiSize}
        />
      </section>
      <section>
        <aside>
          <h2>{`Some brands I’ve had the pleasure to work with`}</h2>
          <ul></ul>
        </aside>
        <div>
          <CaseStudy />
          <CaseStudy />
          <Link href={""}>{`View all cases`}</Link>
        </div>
      </section>
      <section>
        <div>
          <header>
            <h2>{`Services`}</h2>
            <p>{`I shepherd ideas from mind to market through an integrated approach, translating complex needs into actionable strategies and delivering solutions for people-centric problems.`}</p>
          </header>
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
          <p>
            <Link href={"mailto:me@aaronsalley.com"}>me@aaronsalley.com</Link>
            <br />
            <Link href={"tel:"}>(212) 287-5859</Link>
            <br />
            New York, NY
            <br />
            <Link href={""}>Download Resume (PDF)</Link>
          </p>
        </aside>
      </section>
    </main>
  );
}
