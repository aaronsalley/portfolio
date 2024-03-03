import memoji_waving from "../../public/memoji_waving.svg";
import memoji_shruging from "../../public/memoji_shrug.svg";
import MSKDirect from "../../public/MSKDirect.jpg";
import Intry from "../../public/Intry.jpg";
import BHPhoto from "../../public/B&HPhoto.jpg";

export const site = {
  title: "Aaron Salley",
  logo: memoji_waving,
  nav: [
    { label: "Work", uri: "/" },
    { label: "Resume", uri: "/resume" },
    // { label: 'About', uri: '/about' },
    // { label: 'Mentorship', uri: '/mentorship' },
    { label: "Connect", uri: "mailto:me@aaronsalley.com" },
  ],
  socials: [
    {
      label: "LinkedIn",
      uri: "https://linkedin.com/in/aaronsalley",
      cssClasses: ["fa-brands fa-linkedin"],
    },
    {
      label: "Medium",
      uri: "https://medium.com/@aaronsalley",
      cssClasses: ["fa-brands fa-medium"],
    },
    {
      label: "Github",
      uri: "https://github.com/aaronsalley",
      cssClasses: ["fa-brands fa-github"],
    },
    {
      label: "Behance",
      uri: "https://www.behance.net/aaronsalley",
      cssClasses: ["fa-brands fa-behance"],
    },
    {
      label: "Instagram",
      uri: "https://instagram.com/aaronsalleyhim",
      cssClasses: ["fa-brands fa-instagram"],
    },
    {
      label: "Apple Music",
      uri: "https://music.apple.com/profile/aaronsalley",
      cssClasses: ["fa-brands fa-apple"],
    },
  ],
  contact: {
    address: "12-15 Broadway",
    city: "New York",
    state: "NY",
    zip: "11106",
    email: "me@aaronsalley.com",
    phone: "1 (212) 287-5859",
  },
};

export const memoji = {
  waving: memoji_waving,
  shruging: memoji_shruging,
};

export const work = [
  {
    title: "Bringing MSK Direct to life",
    excerpt:
      "Developed and executed the product strategy for MSK Direct — a national digital program benefiting 4.8 million people affected by cancer consisting of multiple products — taking the product from 0 to 1, within budget and on time.",
    skills: ["0 > 1 innovation strategy", "Product visioning", "GTM"],
    links: [
      {
        title: "MSKCC Broadens Access to Expertise With Expanded Services",
        uri: "https://www.mskcc.org/news-releases/mskcc-broadens-access-to-its-cancer-care-expertise-with-launch-of-expanded-services-for-msk-direct-members",
      },
      {
        title: "Case Study",
        uri: "https://www.behance.net/gallery/192976527/Bringing-MSK-Direct-to-life",
      },
    ],
    image: {
      src: MSKDirect,
      alt: "MSK Direct app promo",
    },
  },
  {
    title: "Omnichannel eCommerce for B&H Photo",
    excerpt:
      "Directed the global teams in alignment with company goals and market trends, resulting in a 30% increase in revenue, a 15% improvement in customer satisfaction, and compliance with emerging privacy, environmental, and accessibility regulations.",
    skills: [
      "Growth & scaling strategy",
      "Strategic roadmapping",
      "Architecture & engineering",
    ],
    links: [
      {
        title: "Case Study",
        uri: "https://www.behance.net/gallery/192948481/Omichannel-e-commerce",
      },
    ],
    image: {
      src: BHPhoto,
      alt: "B&H Photo iOS app",
    },
  },
  {
    title: "AI-powered Hybrid Resume™",
    excerpt:
      "Executed market research, competitive analysis, and design thinking to develop an innovative AI/ML process for generating hybrid human-readable resumes that consistently outperformed ATS algorithms, based on extensive data analysis.",
    skills: [
      "0 > 1 innovation strategy",
      "Product visioning & design",
      "Architecture & engineering",
    ],
    links: [
      {
        title: "Austin-American Statesman",
        uri: "https://www.statesman.com/story/business/technology/2020/02/12/can-austin-startup-get-your-resume-to-top-of-pile/1720482007/",
      },
      {
        title: "Case Study",
        uri: "https://www.behance.net/gallery/192948467/AI-powered-SaaS-Hybrid-Resume",
      },
    ],
    image: {
      src: Intry,
      alt: "",
    },
  },
];
