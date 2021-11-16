import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "../../../../data/viewModel/store";

const HeaderMeta = ({
  ...children
}: React.ComponentProps<any>): React.ReactElement => {
  const { siteTitle, description, og, twitter } = useSelector(
    (state: RootState) => state
  );

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {/* <!-- OpenGraph SEO --> */}
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={og.title} />
      <meta property="og:url" content={og.url} />
      <meta property="og:description" content={og.description} />
      <meta property="og:image" content={og.image} />
      {/* <!-- Twitter SEO --> */}
      <meta property="twitter:type" content={twitter.type} />
      <meta property="twitter:title" content={twitter.title} />
      <meta property="twitter:url" content={twitter.url} />
      <meta property="twitter:description" content={twitter.description} />
      <meta property="twitter:image" content={twitter.image} />
    </Head>
  );
};

export default HeaderMeta;
