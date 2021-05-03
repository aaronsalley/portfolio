import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import ProjectSlate from '../../templates/ProjectSlate';
import styles from './index.module.scss';
import FeaturedClients from '../../molecules/FeaturedClients';
import HeaderMeta from '../../atoms/HeaderMeta';

const mapStateToProps = (state: any, ownProps: any) => {
  const { projects, pages, settings, ready } = state;

  return {
    projects,
    pages,
    settings,
    ready,
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
        title: '',
      },
      title: `I work with startups and top companies on intentional, 
      radical, innovative digital solutions.`,
      excerpt: `I'm Aaron. Having had careers in the arts and tech, my 
      philosophy leverages connections between diverse experiences.</br> 
      I draw from human-centered yet pragmatic technical skills to 
      bring conscientiousness, creativity, and strategic thinking to all that I do.</br> 
      Over the last decade, I've worked with startups and established companies alike
      — taking ideas from mind to market.`,
    };
  }

  composeIntro = () => {
    return this.state.excerpt.split('</br>').map((p: string, i: number) => {
      return <p key={i}>{p}</p>;
    });
  };

  composeProjects = () => {
    return this.props.projects.map((project: any, i: number) => {
      return project.sticky ? <ProjectSlate {...project} key={i} /> : false;
    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <main className={styles.container}>
          <section id='about' className={styles.Section__intro}>
            <h1>
              <small>Hey there,</small>
              {this.state.title}
            </h1>
            <div className={styles.intro}>{<this.composeIntro />}</div>
            <FeaturedClients />
          </section>
          <section id='projects' className={styles.Section__showcase}>
            {<this.composeProjects />}
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
