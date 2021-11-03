export interface Project {
  slug: String;
  title: String;
  client: String;
  date: String;
  summary: String;
  roles: String[];
  platforms: {
    android: Boolean;
    mac: Boolean;
    web: Boolean;
  };
  tools: String[];
  content: String | null;
  featured_image: {
    light: {
      MacbookPro: String | null;
      iMac: String | null;
      iPhone: String | null;
      iPhones: String | null;
      iPad: {
        landscape: String | null;
        portrait: String | null;
      };
    };
    dark: {
      MacbookPro: String | null;
      iMac: String | null;
      iPhone: String | null;
      iPhones: String | null;
      iPad: {
        landscape: String | null;
        portrait: String | null;
      };
    };
  };
  device: Device;
  meta: {
    title: String;
    og: {};
    twitter: {};
  };
}
