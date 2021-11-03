import Link from "next/link";

const SiteLogo = ({
  branding,
  siteTitle,
}: React.ComponentProps<any>): React.ReactElement => {
  return (
    <Link href="/">
      <img src={branding} alt={siteTitle ?? "Aaron Salley"} />
    </Link>
  );
};

export default SiteLogo;
