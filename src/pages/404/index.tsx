import React from 'react';
import HeaderMeta from '../../components/atoms/HeaderMeta';

class error404 extends React.Component<any, any> {
  render(): any {
    return (
      <React.Fragment>
        <HeaderMeta
          meta={{
            title: 'Page Not Found',
            og: {},
            twitter: {},
          }}
        />
        <main
          style={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2
            style={{
              display: 'inline-block',
              borderRight: '1px solid rgba(0, 0, 0,.3)',
              margin: 0,
              marginRight: '20px',
              padding: '10px 23px 10px 0',
              fontWeight: 'bold',
              verticalAlign: 'top',
              color: 'var(--text)',
            }}
          >
            404
          </h2>
          <h3
            style={{
              fontSize: '14px',
              fontWeight: 'normal',
              lineHeight: 'inherit',
              margin: 0,
              padding: 0,
              color: 'var(--text)',
            }}
          >
            This page could not be found.
          </h3>
        </main>
      </React.Fragment>
    );
  }
}

export default error404;
