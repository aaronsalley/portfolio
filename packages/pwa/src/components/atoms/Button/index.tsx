import Link from "next/link";
import style from "./index.module.scss";

const Button = ({
  href = "",
  CTA,
  title,
}: React.ComponentProps<any>): React.ReactElement => (
  <Link href={href}>
    <a className={style["container"]} title={title}>
      {CTA}
    </a>
  </Link>
);

export default Button;
