import SiteLogo from "../../atoms/SiteLogo";
import SiteNav from "../../molecules/menus/SiteNavMenu";

const SiteHeader = (): React.ReactElement => {
  return (
    <header>
      <SiteLogo></SiteLogo>
      <span></span>
      <SiteNav></SiteNav>
    </header>
  );
};

export default SiteHeader;
