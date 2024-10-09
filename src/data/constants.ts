export const strings = {
  ABOUT_ME: "About me",
  SERVICES: "Services",
  CONTACT: "Contact",
  VIEW_ALL_CASES: "View all cases",
  CASE_STUDY: "case study",
  DOWNLOAD_RESUME: "Download Resume (PDF)",
  READ_CASE_STUDIES: "Read case studies for my previous work",
  READ_THOUGHTS: "Checkout my thoughts on Medium",
  HIRE_ME: "Hire me on UpWork",
  name: {
    first: "Aaron",
    last: "Salley",
    full: (): string => `${strings.name.first} ${strings.name.last}`,
  },
  biography: `A passionate product leader with a proven track record of building
            and scaling digital products. Over 10 years leading collaborative,
            cross-functional teams, managing budgets, and driving innovation
            across healthcare, e-commerce, nonprofits and tech industries. Known
            translating complex business needs into clear, actionable
            strategies. Passionate about crafting user-centric solutions that
            deliver exceptional results and make a positive impact on both users
            and businesses.`,
  brands_intro: `Some brands I’ve had the pleasure to work with`,
  telephone: "2122875859",
  email: "me@aaronsalley.com",
  text_memoji: "My memoji",
  current_city: "New York, NY",
  copyright: () =>
    `© ${new Date().getFullYear()} Aaron Salley LLC. All rights reserved. Made with 🖤 in NYC.`,
};

export const positioning_statement = {
  target: "",
  problem: "",
  product: (): string => `Hi, I’m ${strings.name.first}`,
  solution: `I craft solutions for your business that delight and engage.`,
  uvp: `I shepherd ideas from mind to market through an integrated approach, translating complex needs into actionable strategies and delivering solutions for people-centric problems.`,
};

export const site_nav = [
  { title: "About", url: "" },
  { title: "Work", url: "" },
  { title: "Services", url: "" },
  { title: "Thinking", url: "" },
  { title: "Connect", url: "" },
];

export const services = [
  { title: "Research & Discovery", children: "" },
  { title: "Project Management", children: "" },
  { title: "Solution Engineering", children: "" },
  { title: "Go-to-Market Strategy", children: "" },
  { title: "Organizational Transformation", children: "" },
];

export const links = {
  linkedin: { label: "LinkedIn", url: "https://linkedin.com/in/aaronsalley" },
  medium: { label: "Medium", url: "https://medium.com/@aaronsalley" },
  behance: { label: "Behance", url: "https://www.behance.net/aaronsalley" },
  upwork: {
    label: "",
    url: "https://www.upwork.com/freelancers/~012fac7e4d12244388",
  },
  github: { label: "GitHub", url: "https://github.com/aaronsalley" },
  instagram: {
    label: "Instagram",
    url: "https://instagram.com/aaronsalleyhim",
  },
  appleMusic: {
    label: "Apple Music",
    url: "https://music.apple.com/profile/aaronsalley",
  },
  resume: {
    label: "Resume",
    url: "https://drive.google.com/file/d/1-0e11gBw4g0rCdQzg25hYB8PqZwtTNuy/view",
  },
};

export const socials = [
  { ...links.linkedin },
  { ...links.github },
  { ...links.resume },
  { ...links.instagram },
  { ...links.appleMusic },
];
