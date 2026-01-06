// Case Studies
import MSKDirect from "@/assets/images/MSKDirect.jpg";
import BHPhoto from "@/assets/images/B&HPhoto.jpg";
import Intry from "@/assets/images/Intry.jpg";
import Lumifi from "@/assets/images/lumifi.png";

export type CaseStudy = {
  id: number;
  image: typeof MSKDirect;
  category: string;
  tags: string[];
  title: string;
  url: string;
  excerpt: string;
  client: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    image: MSKDirect,
    category: "GTM Strategy",
    tags: [],
    title: "Guided Access to Expert Care",
    url: "https://www.behance.net/gallery/192976527/Bringing-MSK-Direct-to-life", //TODO: Make local
    excerpt:
      "A scalable, digital-first care navigation platform that extended MSK’s clinical expertise beyond its physical footprint.",
    client: "MSK Direct",
  },
  {
    id: 5,
    image: BHPhoto,
    category: "Product Strategy",
    tags: [],
    title: "PWA Mobile Strategy",
    url: "https://www.behance.net/gallery/192948481/Omichannel-e-commerce", //TODO: Make local
    excerpt:
      "Unify the mobile experience into a single, sustainable platform for faster, more consistent delivery.",
    client: "B&H Photo Video",
  },
  {
    id: 6,
    image: Intry,
    category: "AI Product Development",
    tags: [],
    title: "AI-powered SaaS Hybrid Resume™",
    url: "https://www.behance.net/gallery/192948467/AI-powered-SaaS-Hybrid-Resume", //TODO: Make local
    excerpt:
      "Bridge human storytelling and machine screening—making resumes work for both people and ATS-driven hiring systems.",
    client: "Intry",
  },
  {
    id: 7,
    image: Lumifi,
    category: "Mobile UI/UX Design",
    tags: [],
    title: "IoT lighting control software UI/UX optimization",
    url: "https://www.behance.net/gallery/35016837/IoT-lighting-control-software", //TODO: Make local
    excerpt:
      "Make complex smart lighting intuitive and approachable for everyday home users.",
    client: "LumiFi",
  },
  {
    id: 1,
    image: MSKDirect,
    category: "GTM Strategy",
    tags: [],
    title: "ENVR AI Automation",
    url: "",
    excerpt: " Outcome A",
    client: "MSK",
  },
  {
    id: 1,
    image: MSKDirect,
    category: "GTM Strategy",
    tags: [],
    title: "Enterprise PaaS",
    url: "",
    excerpt: " Outcome A",
    client: "MSK",
  },
  {
    id: 2,
    image: BHPhoto,
    category: "Product Strategy",
    tags: [],
    title: "PLCC & BNPL",
    url: "",
    excerpt:
      "Eliminate financial friction at the moment of intent—driving deeper loyalty and positioning B&H Photo Video as the default choice for serious creators and professionals.",
    client: "B&H Photo Video",
  },
  {
    id: 3,
    image: BHPhoto,
    category: "Product Strategy",
    tags: [],
    title: "Checkout Optimization",
    url: "",
    excerpt: " Outcome B",
    client: "B&H Photo Video",
  },
  {
    id: 4,
    image: BHPhoto,
    category: "Product Strategy",
    tags: [],
    title: "Mobile PDP Redesign",
    url: "",
    excerpt: " Outcome B",
    client: "B&H Photo Video",
  },

  {
    id: 6,
    image: Intry,
    category: "AI Product Development",
    tags: [],
    title: "UX Development",
    url: "",
    excerpt: " Outcome C",
    client: "Intry",
  },

  {
    id: 7,
    image: Lumifi,
    category: "Mobile UI/UX Design",
    tags: [],
    title: "Pivot",
    url: "",
    excerpt: " Outcome D",
    client: "DaVincian Healthcare",
  },
  {
    id: 7,
    image: Lumifi,
    category: "Mobile UI/UX Design",
    tags: [],
    title: "Aiva",
    url: "",
    excerpt: " Outcome D",
    client: "DaVincian Healthcare",
  },
  {
    id: 7,
    image: Lumifi,
    category: "Mobile UI/UX Design",
    tags: [],
    title: "Kiosk",
    url: "",
    excerpt: " Outcome D",
    client: "DaVincian Healthcare",
  },
];
