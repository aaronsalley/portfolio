import Image from "next/image";

import leaves from "../../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";

export default function Testimonial() {
  return (
    <article>
      <p className="subheading">Take it from them</p>
      <blockquote>
        <p className="intro"></p>
        <p className="body"></p>
      </blockquote>
      <cite className="body uppercase">Name</cite>
      <Image alt="" src={leaves} />
    </article>
  );
}
