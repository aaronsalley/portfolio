import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import style from './index.module.scss';
import HeaderMeta from '../../components/atoms/HeaderMeta';

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
        title: 'About',
        og: {},
        twitter: {},
      },
      title:
        (this.props.homepage.includes('aaronsalley') ? 'I' : 'We') +
        ` work with startups and top companies on intentional, 
      radical, innovative digital solutions.`,
    };
  }

  composeIntro = () => {
    return this.state.excerpt.split('</br>').map((p: string, i: number) => {
      return <p key={i}>{p}</p>;
    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <main className={style.container}>
          <h1 className={style.welcome}>
            <small>Hey there,</small>
            {this.state.title}
          </h1>
          <section className={style.intro}>
            <p>
              {(this.props.homepage.includes('aaronsalley') ? 'I' : 'We') +
                ` provide services to help start, grow, and sustain digital products
        from strategy to execution and management. Whether you're ideating
        something new or continuing a digital transformation, we can bring your
        ideas to life.`}
            </p>
            <p>
              Services are available along the entire product lifecycle
              including devOps — ranging from market research, interface &
              interaction design, and prototyping through full-stack development
              and cloud deployments.
            </p>
            <p>
              {(this.props.homepage.includes('aaronsalley') ? 'I' : 'We') +
                ` have helped advance product vision, conceptualization, and management,
        go-to-market efforts, and development/delivery cycles for early-stage
        startups and enterprise firms. Let's chat.`}
            </p>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
