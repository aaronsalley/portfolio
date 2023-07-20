import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* FontAwesome */}
        <script
          src='https://kit.fontawesome.com/07e616e69d.js'
          crossorigin='anonymous'
        ></script>
        {/* Freshsales CRM */}
        <script src='//fw-cdn.com/6232149/3217796.js' chat='true'></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
