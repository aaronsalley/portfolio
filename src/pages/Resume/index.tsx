import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import HeaderMeta from '../../components/atoms/HeaderMeta';

const mapStateToProps = (state: any, ownProps: any) => {
  const { projects, settings } = state;

  return { jobs: projects, settings };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {};
};

class Resume extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      meta: {
        id: 0,
        title: 'Resume',
        og: {},
        twitter: {},
      },
    };
  }

  render = () => {
    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <iframe
          src='https://drive.google.com/file/d/1h-oRYTDzkO2lFEB0Nw3d2u132ttnBQAy/preview'
          title='Google Docs Resume'
          style={{
            flexGrow: 1,
          }}
          className='container'
        ></iframe>
      </React.Fragment>
    );
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
