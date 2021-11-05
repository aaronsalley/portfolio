import { Device } from "../models/devices";
import { Project } from "../models/Project";

const BHPhoto: Project = {
  slug: "bhphotovideo",
  title: "Omnichannel eCommerce",
  client: "B&H Photo Video Pro Audio",
  summary:
    "Leader of a diverse team managing the nation's largest independent consumer electronics ecommerce channels across platforms and OSes.",
  content: "# Title",
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
    web: false,
  },
  tools: [
    "Sketch",
    "Adobe Photoshop & Illustrator",
    "InVision",
    "FullStory",
    "Proto.io",
    "React & Swift",
  ],
  featured_image: {
    light: {
      MacbookPro: "null",
      iMac: "null",
      iPhone: "null",
      iPhones: "null",
      iPad: {
        landscape: "null",
        portrait: "null",
      },
    },
    dark: {
      MacbookPro: null,
      iMac: null,
      iPhone: null,
      iPhones: null,
      iPad: {
        landscape: null,
        portrait: null,
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
