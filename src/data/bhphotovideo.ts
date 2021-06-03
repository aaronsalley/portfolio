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

import MacBookProLight from './bhphotovideo_MBP--light.webp';
import iMacLight from './bhphotovideo_iMac--light.webp';
import iPhoneLight from './bhphotovideo_iPhone_1--light.webp';
import iPhonesLight from './bhphotovideo_iPhone_2--light.webp';
import iPadLandscapeLight from './bhphotovideo_iPad_landscape--light.webp';
import iPadPortraitLight from './bhphotovideo_iPad_portrait--light.webp';

import MacBookProDark from './bhphotovideo_MBP--dark.webp';
import iMacDark from './bhphotovideo_iMac--dark.webp';
import iPhoneDark from './bhphotovideo_iPhone_1--dark.webp';
import iPhonesDark from './bhphotovideo_iPhone_2--dark.webp';
import iPadLandscapeDark from './bhphotovideo_iPad_landscape--dark.webp';
import iPadPortraitDark from './bhphotovideo_iPad_portrait--dark.webp';

const bhphotovideo = {
  slug: 'bhphotovideo',
  title: 'Omnichannel eCommerce',
  client: 'B&H Photo',
  date: 'Ongoing since October 2016',
  summary: `Leader of a culturally diverse team managing the nation's largest independent consumer electronics ecommerce channels across platforms and OSes.`,
  roles: [
    'Strategy',
    'Ideation & Prototyping',
    'Roadmapping',
    'Interaction & Interface Design + Execution',
    'Management',
    'Coaching',
  ],
  platforms: { android: true, apple: true, web: true },
  tools: [
    'Sketch',
    'Adobe Photoshop & Illustrator',
    'InVision',
    'FullStory',
    'Proto.io',
    'React & Swift',
  ],
  content: `<h4>The Challenge</h4>
  <h4>Solution</h4>
  <h4>Results</h4>`,
  featured_image: {
    light: {
      '--MacBookPro': `url(${MacBookProLight})`,
      '--iMac': `url(${iMacLight})`,
      '--iPhone': `url(${iPhoneLight})`,
      '--iPhones': `url(${iPhonesLight})`,
      '--iPadLandscape': `url(${iPadLandscapeLight})`,
      '--iPadPortrait': `url(${iPadPortraitLight})`,
    },
    dark: {
      '--MacBookPro': `url(${MacBookProDark})`,
      '--iMac': `url(${iMacDark})`,
      '--iPhone': `url(${iPhoneDark})`,
      '--iPhones': `url(${iPhonesDark})`,
      '--iPadLandscape': `url(${iPadLandscapeDark})`,
      '--iPadPortrait': `url(${iPadPortraitDark})`,
    },
  },
  device: 'iPhone',
  meta: {
    title: 'Omnichannel eCommerce',
    og: {},
    twitter: {},
  },
};

export default bhphotovideo;
