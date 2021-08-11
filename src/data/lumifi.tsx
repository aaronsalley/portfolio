/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// import MacBookProLight from './Aaron-Salley-Disruptv-NYC-lumifi_MBP--light.webp';
// import iMacLight from './Aaron-Salley-Disruptv-NYC-lumifi_iMac--light.webp';
import iPhoneLight from './Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--light.webp';
import iPhonesLight from './Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--light.webp';
// import iPadLandscapeLight from './Aaron-Salley-Disruptv-NYC-lumifi_iPad_landscape--light.webp';
// import iPadPortraitLight from './Aaron-Salley-Disruptv-NYC-lumifi_iPad_portrait--light.webp';

// import MacBookProDark from './Aaron-Salley-Disruptv-NYC-lumifi_MBP--dark.webp';
// import iMacDark from './Aaron-Salley-Disruptv-NYC-lumifi_iMac--dark.webp';
import iPhoneDark from './Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--dark.webp';
import iPhonesDark from './Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--dark.webp';
// import iPadLandscapeDark from './Aaron-Salley-Disruptv-NYC-lumifi_iPad_landscape--dark.webp';
// import iPadPortraitDark from './Aaron-Salley-Disruptv-NYC-lumifi_iPad_portrait--dark.webp';

const lumifi = {
  slug: 'lumifi',
  title: 'IoT Lighting Control Software',
  client: 'LumiFi',
  date: 'Jun - Nov 2015',
  summary: `Design Lead of tools to manage, control, and personalize  wireless IoT lighting hardware from multiple manufacturers right from the palm of your hand.`,
  roles: [
    'Ideation & Prototyping',
    'Interaction & Interface Design + Execution',
  ],
  platforms: { android: false, apple: true, web: false },
  tools: ['Adobe Photoshop, Illustrator & InDesign', 'Marvel App'],
  content: (
    <React.Fragment>
      <h4>The Challenge</h4>
      <p>
        LumiFi's mission is to bring the concepts of commercial lighting design
        to the consumer market by tapping into the developing Internet of
        Things. One of the largest challenges is translating the abstract
        concepts of light and its influence on behaviors and moods into
        something more digestible to the average user. Furthermore, with such a
        segmented market full of emerging technologies, it's imperative to have
        a user experience that seamlessly handles the grunt work and lessens the
        learning curve for adoption. This app successfully bridges those gaps by
        using a fresh, focused interface, and powered by trademarked algorithms.
        In my redesign of the app, I focused on streamlining the current UI, and
        gamifying each step of the process. The entire UX for the new app also
        attempts to educate users in lighting concepts as well as be a useful
        app. Starting with the initially device setup, the UX flow of the app
        was thinking like a lighting designer—the result being a dry, monotonous
        process. The average home user would only think "Am I done yet?!" Terms
        were conflated and misused in a valiant attempt to speak in terms the
        end user would understand. The new approach (with education in mind)
        uses the correct terms, and starts the naked lamp and, through
        gamificaiton, evolves into the practical fixture that you'd actually
        find in your environment. The process is similar to customizing a
        character in a RPG and is fun, addictive, and educational. In terms of
        the UI, original elements are repurposed to modernized to match the
        graphic expectations of today's market. Devices are photorealistic to
        give foundation and visualization to the conceptual process of
        evaluative lighting composition. The main app is visually immersive. The
        cleaned-up UI graphically interprets literal associations of light:
        airiness, weightlessness, transparency, unbound and flowing. Elements
        are layered with opacities so that the mood of the currently selected
        light scheme influences the in app experience and echoes the physical
        environment. The modified UX removes the sidebar menu in favor of a tab
        bar. The result—a more discoverable, visual, and efficient experience.
        Increased contextualization of tasks help keep things straight in the
        app and make it much easier to get from point A to point B in the app
        flow by being instantly accessible.
      </p>
      <h4>Solution</h4>
      <h4>Results</h4>
    </React.Fragment>
  ),
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
