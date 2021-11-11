const withPWA = require("next-pwa");
const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

module.exports = withPWA(
  withMDX({
    reactStrictMode: true,
    pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
    pwa: {
      dest: "public",
    },
  })
);
