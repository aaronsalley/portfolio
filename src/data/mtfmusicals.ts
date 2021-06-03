// import MacBookProLight from '../components/atoms/Device/media/shadowed/MBP.png';
// import iMacLight from '../components/atoms/Device/media/shadowed/iMac.png';
// import iPhoneLight from '../components/atoms/Device/media/shadowed/iPhone_1.png';
// import iPhonesLight from '../components/atoms/Device/media/shadowed/iPhone_2.png';
// import iPadLandscapeLight from '../components/atoms/Device/media/shadowed/iPad_landscape.png';
// import iPadPortraitLight from '../components/atoms/Device/media/shadowed/iPad_portrait.png';
// import MacBookProDark from '../components/atoms/Device/media/infinite/MBP.png';
// import iMacDark from '../components/atoms/Device/media/infinite/iMac.png';
// import iPhoneDark from '../components/atoms/Device/media/infinite/iPhone_1.png';
// import iPhonesDark from '../components/atoms/Device/media/infinite/iPhone_2.png';
// import iPadLandscapeDark from '../components/atoms/Device/media/infinite/iPad_landscape.png';
// import iPadPortraitDark from '../components/atoms/Device/media/infinite/iPad_portrait.png';

// import MacBookProLight from './mtfmusicals_MBP--light.webp';
import iMacLight from './mtfmusicals_iMac--light.webp';
// import iPhoneLight from './mtfmusicals_iPhone_1--light.webp';
// import iPhonesLight from './mtfmusicals_iPhone_1--light.webp';
// import iPadLandscapeLight from './mtfmusicals_iPad_landscape--light.webp';
// import iPadPortraitLight from './mtfmusicals_iPad_portrait--light.webp';

// import MacBookProDark from './mtfmusicals_MBP--dark.webp';
import iMacDark from './mtfmusicals_iMac--dark.webp';
// import iPhoneDark from './mtfmusicals_iPhone_1--dark.webp';
// import iPhonesDark from './mtfmusicals_iPhone_1--dark.webp';
// import iPadLandscapeDark from './mtfmusicals_iPad_landscape--dark.webp';
// import iPadPortraitDark from './mtfmusicals_iPad_portrait--dark.webp';

const mtfmusicals = {
  slug: 'mtfmusicals',
  title: 'Changemaking New Musicals',
  client: 'Musical Theatre Factory',
  date: 'since Feb 2015',
  summary: `This is a short project summary.`,
  roles: [
    'Management',
    'Coaching',
    'Machine Learning & Artificial Intelligence',
    'Strategy',
    'Ideation & Prototyping',
    'Roadmapping',
    'Business Architecture & Integration',
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
      // '--MacBookPro': `url(${MacBookProLight})`,
      '--iMac': `url(${iMacLight})`,
      // '--iPhone': `url(${iPhoneLight})`,
      // '--iPhones': `url(${iPhonesLight})`,
      // '--iPadLandscape': `url(${iPadLandscapeLight})`,
      // '--iPadPortrait': `url(${iPadPortraitLight})`,
    },
    dark: {
      // '--MacBookPro': `url(${MacBookProDark})`,
      '--iMac': `url(${iMacDark})`,
      // '--iPhone': `url(${iPhoneDark})`,
      // '--iPhones': `url(${iPhonesDark})`,
      // '--iPadLandscape': `url(${iPadLandscapeDark})`,
      // '--iPadPortrait': `url(${iPadPortraitDark})`,
    },
  },
  device: 'iMac',
  meta: {
    title: 'Changemaking New Musicals',
    og: {},
    twitter: {},
  },
};

export default mtfmusicals;
