import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderMeta from '../../atoms/HeaderMeta';
import CaseStudyHeader from '../CaseStudyHeader';
import styles from './index.module.scss';

import MacBookProLight from '../../atoms/Device/media/shadowed/MBP.png';
import iMacLight from '../../atoms/Device/media/shadowed/iMac.png';
import iPhoneLight from '../../atoms/Device/media/shadowed/iPhone_1.png';
import iPhonesLight from '../../atoms/Device/media/shadowed/iPhone_2.png';
import iPadLandscapeLight from '../../atoms/Device/media/shadowed/iPad_landscape.png';
import iPadPortraitLight from '../../atoms/Device/media/shadowed/iPad_portrait.png';
import MacBookProDark from '../../atoms/Device/media/infinite/MBP.png';
import iMacDark from '../../atoms/Device/media/infinite/iMac.png';
import iPhoneDark from '../../atoms/Device/media/infinite/iPhone_1.png';
import iPhonesDark from '../../atoms/Device/media/infinite/iPhone_2.png';
import iPadLandscapeDark from '../../atoms/Device/media/infinite/iPad_landscape.png';
import iPadPortraitDark from '../../atoms/Device/media/infinite/iPad_portrait.png';
import { detectBrowser, detectColorScheme } from '../../../store/actions';

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
      client: 'Client Name',
      title: 'Project Title',
      platforms: { android: false, apple: false, web: false },
      summary: `This is a short project summary.`,
      roles: [],
      timeframe: '',
      tools: [],
      content: '',
      images: {
        light: {
          '--MacBookPro': `url(${MacBookProLight})`,
          '--iMac': `url(${iMacLight})`,
          '--iPhone': `url(${iPhoneLight})`,
          '--iPhones': `url(${iPhonesLight})`,
          '--iPadLandscape': `url(${iPadLandscapeLight})`,
          '--iPadPortrait': `url(${iPadPortraitLight})`,
        },
        dark: {
          '--MacBookPro': `url(${MacBookProDark})`,
          '--iMac': `url(${iMacDark})`,
          '--iPhone': `url(${iPhoneDark})`,
          '--iPhones': `url(${iPhonesDark})`,
          '--iPadLandscape': `url(${iPadLandscapeDark})`,
          '--iPadPortrait': `url(${iPadPortraitDark})`,
        },
      },
      device: 'iMac',
      meta: {
        id: 0,
        title: '',
      },
    };
  }

  componentDidMount = () => {
    this.props.detectBrowser();
    this.props.detectColorScheme();
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
          className={styles.wrapper}
          style={
            this.props.colorScheme === 'light'
              ? this.state.images.light
              : this.state.images.dark
          }
        >
          <CaseStudyHeader
            className={styles.container}
            {...this.state}
            setHardware={this.setHardware}
          ></CaseStudyHeader>
          <main
            className={styles.container}
            dangerouslySetInnerHTML={{ __html: this.state.content }}
          ></main>
          <footer className={styles.container}></footer>
        </article>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CaseStudy)
);
