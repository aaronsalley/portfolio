import { Device } from "./devices";
import { FeaturedImageSet } from "./featuredImages";

export interface Project {
  slug: String;
  title: String;
  client: String;
  summary: String;
  content: String | null;
  date: String;
  roles: String[];
  platforms?: {
    android: Boolean;
    mac: Boolean;
    web: Boolean;
  };
  tools: String[];
  images?: {
    light: FeaturedImageSet;
    dark: FeaturedImageSet;
  };
  device?: string | keyof typeof Device;
  meta: {
    title: String;
    og: {};
    twitter: {};
  };
}
