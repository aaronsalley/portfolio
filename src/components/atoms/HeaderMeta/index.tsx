import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';

import AaronSalley from '../../../assets/media/aaronsalley--og_card.webp';

const mapStateToProps = (state: any, ownProps: any) => {
  const { homepage } = state;

  return {
    homepage,
  };
};

const HeaderMeta = (props: any): any => {
  const {
    title = '',
    description = props.homepage.includes('aaronsalley')
      ? 'I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management, and executive leadership capacities.'
      : '',
    og: {
      type: ogType = 'webhomepage',
      title: ogTitle = props.homepage.includes('aaronsalley')
        ? 'Aaron Salley — Digital Product Executive & EDI Advocate | Portfolio'
        : 'Disruptv Digital Product Solutions | Disruptv New York',
      url: ogUrl = props.homepage.includes('aaronsalley')
        ? 'https://aaronsalley.com'
        : 'https://disruptv.llc',
      description: ogDescription = props.homepage.includes('aaronsalley')
        ? 'I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management, and leadership capacities. Contact me today to build something disruptive.'
        : 'We work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management. Contact us today to build something disruptv.',
      image: ogImage = props.homepage.includes('aaronsalley')
        ? AaronSalley
        : '',
    },
    twitter: {
      type: twitterType = 'summary',
      title: twitterTitle = props.homepage.includes('aaronsalley')
        ? 'Aaron Salley — Digital Product Executive & EDI Advocate | Portfolio'
        : 'Disruptv Digital Product Solutions | Disruptv New York',
      url: twitterUrl = props.homepage.includes('aaronsalley')
        ? 'https://aaronsalley.com'
        : 'https://disruptv.llc',
      description: twitterDescription = props.homepage.includes('aaronsalley')
        ? 'I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management, and leadership capacities. Contact me today to build something disruptive.'
        : 'We work with people and firms on thoughtful, innovative projects in UI/UX design, technical development & product management. Contact us today to build something disruptv.',
      image: twitterImage = props.homepage.includes('aaronsalley')
        ? AaronSalley
        : '',
    },
  } = props.meta;

  return (
    <Helmet>
      <title>
        {title ? `${title} -` : ''}{' '}
        {props.homepage.includes('aaronsalley')
          ? 'Aaron Salley | Digital Product Executive • EDI Advocate'
          : 'Disruptv Digital Product Solutions | Disruptv New York'}
      </title>
      <meta name='description' content={description} />
      {/* <!-- OpenGraph SEO --> */}
      <meta property='og:type' content={ogType} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:url' content={ogUrl} />
      <meta property='og:description' content={ogDescription} />
      <meta property='og:image' content={ogImage} />
      {/* <!-- Twitter SEO --> */}
      <meta property='twitter:type' content={twitterType} />
      <meta property='twitter:title' content={twitterTitle} />
      <meta property='twitter:url' content={twitterUrl} />
      <meta property='twitter:description' content={twitterDescription} />
      <meta property='twitter:image' content={twitterImage} />
    </Helmet>
  );
};

export default connect(mapStateToProps)(HeaderMeta);
