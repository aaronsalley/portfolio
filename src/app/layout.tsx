import type { Metadata } from 'next';
import { Oswald, IBM_Plex_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import Script from 'next/script';

import './globals.css';
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';

const oswald = Oswald({
  subsets: ['latin'],
});
const IBMPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
});
const EditorsNoteDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/editorsnotedisplay-medium-webfont.woff2',
      weight: '500',
    },
    {
      path: '../assets/fonts/editorsnotedisplay-semibold-webfont.woff2',
      weight: '600',
    },
  ],
  variable: '--font-editors-note-display',
});

const style = [
  oswald.className,
  EditorsNoteDisplay.className,
  IBMPlexSans.className,
].join(' ');

export const metadata: Metadata = {
  title: 'Aaron Salley | Digital Creative Studio',
  description:
    'Boutique studio crafting client-tailored digital solutions via high-end creative, execution, and strategy services. Intention. Integration. Illumination.',
  keywords: [
    'Go-to-market Strategy',
    'End-to-end Product Management',
    'UI/UX Design & Development services',
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={style}>
      <GoogleTagManagerScript />
      <body>
        <GTM_no_script />
        <TopBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

interface GoogleTagManagerProps {
  gtmId?: string;
  dataLayer?: unknown[];
  dataLayerName?: string;
  auth?: string;
  preview?: string;
  cookies?: string;
}
const GoogleTagManagerScript = ({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  dataLayerName = 'dataLayer',
  auth,
  preview,
  cookies = 'x',
}: GoogleTagManagerProps) => {
  let src = `"https://www.googletagmanager.com/gtm.js?id=" + i + dl`;

  const args = [];
  if (auth) args.push(`gtm_auth=${auth}`);
  if (preview) args.push(`gtm_preview=${preview}`);
  if (cookies) args.push(`gtm_cookies_win=x`);

  if (args.length > 0) src = `${src}+'&${args.join('&')}'`;

  return (
    <>
      <Script id='gtm-dataLayer'>{`${dataLayerName} = window.dataLayer || [];`}</Script>
      <Script id='GoogleTagManager'>
        {`
        (function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = ${src};
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "${dataLayerName}", "${gtmId}");      
      `}
      </Script>
    </>
  );
};
const GTM_no_script = ({
  gtmId = process.env.NEXT_PUBLIC_GTM_ID,
  auth,
  preview,
  cookies = 'x',
}: GoogleTagManagerProps) => {
  let src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;

  const args = [];
  if (auth) args.push(`gtm_auth=${auth}`);
  if (preview) args.push(`gtm_preview=${preview}`);
  if (cookies) args.push(`gtm_cookies_win=x`);

  if (args.length > 0) src = `${src}+'&${args.join('&')}'`;

  return (
    <noscript>
      <iframe
        src={src}
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};
