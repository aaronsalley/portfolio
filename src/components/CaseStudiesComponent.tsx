import Link from "next/link";
import Image from "next/image";

import { links, strings } from "../data/constants";

export type CaseStudy = {
  title: string;
  content: string;
  link: string;
  thumbnail: string;
};

const CaseStudy = ({ title, content, link, thumbnail }: CaseStudy) => (
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
      <p>{content}</p>
    </Link>
  </article>
);

export default function CaseStudiesComponent({ list }: { list: CaseStudy[] }) {
  if (!list || list.length < 1) return;

  const items = [];

  list.slice(0, 2).map((study: CaseStudy, i: number) => {
    const __html = new RegExp(/(<([^>]+)>)/gi);
    const content = study.content.replace(__html, "");
    let thumbnail = study.content
      .match(__html)[0]
      .match(
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
      )[0];

    study.content = content;
    study.thumbnail = thumbnail;

    items.push(<CaseStudy {...study} key={i} />);
  });

  return (
    <div>
      {items}
      <Link href={links.behance.url} target={"_blank"}>
        {strings.VIEW_ALL_CASES}
        <i
          className="fa-solid fa-arrow-right"
          style={{ marginLeft: "1em" }}
        ></i>
      </Link>
    </div>
  );
}
