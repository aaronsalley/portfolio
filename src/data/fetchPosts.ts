export type Post = {
  id: number;
  title: string;
  excerpt: string;
  url: string;
  image: string;
  featured?: boolean;
  category: string;
  tags: string[];
  readingTime?: string;
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, "").trim();

const extractImageFromContent = (content?: string) => {
  if (!content) return "";
  const match = content.match(/<img[^>]+>/i);
  if (!match) return "";

  const imgTag = match[0];
  const srcMatch = imgTag.match(/src="([^">]+)"/i);
  const widthMatch = imgTag.match(/width="(\d+)"/i);
  const heightMatch = imgTag.match(/height="(\d+)"/i);

  const width = widthMatch ? Number(widthMatch[1]) : 0;
  const height = heightMatch ? Number(heightMatch[1]) : 0;

  if (width <= 1 || height <= 1) return "";
  return srcMatch?.[1] ?? "";
};

export const fetchPosts = async (): Promise<Post[]> => {
  const { default: Parser } = await import("rss-parser");
  const parser = new Parser({
    customFields: {
      item: ["content:encoded"],
    },
  });

  const feed = await parser.parseURL("https://medium.com/feed/@aaronsalley");

  return feed.items.map((item, index) => {
    const content = (item as { "content:encoded"?: string })["content:encoded"];

    return {
      id: index + 1,
      title: item.title ?? "Untitled",
      excerpt: item.contentSnippet
        ? item.contentSnippet.trim()
        : stripHtml(content ?? ""),
      url: item.link ?? "",
      image: extractImageFromContent(content),
      featured: index < 3,
      category: item.categories?.[0] ?? "",
      tags: item.categories ?? [],
    };
  });
};
