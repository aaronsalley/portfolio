import type { Project } from "../../../models/Project";
import { Device } from "../../../models/devices";

// import MacBookProLight from './/assetsAaron-Salley-Disruptv-NYC-mtfmusicals_MBP--light.webp';
import iMacLight from "./assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iMac--light.webp";
// import iPhoneLight from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--light.webp';
// import iPhonesLight from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--light.webp';
// import iPadLandscapeLight from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_landscape--light.webp';
// import iPadPortraitLight from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_portrait--light.webp';

// import MacBookProDark from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_MBP--dark.webp';
import iMacDark from "./assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iMac--dark.webp";
// import iPhoneDark from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--dark.webp';
// import iPhonesDark from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--dark.webp';
// import iPadLandscapeDark from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_landscape--dark.webp';
// import iPadPortraitDark from './assets/Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_portrait--dark.webp';

const MTFMusicals: Project = {
  slug: "mtfmusicals",
  title: "Changemaking New Musicals",
  client: "Musical Theatre Factory",
  summary: "This is a short project summary.",
  content: null,
  date: "since Feb 2015",
  roles: [
    "Management",
    "Coaching",
    "Machine Learning & Artificial Intelligence",
    "Strategy",
    "Ideation & Prototyping",
    "Roadmapping",
    "Business Architecture & Integration",
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
      // MacbookPro: MacBookProLight,
      iMac: iMacLight,
      // iPhone: iPhoneLight,
      // iPhones: iPhonesLight,
      // iPad: {
      //   landscape: iPadLandscapeLight,
      //   portrait: iPadPortraitLight,
      // },
    },
    dark: {
      // MacbookPro: MacBookProDark,
      iMac: iMacDark,
      // iPhone: iPhoneDark,
      // iPhones: iPhonesDark,
      // iPad: {
      //   landscape: iPadLandscapeDark,
      //   portrait: iPadPortraitDark,
      // },
    },
  },
  device: Device.iMac,
  meta: {
    title: "Changemaking New Musicals",
    og: {},
    twitter: {},
  },
};

export default MTFMusicals;
