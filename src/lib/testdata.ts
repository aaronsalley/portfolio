import waving_memoji from '../../public/memoji.svg';
import MSKDirect from '../../public/MSKDirect.jpg';
import Intry from '../../public/Intry.jpg';
import BHPhoto from '../../public/B&HPhoto.jpg';

export const SITE_TITLE = 'SITE_TITLE';
export const SITE_LOGO = 'SITE_LOGO';
export const SITE_NAV = 'SITE_NAV';

export const site = {
  title: 'Aaron Salley',
  logo: waving_memoji,
  nav: [
    { label: 'Work', uri: '/' },
    { label: 'Resume', uri: '/resume' },
    { label: 'About', uri: '/about' },
    { label: 'Mentorship', uri: '/mentorship' },
    { label: 'Connect', uri: '/connect' },
  ],
  socials: [
    {
      label: 'email',
      uri: 'mailto:me@aaronsalley.com',
      cssClasses: ['fa-solid fa-envelope'],
    },
    {
      label: 'LinkedIn',
      uri: 'https://linkedin.com/in/aaronsalley',
      cssClasses: ['fa-brands fa-linkedin'],
    },
    {
      label: 'Apple Music',
      uri: 'https://music.apple.com/profile/aaronsalley',
      cssClasses: ['fa-brands fa-apple'],
    },
    {
      label: 'Instagram',
      uri: 'https://instagram.com/aaronsalleyhim',
      cssClasses: ['fa-brands fa-instagram'],
    },
  ],
  contact: {
    address: '12-15 Broadway',
    city: 'New York',
    state: 'NY',
    zip: '11106',
    email: 'me@aaronsalley.com',
    phone: '1 (212) 287-5859',
  },
};

export const memoji = {
  waving: waving_memoji,
};
export const pages = {};
export const work = [
  {
    title: 'Bringing MSK Direct to life',
    excerpt:
      'Developed and executed the product strategy for MSK Direct — a national digital program benefiting 4.8 million people affected by cancer consisting of multiple products — taking the product from 0 to 1, within budget and on time.',
    skills: ['0 > 1 innovation strategy', 'Product visioning', 'GTM'],
    press: [
      { title: 'article A', uri: '' },
      { title: 'article B', uri: '' },
    ],
    image: {
      src: MSKDirect,
      alt: 'MSK Direct app promo',
    },
  },
  {
    title: 'Omnichannel eCommerce for B&H Photo',
    excerpt:
      'Directed the global teams in alignment with company goals and market trends, resulting in a 30% increase in revenue, a 15% improvement in customer satisfaction, and compliance with emerging privacy, environmental, and accessibility regulations.',
    skills: [
      'Growth & scaling strategy',
      'Strategic roadmapping',
      'Architecture & engineering',
    ],
    press: [
      { title: 'article A', uri: '' },
      { title: 'article B', uri: '' },
    ],
    image: {
      src: BHPhoto,
      alt: '',
    },
  },
  {
    title: 'AI-powered Hybrid Resume™',
    excerpt:
      'Executed market research, competitive analysis, and design thinking to develop an innovative AI/ML process for generating hybrid human-readable resumes that consistently outperformed ATS algorithms, based on extensive data analysis.',
    skills: [
      '0 > 1 innovation strategy',
      'Product visioning & design',
      'Architecture & engineering',
    ],
    press: [
      { title: 'article A', uri: '' },
      { title: 'article B', uri: '' },
    ],
    image: {
      src: Intry,
      alt: '',
    },
  },
];
