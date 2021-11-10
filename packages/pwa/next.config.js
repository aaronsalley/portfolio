const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withMDX({
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: [
  //       {
  //         loader: "@svgr/webpack",
  //         options: {
  //           svgoConfig: {
  //             plugins: {
  //               removeViewBox: false,
  //             },
  //           },
  //         },
  //       },
  //       "url-loader",
  //     ],
  //   });

  //   return config;
  // },
});
