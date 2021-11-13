/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const PWA = require("next-pwa");
const MDX = require("@next/mdx");

const nextConfig = {
  reactStrictMode: true,
  images: {
    disableStaticImages: true,
  },
  poweredByHeader: false,
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImages: false,
        responsive: {
          adapter: require("sharp"),
        },
      },
    ],
    [
      PWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
    [
      MDX,
      {
        pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
        extension: /\.(md|mdx)$/,
        options: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    ],
  ],
  nextConfig
);
