(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,n){"use strict";var r=n(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return r.isMemo(e)?a:c[e.$$typeof]||o}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=a;var u=Object.defineProperty,l=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var o=d(n);o&&o!==h&&e(t,o,r)}var a=l(n);f&&(a=a.concat(f(n)));for(var c=s(t),m=s(n),y=0;y<a.length;++y){var v=a[y];if(!i[v]&&(!r||!r[v])&&(!m||!m[v])&&(!c||!c[v])){var b=p(n,v);try{u(t,v,b)}catch(g){}}}}return t}},6103:function(e,t){"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,a=n?Symbol.for("react.strict_mode"):60108,c=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,l=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,p=n?Symbol.for("react.forward_ref"):60112,d=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,y=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,b=n?Symbol.for("react.fundamental"):60117,g=n?Symbol.for("react.responder"):60118,w=n?Symbol.for("react.scope"):60119;function x(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case f:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case y:case m:case s:return e;default:return t}}case o:return t}}}function _(e){return x(e)===f}t.AsyncMode=l,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=p,t.Fragment=i,t.Lazy=y,t.Memo=m,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isAsyncMode=function(e){return _(e)||x(e)===l},t.isConcurrentMode=_,t.isContextConsumer=function(e){return x(e)===u},t.isContextProvider=function(e){return x(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return x(e)===p},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===y},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===o},t.isProfiler=function(e){return x(e)===c},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===c||e===a||e===d||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===p||e.$$typeof===b||e.$$typeof===g||e.$$typeof===w||e.$$typeof===v)},t.typeOf=x},1296:function(e,t,n){"use strict";e.exports=n(6103)},5140:function(e,t,n){"use strict";n.d(t,{vc:function(){return u},sH:function(){return l},fx:function(){return f}});var r=n(266),o=n(809),i=n.n(o),a=n(1163);function c(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){return{type:"SET_COLOR_SCHEME",payload:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}},l=function(){var e=(0,r.Z)(i().mark((function e(t,r){var o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("disruptv"!=window.location.hostname){e.next=6;break}return e.next=3,n.e(646).then(n.bind(n,8646));case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,Promise.resolve().then(n.bind(n,3352));case 8:e.t0=e.sent;case 9:o=e.t0,t({type:"LOAD_STATE",payload:o.initialState});case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(e){var t,n=(0,a.useRouter)().pathname,r=c(e.pages);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(n===o.href)return o;if("/"===n&&"Home"===o.title)return o}}catch(i){r.e(i)}finally{r.f()}return null}},9382:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});var r={MacbookPro:"MacbookPro",iMac:"iMac",iPhone:"iPhone",iPhones:"iPhones",iPad:{portrait:"iPad.portrait",landscape:"iPad.landscape"}}},3352:function(e,t,n){"use strict";n.r(t),n.d(t,{initialState:function(){return f}});var r=n(7294),o=n(5741),i=n(6361),a=n(2275),c=n(9278),s=n(5192),u=n.n(s),l=n(5893),f={siteTitle:"Aaron Salley | Digital Product Executive \u2022 EDI Advocate",description:"I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development &amp; product management, and executive leadership capacities.",branding:"Aaron-Salley-Disruptv-NYC-logo",pages:[{title:"Home",content:(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)("h1",{children:[(0,l.jsx)("small",{children:"Hey there,"})," I work with startups and top companies on intentional, radical, innovative digital solutions."]}),(0,l.jsxs)("section",{children:[(0,l.jsxs)("p",{children:["I'm Aaron. My philosophy draws connections between diverse experiences. Currently I lead the mobile product team at"," ",(0,l.jsx)("a",{href:"https://bhphotovideo.com",target:"_blank",rel:"noreferrer nofollow external",children:"B&H Photo"}),"."]}),(0,l.jsx)("p",{children:"I draw from human-centered yet pragmatic technical skills to bring conscientiousness, creativity, and strategic thinking to all that I do."}),(0,l.jsx)("p",{children:"Over the last decade, I've worked with startups and established companies alike \u2014 taking ideas from mind to market."})]})]})},{href:"/projects",title:"Projects"},{href:"/about",title:"About",content:(0,l.jsxs)(r.Fragment,{children:[(0,l.jsxs)("h1",{children:[(0,l.jsx)("small",{children:"Hey there,"})," I work with startups and top companies on intentional, radical, innovative digital solutions."]}),(0,l.jsxs)("section",{children:[(0,l.jsx)("p",{children:"I provide services to help start, grow, and sustain digital products from strategy to execution and management. Whether you're ideating something new or continuing a digital transformation, we can bring your ideas to life."}),(0,l.jsx)("p",{children:"Services are available along the entire product lifecycle including devOps \u2014 ranging from market research, interface & interaction design, and prototyping through full-stack development and cloud deployments."}),(0,l.jsx)("p",{children:"I have helped advance product vision, conceptualization, and management, go-to-market efforts, and development/delivery cycles for early-stage startups and enterprise firms. Let's chat."})]})]})},{title:"R\xe9sum\xe9"}],projects:[o.Z,a.Z,i.Z,c.Z],featuredClients:["bhphoto","mtf","bnymellon","rm+compass","intry"],menus:{social:[{href:"https://www.linkedin.com/in/aaronsalley",title:"LinkedIn"},{href:"https://github.com/aaronsalley",title:"Github"},{href:"https://www.instagram.com/aaronsalleyhim/",title:"Instagram"},{href:"https://twitter.com/aaronsalley",title:"Twitter"},{href:"https://angel.co/u/aaronsalley",title:"AngelList"}]},og:{type:"webhomepage",title:"Aaron Salley \u2014 Digital Product Executive & EDI Advocate | Portfolio",url:"https://aaronsalley.com",description:"I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development &amp; product management, and leadership capacities. Contact me today to build something disruptive.",image:u()},twitter:{type:"summary",title:"Aaron Salley \u2014 Digital Product Executive & EDI Advocate | Portfolio",url:"https://aaronsalley.com",description:"I work with people and firms on thoughtful, innovative projects in UI/UX design, technical development &amp; product management, and leadership capacities. Contact me today to build something disruptive.",image:u()}}},5741:function(e,t,n){"use strict";var r=n(9382),o=n(5055),i=n.n(o),a=n(3999),c=n.n(a),s=n(4532),u=n.n(s),l=n(931),f=n.n(l),p=n(3609),d=n.n(p),h=n(4322),m=n.n(h),y=n(6315),v=n.n(y),b=n(218),g=n.n(b),w=n(2138),x=n.n(w),_=n(9044),S=n.n(_),P=n(5759),j=n.n(P),O=n(128),C=n.n(O),E={slug:"bhphotovideo",title:"Omnichannel eCommerce",client:"B&H Photo Video Pro Audio",summary:"Leader of a diverse team managing the nation's largest independent consumer electronics ecommerce channels across platforms and OSes.",content:"",date:"October 2016 - November 2021",roles:["Strategy","Ideation & Prototyping","Roadmapping","Interaction & Interface Design + Execution","Management","Coaching"],platforms:{android:!0,mac:!0,web:!0},tools:["Sketch","Adobe Photoshop & Illustrator","InVision","FullStory","Proto.io","React & Swift"],images:{light:{MacbookPro:i(),iMac:c(),iPhone:u(),iPhones:f(),iPad:{landscape:d(),portrait:m()}},dark:{MacbookPro:v(),iMac:g(),iPhone:x(),iPhones:S(),iPad:{landscape:j(),portrait:C()}}},device:r.A.iPhone,meta:{title:"Omnichannel eCommerce",og:{},twitter:{}}};t.Z=E},6361:function(e,t,n){"use strict";var r=n(9382),o=n(5694),i=n.n(o),a=n(9250),c=n.n(a),s=n(1029),u=n.n(s),l=n(5815),f=n.n(l),p=n(8360),d=n.n(p),h=n(1315),m=n.n(h),y=n(8781),v=n.n(y),b=n(4605),g=n.n(b),w={slug:"davincian",title:"Telemedicine PaaS for the 21st Century",client:"DaVincian Healthcare",summary:"Global Product Lead for AI-integrated solutions that improves clinical & financial outcomes and patient engagement by connecting sioled healthcare data.",content:null,date:"2015 \u2013 2016",roles:["Machine Learning & Artificial Intelligence","Strategy","Ideation & Prototyping","Roadmapping","Interaction & Interface Design + Execution","Creative Direction","Marketing Support"],platforms:{android:!0,mac:!0,web:!1},tools:["Sketch","Adobe Photoshop, Illustrator & InDesign","Omnigraffle","Marvel App","Proto.io"],images:{light:{iPhone:i(),iPhones:c(),iPad:{landscape:u(),portrait:f()}},dark:{iPhone:d(),iPhones:m(),iPad:{landscape:v(),portrait:g()}}},device:r.A.iPhones,meta:{title:"Telemedicine Platform",og:{},twitter:{}}};t.Z=w},2275:function(e,t,n){"use strict";var r=n(9382),o=n(8814),i=n.n(o),a=n(6342),c=n.n(a),s=n(5364),u=n.n(s),l=n(8932),f=n.n(l),p=n(1468),d=n.n(p),h=n(7321),m=n.n(h),y=n(197),v=n.n(y),b=n(5380),g=n.n(b),w={slug:"intry",title:"AI-Powered SaaS Hybrid Resume\u2122 Generator",client:"Intry",summary:"Co-founder focused on product vision, innovation, conceptualization, delivery and strategy of an innovative SaaS startup in the HR tech space.",content:null,date:"2016 \u2013 2018",roles:["Machine Learning & Artificial Intelligence","Product Thinking","Roadmapping","Interaction & Interface Design","Business Architecture & Integration","DevOps & Frameworks","Management","Coaching"],platforms:{android:!1,mac:!1,web:!0},tools:["Sketch","Adobe Photoshop & Illustrator","InVision","FullStory","Proto.io","AngularJS"],images:{light:{MacbookPro:i(),iMac:c(),iPad:{landscape:u(),portrait:f()}},dark:{MacbookPro:d(),iMac:m(),iPad:{landscape:v(),portrait:g()}}},device:r.A.iPad.portrait,meta:{title:"AI-Powered Hybrid Resume\u2122 Generator",og:{},twitter:{}}};t.Z=w},9278:function(e,t,n){"use strict";var r=n(9382),o=n(5877),i=n.n(o),a=n(6191),c=n.n(a),s=n(8225),u=n.n(s),l=n(2280),f=n.n(l),p={slug:"lumifi",title:"IoT Lighting Control Software",client:"LumiFi",summary:"Design Lead of tools to manage, control, and personalize  wireless IoT lighting hardware from multiple manufacturers right from the palm of your hand.",content:null,date:"Jun - Nov 2015",roles:["Ideation & Prototyping","Interaction & Interface Design + Execution"],platforms:{android:!1,mac:!0,web:!1},tools:["Adobe Photoshop, Illustrator & InDesign","Marvel App"],images:{light:{iPhone:i(),iPhones:c()},dark:{iPhone:u(),iPhones:f()}},device:r.A.iPhone,meta:{title:"IoT Lighting Control",og:{},twitter:{}}};t.Z=p},1298:function(e,t,n){"use strict";n.d(t,{CG:function(){return _},oR:function(){return x}});var r=n(2809),o=n(5857),i=n(6372);function a(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var c=a();c.withExtraArgument=a;var s,u=c,l=n(8500),f=n(3352);!function(e){e.light="light",e.dark="dark"}(s||(s={}));var p=n(7294);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m,y=h({browser:"",colorScheme:s.light},f.initialState),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_STATE":return h(h({},e),t.payload);case"SET_COLOR_SCHEME":return h(h({},e),{},{colorScheme:t.payload});case"SET_BROWSER":return h(h({},e),{},{browser:t.payload});default:return e}},b=(0,l.Uo)((0,o.md)(u)),g=function(e){return(0,o.MT)(v,e,b)},w=function(e){var t,n=null!==(t=m)&&void 0!==t?t:g(e);return e&&m&&(n=g(h(h({},m.getState()),e)),m=void 0),m||(m=n),n},x=function(e){return(0,p.useMemo)((function(){return w(e)}),[e])},_=i.v9},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(1063),c=n(4651),s=n(7426);var u={};function l(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),n=r(t,2),i=n[0],c=n[1];return{href:i,as:e.as?a.resolveHref(o,e.as):c||i}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,m=e.replace,y=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),x=r(w,2),_=x[0],S=x[1],P=i.default.useCallback((function(e){_(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,_]);i.default.useEffect((function(){var e=S&&n&&a.isLocalURL(p),t="undefined"!==typeof b?b:o&&o.locale,r=u[p+"%"+d+(t?"%"+t:"")];e&&!r&&l(o,p,d,{locale:t})}),[d,p,S,b,n,o]);var j={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:c}))}(e,o,p,d,m,y,v,b)},onMouseEnter:function(e){a.isLocalURL(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var O="undefined"!==typeof b?b:o&&o.locale,C=o&&o.isLocaleDomain&&a.getDomainLocale(d,O,o&&o.locales,o&&o.domainLocales);j.href=C||a.addBasePath(a.addLocale(d,O,o&&o.defaultLocale))}return i.default.cloneElement(t,j)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=o.useRef(),u=o.useState(!1),l=r(u,2),f=l[0],p=l[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=n(7294),i=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},9489:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return A}});var r=n(2809),o=n(9008),i=n(1163),a=n(4298),c=n(7294),s=n(6372),u=n(5140),l=function(e){e&&"web-vital"===e.label&&(console.log(e),e.name)},f=n(1298),p=n(159),d=n(5893),h=function(e){(0,p.Z)({},e);var t=(0,s.v9)((function(e){return e})),n=t.siteTitle,r=t.description,i=t.og,a=t.twitter;return(0,d.jsxs)(o.default,{children:[(0,d.jsx)("title",{children:n}),(0,d.jsx)("meta",{name:"description",content:r}),(0,d.jsx)("meta",{property:"og:type",content:i.type}),(0,d.jsx)("meta",{property:"og:title",content:i.title}),(0,d.jsx)("meta",{property:"og:url",content:i.url}),(0,d.jsx)("meta",{property:"og:description",content:i.description}),(0,d.jsx)("meta",{property:"og:image",content:i.image}),(0,d.jsx)("meta",{property:"twitter:type",content:a.type}),(0,d.jsx)("meta",{property:"twitter:title",content:a.title}),(0,d.jsx)("meta",{property:"twitter:url",content:a.url}),(0,d.jsx)("meta",{property:"twitter:description",content:a.description}),(0,d.jsx)("meta",{property:"twitter:image",content:a.image})]})},m=n(1851),y=n.n(m),v=function(){var e=(0,f.CG)((function(e){return e.menus.social})),t=(new Date).getFullYear(),n=null;return e&&(n=e.map((function(e,t){return(0,d.jsx)("li",{children:(0,d.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:(0,d.jsx)("i",{className:"fab fa-"+e.title.toLowerCase(),"aria-hidden":!0})})},t)}))),(0,d.jsxs)("footer",{className:y().container,children:[(0,d.jsx)("menu",{children:(0,d.jsx)("ul",{children:n})}),(0,d.jsx)("span",{}),(0,d.jsxs)("p",{className:y().copyright,children:["\xa9 Copyright ",t,". All rights reserved."]})]})},b=n(266),g=n(809),w=n.n(g),x=n(1664),_=n(6101),S=function(e){var t=e.logo,n=e.title;return(0,d.jsx)(x.default,{href:"/",children:(0,d.jsx)("a",{children:t?(0,d.jsx)("img",{src:t,width:78,height:56,alt:n,loading:"eager"}):null})})},P=n(2206),j=n.n(P),O=function(){var e=(0,f.CG)((function(e){return e})),t=e.pages,r=e.siteTitle,o=e.branding,i=e.colorScheme,a=(0,c.useState)(),s=a[0],u=a[1];(0,c.useEffect)((function(){(0,b.Z)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(5044)("./".concat(o,"--on").concat((0,_.f)(i),".svg"));case 2:t=e.sent,u(t.default);case 4:case"end":return e.stop()}}),e)})))()}),[i,o]);var l=null;return t&&(l=t.map((function(e,t){if(e.href)return(0,d.jsx)("li",{children:(0,d.jsx)(x.default,{href:e.href,children:(0,d.jsx)("a",{children:e.title})})},t)}))),(0,d.jsxs)("header",{className:j().container,children:[(0,d.jsx)("span",{children:(0,d.jsx)(S,{logo:s,title:r})}),(0,d.jsx)("nav",{children:(0,d.jsx)("ul",{children:l})})]})};n(2868);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}l();var A=function(e){var t=e.Component,n=e.pageProps,r=(0,f.oR)(n.initialReduxState),l=(0,i.useRouter)();return(0,c.useEffect)((function(){r.dispatch(u.sH);var e=function(){document.body.scrollTo(0,0)};l.events.on("routeChangeComplete",e);var t=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};window.addEventListener("load",t),window.addEventListener("resize",t);var n=window.matchMedia("(prefers-color-scheme: dark)"),o=function(){r.dispatch((0,u.vc)())};return r.dispatch((0,u.vc)()),n.addEventListener("change",o),function(){l.events.off("routeChangeComplete",e),window.removeEventListener("load",t),window.removeEventListener("resize",t),n.removeEventListener("change",o)}}),[l.events,r]),(0,d.jsxs)(s.zt,{store:r,children:[(0,d.jsx)(h,{}),(0,d.jsx)(o.default,{children:(0,d.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"})}),(0,d.jsx)(O,{}),(0,d.jsx)(t,E(E({},n),{},{className:"main"})),(0,d.jsx)(v,{}),(0,d.jsx)(a.default,{id:"gtm",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"(function (w, d, s, l, i) {\n          w[l] = w[l] || [];\n          w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n          var f = d.getElementsByTagName(s)[0],\n            j = d.createElement(s),\n            dl = l != 'dataLayer' ? '&l=' + l : '';\n          j.async = true;\n          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n          f.parentNode.insertBefore(j, f);\n        })(window, document, 'script', 'dataLayer', '".concat("GTM-N5P494","');")}}),(0,d.jsx)(a.default,{src:"https://kit.fontawesome.com/07e616e69d.js",strategy:"beforeInteractive",crossOrigin:"anonymous"}),(0,d.jsx)(a.default,{id:"gh-pages",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"(function (l) {\n        if (l.search[1] === '/') {\n          var decoded = l.search\n            .slice(1)\n            .split('&')\n            .map(function (s) {\n              return s.replace(/~and~/g, '&');\n            })\n            .join('?');\n          window.history.replaceState(\n            null,\n            null,\n            l.pathname.slice(0, -1) + decoded + l.hash\n          );\n        }\n      })(window.location);"}})]})}},6101:function(e,t,n){"use strict";n.d(t,{f:function(){return c}});var r=n(2296);var o=n(4240),i=n(5243);function a(e){return(0,r.Z)(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||(0,i.Z)()}var c=function(e){var t=a(e),n=t[0],r=t.slice(1);return n.toLocaleUpperCase()+r.join("")}},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(9489)}])},1851:function(e){e.exports={container:"SiteFooter_container__15yX3",copyright:"SiteFooter_copyright__3RC6t"}},2206:function(e){e.exports={container:"SiteHeader_container__A-MXN"}},2868:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)},4298:function(e,t,n){e.exports=n(7926)},9921:function(e,t){"use strict";var n=60103,r=60106,o=60107,i=60108,a=60114,c=60109,s=60110,u=60112,l=60113,f=60120,p=60115,d=60116,h=60121,m=60122,y=60117,v=60129,b=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;n=g("react.element"),r=g("react.portal"),o=g("react.fragment"),i=g("react.strict_mode"),a=g("react.profiler"),c=g("react.provider"),s=g("react.context"),u=g("react.forward_ref"),l=g("react.suspense"),f=g("react.suspense_list"),p=g("react.memo"),d=g("react.lazy"),h=g("react.block"),m=g("react.server.block"),y=g("react.fundamental"),v=g("react.debug_trace_mode"),b=g("react.legacy_hidden")}function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case a:case i:case l:case f:return e;default:switch(e=e&&e.$$typeof){case s:case u:case d:case p:case c:return e;default:return t}}case r:return t}}}},9864:function(e,t,n){"use strict";n(9921)},6372:function(e,t,n){"use strict";n.d(t,{zt:function(){return l},v9:function(){return m}});var r=n(7294),o=(n(5697),r.createContext(null));var i=function(e){e()},a=function(){return i};var c={notify:function(){},get:function(){return[]}};function s(e,t){var n,r=c;function o(){s.onStateChange&&s.onStateChange()}function i(){n||(n=t?t.addNestedSub(o):e.subscribe(o),r=function(){var e=a(),t=null,n=null;return{clear:function(){t=null,n=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],n=t;n;)e.push(n),n=n.next;return e},subscribe:function(e){var r=!0,o=n={callback:e,next:null,prev:n};return o.prev?o.prev.next=o:t=o,function(){r&&null!==t&&(r=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var s={addNestedSub:function(e){return i(),r.subscribe(e)},notifyNestedSubs:function(){r.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(n)},trySubscribe:i,tryUnsubscribe:function(){n&&(n(),n=void 0,r.clear(),r=c)},getListeners:function(){return r}};return s}var u="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;var l=function(e){var t=e.store,n=e.context,i=e.children,a=(0,r.useMemo)((function(){var e=s(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),c=(0,r.useMemo)((function(){return t.getState()}),[t]);u((function(){var e=a.subscription;return e.trySubscribe(),c!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[a,c]);var l=n||o;return r.createElement(l.Provider,{value:a},i)};n(8679),n(9864);function f(){return(0,r.useContext)(o)}var p=function(e,t){return e===t};function d(e){void 0===e&&(e=o);var t=e===o?f:function(){return(0,r.useContext)(e)};return function(e,n){void 0===n&&(n=p);var o=t(),i=function(e,t,n,o){var i,a=(0,r.useReducer)((function(e){return e+1}),0)[1],c=(0,r.useMemo)((function(){return s(n,o)}),[n,o]),l=(0,r.useRef)(),f=(0,r.useRef)(),p=(0,r.useRef)(),d=(0,r.useRef)(),h=n.getState();try{if(e!==f.current||h!==p.current||l.current){var m=e(h);i=void 0!==d.current&&t(m,d.current)?d.current:m}else i=d.current}catch(y){throw l.current&&(y.message+="\nThe error may be correlated with this previous error:\n"+l.current.stack+"\n\n"),y}return u((function(){f.current=e,p.current=h,d.current=i,l.current=void 0})),u((function(){function e(){try{var e=n.getState();if(e===p.current)return;var r=f.current(e);if(t(r,d.current))return;d.current=r,p.current=e}catch(y){l.current=y}a()}return c.onStateChange=e,c.trySubscribe(),e(),function(){return c.tryUnsubscribe()}}),[n,c]),i}(e,n,o.store,o.subscription);return(0,r.useDebugValue)(i),i}}var h,m=d(),y=n(3935);h=y.unstable_batchedUpdates,i=h},8500:function(e,t,n){"use strict";var r=n(5857).qC;t.Uo="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"===typeof arguments[0]?r:r.apply(null,arguments)},"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__},5857:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,{md:function(){return d},qC:function(){return p},MT:function(){return f}});var c="function"===typeof Symbol&&Symbol.observable||"@@observable",s=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+s(),REPLACE:"@@redux/REPLACE"+s(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+s()}};function l(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function f(e,t,n){var r;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(a(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(a(1));return n(f)(e,t)}if("function"!==typeof e)throw new Error(a(2));var o=e,i=t,s=[],p=s,d=!1;function h(){p===s&&(p=s.slice())}function m(){if(d)throw new Error(a(3));return i}function y(e){if("function"!==typeof e)throw new Error(a(4));if(d)throw new Error(a(5));var t=!0;return h(),p.push(e),function(){if(t){if(d)throw new Error(a(6));t=!1,h();var n=p.indexOf(e);p.splice(n,1),s=null}}}function v(e){if(!l(e))throw new Error(a(7));if("undefined"===typeof e.type)throw new Error(a(8));if(d)throw new Error(a(9));try{d=!0,i=o(i,e)}finally{d=!1}for(var t=s=p,n=0;n<t.length;n++){(0,t[n])()}return e}function b(e){if("function"!==typeof e)throw new Error(a(10));o=e,v({type:u.REPLACE})}function g(){var e,t=y;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(a(11));function n(){e.next&&e.next(m())}return n(),{unsubscribe:t(n)}}})[c]=function(){return this},e}return v({type:u.INIT}),(r={dispatch:v,subscribe:y,getState:m,replaceReducer:b})[c]=g,r}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(a(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},c=t.map((function(e){return e(o)}));return r=p.apply(void 0,c)(n.dispatch),i(i({},n),{},{dispatch:r})}}}},6315:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--dark-412f895a653fb101d80d565b6be43234.webp"},5055:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_MBP--light-32074846eeac9cb713be79c225f0152a.webp"},218:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--dark-68e00c818a0b32405fce0a0b973b84d9.webp"},3999:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iMac--light-fcaa3a31dc430bdf0bf679a70a20a12a.webp"},5759:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--dark-76e0c0351a5601e26cb2d83fb0ade6e6.webp"},3609:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_landscape--light-b943e259336b3472bcbc35e6ffac950c.webp"},128:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--dark-6ee1a58092a4d129b01381d0af2673ce.webp"},4322:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPad_portrait--light-ade690ffdef519760fcdd615620b7de8.webp"},2138:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--dark-9de89086f8f95e49419398ad0d20c779.webp"},4532:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_1--light-1705f47b36a8d2577995a7f7e1af7f6a.webp"},9044:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--dark-1b76b0eca35280b97382edfe4a902035.webp"},931:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-bhphotovideo_iPhone_2--light-db631240ca9fc120173aa07d11cf7aea.webp"},8781:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--dark-38931b7ffe382eef8534a6189f836fb3.webp"},1029:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPad_landscape--light-96686cfbab3fade38e18d10d0a73ae22.webp"},4605:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--dark-224e3ac12b3b9aa3c8a71ba449d732b1.webp"},5815:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPad_portrait--light-6b2cbae7347d03c3606a92bed4178e0c.webp"},8360:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--dark-1c4ccd3e4bea7b2a0466f6650fdeb1fa.webp"},5694:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPhone_1--light-61f1f1374910f9befafafe9fa520f7f5.webp"},1315:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--dark-32047e797a5822e26ccf06b45c747501.webp"},9250:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-davincian_iPhone_2--light-d0587dabf486f2d4eab05eeb0479349a.webp"},1468:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_MBP--dark-87d8e5fda8a318a8c0be3525e7398a72.webp"},8814:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_MBP--light-1230115ef4444d00d16c1662143c16fe.webp"},7321:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_iMac--dark-e0a5561760858dbfc7f04dae5209f9fe.webp"},6342:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_iMac--light-fc773756fbe1538179636d71c43229b7.webp"},197:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--dark-79335d7e6d6b02bea1e87759ebafe685.webp"},5364:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_iPad_landscape--light-5184687565714225288ff9b3ea05725a.webp"},5380:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--dark-58baf3348ef55d2266129b54c6352de2.webp"},8932:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-intry_iPad_portrait--light-e77f9dc1cfa4e842e33c966a51feac84.webp"},8225:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--dark-e6594b343a36cbcae3e1e3e5255de197.webp"},5877:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_1--light-a53f6150cdbe3cb24121bc7b406b88a5.webp"},2280:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--dark-279926e4a36bfbbcfbc335fbc380c28a.webp"},6191:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC-lumifi_iPhone_2--light-5ffba2b0cc3631722e385f0163a440bf.webp"},5192:function(e){e.exports="/_next/static/images/Aaron-Salley-Disruptv-NYC--og_card-6e4e117956be3c146ffc069aa3be2ff3.webp"},5044:function(e,t,n){var r={"./Aaron-Salley-Disruptv-NYC-brand--favicon.svg":[7160,160],"./Aaron-Salley-Disruptv-NYC-logo--onDark.svg":[7337,337],"./Aaron-Salley-Disruptv-NYC-logo--onLight.svg":[2720,720]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id=5044,e.exports=o},2296:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,{Z:function(){return r}})},266:function(e,t,n){"use strict";function r(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}n.d(t,{Z:function(){return o}})},2809:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},159:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},5243:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}n.d(t,{Z:function(){return r}})},4240:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}n.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);