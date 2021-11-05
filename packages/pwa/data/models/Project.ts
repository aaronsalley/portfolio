import { Device } from "./devices";

export interface Project {
  slug: String;
  title: String;
  client: String;
  summary: String;
  content: String | null;
  date: String;
  roles: String[];
  platforms: {
    android: Boolean;
    mac: Boolean;
    web: Boolean;
  };
  tools: String[];
  featured_image: {
    light: FeaturedImageSet;
    dark: FeaturedImageSet;
  };
  device?: Device;
  meta: {
    title: String;
    og: {};
    twitter: {};
  };
}

export const flatten = (object: any) => {
  let result: any = {};

  for (const [key, value] of Object.entries(object)) {
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      const temp = flatten(value);

      for (const [_key, value] of Object.entries(temp)) {
        result[key + "." + _key] = value;
      }
    } else {
      result[key] = value;
    }
  }

  return result;
};
