/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const PWA = require("next-pwa");
const MDX = require("@next/mdx");

module.exports = withPlugins(
  [
    // [
    //   optimizedImages,
    //   {
    //     /* config for next-optimized-images */
    //   },
    // ],
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
  {
    reactStrictMode: true,
    // exportPathMap: {
    //   async function(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    //     return {
    //       "/": { page: "/" },
    //       "/about": { page: "/about" },
    //       "/projects": { page: "/projects" },
    //       "/project/bhphotovideo": {
    //         page: "/project",
    //         query: { slug: "bhphotovideo" },
    //       },
    //       "/project/davincian": {
    //         page: "/project",
    //         query: { slug: "davincian" },
    //       },
    //       "/project/intry": { page: "/project", query: { slug: "intry" } },
    //       "/project/lumifi": { page: "/project", query: { slug: "lumifi" } },
    //       // '/project/mtfmusicals': { page: '/project', query: { slug: 'mtfmusicals' } },
    //     };
    //   },
    // },
  }
);
