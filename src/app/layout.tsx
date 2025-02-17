import "./global.css";

import { Metadata } from "next";
import Script from "next/script";
import HeaderComponent from "../components/Header/Header";
import FooterComponent from "../components/Footer/Footer";
import { print, display, serif, mono } from "../lib/googleFonts";

const Scripts: JSX.Element = (
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
  </>
);

export const metadata: Metadata = {
  title: {
    template: "%s x Aaron Salley",
    default: "Aaron Salley | Intention. Integration. Illumination.",
  },
  description:
    "Boutique studio crafting client-tailored digital solutions via high-end creative, execution, and strategy services.",
  keywords: [
    "Go-to-market Strategy",
    "End-to-end Product Management",
    "UI/UX Design & Web Development Services",
  ],
  publisher: "Aaron Salley LLC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{Scripts}</head>
      <body
        className={`${display.variable} ${mono.variable} ${print.variable} ${serif.variable}`}
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
