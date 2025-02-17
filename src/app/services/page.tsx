import Image from "next/image";

import paddedNumber from "../../utils/paddedNumber";
import leaves from "../../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";
import Button from "../../components/Button/Button";
import Testimonial from "../../components/Testimonial/Testimonial";

export default function Page() {
  const capabilities = [
    {
      headline: "Capability 1",
      description: "Description",
      images: [leaves, leaves],
    },
    { headline: "Capability 2", description: "Description", images: [leaves] },
    { headline: "Capability 3", description: "Description", images: [leaves] },
  ];
  const services = [
    { headline: "Service 1", intro: "", description: "Description" },
    { headline: "Service 1", intro: "", description: "Description" },
    { headline: "Service 1", intro: "", description: "Description" },
    { headline: "Service 1", intro: "", description: "Description" },
  ];
  const steps = [
    { headline: "Step 1", description: "Description", image: leaves },
    { headline: "Step 2", description: "Description", image: leaves },
    { headline: "Step 3", description: "Description", image: leaves },
    { headline: "Step 4", description: "Description", image: leaves },
  ];
  const questions = [
    { headline: "Step 1", description: "Description" },
    { headline: "Step 2", description: "Description" },
    { headline: "Step 3", description: "Description" },
    { headline: "Step 4", description: "Description" },
  ];

  return (
    <main>
      <div>
        <h1 className="headline">
          Let's work <span className="font-serif">together</span>
        </h1>
        <p className="body"></p>
        <Image alt="" src={leaves} />
      </div>
      <div>
        <p className="headline">headline</p>
        <Image alt="" src={leaves} />
        <p className="body">body</p>
      </div>
      {/* Capabilities */}
      <Capabilities items={capabilities} />
      {/* Testimonials */}
      <section>
        <div>
          <article>
            <blockquote className="pullquote">
              <p></p>
            </blockquote>
            <cite className="subheading">
              Name
              <Image alt="" src={leaves} />
            </cite>
          </article>
        </div>
        <nav>
          <button>{"<"}</button>
          <button>{">"}</button>
        </nav>
      </section>
      {/* Services */}
      <Services items={services} />
      {/* Testimonials */}
      <Testimonial />
      <div>
        <blockquote>
          <Image alt="" src={leaves} />
          <p className="body"></p>
        </blockquote>
      </div>
      {/* How to work together */}
      <article>
        <h2 className="subheading">How it Works</h2>
        <Process items={steps} />
      </article>
      <section>
        <h2 className="intro">Frequently Asked Questions</h2>
        <p className="body"></p>
        <Button label="Contact Us" variant="filled" />
        <Questions items={questions} />
      </section>
      <div>
        <p className="headline">Shall we begin?</p>
        <p className="body"></p>
        <Button label="Get in Touch" variant="filled" />
      </div>
    </main>
  );
}

function Capabilities({ items }) {
  return (
    <ol>
      {items.map((items, index) => (
        <li key={index}>
          {items.images.map((image, index) => (
            <Image key={index} alt="" src={image} />
          ))}
          <span className="intro">{paddedNumber(index + 1)}</span>
          <h3 className="headline">{items.headline}</h3>
          <p className="body">{items.description}</p>
        </li>
      ))}
    </ol>
  );
}

function Services({ items }) {
  return (
    <article>
      {items.map((item, index) => (
        <section key={index}>
          <span className="caption">{paddedNumber(index + 1)}</span>
          <h3 className="headline">{item.headline}</h3>
          <p className="intro">{item.intro}</p>
          <p className="body">{item.description}</p>
          <Button label="Contact Us" variant="ghost" href="/contact" />
        </section>
      ))}
    </article>
  );
}

function Process({ items }) {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <span className="caption">{paddedNumber(index + 1)}</span>
          <h3 className="intro">{item.headline}</h3>
          <p className="body">{item.description}</p>
          <Image alt="" src={item.image} />
        </li>
      ))}
    </ol>
  );
}

function Questions({ items }) {
  return (
    <ol>
      {items.map((item, index) => (
        <li key={index}>
          <span className="caption">{paddedNumber(index + 1)}</span>
          <h3 className="headline">{item.headline}</h3>
          <p className="body">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
