import React from "react";
import { RootStateOrAny } from "react-redux";

import bhphotovideo from "../projects/bhphotovideo";
import davincian from "../projects/davincian";
import intry from "../projects/intry";
import lumifi from "../projects/lumifi";
import mtfmusicals from "../projects/mtfmusicals";

export const initialState: RootStateOrAny = {
  siteTitle: "Disruptv Digital Product Solutions | Disruptv New York",
  description: "",
  branding: "Aaron-Salley-Disruptv-NYC-logo",
  pages: [
    {
      title: "Home",
      content: "",
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/about",
      title: "About",
      content: "",
    },
    {
      href: "/contact",
      title: "Contact",
    },
  ],
  projects: [bhphotovideo, intry, davincian, mtfmusicals, lumifi],
  featuredClients: ["bhphoto", "mtf", "bnymellon", "rm+compass", "intry"],
  menus: {
    social: [
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
  og: {
    type: "webhomepage",
    title: "Disruptv Digital Product Solutions | Disruptv New York",
    url: "https://disruptv.llc",
    description:
      "We work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management. Contact us today to build something disruptv.",
    image: "",
  },
  twitter: {
    type: "summary",
    title: "Disruptv Digital Product Solutions | Disruptv New York",
    url: "https://disruptv.llc",
    description:
      "We work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management. Contact us today to build something disruptv.",
    image: "",
  },
};
