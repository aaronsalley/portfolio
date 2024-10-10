"use server";

import Link from "next/link";
import styles from "./home.module.scss";

import {
  links,
  positioning_statement,
  services,
  strings,
} from "../data/constants";
import { fetchProjects } from "../services/Behance";
import Brands from "../components/BrandsComponent";
import CaseStudies from "../components/CaseStudiesComponent";
import JumpButton from "../components/JumpButtonComponent";
import ServiceItems from "../components/ServicesComponent";
import formatPhoneNumber from "../utils/formatPhoneNumber";

export default async function Page() {
  const studies = await fetchProjects();

  const AboutMe = () => (
    <aside>
      <h4>{strings.ABOUT_ME}</h4>
      <p>{strings.biography}</p>
      <p>{strings.tagline}</p>
      <h4>{strings.CONTACT}</h4>
      <Link href={`mailto:${strings.email}`}>{strings.email}</Link>
      <Link href={`tel:${strings.telephone}`}>
        {formatPhoneNumber(strings.telephone)}
      </Link>
      <address>{strings.current_city}</address>
      <Link href={links.resume.url} target={"_blank"}>
        {strings.DOWNLOAD_RESUME}
      </Link>
    </aside>
  );

  return (
    <main className={styles.container}>
      <section id="hero" className={styles.hero}>
        <h1>
          <small>{positioning_statement.product()}</small>
          <br />
          {positioning_statement.solution}
        </h1>
        <JumpButton />
      </section>
      <section id="work" className={styles.work}>
        <Brands />
        <CaseStudies list={studies} />
      </section>
      <section className={styles.offerings}>
        <div className={styles.services}>
          <h2>{strings.SERVICES}</h2>
          <div>
            <p>{positioning_statement.uvp}</p>
            <ServiceItems list={services} />
          </div>
        </div>
        <AboutMe />
      </section>
    </main>
  );
}
