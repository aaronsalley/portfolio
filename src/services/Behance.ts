import parse from "rss-to-json";

export const fetchProjects = async () => {
  try {
    const response = await parse(
      "https://www.behance.net/feeds/user?username=aaronsalley"
    );
    const items = (await response.items) || [];

    return items;
  } catch (error) {
    console.error("Error with Behance");
  }
};
