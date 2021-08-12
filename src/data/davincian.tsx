/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// import MacBookProLight from './Aaron-Salley-Disruptv-NYC-davincian_MBP--light.webp';
// import iMacLight from './Aaron-Salley-Disruptv-NYC-davincian_iMac--light.webp';
import iPhoneLight from './Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--light.webp';
import iPhonesLight from './Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--light.webp';
import iPadLandscapeLight from './Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--light.webp';
import iPadPortraitLight from './Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--light.webp';

// import MacBookProDark from './Aaron-Salley-Disruptv-NYC-davincian_MBP--dark.webp';
// import iMacDark from './Aaron-Salley-Disruptv-NYC-davincian_iMac--dark.webp';
import iPhoneDark from './Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--dark.webp';
import iPhonesDark from './Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--dark.webp';
import iPadLandscapeDark from './Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--dark.webp';
import iPadPortraitDark from './Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--dark.webp';

const davincian = {
  slug: 'davincian',
  title: 'Telemedicine PaaS for the 21st Century',
  client: 'DaVincian Healthcare',
  date: '2015 – 2016',
  summary: `Global Product Lead for AI-integrated solutions that improves clinical & financial outcomes and patient engagement by connecting sioled healthcare data.`,
  roles: [
    'Machine Learning & Artificial Intelligence',
    'Strategy',
    'Ideation & Prototyping',
    'Roadmapping',
    'Interaction & Interface Design + Execution',
    'Creative Direction',
    'Marketing Support',
  ],
  platforms: { android: true, apple: true, web: false },
  tools: [
    'Sketch',
    'Adobe Photoshop, Illustrator & InDesign',
    'Omnigraffle',
    'Marvel App',
    'Proto.io',
  ],
  content: (
    <React.Fragment>
      <h4>The Challenge</h4>
      <p>
        Where there’s a phone, there’s hope. We believe everyone deserves a
        chance for a healthy life. Sadly, more than half of the world’s rural
        population does not have access to quality health care. Every year, over
        13 million children die from preventable, treatable illnesses. We can do
        so much better. We believe mobile solutions provide the keys to unlock a
        new future for the underserved. At DaVincian we are passionate about
        improving lives through the power of mobile technology. DaVincian
        solutions optimize how patients, payers and providers engage in the
        global healthcare ecosystem. From diagnosis, to treatment, to payment –
        DaVincian solutions can provide the chance for a brighter future.
      </p>
      <h4>Solution</h4>
      <h4>Results</h4>
    </React.Fragment>
  ),
  featured_image: {
    light: {
      // '--MacBookPro': MacBookProLight,
      // '--iMac': iMacLight,
      '--iPhone': iPhoneLight,
      '--iPhones': iPhonesLight,
      '--iPadLandscape': iPadLandscapeLight,
      '--iPadPortrait': iPadPortraitLight,
    },
    dark: {
      // '--MacBookPro': MacBookProDark,
      // '--iMac': iMacDark,
      '--iPhone': iPhoneDark,
      '--iPhones': iPhonesDark,
      '--iPadLandscape': iPadLandscapeDark,
      '--iPadPortrait': iPadPortraitDark,
    },
  },
  device: 'iPhones',
  meta: {
    title: 'Telemedicine Platform',
    og: {},
    twitter: {},
  },
};

export default davincian;

// DaVincian Healthcare is a mobile cloud analytics company that specializes in providing advanced technology solutions to the global healthcare market. We operate in the US Hospital market offering a sophisticated, data analytical based revenue management solution which is mobilized and expanding within the US and foreign markets. DaVincian Healthcare is building on its strong foundation in the Healthcare Revenue Cycle Management market to launch additional mobile cloud analytic capabilities that drive the creation of healthcare social network ecosystems enabling sophisticated patient engagement and accountable care solutions that can then be tailored for and licensed to partners in foreign markets who seek to apply the same advanced technology solutions in their local environments.</p><p>In today’s healthcare market, the ability to offer mobile integrated, goal driven, real-time data analytical solutions that are the essence of the big data technology trend, is a significant competitive advantage.
