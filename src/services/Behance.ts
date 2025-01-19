import Parser from "rss-parser";
import { CaseStudy } from "../components/CaseStudiesComponent";

export const fetchProjects = async () => {
  const parser = new Parser();

  try {
    const response = await fetch(
      "https://www.behance.net/feeds/user?username=aaronsalley"
    );
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const data = await feed.items;

    return data as CaseStudy[];
  } catch (error) {
    console.error("Error with Behance:", error.message);
  }
};
