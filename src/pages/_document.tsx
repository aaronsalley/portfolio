import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <link
            rel='icon'
            href='/static/media/Aaron-Salley-Disruptv-NYC-brand--favicon.svg'
          />
          <meta
            name='theme-color'
            content='#f8f9fa'
            media='(prefers-color-scheme: light)'
          />
          <meta
            name='theme-color'
            content='#000c1a'
            media='(prefers-color-scheme: dark)'
          />
          <link
            rel='apple-touch-icon'
            href='/static/media/Aaron-Salley-Disruptv-NYC-icon--onDark192.png'
          />
          <link rel='manifest' href='/manifest.json' />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
            {/* <!-- End Google Tag Manager (noscript) --> */}
            You need to enable JavaScript to run this app.
          </noscript>
          <Main />
          <NextScript />
          <script
            src='https://kit.fontawesome.com/07e616e69d.js'
            crossOrigin='anonymous'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
