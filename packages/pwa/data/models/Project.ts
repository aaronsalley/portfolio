import { Device } from "./devices";

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
  device?: Device;
  meta: {
    title: String;
    og: {};
    twitter: {};
  };
}

export const flatten = (object: any): any => {
  let result: any = {};

  for (const [key, value] of Object.entries(object)) {
    if (key == "iPad") {
      for (const [_key, _value] of Object.entries(object[key])) {
        result[key + "." + _key] = _value;
      }
    } else if (key in Device) {
      result[key] = value;
    }
  }

  return result;
};
