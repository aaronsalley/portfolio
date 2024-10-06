import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.scss";

import AmarisWorksLogo from "../assets/images/brand--AmarisWorks.png";
import BHLogo from "../assets/images/brand--B&H.png";
import BNYMellonLogo from "../assets/images/brand--BNYMellon.png";
import BKCharterLogo from "../assets/images/brand--Brooklyn_Charter_School.png";
import ColeHaanLogo from "../assets/images/brand--Cole_Haan.png";
import CrewcialLogo from "../assets/images/brand--Crewcial.png";
import DavincianLogo from "../assets/images/brand--DaVincian_Healthcare.png";
import IntryLogo from "../assets/images/brand--Intry.png";
import ITWFoundLogo from "../assets/images/brand--Isaac_T_Watson_Foundation.png";
import laFondazioneLogo from "../assets/images/brand--laFondazione_NY.png";
import LandmarkLogo from "../assets/images/brand--Landmark_venues.png";
import LumifiLogo from "../assets/images/brand--LumiFi.png";
import MSKLogo from "../assets/images/brand--MSK.png";
import MTFJoesPubLogo from "../assets/images/brand--MTF_at_JoesPub.png";
import MTFLogo from "../assets/images/brand--Musical_Theatre_Factory.png";
import RaoStudiosLogo from "../assets/images/brand--Rao_Studios.png";
import RhinoLogo from "../assets/images/brand--Rhino_Transfers.png";
import RipcordLogo from "../assets/images/brand--Ripcord.png";
import CompassLogo from "../assets/images/brand--RM+Compass.png";
import RubiconLogo from "../assets/images/brand--RubiconMD.png";
import SportnduckLogo from "../assets/images/brand--Sportnduck.png";
import StoneHouseLogo from "../assets/images/brand--Stone_House.png";
import UnzippedTruthLogo from "../assets/images/brand--The_Unzipped_Truth.png";
import TRNLogo from "../assets/images/brand--TRN-alpha.png";
import URGLogo from "../assets/images/brand--URG_Corporation.png";
import WildchildLogo from "../assets/images/brand--Wildchild.png";

export default function Page() {
  const brands = [
    { name: "Stone House", logo: StoneHouseLogo }, // 1
    { name: "Rao Studios", logo: RaoStudiosLogo }, // 1
    { name: "TRN", logo: TRNLogo }, // 2
    { name: "Sportnduck", logo: SportnduckLogo }, // 2
    { name: "la Fondazione NY", logo: laFondazioneLogo }, // 3
    { name: "Crewcial Partners", logo: CrewcialLogo }, // 3
    { name: "DaVincian Healthcare", logo: DavincianLogo }, // 4
    { name: "Intry", logo: IntryLogo }, // 4
    { name: "Memorial Sloan Kettering Cancer Center", logo: MSKLogo }, // 5
    { name: "Rubicon MD", logo: RubiconLogo }, // 5
    { name: "B&H Photo Video Pro Audio", logo: BHLogo }, // 6
    { name: "Compass", logo: CompassLogo }, // 6
    { name: "BNY Mellon", logo: BNYMellonLogo }, // 7
    { name: "Cole Haan", logo: ColeHaanLogo }, // 7
    { name: "Wildchild", logo: WildchildLogo }, // 8
    { name: "Isaac T Watson Foundation", logo: ITWFoundLogo }, // 8
    { name: "MTF @ Joe's Pub", logo: MTFJoesPubLogo }, // 9
    { name: "LumiFi", logo: LumifiLogo }, // 9
    { name: "The Unzipped Truth", logo: UnzippedTruthLogo }, // 10
    { name: "Landmark Venues", logo: LandmarkLogo }, // 10
    { name: "Ripcord Creative", logo: RipcordLogo }, // 11
    { name: "Rhino Transfers", logo: RhinoLogo }, // 11
    { name: "AmarisWorks", logo: AmarisWorksLogo }, // 12
    { name: "URG Corporation", logo: URGLogo }, // 12
    { name: "Musical Theatre Factory", logo: MTFLogo }, // 13
    { name: "The Brooklyn Charter School", logo: BKCharterLogo }, // 13
  ];

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

  function Brands({ list }: { list: any[] }) {
    const items = [];

    list.map((brand, i) => {
      const { name, logo } = brand;
      items.push(<Image src={logo} alt={name} key={i} />);
    });

    return (
      <aside>
        <h2>{`Some brands I’ve had the pleasure to work with`}</h2>
        <div>{items}</div>
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
        <Brands list={brands} />
        <CaseStudies list={studies} />
      </section>
      <section className={styles.offerings}>
        <Services />
        <AboutMe />
      </section>
    </main>
  );
}
