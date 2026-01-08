import Script from 'next/script';

interface GoogleTagManagerProps {
  gtmId?: string;
  dataLayer?: unknown[];
  dataLayerName?: string;
  auth?: string;
  preview?: string;
  cookies?: string;
}

export const GoogleTagManagerScript = ({
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
      <Script id="gtm-dataLayer">{`${dataLayerName} = window.dataLayer || [];`}</Script>
      <Script id="GoogleTagManager">
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

export const GTM_no_script = ({
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
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};
