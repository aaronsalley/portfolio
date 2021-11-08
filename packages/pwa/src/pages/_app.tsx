import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../../data/viewModel/store";
import SiteFooter from "../components/organisms/SiteFooter";
import SiteHeader from "../components/organisms/SiteHeader";

import "../../public/styles/global.scss";

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  if (typeof window !== "undefined") {
    const vh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("load resize", vh);
    window.addEventListener("resize", vh);
  }

  return (
    <Provider store={store}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
        <script id="gtm">
          {`(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`}
        </script>
        <script id="gh-pages">
          {`(function (l) {
        if (l.search[1] === '/') {
          var decoded = l.search
            .slice(1)
            .split('&')
            .map(function (s) {
              return s.replace(/~and~/g, '&');
            })
            .join('?');
          window.history.replaceState(
            null,
            null,
            l.pathname.slice(0, -1) + decoded + l.hash
          );
        }
      })(window.location);`}
        </script>
      </Head>
      <SiteHeader />
      <Component {...pageProps} className={"main"} />
      <SiteFooter />
    </Provider>
  );
}

export default MyApp;
