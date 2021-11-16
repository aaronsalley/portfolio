import style from "./index.module.scss";
import FeaturedClients from "../../molecules/FeaturedClients";

const Intro = ({
  includeFeatured,
  ...page
}: React.ComponentProps<any>): React.ReactElement => (
  <main className={style["container"]}>
    {page.content}
    {includeFeatured ? <FeaturedClients /> : null}
  </main>
);
export default Intro;
