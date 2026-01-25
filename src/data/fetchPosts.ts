import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import { Url } from 'next/dist/shared/lib/router/router';

export type Post = {
  creator?: string;
  title: string;
  link: Url;
  pubDate?: string;
  content?: string;
  excerpt: string;
  id: string;
  category: string;
  image: string;
  featured?: boolean;
  tags: string[];
  readingTime?: string;
  slug?: string;
};

type Medium = {
  creator: string;
  title: string;
  link: Url;
  pubDate: string;
  'content:encoded': string;
  'content:encodedSnippet': string;
  'dc:creator': string;
  guid: Url;
  categories: string[];
  isoDate: Timestamp | string;
};

const stripHtml = (value: string) => value.replace(/<[^>]*>/g, '').trim();

const extractImageFromContent = (content?: string) => {
  if (!content) return '';

  const match = content.match(/<img[^>]+>/i);
  if (!match) return '';

  const imgTag = match[0];
  const srcMatch = imgTag.match(/src="([^">]+)"/i);
  const widthMatch = imgTag.match(/width="(\d+)"/i);
  const heightMatch = imgTag.match(/height="(\d+)"/i);

  const width = Number(widthMatch?.[1]);
  const height = Number(heightMatch?.[1]);

  if (width || height) return '';

  return srcMatch?.[1] ?? '';
};

const extractGUID = (guid?: Url) => {
  if (!guid) return '';

  const guidString = guid.toString();
  const parts = guidString.split('/');

  return parts[parts.length - 1];
};

export const fetchPosts = async (): Promise<Post[]> => {
  'use cache';

  const { default: Parser } = await import('rss-parser');
  const parser = new Parser({
    customFields: {
      item: ['content:encoded'],
    },
  });

  const feed = await parser.parseURL('https://medium.com/feed/@aaronsalley');

  return feed.items.map((item: Partial<Medium>, index) => {
    const content = item['content:encoded'];

    return {
      id: extractGUID(item.guid),
      title: item.title as string,
      excerpt: stripHtml(content ?? ''),
      link: item.link ?? '',
      image: extractImageFromContent(content),
      featured: index < 3,
      category: item.categories?.[0] ?? '',
      tags: item.categories ?? [],
    };
  });
};
