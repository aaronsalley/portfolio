import Image from "next/image";
import Button from "../components/Button/Button";
import style from "./style.module.scss";

import leaves from "../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";

export default function Page() {
  return (
    <main className={style.container}>
      <section id="hero" className={style["hero"]}>
        <Image src={leaves} alt="" priority />
        <Image src={leaves} alt="" priority />
        <div>
          <p className="subheading text-[20px]">
            Your Partner for Digital Innovation
          </p>
          <h1 className="headline text-[43px] md:text-[95px]">
            Bespoke Strategy <span className="font-sans">&</span>
            <span className="font-serif block">Solutions</span>
          </h1>
          <p>
            A boutique studio crafting tailored solutions via high-end creative,
            execution, and strategy services. We specialize in meeting client
            needs with unique digital products.
          </p>
          <Button label={"Our Work"} href="/portfolio" />
        </div>
      </section>
      <section className={style["intro"]}>
        <div>
          <p className="subheading text-[15px]">
            Strategy, Innovation & Scalable Solutions
          </p>
          <h2 className="pullquote text-[75px]">
            Strategy-Driven Design & Delivery
          </h2>
          <p className="body font-light text-[28px]">
            We're a digital creative studio offering tailored solutions for
            clients needing digital product services.
          </p>
          <aside>
            <p className="subheading text-[16px]">The Quick Links</p>
            <QuickLink title="Our Services" excerpt="blurb" imageURI={leaves} />
            <QuickLink
              title="Our Portfolio"
              excerpt="blurb"
              imageURI={leaves}
            />
            <QuickLink title="Our Insights" excerpt="blurb" imageURI={leaves} />
          </aside>
        </div>
      </section>
      <section className={style["offerings"]}>
        <div className={style.float}>
          <h3 className="headline text-[99px]">
            <span className="font-serif">Offerings title.</span> goes here.
          </h3>
          <p className="body text-[18px]">
            Unlike studios that focus on a single specific creative discipline,
            we emphasize high-end design and production, while bridging the gap
            between strategy and creation.
          </p>
        </div>
        <Image alt="" src={leaves} />
        <Image alt="" src={leaves} />
        <Image alt="" src={leaves} />
        <Image alt="" src={leaves} />
        <Image alt="" src={leaves} />
        <Image alt="" src={leaves} />
      </section>
      <section className={style["bio"]}>
        {/* // TODO: Parallax background */}
        <div>
          <div>
            <h2 className="subheading">Who We Are</h2>
            <p className="pullquote text-[50px]">
              We shepherd ideas from mind to market™ — delivering solutions for
              people-centric problems.
            </p>
          </div>
          <Button label="About Us" href="/about" />
        </div>
        <Image alt="" src={leaves} width={384} height={573} />
      </section>
      <section className={style["services"]}>
        <div>
          <h3 className="subheading">What We Do</h3>
          <h4 className="headline font-serif text-[100px]">Strategy</h4>
          <h4 className="headline text-[100px]">Development</h4>
          <h4 className="headline font-serif text-[100px]">Content</h4>
          <h4 className="headline text-[100px]">Launch</h4>
          <p className="body">
            Elevate your product's potential with our expert consulting
            services. Drive growth and optimize performance with our data-driven
            approach.
          </p>
          <Button label="Learn More" variant="hollow" href="/services" />
        </div>
        <Image alt="" src={leaves} width={399} height={630} />
      </section>
    </main>
  );
}

function QuickLink({ title, excerpt, imageURI }) {
  return (
    <div>
      <Image alt="" src={imageURI} />
      <p className="pullquote text-[36px]">{title}</p>
      <p>{excerpt}</p>
    </div>
  );
}
