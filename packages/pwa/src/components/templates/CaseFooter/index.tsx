import Link from "next/link";
import style from "./index.module.scss";

const CaseFooter = ({}: React.ComponentProps<any>): React.ReactElement => (
  <footer className={style.container}>
    <Link href={"/projects"}>
      <a>
        <i className="fas fa-arrow-left"></i>Back to Projects
      </a>
    </Link>
  </footer>
);

export default CaseFooter;
