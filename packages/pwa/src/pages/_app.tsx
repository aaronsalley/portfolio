import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../../data/data/store";
import SiteFooter from "../components/organisms/SiteFooter";
import SiteHeader from "../components/organisms/SiteHeader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </Provider>
  );
}

export default MyApp;
