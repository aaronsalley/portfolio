import Link from "next/link";

const SiteNavMenu = ({
  SiteNav,
}: React.ComponentProps<any>): React.ReactElement => {
  const items = SiteNav.map((link: any) => {
    return (
      <li>
        <Link href={link.href}>{link.title}</Link>
      </li>
    );
  });

  return (
    <nav>
      <ul>{items}</ul>
    </nav>
  );
};

export default SiteNavMenu;
