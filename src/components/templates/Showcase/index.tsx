import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
          const pattern = new RegExp(/(url\()([A-z0-9\/\-_.]+)(\))/, 'g');
          let featuredImage: any = project.featured_image[colorScheme][
            `--${project.device}`
          ].split(pattern);
          featuredImage = featuredImage ? featuredImage[2] : '';

          let featuredImageLight: any = project.featured_image['light'][
            `--${project.device}`
          ].split(pattern);
          featuredImageLight = featuredImageLight ? featuredImageLight[2] : '';

          let featuredImageDark: any = project.featured_image['dark'][
            `--${project.device}`
          ].split(pattern);
          featuredImageDark = featuredImageDark ? featuredImageDark[2] : '';

          return (
            <article className={style.container} key={i}>
              <section>
                <h3 className={style.title}>{project.title}</h3>
                <h2 className={style.client}>{project.client}</h2>
                <p className={style.summary}>{project.summary}</p>

                <Link
                  to={`project/${project.slug}`}
                  className={style.button}
                  title='View Project Summary'
                >
                  View Project Summary
                </Link>
              </section>
              <Link to={`project/${project.slug}`} title='View Project Summary'>
                <picture>
                  <source
                    media='screen and (prefers-color-scheme: dark)'
                    srcSet={featuredImageDark}
                  />
                  <source
                    media='screen and (prefers-color-scheme: light)'
                    srcSet={featuredImageLight}
                  />
                  <img src={featuredImage} alt={project.title} />
                </picture>
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