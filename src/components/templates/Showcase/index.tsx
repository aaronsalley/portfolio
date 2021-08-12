import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { detectColorScheme } from '../../../store/actions';
import style from './index.module.scss';

const mapStateToProps = (state: any, ownProps: any) => {
  const { projects, colorScheme } = state;
  return {
    projects,
    colorScheme,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    detectColorScheme: () => dispatch(detectColorScheme()),
  };
};

class Showcase extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.props.detectColorScheme();
  };

  componentDidUpdate = (prevProps: any, prevState: any) => {
    this.props.detectColorScheme();
  };

  Features = () => {
    const { projects, colorScheme, max } = this.props;

    if (colorScheme) {
      return projects.map((project: any, i: any) => {
        if (i < (max ? max : Infinity)) {
          let featuredImage: any =
            project.featured_image[colorScheme][`--${project.device}`];

          return (
            <article className={style.container} key={i}>
              <section>
                <h3 className={style.title}>{project.title}</h3>
                <h2 className={style.client}>{project.client}</h2>
                <p className={style.summary}>{project.summary}</p>

                <Link href={`project/${encodeURIComponent(project.slug)}`}>
                  <a className={style.button} title='View Project Summary'>
                    View Project Summary
                  </a>
                </Link>
              </section>
              <Link href={`project/${encodeURIComponent(project.slug)}`}>
                <a title='View Project Summary'>
                  <picture>
                    <img {...featuredImage} alt={project.title} />
                  </picture>
                </a>
              </Link>
            </article>
          );
        }
        return null;
      });
    }
    return null;
  };

  render() {
    return <aside>{<this.Features />}</aside>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Showcase);
