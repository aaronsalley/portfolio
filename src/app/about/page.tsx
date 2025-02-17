import style from "./style.module.scss";
import Image from "next/image";

import leaves from "../../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";
import paddedNumber from "../../utils/paddedNumber";

export default async function Page() {
  const items = [
    { headline: "Our Purpose", description: "Description", image: leaves },
    { headline: "Our Style", description: "Description", image: leaves },
    { headline: "Our Method", description: "Description", image: leaves },
  ];

  const values = [
    { headline: "Value 1", caption: "Description" },
    { headline: "Value 2", caption: "Description" },
    { headline: "Value 3", caption: "Description" },
    { headline: "Value 4", caption: "Description" },
    { headline: "Value 5", caption: "Description" },
    { headline: "Value 6", caption: "Description" },
  ];

  return (
    <main className={style.container}>
      <section>
        <div>
          <h1 className="headline">
            <span className="font-serif">Taking Innovations </span>
            From Mind to Market
          </h1>
          <p className="body">
            A passionate product leader with a proven track record of building
            and scaling digital products for startup SMBs to well-established
            enterprises. Over 10 years leading collaborative, cross-functional
            teams, managing budgets, and driving innovation across healthcare,
            e-commerce, real estate, hospitality, finance, nonprofits and tech
            industries. Known translating complex business needs into clear,
            actionable strategies. Passionate about crafting user-centric
            solutions that deliver exceptional results and make a positive
            impact on both users and businesses.
          </p>
        </div>
        <div>gallery</div>
        <Approach items={items} />
      </section>
      <article>
        <p className="subheading">Subheader</p>
        <h2 className="intro uppercase">Page Title</h2>
        <Image alt="" src={leaves} />
        <Image alt="" src={leaves} />
        <div>
          <h3 className="headline">I'm Aaron. Here's somethign about me</h3>
          <p className="intro">intro</p>
        </div>
        <div>
          <p className="body">Origin Story</p>
          <blockquote className="pullquote">quote</blockquote>
          <p className="body">Origin Story</p>
        </div>
      </article>
      <Values items={values} />
    </main>
  );
}

function Approach({ items }) {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <div>
            <span className="caption">No. {paddedNumber(index + 1)}</span>
            <h2 className="headline">{item.headline}</h2>
            <p className="body">{item.description}</p>
          </div>
          <Image alt="" src={item.image} />
        </li>
      ))}
    </ol>
  );
}

function Values({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <p className="headline">{item.headline}</p>
          <p className="caption">{item.caption}</p>
        </li>
      ))}
    </ul>
  );
}
