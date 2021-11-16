export const capitalizeFirstLetter = ([first, ...rest]: any) =>
  // locale = navigator.language
  first
    .toLocaleUpperCase
    // locale
    () + rest.join("");
