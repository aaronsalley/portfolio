import React from "react";
import { RootStateOrAny } from "react-redux";
import brand from "../../../public/media/Aaron-Salley-Disruptv-NYC-logo--onLight.svg";

import bhphotovideo from "../projects/bhphotovideo";
import davincian from "../projects/davincian";
import intry from "../projects/intry";
import lumifi from "../projects/lumifi";
import mtfmusicals from "../projects/mtfmusicals";

export const initialState: RootStateOrAny = {
  siteTitle: "Aaron Salley",
  brandingURL: brand,
  pages: [
    {
      title: "Home",
      content: (
        <React.Fragment>
          <h1>
            <small>Hey there,</small> I work with startups and top companies on
            intentional, radical, innovative digital solutions.
          </h1>
          <section>
            <p>
              I'm Aaron. My philosophy draws connections between diverse
              experiences. Currently I lead the mobile product team at{" "}
              <a
                href="https://bhphotovideo.com"
                target="_blank"
                rel="noreferrer nofollow external"
              >
                B&amp;H Photo
              </a>
              .
            </p>
            <p>
              I draw from human-centered yet pragmatic technical skills to bring
              conscientiousness, creativity, and strategic thinking to all that
              I do.
            </p>
            <p>
              Over the last decade, I've worked with startups and established
              companies alike — taking ideas from mind to market.
            </p>
          </section>
        </React.Fragment>
      ),
    },
    {
      href: "/projects",
      title: "Projects",
    },
    {
      href: "/about",
      title: "About",
      content: "This is the about page.",
    },
    {
      // href: "/resume",
      title: "Résumé",
    },
  ],
  projects: [bhphotovideo, intry, davincian, mtfmusicals, lumifi],
  featuredClients: ["bhphoto", "mtf", "bnymellon", "compass", "intry"],
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
  browser: "",
  colorScheme: "light",
};
