import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import { useRouter, withRouter } from 'next/router';
import { detectBrowser, detectColorScheme } from '../../store/actions';
import HeaderMeta from '../../components/atoms/HeaderMeta';
import CaseStudyHeader from '../../components/templates/CaseStudyHeader';
// import TOC from '../CaseStudyTOC';
import style from './index.module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';

const mapStateToProps = (state: any, ownProps: any) => {
  const { projects, settings, colorScheme, browser } = state;

  return {
    projects,
    settings,
    colorScheme,
    browser,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {
    detectColorScheme: () => dispatch(detectColorScheme()),
    detectBrowser: () => dispatch(detectBrowser()),
  };
};

class CaseStudy extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      title: 'Project Title',
      client: 'Client Name',
      date: '',
      summary: `This is a short project summary.`,
      roles: [],
      platforms: { android: false, apple: false, web: false },
      tools: [],
      content: '',
      featured_image: {
        light: {},
        dark: {},
      },
      device: 'iMac',
      meta: {
        id: 0,
        title: '',
        og: {},
        twitter: {},
      },
    };
  }

  componentDidMount = () => {
    document.body.scrollTo(0, 0);

    this.props.detectBrowser();
    this.props.detectColorScheme();

    const currentSlug = this.props.router.route.replace('/project/', '');
    const data = this.props.projects.find(
      ({ slug }: { slug: any }) => slug === currentSlug
    );

    if (data === undefined) {
      this.props.history.replace('/not-found');
    }

    this.setState((state: any, props: any) => ({
      ...state,
      ...data,
    }));
  };

  componentDidUpdate = (prevProps: any, prevState: any) => {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
    this.props.detectColorScheme();
  };

  setHardware = (event: any) => {
    event.preventDefault();

    this.setState({
      device: event.target.closest('button').value,
    });
  };

  render() {
    let featured_image: any = {};
    for (const image in this.state.featured_image[this.props.colorScheme]) {
      featured_image[image] = `url(${
        this.state.featured_image[this.props.colorScheme][image].src
      })`;
    }

    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <article className={style.wrapper} style={featured_image}>
          <CaseStudyHeader
            className={style.container}
            {...this.state}
            setHardware={this.setHardware}
          ></CaseStudyHeader>
          {/* <main>
            <TOC />
            {this.state.content ? this.state.content : null}
          </main> */}
          <footer className={style.container}>
            <Link href={'/projects'}>
              <a className={style.showAll}>
                <i className='fas fa-arrow-left'></i>Back to Projects
              </a>
            </Link>
          </footer>
        </article>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CaseStudy)
);
