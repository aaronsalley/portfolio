import parse from "rss-to-json";

export const fetchPosts = async () => {
  try {
    const response = await parse("https://medium.com/feed/@aaronsalley");
    const items = (await response.items) || [];

    return items;
  } catch (error) {
    console.error("Error with Medium");
  }
};
