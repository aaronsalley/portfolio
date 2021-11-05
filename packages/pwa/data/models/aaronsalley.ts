import { RootStateOrAny } from "react-redux";
import packageJson from "../../package.json";
import bhphotovideo from "../data/BHPhoto";
// import davincian from '../../data/davincian';
// import intry from '../../data/intry';
// import lumifi from '../../data/lumifi';
// import mtfmusicals from '../../data/mtfmusicals';

export const initialState: RootStateOrAny = {
  siteTitle: "Aaron Salley",
  brandingURL: "",
  homepage: packageJson.homepage,
  pages: [],
  projects: [
    bhphotovideo,
    // intry,
    // davincian,
    // mtfmusicals,
    // lumifi,
  ],
  menus: {
    SiteNav: [
      {
        href: "/projects",
        title: "Projects",
      },
      {
        href: "/about",
        title: "About",
      },
      {
        href: "/resume",
        title: "Résumé",
      },
    ],
    SocialMenu: [
      {
        href: "https://www.linkedin.com/in/aaronsalley",
        title: "LinkedIn",
      },
      {
        href: "https://github.com/aaronsalley",
        title: "Github",
      },
      {
        href: "https://www.instagram.com/aaronsalleyhim/",
        title: "Instagram",
      },
      {
        href: "https://twitter.com/aaronsalley",
        title: "Twitter",
      },
      {
        href: "https://angel.co/u/aaronsalley",
        title: "AngelList",
      },
    ],
  },
  browser: "",
  colorScheme: "",
};
