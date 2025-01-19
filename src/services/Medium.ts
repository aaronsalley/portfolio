import Parser from "rss-parser";

export const fetchPosts = async () => {
  const parser = new Parser();

  try {
    const response = await fetch("https://medium.com/feed/@aaronsalley");
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const data = await feed.items;

    return data;
  } catch (error) {
    console.error("Error with Medium", error.message);
  }
};
