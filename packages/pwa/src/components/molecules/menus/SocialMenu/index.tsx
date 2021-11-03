const SocialMenu = ({
  SocialMenu,
}: React.ComponentProps<any>): React.ReactElement => {
  const items = SocialMenu.map((link: any) => {
    return (
      <li>
        <a href={link.href} target="_blank">
          {link.title}
        </a>
      </li>
    );
  });

  return (
    <menu>
      <ul>{items}</ul>
    </menu>
  );
};

export default SocialMenu;
