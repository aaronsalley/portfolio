import { useAppSelector } from "../../../../data/viewModel/store";

const SiteFooter = ({
  links = useAppSelector((state) => state.menus.SocialMenu),
}: React.ComponentProps<any>): React.ReactElement => {
  let items = null;
  const year = new Date().getFullYear();

  if (links) {
    items = links.map((link: any, i: number) => {
      return (
        <li key={i}>
          <a href={link.href} target="_blank">
            {link.title}
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <menu>
        <ul>{items}</ul>
      </menu>
      <span></span>
      <p>© Copyright {year}. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
