import { getFooterGallery, getPages, getPosts } from "../../lib/wordpress";
import Image from "next/image";
import FormEmailSignup from "../FormEmailSignup/FormEmailSignup";
import SocialLinks from "../SocialLinks/SocialLinks";
import PagesNav from "../PagesNav/PagesNav";
import style from "./style.module.scss";

export default async function Footer() {
  const posts = await getPosts();
  const pages = await getPages();
  const gallery = await getFooterGallery();
  pages.pop();

  return (
    <>
      <footer className={style.container}>
        <div className="headline font-serif text-[56px] md:text-[180px] text-center">
          Aaron Salley
        </div>
        <p className="body text-[13px] text-center md:text-[22px] md:text-left">
          text block
        </p>
        <PagesNav props={pages} classes={style.pages} />
        <Gallery images={gallery} />
        <div className={style.newsletter}>
          <p>Mail text block</p>
          <FormEmailSignup />
        </div>
        <SocialLinks classes={style.links} />
      </footer>
    </>
  );
}

function Gallery({ images }) {
  return (
    <div className={style.gallery}>
      {images.map((image, i) => (
        <Image
          src={image.uri}
          alt={image.caption}
          key={i}
          width={500}
          height={500}
          className={style.image}
        />
      ))}
    </div>
  );
}
