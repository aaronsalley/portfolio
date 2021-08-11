import React from 'react';

// import MacBookProLight from '../components/atoms/Device/media/shadowed/Aaron-Salley-Disruptv-NYC-MBP.png';
// import iMacLight from '../components/atoms/Device/media/shadowed/Aaron-Salley-Disruptv-NYC-iMac.png';
// import iPhoneLight from '../components/atoms/Device/media/shadowed/Aaron-Salley-Disruptv-NYC-iPhone_1.png';
// import iPhonesLight from '../components/atoms/Device/media/shadowed/Aaron-Salley-Disruptv-NYC-iPhone_2.png';
// import iPadLandscapeLight from '../components/atoms/Device/media/shadowed/Aaron-Salley-Disruptv-NYC-iPad_landscape.png';
// import iPadPortraitLight from '../components/atoms/Device/media/shadowed/Aaron-Salley-Disruptv-NYC-iPad_portrait.png';
// import MacBookProDark from '../components/atoms/Device/media/infinite/Aaron-Salley-Disruptv-NYC-MBP.png';
// import iMacDark from '../components/atoms/Device/media/infinite/Aaron-Salley-Disruptv-NYC-iMac.png';
// import iPhoneDark from '../components/atoms/Device/media/infinite/Aaron-Salley-Disruptv-NYC-iPhone_1.png';
// import iPhonesDark from '../components/atoms/Device/media/infinite/Aaron-Salley-Disruptv-NYC-iPhone_2.png';
// import iPadLandscapeDark from '../components/atoms/Device/media/infinite/Aaron-Salley-Disruptv-NYC-iPad_landscape.png';
// import iPadPortraitDark from '../components/atoms/Device/media/infinite/Aaron-Salley-Disruptv-NYC-iPad_portrait.png';

const caseStudyModel = {
  slug: '',
  title: '',
  client: '',
  date: '',
  summary: ``,
  roles: [],
  platforms: { android: false, apple: false, web: false },
  tools: [],
  content: (
    <React.Fragment>
      <h4>The Challenge</h4>
      <h4>Solution</h4>
      <h4>Results</h4>
    </React.Fragment>
  ),
  featured_image: {
    light: {
      // '--MacBookPro': `url(${MacBookProLight})`,
      // '--iMac': `url(${iMacLight})`,
      // '--iPhone': `url(${iPhoneLight})`,
      // '--iPhones': `url(${iPhonesLight})`,
      // '--iPadLandscape': `url(${iPadLandscapeLight})`,
      // '--iPadPortrait': `url(${iPadPortraitLight})`,
    },
    dark: {
      // '--MacBookPro': `url(${MacBookProDark})`,
      // '--iMac': `url(${iMacDark})`,
      // '--iPhone': `url(${iPhoneDark})`,
      // '--iPhones': `url(${iPhonesDark})`,
      // '--iPadLandscape': `url(${iPadLandscapeDark})`,
      // '--iPadPortrait': `url(${iPadPortraitDark})`,
    },
  },
  device: '',
  meta: {
    title: '',
    og: {},
    twitter: {},
  },
};

export default caseStudyModel;
