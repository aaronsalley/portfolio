// Case Studies
import MSKDirect from "./MSKDirect.jpg";
import BHPhoto from "./B&HPhoto.jpg";
import Intry from "./Intry.jpg";
import Lumifi from "./lumifi.png";
import DaVincian from "./DaVincian.png";
import {
  MSK as MSKLogo,
  BAndHPhoto as BHPhotoLogo,
} from "@/assets/svgs/brands";
import IntryLogo from "@/assets/svgs/brand--Intry.svg";
import LumifiLogo from "@/assets/svgs/brand--LumiFi.svg";
import DaVincianLogo from "@/assets/svgs/brand--DaVincian_Healthcare.svg";

enum Tags {
  Strategy = "Strategy",
  Design = "Design",
  AI = "AI",
  Leadership = "Leadership",
  Mobile = "Mobile",
  Engineering = "Engineering",
}

enum Categories {
  Healthcare = "Healthcare",
  Commerce = "Commerce",
  SaaS = "SaaS",
  IoT = "IoT",
  Platform = "Platform",
}

export type CaseStudy = {
  id: number;
  image: typeof MSKDirect;
  category: Categories;
  tags: Tags[];
  title: string;
  url: string;
  excerpt: string;
  client: string;
  clientLogo?: typeof MSKLogo;
  featured?: boolean;
};

export const posts: CaseStudy[] = [
  {
    id: 1,
    image: MSKDirect,
    category: Categories.Healthcare,
    tags: [Tags.Strategy],
    title: "Guided Access to Expert Care",
    url: "https://www.behance.net/gallery/192976527/Bringing-MSK-Direct-to-life", //TODO: Make local
    excerpt:
      "A scalable, digital-first care navigation platform that extended MSK’s clinical expertise beyond its physical footprint.",
    client: "MSK Direct",
    clientLogo: MSKLogo,
    featured: true,
  },
  {
    id: 5,
    image: BHPhoto,
    category: Categories.Commerce,
    tags: [],
    title: "PWA Mobile Strategy",
    url: "https://www.behance.net/gallery/192948481/Omichannel-e-commerce", //TODO: Make local
    excerpt:
      "Unify the mobile experience into a single, sustainable platform for faster, more consistent delivery.",
    client: "B&H Photo Video",
    clientLogo: BHPhotoLogo,
    featured: true,
  },
  {
    id: 6,
    image: Intry,
    category: Categories.SaaS,
    tags: [],
    title: "AI-powered SaaS Hybrid Resume™",
    url: "https://www.behance.net/gallery/192948467/AI-powered-SaaS-Hybrid-Resume", //TODO: Make local
    excerpt:
      "Bridge human storytelling and machine screening—making resumes work for both people and ATS-driven hiring systems.",
    client: "Intry",
    clientLogo: IntryLogo,
    featured: true,
  },
  {
    id: 7,
    image: Lumifi,
    category: Categories.IoT,
    tags: [],
    title: "IoT lighting control UI/UX",
    url: "https://www.behance.net/gallery/35016837/IoT-lighting-control-software", //TODO: Make local
    excerpt:
      "Make complex smart lighting intuitive and approachable for everyday home users.",
    clientLogo: LumifiLogo,
    client: "LumiFi",
  },
  {
    id: 1,
    image: MSKDirect,
    category: Categories.Healthcare,
    tags: [],
    title: "ENVR AI Automation",
    url: "",
    excerpt: " Outcome A",
    client: "MSK",
    clientLogo: MSKLogo,
  },
  {
    id: 1,
    image: MSKDirect,
    category: Categories.Platform,
    tags: [],
    title: "Enterprise PaaS",
    url: "",
    excerpt: " Outcome A",
    client: "MSK",
    clientLogo: MSKLogo,
  },
  {
    id: 2,
    image: BHPhoto,
    category: Categories.Commerce,
    tags: [],
    title: "PLCC & BNPL",
    url: "",
    excerpt:
      "Eliminate financial friction at the moment of intent—driving deeper loyalty and positioning B&H Photo Video as the default choice for serious creators and professionals.",
    client: "B&H Photo Video",
    clientLogo: BHPhotoLogo,
  },
  {
    id: 3,
    image: BHPhoto,
    category: Categories.Commerce,
    tags: [],
    title: "Checkout Optimization",
    url: "",
    excerpt: " Outcome B",
    client: "B&H Photo Video",
    clientLogo: BHPhotoLogo,
  },
  {
    id: 4,
    image: BHPhoto,
    category: Categories.Commerce,
    tags: [],
    title: "Mobile PDP Redesign",
    url: "",
    excerpt: " Outcome B",
    client: "B&H Photo Video",
    clientLogo: BHPhotoLogo,
  },
  {
    id: 6,
    image: Intry,
    category: Categories.SaaS,
    tags: [],
    title: "UX Development",
    url: "",
    excerpt: " Outcome C",
    client: "Intry",
    clientLogo: IntryLogo,
  },
  {
    id: 7,
    image: DaVincian,
    category: Categories.Healthcare,
    tags: [],
    title: "Pivot",
    url: "",
    excerpt: " Outcome D",
    client: "DaVincian Healthcare",
    clientLogo: DaVincianLogo,
  },
  {
    id: 7,
    image: DaVincian,
    category: Categories.Healthcare,
    tags: [],
    title: "Aiva",
    url: "",
    excerpt: " Outcome D",
    client: "DaVincian Healthcare",
    clientLogo: DaVincianLogo,
  },
  {
    id: 7,
    image: DaVincian,
    category: Categories.Healthcare,
    tags: [],
    title: "Kiosk",
    url: "",
    excerpt: " Outcome D",
    client: "DaVincian Healthcare",
    clientLogo: DaVincianLogo,
  },
];
