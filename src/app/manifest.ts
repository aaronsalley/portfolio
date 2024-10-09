import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aaron Salley, Digital Creative",
    short_name: "Aaron Salley",
    description:
      "Passionate about crafting user-centric solutions that delight and engage, deliver exceptional results, and make a positive impact on both users and businesses. Known for translating complex business needs into clear, actionable strategies — taking ideas from mind to market.",
    start_url: "/",
    id: "?source=pwa",
    display: "standalone",
    icons: [
      {
        src: "/memoji_computer.png",
        sizes: "192x192",
      },
      {
        src: "/memoji_computer.svg",
        sizes: "any",
      },
    ],
    theme_color: "black-translucent",
    background_color: "#383a3a",
    shortcuts: [
      {
        name: "Contact me",
        short_name: "Email",
        description: "Get in touch to work together",
        url: "/contact",
        icons: [
          {
            src: "/memoji_computer.png",
            sizes: "192x192",
          },
        ],
      },
    ],
  };
}
