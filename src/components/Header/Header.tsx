import style from "./style.module.scss";
import Image from "next/image";

import { getPages, getPosts } from "../../lib/wordpress";
import EmailSignup from "../FormEmailSignup/FormEmailSignup";
import SocialLinks from "../SocialLinks/SocialLinks";
import PagesNav from "../PagesNav/PagesNav";
import HeaderHOC from "./HeaderHOC";

import leaves from "../../assets/malte-michels-s4wGZw3UuLk-unsplash.jpg";

export default async function HeaderComponent() {
  const pages = await getPages();
  const posts = await getPosts();

  return (
    <HeaderHOC>
      <Menu pages={pages} posts={posts} />
    </HeaderHOC>
  );
}

function Menu({ pages, posts }) {
  return (
    <menu className={style.menu}>
      <div className={style.links}>
        <PagesNav props={pages} classes={style.pages} heading={"Browse"} />
        <PagesNav props={posts} classes={style.pages} heading={"Quick Links"} />
      </div>
      <div className={style.features}>
        <Article />
        <Article />
      </div>
      <div className={style.connect}>
        <EmailSignup />
        <SocialLinks />
      </div>
    </menu>
  );
}

function Article() {
  return (
    <article>
      <Image src={leaves} alt="" />
      <p className="subheading text-[14px]">Subheader</p>
      <p className="headline text-[27px]">Title</p>
      <p className="body">Paragraph</p>
    </article>
  );
}
