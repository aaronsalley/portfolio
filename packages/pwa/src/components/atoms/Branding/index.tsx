import Link from "next/link";
import Image from "next/image";

const Branding = ({
  logo,
  title,
}: React.ComponentProps<any>): React.ReactElement => (
  <Link href={"/"}>
    <a>
      {logo ? (
        <img src={logo} width={78} height={56} alt={title} loading={"eager"} />
      ) : null}
    </a>
  </Link>
);

export default Branding;
