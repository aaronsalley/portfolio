import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import style from './index.module.scss';
import FeaturedClients from '../../components/molecules/FeaturedClients';
import HeaderMeta from '../../components/atoms/HeaderMeta';
import LeadForm from '../../components/organisms/forms/Lead';
import Showcase from '../../components/templates/Showcase';

const mapStateToProps = (state: any, ownProps: any) => {
  const { projects, pages, settings, ready, homepage } = state;

  return {
    projects,
    pages,
    settings,
    ready,
    homepage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {};
};

class Home extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      meta: {
        id: 0,
        og: {},
        twitter: {},
      },
      title:
        (this.props.homepage.includes('aaronsalley') ? 'I' : 'We') +
        ` work with startups and top companies on intentional, 
      radical, innovative digital solutions.`,
      excerpt: this.props.homepage.includes('aaronsalley')
        ? `<p>I'm Aaron. My philosophy draws connections between diverse experiences.
        Currently I lead the mobile product team at <a href="https://bhphotovideo.com" target="_blank" rel="noreferrer nofollow">B&H Photo</a>.</p>
        <p>I draw from human-centered yet pragmatic technical skills to 
      bring conscientiousness, creativity, and strategic thinking to all that I do.</p> 
      <p>Over the last decade, I've worked with startups and established companies alike
      — taking ideas from mind to market.</p>`
        : `<p>We are disruptive. Our philosophy leverages conscientiousness connections between diverse experiences.</p>
      <p>Combining human-centered design and pragmatic technical skill we
      bring innovation and creativity to all that we do.</p> 
      <p>Over the last decade, we've worked with startups and established companies alike
      — taking ideas from mind to market.</p>`,
    };
  }

  render() {
    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <main className={style.container}>
          <h1 className={style.welcome}>
            <small>Hey there,</small>
            {this.state.title}
          </h1>
          <section
            className={style.intro}
            dangerouslySetInnerHTML={{ __html: this.state.excerpt }}
          ></section>
          <FeaturedClients />
          {!this.props.homepage.includes('aaronsalley') ? <LeadForm /> : null}
        </main>
        <Showcase max={3} />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
