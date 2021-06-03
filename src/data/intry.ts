// import MacBookProLight from './placeholders/shadowed/MBP.webp';
// import iMacLight from './placeholders/shadowed/iMac.webp';
// import iPhoneLight from './placeholders/shadowed/iPhone_1.webp';
// import iPhonesLight from './placeholders/shadowed/iPhone_2.webp';
// import iPadLandscapeLight from './placeholders/shadowed/iPad_landscape.webp';
// import iPadPortraitLight from './placeholders/shadowed/iPad_portrait.webp';
// import MacBookProDark from './placeholders/infinite/MBP.webp';
// import iMacDark from './placeholders/infinite/iMac.webp';
// import iPhoneDark from './placeholders/infinite/iPhone_1.webp';
// import iPhonesDark from './placeholders/infinite/iPhone_2.webp';
// import iPadLandscapeDark from './placeholders/infinite/iPad_landscape.webp';
// import iPadPortraitDark from './placeholders/infinite/iPad_portrait.webp';

import MacBookProLight from './intry_MBP--light.webp';
import iMacLight from './intry_iMac--light.webp';
// import iPhoneLight from './intry_iPhone_1--light.webp';
// import iPhonesLight from './intry_iPhone_1--light.webp';
import iPadLandscapeLight from './intry_iPad_landscape--light.webp';
import iPadPortraitLight from './intry_iPad_portrait--light.webp';

import MacBookProDark from './intry_MBP--dark.webp';
import iMacDark from './intry_iMac--dark.webp';
// import iPhoneDark from './intry_iPhone_1--dark.webp';
// import iPhonesDark from './intry_iPhone_1--dark.webp';
import iPadLandscapeDark from './intry_iPad_landscape--dark.webp';
import iPadPortraitDark from './intry_iPad_portrait--dark.webp';

const intry = {
  slug: 'intry',
  title: 'AI-Powered Hybrid Resume™ Generator',
  client: 'Intry',
  date: '2016 – 2018',
  summary: `Co-founder focused on product vision, innovation, conceptualization, delivery and strategy of an innovative SaaS startup in the HR tech space.`,
  roles: [
    'Machine Learning & Artificial Intelligence',
    'Strategy',
    'Ideation & Prototyping',
    'Roadmapping',
    'Interaction & Interface Design + Execution',
    'Business Architecture & Integration',
    'DevOps & Frameworks',
    'Management',
    'Coaching',
  ],
  platforms: { android: false, apple: false, web: true },
  tools: [
    'Sketch',
    'Adobe Photoshop & Illustrator',
    'InVision',
    'FullStory',
    'Proto.io',
    'AngularJS',
  ],
  content: `<h4>The Challenge</h4>
  <h4>Solution</h4>
  <h4>Results</h4>`,
  featured_image: {
    light: {
      '--MacBookPro': `url(${MacBookProLight})`,
      '--iMac': `url(${iMacLight})`,
      // '--iPhone': `url(${iPhoneLight})`,
      // '--iPhones': `url(${iPhonesLight})`,
      '--iPadLandscape': `url(${iPadLandscapeLight})`,
      '--iPadPortrait': `url(${iPadPortraitLight})`,
    },
    dark: {
      '--MacBookPro': `url(${MacBookProDark})`,
      '--iMac': `url(${iMacDark})`,
      // '--iPhone': `url(${iPhoneDark})`,
      // '--iPhones': `url(${iPhonesDark})`,
      '--iPadLandscape': `url(${iPadLandscapeDark})`,
      '--iPadPortrait': `url(${iPadPortraitDark})`,
    },
  },
  device: 'iPadPortrait',
  meta: {
    title: 'AI-Powered Hybrid Resume™ Generator',
    og: {},
    twitter: {},
  },
};

export default intry;
