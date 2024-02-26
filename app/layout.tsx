import Script from 'next/script';
import SiteFooter from './_components/organisms/SiteFooter';
import SiteHeader from './_components/organisms/SiteHeader';
import { memoji, site } from './_lib/testdata';
import { Mulish } from 'next/font/google';
import './globals.scss';
import { Metadata } from 'next';

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
});

const Scripts = () => {
  return (
    <>
      {/* <!-- Google Tag Manager --> */}
      <Script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', '${process.env.GTM_ID}');`}</Script>
      {/* <!-- End Google Tag Manager --> */}
      <Script
        src='https://kit.fontawesome.com/07e616e69d.js'
        crossOrigin='anonymous'
      />
      <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js' />
    </>
  );
};

export const metadata: Metadata = {
  title: {
    template: '%s | Aaron Salley, Aaron Salley, MBA, POPM, JEDI Master',
    default: 'Aaron Salley, MBA, POPM, JEDI Master',
  },
  description:
    'NYU Stern MBA specializing in Innovation and Management of Technology and certified SAFe® Product Owner / Product Manager. More than a decade in customer and enterprise digital products across healthcare, e-commerce, nonprofit, and human resource management industries. A strong, cross-functional leader of diverse teams recognized for creating delightful solutions for real-world human problems.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <Scripts />
      </head>
      <body className={mulish.className}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}`}
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <SiteHeader
          title={site.title}
          site_logo={memoji.waving}
          menu_items={site.nav}
        />
        {children}
        <SiteFooter
          title={site.title}
          contact={site.contact}
          social_items={site.socials}
        />
      </body>
    </html>
  );
}
