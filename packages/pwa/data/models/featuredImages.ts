import { Device } from "./devices";

export interface FeaturedImageSet {
  MacbookPro?: String;
  iMac?: String;
  iPhone?: String;
  iPhones?: String;
  iPad?: {
    landscape?: String;
    portrait?: String;
  };
  // TODO: Move methods to be part of interface
  // toKeys(): any;
  // toString(): any;
}

// interface FeaturedImageSetConstructor {
//   new (value?: any): FeaturedImageSet;
//   (value?: any): any;
// }

// declare let FeaturedImageSet: FeaturedImageSetConstructor;

export const toKeys = (object: any, string: string): any => {
  string = string.replace(/\[(\w+)\]/g, ".$1");
  string = string.replace(/^\./, "");

  let keys = string.split(".");

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    if (key in object) {
      object = object[key];
    } else {
      continue;
    }
  }

  return object;
};

export const toString = (object: any): any => {
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
