import type { Project } from "../../../models/Project";
import { Device } from "../../../models/devices";

// import MacBookProLight from './assets/Aaron-Salley-Disruptv-NYC-lumifi_MBP--light.webp';
// import iMacLight from './assets/Aaron-Salley-Disruptv-NYC-lumifi_iMac--light.webp';
import iPhoneLight from "./assets/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--light.webp";
import iPhonesLight from "./assets/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--light.webp";
// import iPadLandscapeLight from './assets/Aaron-Salley-Disruptv-NYC-lumifi_iPad_landscape--light.webp';
// import iPadPortraitLight from './assets/Aaron-Salley-Disruptv-NYC-lumifi_iPad_portrait--light.webp';

// import MacBookProDark from './assets/Aaron-Salley-Disruptv-NYC-lumifi_MBP--dark.webp';
// import iMacDark from './assets/Aaron-Salley-Disruptv-NYC-lumifi_iMac--dark.webp';
import iPhoneDark from "./assets/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--dark.webp";
import iPhonesDark from "./assets/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--dark.webp";
// import iPadLandscapeDark from './assets/Aaron-Salley-Disruptv-NYC-lumifi_iPad_landscape--dark.webp';
// import iPadPortraitDark from './assets/Aaron-Salley-Disruptv-NYC-lumifi_iPad_portrait--dark.webp';

const LumiFi: Project = {
  slug: "lumifi",
  title: "IoT Lighting Control Software",
  client: "LumiFi",
  summary:
    "Design Lead of tools to manage, control, and personalize  wireless IoT lighting hardware from multiple manufacturers right from the palm of your hand.",
  content: null,
  date: "Jun - Nov 2015",
  roles: [
    "Ideation & Prototyping",
    "Interaction & Interface Design + Execution",
  ],
  platforms: {
    android: false,
    mac: true,
    web: false,
  },
  tools: ["Adobe Photoshop, Illustrator & InDesign", "Marvel App"],
  images: {
    light: {
      // MacbookPro: MacBookProLight,
      // iMac: iMacLight,
      iPhone: iPhoneLight,
      iPhones: iPhonesLight,
      // iPad: {
      //   landscape: iPadLandscapeLight,
      //   portrait: iPadPortraitLight,
      // },
    },
    dark: {
      // MacbookPro: MacBookProDark,
      // iMac: iMacDark,
      iPhone: iPhoneDark,
      iPhones: iPhonesDark,
      // iPad: {
      //   landscape: iPadLandscapeDark,
      //   portrait: iPadPortraitDark,
      // },
    },
  },
  device: Device.iPhone,
  meta: {
    title: "IoT Lighting Control",
    og: {},
    twitter: {},
  },
};

export default LumiFi;
