import Image from "next/image";
import Button from "../../components/Button/Button";

import leaves from "../../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";

export default async function Page() {
  return (
    <main>
      <Image alt="" src={leaves} />
      <h1 className="headline font-serif">Inquire</h1>
      <p className="body">
        We'd love to hear from you! Please fill out the form below or send a
        note directly to him@aaronsalley.com.
      </p>
      <form>
        <input className="font-mono" type="text" placeholder="Name" />
        <input className="font-mono" type="email" placeholder="Email" />
        <input className="font-mono" type="text" placeholder="Subject" />
        <input className="font-mono" type="text" placeholder="Referred by" />
        <input
          className="font-mono"
          type="text"
          placeholder="Product of interest (optional)"
        />
        <textarea
          className="font-mono"
          placeholder="Any other details you'd like to provide?"
        ></textarea>
        <Button label="Submit" variant="filled" />
      </form>
      <section>
        <h2 className="subheading">Until we're in touch</h2>
        <div>
          <h3 className="headline">The Blog</h3>
          <p></p>
        </div>
        <div>
          <h3 className="headline">LinkedIn</h3>
          <p></p>
        </div>
        <div>
          <h3 className="headline">Instagram</h3>
          <p></p>
        </div>
        <Image alt="" src={leaves} />
      </section>
    </main>
  );
}
