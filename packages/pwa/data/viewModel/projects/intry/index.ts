import type { Project } from "../../../models/Project";
import { Device } from "../../../models/devices";

import MacBookProLight from "./assets/Aaron-Salley-Disruptv-NYC-intry_MBP--light.webp";
import iMacLight from "./assets/Aaron-Salley-Disruptv-NYC-intry_iMac--light.webp";
// import iPhoneLight from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--light.webp';
// import iPhonesLight from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--light.webp';
import iPadLandscapeLight from "./assets/Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--light.webp";
import iPadPortraitLight from "./assets/Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--light.webp";

import MacBookProDark from "./assets/Aaron-Salley-Disruptv-NYC-intry_MBP--dark.webp";
import iMacDark from "./assets/Aaron-Salley-Disruptv-NYC-intry_iMac--dark.webp";
// import iPhoneDark from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--dark.webp';
// import iPhonesDark from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--dark.webp';
import iPadLandscapeDark from "./assets/Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--dark.webp";
import iPadPortraitDark from "./assets/Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--dark.webp";

const Intry: Project = {
  slug: "intry",
  title: "AI-Powered SaaS Hybrid Resume™ Generator",
  client: "Intry",
  summary:
    "Co-founder focused on product vision, innovation, conceptualization, delivery and strategy of an innovative SaaS startup in the HR tech space.",
  content: null,
  date: "2016 – 2018",
  roles: [
    "Machine Learning & Artificial Intelligence",
    "Product Thinking",
    "Roadmapping",
    "Interaction & Interface Design",
    "Business Architecture & Integration",
    "DevOps & Frameworks",
    "Management",
    "Coaching",
  ],
  platforms: {
    android: false,
    mac: false,
    web: true,
  },
  tools: [
    "Sketch",
    "Adobe Photoshop & Illustrator",
    "InVision",
    "FullStory",
    "Proto.io",
    "AngularJS",
  ],
  images: {
    light: {
      MacbookPro: MacBookProLight,
      iMac: iMacLight,
      // iPhone: iPhoneLight,
      // iPhones: iPhonesLight,
      iPad: {
        landscape: iPadLandscapeLight,
        portrait: iPadPortraitLight,
      },
    },
    dark: {
      MacbookPro: MacBookProDark,
      iMac: iMacDark,
      // iPhone: iPhoneDark,
      // iPhones: iPhonesDark,
      iPad: {
        landscape: iPadLandscapeDark,
        portrait: iPadPortraitDark,
      },
    },
  },
  device: Device["iPad.portrait"],
  meta: {
    title: "AI-Powered Hybrid Resume™ Generator",
    og: {},
    twitter: {},
  },
};

export default Intry;
