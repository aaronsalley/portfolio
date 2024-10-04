import memoji_waving from "../../public/memoji_waving.svg";
import memoji_shruging from "../../public/memoji_shrug.svg";

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
      label: "Behance",
      uri: "https://www.behance.net/aaronsalley",
      cssClasses: ["fa-brands fa-behance"],
    },
    {
      label: "Upwork",
      uri: "https://www.upwork.com/freelancers/~012fac7e4d12244388?mp_source=share",
      cssClasses: ["fa-brands fa-upwork"],
    },
    {
      label: "Github",
      uri: "https://github.com/aaronsalley",
      cssClasses: ["fa-brands fa-github"],
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
