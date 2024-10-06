import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.scss";

import AmarisWorksLogo from "../assets/images/brand--AmarisWorks.svg";
import ANMLogo from "../assets/images/brand--Asa_Nisi_Masa_Films.svg";
import BHLogo from "../assets/images/brand--B&H.svg";
import BNYMellonLogo from "../assets/images/brand--BNYMellon.svg";
import BKCharterLogo from "../assets/images/brand--Brooklyn_Charter_School.png"; // TODO: replace
import ColeHaanLogo from "../assets/images/brand--Cole_Haan.svg";
import CrewcialLogo from "../assets/images/brand--Crewcial.svg";
import DavincianLogo from "../assets/images/brand--DaVincian_Healthcare.svg";
import IntryLogo from "../assets/images/brand--Intry.svg";
import ITWFoundLogo from "../assets/images/brand--Isaac_T_Watson_Foundation.svg";
import LaFondazioneLogo from "../assets/images/brand--laFondazione_NY.svg";
import LandmarkLogo from "../assets/images/brand--Landmark_venues.svg";
import LumifiLogo from "../assets/images/brand--LumiFi.svg";
import MSKLogo from "../assets/images/brand--MSK.svg";
import MTFLogo from "../assets/images/brand--MTF.svg";
import MTFJoesPubLogo from "../assets/images/brand--MTF_at_JoesPub.png"; // TODO: replace
import RaoStudiosLogo from "../assets/images/brand--Rao_Studios.svg";
import RhinoLogo from "../assets/images/brand--Rhino_Transfers.svg";
import RipcordLogo from "../assets/images/brand--Ripcord.svg";
import CompassLogo from "../assets/images/brand--Compass.svg";
import RubiconLogo from "../assets/images/brand--RubiconMD.svg";
import SportnduckLogo from "../assets/images/brand--Sportnduck.svg";
import StoneHouseLogo from "../assets/images/brand--Stone_House.svg";
import UnzippedTruthLogo from "../assets/images/brand--The_Unzipped_Truth.svg";
import URGLogo from "../assets/images/brand--URG_Corporation.png"; // TODO: replace
import WildchildLogo from "../assets/images/brand--Wildchild.svg";

export default function Page() {
  const services = [
    { title: "Research & Discovery" },
    { title: "Project Management" },
    { title: "Solution Engineering" },
    { title: "Go-to-Market Strategy" },
    { title: "Organizational Transformation" },
  ];

  const studies = [
    {
      title: "MSK Direct",
      summary:
        "Transforming enhanced access to oncology expertise, improved care coordination, and personalized support for members.",
      permalink: "",
      // thumbnail: "/MSKDirect.jpg",
    },
    {
      title: "Intry",
      summary: `Patented AI-powered "Hybrid Resume Process" to help job seekers overcome the limitations of Applicant Tracking Systems (ATS).`,
      permalink: "",
      // thumbnail: "/Intry.jpg",
    },
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
      <Link href={process.env.NEXT_PUBLIC_RESUME_URL}>
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

  function Brands() {
    const props = {
      height: 32,
      width: "auto",
      fill: "black",
    };

    return (
      <aside>
        <h2>{`Some brands I’ve had the pleasure to work with`}</h2>
        <div>
          <StoneHouseLogo {...props} />
          <RaoStudiosLogo {...props} />
          <SportnduckLogo {...props} />
          <LaFondazioneLogo {...props} />
          <CrewcialLogo {...props} />
          <DavincianLogo {...props} />
          <IntryLogo {...props} />
          <MSKLogo {...props} />
          <RubiconLogo {...props} />
          <BHLogo {...props} />
          <CompassLogo {...props} />
          <BNYMellonLogo {...props} />
          <ColeHaanLogo {...props} />
          <WildchildLogo {...props} />
          <ITWFoundLogo {...props} />
          <ANMLogo {...props} />
          {/* <MTFJoesPubLogo {...props} /> */}
          <MTFLogo {...props} />
          <LumifiLogo {...props} />
          <UnzippedTruthLogo {...props} />
          <LandmarkLogo {...props} />
          <RipcordLogo {...props} />
          <RhinoLogo {...props} />
          <AmarisWorksLogo {...props} />
          {/* <URGLogo {...props} /> */}
          {/* <BKCharterLogo {...props} /> */}
        </div>
      </aside>
    );
  }

  function CaseStudies({ list }: { list: any[] }) {
    const items = [];

    const CaseStudy = ({
      title,
      summary,
      permalink,
      thumbnail,
    }: {
      title: string;
      summary: string;
      permalink: string;
      thumbnail: string;
    }) => (
      <article>
        <Image src={thumbnail} alt={`${title} case study`} />
        <h3>{title}</h3>
        <p>{summary}</p>
      </article>
    );

    list.map((study: any, i: number) => {
      items.push(<CaseStudy {...study} key={i} />);
    });

    return (
      <div>
        {items}
        <Link href={"#"}>{`View all cases`}</Link>
      </div>
    );
  }

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
