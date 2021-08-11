/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import MacBookProLight from './Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--light.webp';
import iMacLight from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--light.webp';
import iPhoneLight from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--light.webp';
import iPhonesLight from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--light.webp';
import iPadLandscapeLight from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--light.webp';
import iPadPortraitLight from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--light.webp';

import MacBookProDark from './Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--dark.webp';
import iMacDark from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--dark.webp';
import iPhoneDark from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--dark.webp';
import iPhonesDark from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--dark.webp';
import iPadLandscapeDark from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--dark.webp';
import iPadPortraitDark from './Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--dark.webp';

import mobileWebEvolution from './Aaron-Salley-Disruptv-NYC-bnhphotovideo-mobile_web_evolution.webp';

const bhphotovideo = {
  slug: 'bhphotovideo',
  title: 'Omnichannel eCommerce',
  client: 'B&H Photo',
  date: 'Ongoing since October 2016',
  summary: `Leader of a diverse team managing the nation's largest independent consumer electronics ecommerce channels across platforms and OSes.`,
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
  content: (
    <React.Fragment>
      <h4>The Challenge</h4>
      <p>
        B&H Photo Video Pro Audio has been established as an institution in New
        York City and a standard-bearer for retail sales of consumer electronics
        products.{' '}
        <strong>
          I was initially brought in as a hired gun to help maintain the mobile
          app offerings, but the true scope of the job quickly became evident —
          defense and expansion of B&H's strategic advantage.
        </strong>
      </p>
      <p>
        In 2015, B&H was awarded the App of the Year at the Mobile Shopping
        Summit and the first ever{' '}
        <a
          href='https://design.google/library/material-design-awards-2015/'
          rel='nofollow noreferrer'
          target='_blank'
        >
          Material Design Award for Immersive Imagery
        </a>{' '}
        at Google I/O – a major recognition for the nascent suite of native and
        web-based mobile products. Unfortunately, the achievement in user
        interface design only temporarily varnished underlying user experience
        issues and exacerbated visual discrepancies across the B&H brand
        identity. User acquisition immediately increased following the award
        announcement but quickly dropped back below the previous baseline
        metric. Revenue never experienced that lift. The value generated by the
        existence of the mobile offerings in the context of a larger eCommerce
        strategy had to be justified to Senior Executives.
      </p>
      <h5>The Company</h5>
      <p>
        For over 45 years, B&H has been selling cameras and photo equipment to
        its target audience of prosumer and professional photographers and
        videographers. Founded in 1973 by husband and wife team Blimie & Herman
        Schreiber, the firm formally known as B&H Foto & Electronics Corporation
        has become a trusted leader and the world’s comprehensive source for
        photo, video, audio, and computer gear boasting a catalog of over
        400,000 SKUs and several awards for industry-leading customer service as
        acknowledged in{' '}
        <a
          href='https://www.newsweek.com/best-online-shops-2021'
          rel='nofollow noreferrer'
          target='_blank'
        >
          Newsweek's Best Online Shops
        </a>{' '}
        three-years running. The brick-and-mortar store originally located on
        Warren St. in Tribeca, has twice-relocated as the firm has grown – first
        to 14th St in the late 1970s, and, in 1997, to its current location by
        Hudson Yards. In the early 2000s, a website was launched to augment the
        mail order sales catalogue. B2B and online sales has grown to be the
        largest source of revenue for the company.
      </p>

      {/* <strong>
        Develop an overarching strategy for continuity across platforms and
        establish trust among Millenial & Gen Z shoppers.
      </strong>
      <p>
        Established as a brick-and-mortar storefront in 1973, B&H has become
        juggernaut in electronics retail and an institution in New York City. As
        a time-honored brand, it's easy to rest on your laurels including{' '}
        <a
          href='https://design.google/library/material-design-awards-2015/'
          rel='nofollow noreferrer'
          target='_blank'
        >
          Google's Material Design Award for Immersive Imagery
        </a>{' '}
        and recognition at the top of{' '}
        <a
          href='https://www.newsweek.com/best-online-shops-2021'
          rel='nofollow noreferrer'
          target='_blank'
        >
          Newsweek's Best Online Shops
        </a>{' '}
        3 years running. Thankfully B&H Photo was self-aware, recognizing the
        importance of defending their strategic position as an eCommerce market
        leader.
      </p>
      <p>
        Over the years, the internet has moved a greater share of revenue
        generation online. What started off as only desktop web has organically
        expanded to include a suite of mobile products. The landscape had become
        unruly. The target demographic was becoming younger, yet the products
        weren't designed to meet a new generation's expectations.
      </p>
      {/* <data>
        82.31% cart abandonment 44.57% Checkout Abandonment .56% Conversion rate
        $110,928,440.00 Rev Avg. Order Value $311.99 Transactions 355,548
      </data> */}
      <h4>Solution</h4>
      <p>
        The immediate need was to determine why users were abandoning the
        conversion funnel right before goal completion.
      </p>
      <figure>
        <source srcSet={mobileWebEvolution} />
        <img
          src={mobileWebEvolution}
          alt='Mobile web evolution to PWA'
          width='100%'
          height='auto'
        />
      </figure>
      <p>
        Update and simpilfy the design language for use across all platforms.
      </p>
      <h4>Results</h4>
      <p>
        Six years later, the mobile suite has evolved into a burgeoning star
        product and substantial revenue generator accounting for nearly half of
        all eCommerce transactions. Zooming out to see the entire eCommerce
        conversion funnel, Mobile is used as in the research and discovery
        portion of the user’s pathway to purchase for nearly every sale. The
        purposeful “visual narrative” approach to goal completion helps to
        propel users from PDP through checkout with as little conflict
        introduced in the story as possible; combined with the UI enhancements,
        the business requirement of welcoming a new generation of customers into
        the B&H family has been met by making good on younger users’
        expectionations.
      </p>
      <p>
        The decision to sunset a native Android app in favor of a PWA has proven
        to be a win financially and for customer experience. Android users no
        longer have to take any action to get the latest features and brand
        offerings and the feature parity and UX is consistent between Android
        and mobile web because it shares the same underlying code base; as iOS
        continues to upgrade its support for PWA, we will evaluate the
        possibility of migrating the Swift code as well.
      </p>
      <p>
        In an economy that is constantly on the move, a strong mobile presence
        is critical to a healthy conversion funnel. The merits of keeping and
        deepening the investment in mobile is and will continue to pay dividends
        into the future.
      </p>

      {/* <data>
        79.71% cart abandonment 40.76% Checkout Abandonment .56% Conversion rate
        $329,732,771.95 Rev Avg. Order Value $392.57 Transactions 839,933
      </data> */}
      {/* <p>
        My tenure has seen two promotions: first from consultant to Senior
        Mobile Product Engineer; I'm now leading this consolidated Product team
        of 18 UX engineers and a small army of developers.
      </p> */}
    </React.Fragment>
  ),
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