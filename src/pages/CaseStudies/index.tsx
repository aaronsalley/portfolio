import React from 'react';
import HeaderMeta from '../../components/atoms/HeaderMeta';
import Showcase from '../../components/templates/Showcase';

class CaseStudies extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <HeaderMeta
          meta={{
            title: 'Case Studies',
            og: {},
            twitter: {},
          }}
        />
        <main>
          <Showcase />
        </main>
      </React.Fragment>
    );
  }
}

export default CaseStudies;
