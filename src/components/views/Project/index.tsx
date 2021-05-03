import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import browser from '../../../utils/browserDetection';
import htmlDecode from '../../../utils/htmlDecode';
import HeaderMeta from '../../atoms/HeaderMeta';
import styles from './index.module.scss';

const mapStateToProps = (state: any, ownProps: any) => {
  const { projects, settings } = state;

  return {
    projects,
    settings,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: any) => {
  return {};
};

class Project extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      meta: {
        id: 0,
        title: '',
      },
      client: '',
      title: '',
      date: '',
      excerpt: '',
      content: '',
      skills: [''],
      platforms: [''],
    };
  }

  ComposeLists = (props: any) => {
    if (props.items) {
      const items = props.items.map((item: any, i: number) => {
        return <li key={i}>{htmlDecode(item)}</li>;
      });

      return <ul>{items}</ul>;
    }
    return null;
  };

  render() {
    return (
      <React.Fragment>
        <HeaderMeta meta={this.state.meta} />
        <article className={styles.container}>
          <header
            className={styles.slate}
            style={{
              backgroundImage: `url(${this.state.image}`,
              backgroundAttachment:
                browser === 'Apple Safari' ? 'inherit' : 'fixed',
            }}
          >
            <h1 className={styles.client}>{this.state.client}</h1>
            <h2 className={styles.title}>{this.state.title}</h2>
            <p className={styles.excerpt}>{this.state.excerpt}</p>
            <aside className={styles.details}>
              <ul className={styles.skills}>
                {this.state.skills.length > 0 ? <h3>Skills</h3> : null}
                <this.ComposeLists items={this.state.skills} />
              </ul>
              <ul className={styles.platforms}>
                {this.state.platforms.length > 0 ? <h3>Platforms</h3> : null}
                <this.ComposeLists items={this.state.platforms} />
              </ul>
              <time className={styles.date} dateTime={this.state.date}>
                <h3>Date</h3>
                {this.state.date}
              </time>
            </aside>
          </header>
          <section
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: this.state.content }}
          ></section>
          <footer></footer>
        </article>
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Project)
);
