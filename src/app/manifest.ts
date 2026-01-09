import type { MetadataRoute } from "next";
import icon from "@/app/icon.svg";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aaron Salley",
    short_name: "Aaron Salley",
    description: "Product Creator and Builder based in New York City.",
    start_url: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
    icons: [
      {
        src: icon,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
