import Link from "next/link";
import Image from "next/image";

import { links, strings } from "../data/constants";

type CaseStudy = {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
};

const CaseStudy = ({ title, description, link, thumbnail }: CaseStudy) => (
  <article>
    <Link href={link} target={"_blank"}>
      <Image
        src={thumbnail}
        width={282}
        height={181}
        alt={`${title} ${strings.CASE_STUDY}`}
        style={{
          objectFit: "cover",
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  </article>
);

export default function CaseStudiesComponent({ list }: { list: CaseStudy[] }) {
  if (!list || list.length < 1) return;

  const items = [];

  list.slice(0, 2).map((study: CaseStudy, i: number) => {
    const __html = new RegExp(/(<([^>]+)>)/gi);
    const description = study.description.replace(__html, "");
    let thumbnail = study.description
      .match(__html)[0]
      .match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
      )[0];

    study.description = description;
    study.thumbnail = thumbnail;

    items.push(<CaseStudy {...study} key={i} />);
  });

  return (
    <div>
      {items}
      <Link href={links.medium.url} target={"_blank"}>
        {strings.VIEW_ALL_CASES}
        <i
          className="fa-solid fa-arrow-right"
          style={{ marginLeft: "1em" }}
        ></i>
      </Link>
    </div>
  );
}
