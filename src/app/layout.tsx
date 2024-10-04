import { Metadata } from "next";
import Script from "next/script";
import { DM_Sans, Mulish, Petrona } from "next/font/google";
import "../assets/globals.scss";

import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

export const metadata: Metadata = {
  title: {
    template: "%s | Aaron Salley, Aaron Salley, MBA, POPM, JEDI Master",
    default: "Aaron Salley, MBA, POPM, JEDI Master",
  },
  description:
    "NYU Stern MBA specializing in Innovation and Management of Technology and certified SAFe® Product Owner / Product Manager. More than a decade in customer and enterprise digital products across healthcare, e-commerce, nonprofit, and human resource management industries. A strong, cross-functional leader of diverse teams recognized for creating delightful solutions for real-world human problems.",
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
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
};

const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-DM_Sans",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-Mulish",
  display: "swap",
});

const petrona = Petrona({
  subsets: ["latin"],
  variable: "--font-Petrona",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dm_sans.variable} ${mulish.variable} ${petrona.variable}`}
    >
      <head>
        <Scripts />
      </head>
      <body>
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
