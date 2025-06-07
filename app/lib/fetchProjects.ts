import Parser from 'rss-parser';
import { CaseStudy } from '../components/CaseStudies';

interface BehanceProject {
  title: string;
  link: string;
  pubDate: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  content: string;
  contentSnippet: string;
  guid: string;
  isoDate: string;
}

export default async function fetchProjects() {
  const parser = new Parser();

  try {
    const response = await fetch(
      'https://www.behance.net/feeds/user?username=aaronsalley'
    );
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    const data = feed.items as BehanceProject[];

    const projects: CaseStudy[] = data.map((project) => {
      return {
        title: project.title,
        description: project['content:encodedSnippet'],
        imageUrl:
          project['content:encoded'].match(
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
          )?.[0] || '',
        link: project.link,
      };
    });

    return projects;
  } catch (error) {
    if (error instanceof Error)
      console.error('Error with Behance:', error.message);
    return [];
  }
}
