import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../../data/viewModel/store";
import { detectColorScheme } from "../../data/controllers/actions";

import SiteFooter from "../components/organisms/SiteFooter";
import SiteHeader from "../components/organisms/SiteHeader";
import "../../public/styles/global.scss";
import HeaderMeta from "../components/templates/HeaderMeta";

function Portfolio({ Component, pageProps }: AppProps): React.ReactElement {
  if (typeof window !== "undefined") {
    useEffect(() => {
      //TODO: Make pages scroll to top on change
      document.body.scrollTo(0, 0);

      /**
       * Initalize and watch for viewport height changes.
       */
      const vh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
      };
      window.addEventListener("load", vh);
      window.addEventListener("resize", vh);

      /**
       * Initalize and watch for color scheme changes.
       */
      const portfolio = window.matchMedia("(prefers-color-scheme: dark)");
      const theme = () => {
        store.dispatch(detectColorScheme());
      };
      store.dispatch(detectColorScheme());
      portfolio.addEventListener("change", theme);

      return () => {
        window.removeEventListener("load", vh);
        window.removeEventListener("resize", vh);

        portfolio.removeEventListener("change", theme);
      };
    }, []);
  }

  return (
    <Provider store={store}>
      <HeaderMeta />
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        ></meta>
      </Head>
      <SiteHeader />
      <Component {...pageProps} className={"main"} />
      <SiteFooter />
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      />
      <Script
        src="https://kit.fontawesome.com/07e616e69d.js"
        strategy="beforeInteractive"
        crossOrigin="anonymous"
      />
      <Script
        id="gh-pages"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (l) {
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
      })(window.location);`,
        }}
      />
    </Provider>
  );
}

export default Portfolio;
