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
          src='https://drive.google.com/file/d/14fKEo3qyi6gxaho4X5wq2xKLv-7A0JGZ/preview'
          title='Aaron Salley Resume - Product Management | Engineering | Creative Professional'
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
