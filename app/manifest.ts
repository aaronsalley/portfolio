import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aaron Salley",
    short_name: "Portfolio",
    description: "Portfolio for Aaron Salley",
    start_url: "/",
    id: "?source=pwa",
    display: "standalone",
    icons: [
      {
        src: "/memoji_computer.svg",
        sizes: "any",
      },
    ],
    theme_color: "#f8f9fa",
    background_color: "#f8f9fa",
    shortcuts: [
      {
        name: "Contact me",
        short_name: "Email",
        description: "Get in touch to work together",
        url: "/contact",
        icons: [
          {
            src: "/memoji_computer.png",
            sizes: "420x420",
          },
        ],
      },
    ],
  };
}
