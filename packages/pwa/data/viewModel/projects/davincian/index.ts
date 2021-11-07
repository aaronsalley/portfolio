import type { Project } from "../../../models/Project";
import { Device } from "../../../models/devices";

// import MacBookProLight from './assets/Aaron-Salley-Disruptv-NYC-davincian_MBP--light.webp';
// import iMacLight from './assets/Aaron-Salley-Disruptv-NYC-davincian_iMac--light.webp';
import iPhoneLight from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--light.webp";
import iPhonesLight from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--light.webp";
import iPadLandscapeLight from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--light.webp";
import iPadPortraitLight from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--light.webp";

// import MacBookProDark from './assets/Aaron-Salley-Disruptv-NYC-davincian_MBP--dark.webp';
// import iMacDark from './assets/Aaron-Salley-Disruptv-NYC-davincian_iMac--dark.webp';
import iPhoneDark from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--dark.webp";
import iPhonesDark from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--dark.webp";
import iPadLandscapeDark from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--dark.webp";
import iPadPortraitDark from "./assets/Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--dark.webp";

const DaVincian: Project = {
  slug: "davincian",
  title: "Telemedicine PaaS for the 21st Century",
  client: "DaVincian Healthcare",
  summary:
    "Global Product Lead for AI-integrated solutions that improves clinical & financial outcomes and patient engagement by connecting sioled healthcare data.",
  content: null,
  date: "2015 – 2016",
  roles: [
    "Machine Learning & Artificial Intelligence",
    "Strategy",
    "Ideation & Prototyping",
    "Roadmapping",
    "Interaction & Interface Design + Execution",
    "Creative Direction",
    "Marketing Support",
  ],
  platforms: {
    android: true,
    mac: true,
    web: false,
  },
  tools: [
    "Sketch",
    "Adobe Photoshop, Illustrator & InDesign",
    "Omnigraffle",
    "Marvel App",
    "Proto.io",
  ],
  images: {
    light: {
      // MacbookPro: MacBookProLight,
      // iMac: iMacLight,
      iPhone: iPhoneLight,
      iPhones: iPhonesLight,
      iPad: {
        landscape: iPadLandscapeLight,
        portrait: iPadPortraitLight,
      },
    },
    dark: {
      // MacbookPro: MacBookProDark,
      // iMac: iMacDark,
      iPhone: iPhoneDark,
      iPhones: iPhonesDark,
      iPad: {
        landscape: iPadLandscapeDark,
        portrait: iPadPortraitDark,
      },
    },
  },
  device: Device.iPhones,
  meta: {
    title: "Telemedicine Platform",
    og: {},
    twitter: {},
  },
};

export default DaVincian;
