import type { Project } from "../../../models/Project";
import { Device } from "../../../models/devices";

import MacBookProLight from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--light.webp";
import iMacLight from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--light.webp";
import iPhoneLight from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--light.webp";
import iPhonesLight from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--light.webp";
import iPadLandscapeLight from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--light.webp";
import iPadPortraitLight from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--light.webp";

import MacBookProDark from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--dark.webp";
import iMacDark from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--dark.webp";
import iPhoneDark from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--dark.webp";
import iPhonesDark from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--dark.webp";
import iPadLandscapeDark from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--dark.webp";
import iPadPortraitDark from "./assets/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--dark.webp";

import mobileWebEvolution from "./assets/Aaron-Salley-Disruptv-NYC-bnhphotovideo-mobile_web_evolution.webp";

const BHPhoto: Project = {
  slug: "bhphotovideo",
  title: "Omnichannel eCommerce",
  client: "B&H Photo Video Pro Audio",
  summary:
    "Leader of a diverse team managing the nation's largest independent consumer electronics ecommerce channels across platforms and OSes.",
  content: "",
  date: "October 2016 - November 2021",
  roles: [
    "Strategy",
    "Ideation & Prototyping",
    "Roadmapping",
    "Interaction & Interface Design + Execution",
    "Management",
    "Coaching",
  ],
  platforms: {
    android: true,
    mac: true,
    web: true,
  },
  tools: [
    "Sketch",
    "Adobe Photoshop & Illustrator",
    "InVision",
    "FullStory",
    "Proto.io",
    "React & Swift",
  ],
  images: {
    light: {
      MacbookPro: MacBookProLight,
      iMac: iMacLight,
      iPhone: iPhoneLight,
      iPhones: iPhonesLight,
      iPad: {
        landscape: iPadLandscapeLight,
        portrait: iPadPortraitLight,
      },
    },
    dark: {
      MacbookPro: MacBookProDark,
      iMac: iMacDark,
      iPhone: iPhoneDark,
      iPhones: iPhonesDark,
      iPad: {
        landscape: iPadLandscapeDark,
        portrait: iPadPortraitDark,
      },
    },
  },
  device: Device.iPhone,
  meta: {
    title: "Omnichannel eCommerce",
    og: {},
    twitter: {},
  },
};

export default BHPhoto;
