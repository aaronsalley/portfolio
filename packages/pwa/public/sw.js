if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,t)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const s={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return s;default:return e(i)}}))).then((e=>{const i=t(...e);return r.default||(r.default=i),r}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"9c29d29d256a6e7dddf0450e64176fe4"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC--og_card.74adce84.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphoto-logo.bea6678a.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--dark.fe8355cb.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--light.c4386dde.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--dark.a778c50f.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--light.fd4c5fc5.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--dark.db14a4c3.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--light.1ef9154e.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--dark.a7269b2e.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--light.c120f638.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--dark.895f480d.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--light.87d4ad2d.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--dark.835cb9cb.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--light.153c8e63.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-bnymellon-logo.39d783bf.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--dark.fddd657f.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--light.a9e368b8.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--dark.64a3f0f9.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--light.e02970f2.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--dark.8d913b68.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--light.df49cbb5.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--dark.871e2322.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--light.01c3eae3.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry-logo.35b5ed41.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_MBP--dark.590e03c4.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_MBP--light.0f6004b7.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_iMac--dark.8d62b89d.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_iMac--light.e2567bc1.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--dark.cbf1e4dc.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--light.8ebf4e37.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--dark.d3bb6832.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--light.4fa5afa5.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-logo--onDark.68b52152.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-logo--onLight.cbc54ee2.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--dark.353d1963.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--light.ab08df78.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--dark.1844bb73.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--light.5c2002ac.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-mtf-logo.51dd26ba.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-mtfmusicals_iMac--dark.085b078b.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-mtfmusicals_iMac--light.d801a9f7.webp",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next//static/media/Aaron-Salley-Disruptv-NYC-rm+compass-logo.ef9af050.svg",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/server/middleware-manifest.json",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/16U1B_42YortzSrETSM3Q/_buildManifest.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/16U1B_42YortzSrETSM3Q/_middlewareManifest.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/16U1B_42YortzSrETSM3Q/_ssgManifest.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/146.c0e35cfd3fa00938.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/317-a1653d06f45069bc.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/569.2821a2048113746b.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/636.cfde1d1c5989fc1d.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/framework-bbce3cdc1a611f18.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/main-e57ec7e86e7982eb.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/404-ac4aac3aa900a6e9.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/_app-4e6551a31264fec5.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/about-eac141783e6bef8a.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/index-51ba836efe26c1c6.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/project/%5Bslug%5D-413dd984b1b2b21d.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/projects-4cfb7b02625c7329.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/pages/resume-8fd47b749a45a78b.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/chunks/webpack-1d5d0e9df1aabeed.js",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/css/977ec5925c889256.css",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/css/9fe3f6e1706636c2.css",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/css/d4c7c325f64b6dd8.css",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/css/dac87991a0795833.css",revision:"16U1B_42YortzSrETSM3Q"},{url:"/_next/static/css/f80c45450b084558.css",revision:"16U1B_42YortzSrETSM3Q"},{url:"/manifest.json",revision:"c469aece6663ac944c435901cd5bcc51"},{url:"/media/Aaron-Salley-Disruptv-NYC--og_card.webp",revision:"6e4e117956be3c146ffc069aa3be2ff3"},{url:"/media/Aaron-Salley-Disruptv-NYC-brand--favicon.svg",revision:"9292a959e82b85f6417cf87dc3da98ce"},{url:"/media/Aaron-Salley-Disruptv-NYC-icon--onDark192.png",revision:"ec06dc4f5e7a6bdadab34ecd1bca1502"},{url:"/media/Aaron-Salley-Disruptv-NYC-icon--onDark512.png",revision:"a0a42bd3ed0a1121ccf5666df3f2a14b"},{url:"/media/Aaron-Salley-Disruptv-NYC-icon--onLight192.png",revision:"3cc222377baf263671eaa5e78da13dab"},{url:"/media/Aaron-Salley-Disruptv-NYC-icon--onLight512.png",revision:"d9f7a9d190f72297b0323f9c730a8af0"},{url:"/media/Aaron-Salley-Disruptv-NYC-site_wireframing.jpeg",revision:"1eb203122d2d445ee978dae39c3dbf48"},{url:"/media/placeholders/infinite/Aaron-Salley-Disruptv-NYC-MBP.webp",revision:"ce23b70ba4367c53fad09e895748b61d"},{url:"/media/placeholders/infinite/Aaron-Salley-Disruptv-NYC-iMac.webp",revision:"58945bd6fce64e39eac51c5ff9d0e4b2"},{url:"/media/placeholders/infinite/Aaron-Salley-Disruptv-NYC-iPad_landscape.webp",revision:"3bb9d67f3e23507ba7ed77dcfc35b3ab"},{url:"/media/placeholders/infinite/Aaron-Salley-Disruptv-NYC-iPad_portrait.webp",revision:"9bf03162fe48b4156c74684575424471"},{url:"/media/placeholders/infinite/Aaron-Salley-Disruptv-NYC-iPhone_1.webp",revision:"79a35bf6f3899f7ddc4683f331aa10fe"},{url:"/media/placeholders/infinite/Aaron-Salley-Disruptv-NYC-iPhone_2.webp",revision:"bb1ba8b208b4e110497a1873c0a76908"},{url:"/media/placeholders/shadowed/Aaron-Salley-Disruptv-NYC-MBP.webp",revision:"0497fb8014041de16bb29510f04f810f"},{url:"/media/placeholders/shadowed/Aaron-Salley-Disruptv-NYC-iMac.webp",revision:"22beece5cca862b81f40965fd49cdf7f"},{url:"/media/placeholders/shadowed/Aaron-Salley-Disruptv-NYC-iPad_landscape.webp",revision:"94900bcf79b545d60694daa7d7543614"},{url:"/media/placeholders/shadowed/Aaron-Salley-Disruptv-NYC-iPad_portrait.webp",revision:"394106a561eda6b212a6854022bba319"},{url:"/media/placeholders/shadowed/Aaron-Salley-Disruptv-NYC-iPhone_1.webp",revision:"c5bcc1c8c1809b4b1d04248eaabda847"},{url:"/media/placeholders/shadowed/Aaron-Salley-Disruptv-NYC-iPhone_2.webp",revision:"74c1932beb668a0c5c2a06ab51f25678"},{url:"/robots.txt",revision:"491c10bf3f97e31bc99fcaefca09c36a"},{url:"/sitemap.xml",revision:"36c06fd8f72cf8beaf27f41ce561ad23"},{url:"/styles/global.scss",revision:"a16a568904aa0059495835036b85122c"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:r,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
