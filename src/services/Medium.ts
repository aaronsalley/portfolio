import parse from "rss-to-json";

export const fetchPosts = async () => {
  try {
    const response = await parse("https://medium.com/feed/@aaronsalley");
    const data = await response.items;

    return data;
  } catch (error) {
    console.error("Error with Medium", error.message);
  }
};
