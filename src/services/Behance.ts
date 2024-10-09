import parse from "rss-to-json";

export const fetchProjects = async (callback?) => {
  try {
    const response = await parse(
      "https://www.behance.net/feeds/user?username=aaronsalley",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const data = await response.items;

    if (callback) callback(data);

    return data;
  } catch (error) {
    console.error("Error with Behance:", error.message);
  }
};
