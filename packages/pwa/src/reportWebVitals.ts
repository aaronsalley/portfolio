import { NextWebVitalsMetric } from "next/app";

// eslint-disable-next-line
const reportWebVitals = (metric?: NextWebVitalsMetric) => {
  if (metric && metric.label === "web-vital") {
    console.log(metric);

    switch (metric.name) {
      case "FCP":
        // handle First Contentful Paint results
        break;
      case "LCP":
        // handle Largest Contentful Paint results
        break;
      case "CLS":
        // handle Cumulative Layout Shift results
        break;
      case "FID":
        // handle First Input Delay results
        break;
      case "TTFB":
        // handle Time to First Byte results
        break;
      default:
        break;
    }
  }
};

export default reportWebVitals;
