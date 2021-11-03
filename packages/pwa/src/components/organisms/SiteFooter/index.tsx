import SocialMenu from "../../molecules/menus/SocialMenu";

const SiteFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <SocialMenu></SocialMenu>
      <span></span>
      <p>© Copyright {year}. All rights reserved.</p>
    </footer>
  );
};

export default SiteFooter;
