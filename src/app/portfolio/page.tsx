import Image from "next/image";
import leaves from "../../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";

import BHPhoto from "../../assets/brand--B&H.svg";
import Compass from "../../assets/brand--Compass.svg";
import Intry from "../../assets/brand--Intry.svg";
import MSK from "../../assets/brand--MSK.svg";
import RubiconMD from "../../assets/brand--RubiconMD.svg";
import WildChild from "../../assets/brand--Wildchild.svg";
import Testimonial from "../../components/Testimonial/Testimonial";
import Button from "../../components/Button/Button";

export default function Page() {
  return (
    <main>
      <div>
        <Image src={leaves} alt="" />
        <Image src={leaves} alt="" />
        <Image src={leaves} alt="" />
        <Image src={leaves} alt="" />
        <p className="headline">Headline</p>
        <p className="body">intro text</p>
      </div>
      <h1 className="subheading">featured work</h1>
      <p className="headline">Headline</p>
      <p className="body">intro text</p>
      <Logos />
      <section>
        <Case title="MSK Direct" role="Lead Product Manager" />
        <Case title="B&H Photo" role="Product Director" />
        <Case title="Intry" role="VP Product / Co-Founder" />
        <Case title="LumiFi" role="Product Manager" />
      </section>
      <Gallery images={[leaves, leaves, leaves]} />
      <Testimonial />
      <section>
        <p className="subheading">Let's do this.</p>
        <p className="headline">Inquire about your project</p>
        <Image src={leaves} alt="" />
        <p>blurb</p>
        <Button label="Get in touch" variant="filled" />
      </section>
    </main>
  );
}

function Logos() {
  return (
    <ul>
      {[BHPhoto, Compass, Intry, MSK, RubiconMD, WildChild].map(
        (logo, index) => (
          <li key={index}>
            <Image alt="" src={logo} />
          </li>
        ),
      )}
    </ul>
  );
}

function Case({ title, role }) {
  return (
    <article>
      <Image alt="" src={leaves} />
      <p className="body">{role}</p>
      <h2 className="headline">{title}</h2>
    </article>
  );
}

function Gallery({ images }) {
  return (
    <section>
      <p className="subheading">Portfolio Highlights</p>
      <div>
        {images.map((image, index) => (
          <Image alt="" key={index} src={image} />
        ))}
      </div>
      <button>{">"}</button>
    </section>
  );
}
