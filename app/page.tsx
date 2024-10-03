import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Mulish } from "next/font/google";
import { memoji, site } from "./lib/testdata";
import "./globals.scss";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
});

const Scripts = () => {
  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <Script id="GTM">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${process.env.GTM_ID}');`}</Script>
      {/* <!-- End Google Tag Manager --> */}
      <Script
        src="https://kit.fontawesome.com/07e616e69d.js"
        crossOrigin="anonymous"
      />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
};

export const metadata: Metadata = {
  title: {
    absolute:
      "Aaron Salley, MBA, POPM, JEDI Master | Intention. Integration. Illumination.",
  },
};

interface SocialItem {
  uri: string;
  label: string;
  cssClasses: string[];
}

export default function Page() {
  const memojiSize = 150;
  const SocialMenu = ({ items }: { items: SocialItem[] }) => {
    if (!items) return null;

    let list;
    list = items.map(({ uri, label, cssClasses: icon }, i) => {
      return (
        <li key={i}>
          <Link href={uri} target="_blank">
            <i className={icon.join(" ")}></i>
            <label>{label}</label>
          </Link>
        </li>
      );
    });

    return <nav>{list}</nav>;
  };

  return (
    <html lang="en">
      <head>
        <Scripts />
      </head>
      <body className={mulish.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <main>
          <Image
            src={memoji.waving}
            alt={`${site.title} memoji`}
            width={memojiSize}
            height={memojiSize}
          />
          <h1>{`I'll be back...`}</h1>
          <p>but in the meantime, check me out on</p>
        </main>
        <footer>
          <SocialMenu items={site.socials} />
          <p>
            © {new Date().getFullYear()} {site.title}. Designed and developed by
            me with 🖤 in {site.contact.city}.
          </p>
        </footer>
      </body>
    </html>
  );
}
