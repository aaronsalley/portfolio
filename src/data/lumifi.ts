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

// import MacBookProLight from './lumifi_MBP--light.webp';
// import iMacLight from './lumifi_iMac--light.webp';
import iPhoneLight from './lumifi_iPhone_1--light.webp';
import iPhonesLight from './lumifi_iPhone_2--light.webp';
// import iPadLandscapeLight from './lumifi_iPad_landscape--light.webp';
// import iPadPortraitLight from './lumifi_iPad_portrait--light.webp';

// import MacBookProDark from './lumifi_MBP--dark.webp';
// import iMacDark from './lumifi_iMac--dark.webp';
import iPhoneDark from './lumifi_iPhone_1--dark.webp';
import iPhonesDark from './lumifi_iPhone_2--dark.webp';
// import iPadLandscapeDark from './lumifi_iPad_landscape--dark.webp';
// import iPadPortraitDark from './lumifi_iPad_portrait--dark.webp';

const lumifi = {
  slug: 'lumifi',
  title: 'IoT Lighting Control',
  client: 'LumiFi',
  date: 'Jun - Nov 2015',
  summary: `Design Lead of tools to manage, control, and personalize  wireless IoT lighting hardware from multiple manufacturers right from the palm of your hand.`,
  roles: [
    'Ideation & Prototyping',
    'Interaction & Interface Design + Execution',
  ],
  platforms: { android: false, apple: true, web: false },
  tools: ['Adobe Photoshop, Illustrator & InDesign', 'Marvel App'],
  content: `<h4>The Challenge</h4>
  <h4>Solution</h4>
  <h4>Results</h4>`,
  featured_image: {
    light: {
      // '--MacBookPro': `url(${MacBookProLight})`,
      // '--iMac': `url(${iMacLight})`,
      '--iPhone': `url(${iPhoneLight})`,
      '--iPhones': `url(${iPhonesLight})`,
      // '--iPadLandscape': `url(${iPadLandscapeLight})`,
      // '--iPadPortrait': `url(${iPadPortraitLight})`,
    },
    dark: {
      // '--MacBookPro': `url(${MacBookProDark})`,
      // '--iMac': `url(${iMacDark})`,
      '--iPhone': `url(${iPhoneDark})`,
      '--iPhones': `url(${iPhonesDark})`,
      // '--iPadLandscape': `url(${iPadLandscapeDark})`,
      // '--iPadPortrait': `url(${iPadPortraitDark})`,
    },
  },
  device: 'iPhone',
  meta: {
    title: 'IoT Lighting Control',
    og: {},
    twitter: {},
  },
};

export default lumifi;
