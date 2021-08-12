/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import MacBookProLight from './Aaron-Salley-Disruptv-NYC-intry_MBP--light.webp';
import iMacLight from './Aaron-Salley-Disruptv-NYC-intry_iMac--light.webp';
// import iPhoneLight from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--light.webp';
// import iPhonesLight from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--light.webp';
import iPadLandscapeLight from './Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--light.webp';
import iPadPortraitLight from './Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--light.webp';

import MacBookProDark from './Aaron-Salley-Disruptv-NYC-intry_MBP--dark.webp';
import iMacDark from './Aaron-Salley-Disruptv-NYC-intry_iMac--dark.webp';
// import iPhoneDark from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--dark.webp';
// import iPhonesDark from './Aaron-Salley-Disruptv-NYC-intry_iPhone_1--dark.webp';
import iPadLandscapeDark from './Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--dark.webp';
import iPadPortraitDark from './Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--dark.webp';

const intry = {
  slug: 'intry',
  title: 'AI-Powered SaaS Hybrid Resume™ Generator',
  client: 'Intry',
  date: '2016 – 2018',
  summary: `Co-founder focused on product vision, innovation, conceptualization, delivery and strategy of an innovative SaaS startup in the HR tech space.`,
  roles: [
    'Machine Learning & Artificial Intelligence',
    'Product Thinking',
    'Roadmapping',
    'Interaction & Interface Design',
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
  content: (
    <React.Fragment>
      <h4>The Challenge</h4>
      <p>
        If you have ever applied for a job, chances are you have encountered an
        applicant tracking system (ATS, aka talent management systems). At the
        most basic level, ATSes are databases with candidates' basic
        information, skills, and experiences. The information is sourced by
        candidates either filling out a form in some provider's user interface
        directly, or by an automated process. The company can then run queries
        to find matches among the records.
      </p>
      <p>
        As ATSes became the norm in the HR space over the past quarter century,
        they've been expanded to include document parsers, custom fields,
        internal notes, pre-screening tests, and quality scores, to name a few,
        all with the intention of making the matching service more efficient for
        the subscriber. Instead of achieving their goal, however, ATS creators
        made an overly restrictive impediment to the candidate being seen and
        the employer finding the right fit that's mutually beneficial.
      </p>
      <p>
        My time as the combined principal product and technical architect was
        focused on engineering solutions for all these problems for the
        millennial/gen-z job seeker.
      </p>
      <h4>Solution</h4>
      <p>
        Mission one was learning the ins and outs of how applicant tracking
        systems work (or don't work depending on your purview).
      </p>
      <p>
        Using a combination of natural language processing (NLP) and deep
        learning to understand what's really being asked of a candidate in a job
        description, verify your profile contains the correct set of skills by
        passing the requirements through an ontology library, and makes use of
        the correct keywords the HR department has put in place all in a
        beautifully designed document that can easily and correctly be parsed by
        ATSes. No tricks, no treats, just an honest representation of you that
        will get you seen.
      </p>
      <p>
        "What is this magic," you say? The AI connects the dots between
        everything in your profile—hard skills, soft skills, experience,
        aspirations, and core values—and makes sure the right keywords show up
        on your resume. How? When a job description is read by the system, it is
        read for comprehension of what's actually being asked of a candidate.
        Those requirements are sent into our ontology where job titles have
        their standard success criteria identified, macroskills and personality
        traits are broken down into their subcomponents, and synonyms are
        calculated. Now that there's a standard and complete array of keywords
        to look for, we can move into looking for matches.
      </p>
      <p>
        From there, I invented the piece-de-resistance — the "hybrid resume" —
        which would tackle a lot of the issues ATSes pose, handling everything a
        candidate needs to get their resume into the hands of the decision
        makers. Without divulging too many trade secrets, the hybrid resume
        creation process is part software solution, part downloadable document.
      </p>
      <h4>Results</h4>
      <p>
        After a bit of refining, the team and I submitted our hybrid resume
        process to the USPTO. It's currently patent pending.
      </p>
    </React.Fragment>
  ),
  featured_image: {
    light: {
      '--MacBookPro': MacBookProLight,
      '--iMac': iMacLight,
      // '--iPhone': iPhoneLight,
      // '--iPhones': iPhonesLight,
      '--iPadLandscape': iPadLandscapeLight,
      '--iPadPortrait': iPadPortraitLight,
    },
    dark: {
      '--MacBookPro': MacBookProDark,
      '--iMac': iMacDark,
      // '--iPhone': iPhoneDark,
      // '--iPhones': iPhonesDark,
      '--iPadLandscape': iPadLandscapeDark,
      '--iPadPortrait': iPadPortraitDark,
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
