import Parser from 'rss-parser';
import { CaseStudy } from '../components/CaseStudies';

interface MediumPost {
  creator: string;
  title: string;
  link: string;
  pubDate: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  'dc:creator': string;
  guid: string;
  categories: string[];
  isoDate: string;
}

export default async function fetchPosts() {
  const parser = new Parser();

  try {
    const response = await fetch('https://medium.com/feed/@aaronsalley');
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const data = feed.items as MediumPost[];

    const posts: CaseStudy[] = data.map((post) => {
      return {
        title: post.title,
        description:
          post['content:encoded']
            .match(/<p[^>]*>(.*?)<\/p>/i)?.[1]
            ?.replace(/<[^>]+>/g, '') || '',
        imageUrl:
          post['content:encoded'].match(
            /https:\/\/cdn-images-[^"'\s)]+/g // /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
          )?.[0] || '',
        link: post.link,
        categories: post.categories || [],
      };
    });

    return posts;
  } catch (error) {
    if (error instanceof Error)
      console.error('Error with Medium', error.message);

    return [];
  }
}
