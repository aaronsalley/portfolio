import { Metadata } from "next";
import Script from "next/script";
import { dm_sans, mulish, petrona } from "../services/GoogleFonts";
import "../assets/styles/globals.scss";

import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import { strings } from "../data/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaronsalley.com"),
  title: {
    template: "%s | Aaron Salley, MBA",
    default: "Aaron Salley | " + strings.tagline,
  },
  description: strings.description,
  openGraph: {
    title: "Aaron Salley | " + strings.tagline,
    description: strings.description,
    images: [{ url: "./og-image.jpg", width: "1200", height: "630" }],
  },
};

const Scripts = () => {
  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <Script id="GTM">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`}</Script>
      {/* <!-- End Google Tag Manager --> */}
      <Script
        src="https://kit.fontawesome.com/07e616e69d.js"
        crossOrigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Scripts />
      </head>
      <body
        className={`${dm_sans.variable} ${mulish.variable} ${petrona.variable}`}
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
