import { RootStateOrAny } from "react-redux";
import packageJson from "../../package.json";

import brand from "../../public/media/Aaron-Salley-Disruptv-NYC-logo--onLight.svg";

import bhphotovideo from "../viewModel/projects/bhphotovideo";
import davincian from "../viewModel/projects/davincian";
import intry from "../viewModel/projects/intry";
import lumifi from "../viewModel/projects/lumifi";
import mtfmusicals from "../viewModel/projects/mtfmusicals";

export const initialState: RootStateOrAny = {
  siteTitle: "Aaron Salley",
  brandingURL: brand,
  homepage: packageJson.homepage,
  pages: [],
  projects: [bhphotovideo, intry, davincian, mtfmusicals, lumifi],
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
  colorScheme: "light",
};
