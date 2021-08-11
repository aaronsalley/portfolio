/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// import MacBookProLight from './Aaron-Salley-Disruptv-NYC-mtfmusicals_MBP--light.webp';
import iMacLight from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iMac--light.webp';
// import iPhoneLight from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--light.webp';
// import iPhonesLight from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--light.webp';
// import iPadLandscapeLight from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_landscape--light.webp';
// import iPadPortraitLight from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_portrait--light.webp';

// import MacBookProDark from './Aaron-Salley-Disruptv-NYC-mtfmusicals_MBP--dark.webp';
import iMacDark from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iMac--dark.webp';
// import iPhoneDark from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--dark.webp';
// import iPhonesDark from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPhone_1--dark.webp';
// import iPadLandscapeDark from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_landscape--dark.webp';
// import iPadPortraitDark from './Aaron-Salley-Disruptv-NYC-mtfmusicals_iPad_portrait--dark.webp';

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
  content: (
    <React.Fragment>
      <h4>The Challenge</h4>
      <p>
        It's not very well known, but I was a Broadway performer for a while
        when I first moved to New York City after college. Music and theater had
        been my love for years and years, so when I found this little collective
        of fellow artists making new musicals... let's just say I was obsessed.
        By the mission, Musical Theatre Factory is a 501(c)3 non-profit artist
        service organization dedicated to developing new work in a collaborative
        atmosphere free from the pressures of critical or financial success that
        dismantles oppressive ideologies towards collective liberation through
        powerful and joyful story and song. What that translates to in practice
        is creating the place where hottest shit happens first (plus civic
        discourse). As one of the Founders, I really helped shape the first
        years of the company. Primarily an performed, I read, sang and danced my
        way through beautiful new pieces of art. However, my largest impact came
        once I assumed a leadership role first as volunteer outreach
        coordinator, and more recently as Managing Director. Combining my love
        for the theater and my startup experience, I have been able to apply
        lean principles to performing arts, making way for a new way of
        operating and funding developmental theater. Most models (including the
        one I inherited) are based on traditional nonprofit strategy. Coupled
        with the familiar struggles of early, bootstrapped organizations, there
        was little strategic direction for growth and no tactical plan for
        scaling up services. And because being a primarily volunteer
        organization means high turn over, there were large inconsistencies in
        best business practices and quality of output. Within the first 30 days,
        I implemented controls in data security, document retention, and
        marketing strategy leading to renewed community engagement. Within two
        months, a revised ticket revenue plan was put into place generating
        record high grosses per programming, and setting the company well on its
        way to recouping all investments into each programming class. Now
        entering my six month on the job, the burn rate has been reduced by 25%,
        standard operating procedures and compliance controls protect the
        organization from future audits, fundraising strategy is projected to
        double our operating budget for the next season, and the company is now
        being restructured for succession planning to last beyond the current
        leaders at the helm.
      </p>
      <h4>Solution</h4>
      <h4>Results</h4>
    </React.Fragment>
  ),
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
