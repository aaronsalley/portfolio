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
  tagline: "Intention. Integration. Illumination.",
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
  {
    title: "Research & Discovery",
    children: (
      <>
        <p>
          Illuminate your creative process. Groundbreaking work starts with a
          deep understanding of your audience, the market, and emerging trends
          — going beyond basic trend reports and providing bespoke insights that
          ignite innovative ideas and fuel impactful outcomes.
        </p>
        <ul>
          <li>Customer Insights & Analytics</li>
          <li>Opportunity Discovery</li>
        </ul>
      </>
    ),
  },
  {
    title: "Project Management",
    children: (
      <>
        <p>
          {`
          Unlock your team's creative potential and deliver exceptional results.
          Maximize your creative output with a tailored approach to project
          management, designed to streamline workflows, enhance collaboration,
          and deliver on-time and on-budget.`}
        </p>
        <ul>
          <li>Iterative Project Scoping</li>
          <li>Requirement Documentation</li>
          <li>Time Management & Delivery Sequencing</li>
          <li>Budget and ROI management</li>
        </ul>
      </>
    ),
  },
  {
    title: "Solution Engineering",
    children: (
      <>
        <p>
          Bridge the gap between vision and value by integrating creative with
          technical expertise. Go beyond beautifully designed interfaces to
          engineer solutions and engaging experiences that deliver tangible
          results.
        </p>
        <ul>
          <li>Product Strategy</li>
          <li>Product Design</li>
          <li>Product Engineering</li>
          <li>Product Management</li>
          <li>New Product & Service Development</li>
          <li>UX & UI Design</li>
          <li>Web & Mobile App Development</li>
        </ul>
      </>
    ),
  },
  {
    title: "Go-to-Market Strategy",
    children: (
      <>
        <p>
          Launch your product or service with intention. Bring your new offering
          to market with a strategic roadmap that ensures maximum impact and
          drives rapid adoption.
        </p>
        <ul>
          <li>Demand Landscape</li>
          <li>End to End Marketing Planning</li>
          <li>Value Proposition</li>
          <li>Demand Acceleration</li>
          <li>Journey Creation</li>
          <li>Commercial Strategy</li>
          <li>Content & Channel Strategy</li>
          <li>Campaign Planning and Activation</li>
        </ul>
      </>
    ),
  },
  {
    title: "Organizational Transformation",
    children: (
      <>
        <p>
          {`Navigate the complexities of today's rapidly evolving landscape.
          Organizations need to adapt quickly to thrive through a holistic
          approach, helping you not just survive, but truly flourish.`}
        </p>
        <ul>
          <li>DEI & ESG Strategy</li>
          <li>Digital Transformation</li>
          <li>Fractional Executive Leadership</li>
          <li>Business Model Innovation</li>
          <li>Operating Model and Ways of Working</li>
        </ul>
      </>
    ),
  },
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
