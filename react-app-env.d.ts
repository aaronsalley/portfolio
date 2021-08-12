// eslint-disable-next-line spaced-comment

// Image support
declare module '*.svg' {
  import React from 'react';
  export const ReactComponent: any;
  const svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}
declare module '*.json';
