import React from "react";
import { RootStateOrAny } from "react-redux";

import bhphotovideo from "../projects/bhphotovideo";
import davincian from "../projects/davincian";
import intry from "../projects/intry";
import lumifi from "../projects/lumifi";
import mtfmusicals from "../projects/mtfmusicals";

import SocialCard from "../../../public/media/Aaron-Salley-Disruptv-NYC--og_card.webp";

export const initialState: RootStateOrAny = {
  siteTitle: "Aaron Salley | Digital Product Executive • EDI Advocate",
  description: `I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development &amp; product management, and executive leadership capacities.`,
  branding: "Aaron-Salley-Disruptv-NYC-logo",
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
      content: (
        <React.Fragment>
          <h1>
            <small>Hey there,</small> I work with startups and top companies on
            intentional, radical, innovative digital solutions.
          </h1>
          <section>
            <p>
              I provide services to help start, grow, and sustain digital
              products from strategy to execution and management. Whether you're
              ideating something new or continuing a digital transformation, we
              can bring your ideas to life.
            </p>
            <p>
              Services are available along the entire product lifecycle
              including devOps — ranging from market research, interface &amp;
              interaction design, and prototyping through full-stack development
              and cloud deployments.
            </p>
            <p>
              I have helped advance product vision, conceptualization, and
              management, go-to-market efforts, and development/delivery cycles
              for early-stage startups and enterprise firms. Let's chat.
            </p>
          </section>
        </React.Fragment>
      ),
    },
    {
      // href: "/resume",
      title: "Résumé",
    },
  ],
  projects: [bhphotovideo, intry, davincian, lumifi, mtfmusicals],
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
    title:
      "Aaron Salley — Digital Product Executive & EDI Advocate | Portfolio",
    url: "https://aaronsalley.com",
    description: `I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development &amp; product management, and leadership capacities. Contact me today to build something disruptive.`,
    image: SocialCard.src,
  },
  twitter: {
    type: "summary",
    title:
      "Aaron Salley — Digital Product Executive & EDI Advocate | Portfolio",
    url: "https://aaronsalley.com",
    description: `I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development &amp; product management, and leadership capacities. Contact me today to build something disruptive.`,
    image: SocialCard.src,
  },
  browser: "",
  colorScheme: "light",
};
