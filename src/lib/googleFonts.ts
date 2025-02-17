import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Oswald,
  Playfair_Display,
} from "next/font/google";

export const display = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const print = IBM_Plex_Sans({
  weight: ["400", "300"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const mono = IBM_Plex_Mono({
  weight: ["400", "300"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
