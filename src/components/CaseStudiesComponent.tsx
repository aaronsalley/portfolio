import Link from "next/link";
import Image from "next/image";

const CaseStudy = ({
  title,
  description,
  link,
  thumbnail,
}: {
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}) => (
  <article>
    <Link href={link} target={"_blank"}>
      <Image
        src={thumbnail}
        width={282}
        height={181}
        alt={`${title} case study`}
        style={{
          objectFit: "cover",
        }}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </Link>
  </article>
);

export default function CaseStudiesComponent({ list }: { list: any[] }) {
  if (!list || list.length < 1) return;

  const items = [];

  list.slice(0, 2).map((study: any, i: number) => {
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
      <Link href={process.env.NEXT_PUBLIC_MEDIUM_URL} target={"_blank"}>
        {`View all cases `}
        <i className="fa-solid fa-arrow-right"></i>
      </Link>
    </div>
  );
}
