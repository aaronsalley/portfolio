export type Role = {
  employer: string;
  location?: string;
  startDate: string;
  endDate?: string;
  title: string;
  description: string;
  url: string;
  skills?: string[];
};

export const roles: Role[] = [
  {
    employer: "Memorial Sloan Kettering Cancer Center",
    location: "New York, NY",
    startDate: "January 2022",
    title: "Group Product Manager",
    description:
      "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
    url: "https://mskcc.org",
    skills: ["Strategy", "Leadership"],
  },
  // {
  //   employer: "RubiconMD",
  //   location: "New York, NY",
  //   startDate: "January 2020",
  //   endDate: "June 2022",
  //   title: "Product Director",
  //   description:
  //     "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
  //   url: "https://rubiconmd.com",
  //   skills: ["JavaScript", "React", "Node.js"],
  // },
  {
    employer: "B&H Photo Video",
    location: "New York, NY",
    startDate: "October 2016",
    endDate: "November 2021",
    title: "Product Director",
    description:
      "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
    url: "https://bhphotovideo.com",
    skills: ["Strategy", "Design", "Leadership"],
  },
  {
    employer: "Compass",
    location: "New York, NY",
    startDate: "2020",
    endDate: "2021",
    title: "Product Consultant",
    description:
      "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
    url: "https://compass.com",
    skills: ["Engineering", "AI/ML"],
  },
  {
    employer: "Intry",
    location: "Austin, TX",
    startDate: "March 2017",
    endDate: "November 2018",
    title: "VP Product / Co-Founder",
    description:
      "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
    url: "https://intry.com",
    skills: ["Strategy", "AI/ML", "Leadership"],
  },
  {
    employer: "DaVincian Healthcare",
    location: "Austin, TX",
    startDate: "December 2015",
    endDate: "June 2016",
    title: "Product Lead",
    description:
      "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
    url: "https://davincianhealthcare.com",
    skills: ["Strategy", "Design"],
  },
  {
    employer: "LumiFi",
    location: "New York, NY",
    startDate: "2015",
    endDate: "2015",
    title: "UX Designer",
    description:
      "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
    url: "https://lumifi.com",
    skills: ["Design"],
  },
  // {
  //   employer: "BNY Mellon",
  //   location: "New York, NY",
  //   startDate: "January 2020",
  //   endDate: "June 2022",
  //   title: "Product Director",
  //   description:
  //     "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
  //   url: "https://bnymellon.com",
  //   skills: ["JavaScript", "React", "Node.js"],
  // },
  // {
  //   employer: "Cole Haan",
  //   location: "New York, NY",
  //   startDate: "January 2020",
  //   endDate: "June 2022",
  //   title: "Product Director",
  //   description:
  //     "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
  //   url: "https://colehaan.com",
  //   skills: ["JavaScript", "React", "Node.js"],
  // },
  // {
  //   employer: "Creative Circle",
  //   location: "New York, NY",
  //   startDate: "January 2020",
  //   endDate: "June 2022",
  //   title: "Product Director",
  //   description:
  //     "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
  //   url: "https://creativecircle.com",
  //   skills: ["JavaScript", "React", "Node.js"],
  // },
  // {
  //   employer: "Landmark Hospitality",
  //   location: "Jersey City, NJ",
  //   startDate: "January 2020",
  //   endDate: "June 2022",
  //   title: "Product Director",
  //   description:
  //     "Led a team of developers to build scalable web applications using modern frameworks and technologies.",
  //   url: "https://landmarkhospitality.com",
  //   skills: ["JavaScript", "React", "Node.js"],
  // },
];
