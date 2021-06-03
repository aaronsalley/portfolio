import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { detectBrowser, detectColorScheme } from '../../../store/actions';
import HeaderMeta from '../../atoms/HeaderMeta';
import CaseStudyHeader from '../CaseStudyHeader';
import style from './index.module.scss';

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
    this.props.detectBrowser();
    this.props.detectColorScheme();

    const data = this.props.projects.find(
      ({ slug }: { slug: any }) => slug === this.props.match.params.slug
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
    this.props.detectColorScheme();
  };

  setHardware = (event: any) => {
    event.preventDefault();
    // TODO: make event target alway be a button
    this.setState({
      device: event.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <article
          className={style.wrapper}
          style={
            this.props.colorScheme === 'light'
              ? this.state.featured_image.light
              : this.state.featured_image.dark
          }
        >
          <CaseStudyHeader
            className={style.container}
            {...this.state}
            setHardware={this.setHardware}
          ></CaseStudyHeader>
          {/* <main dangerouslySetInnerHTML={{ __html: this.state.content }}></main> */}
          {/* <footer className={style.container}></footer> */}
        </article>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CaseStudy)
);
