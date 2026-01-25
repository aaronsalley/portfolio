import { Timestamp } from 'next/dist/server/lib/cache-handlers/types';
import { Url } from 'next/dist/shared/lib/router/router';
import { getMDXData } from '../getMDX';
import path from 'path';

export enum Tags {
  Strategy = 'Strategy',
  Design = 'Design',
  AI = 'AI',
  Leadership = 'Leadership',
  Mobile = 'Mobile',
  Engineering = 'Engineering',
}

export enum Categories {
  Healthcare = 'Healthcare',
  Commerce = 'Commerce',
  SaaS = 'SaaS',
  IoT = 'IoT',
  Platform = 'Platform',
}

export type CaseStudy = {
  title: string;
  feature_image: Url;
  feature_image_alt: string;
  feature_image_caption: string;
  featured: boolean;
  visibility: 'draft' | 'public' | 'private';
  published_at: Timestamp;
  excerpt: string;
  reading_time: string;
  category: Categories;
  tags: Tags[] | string[];
  client_name: string;
  client_logo: string | Url;
  content: string;
  slug?: string;
};

export function getCaseStudies(): Partial<CaseStudy>[] {
  return getMDXData(path.join(process.cwd(), 'src', 'data', 'cases'))
    .filter((post) => post.visibility === 'public')
    .sort((a, b) => {
      if (!a.published_at || !b.published_at) return 0;

      return (
        new Date(b.published_at).getTime() - new Date(a.published_at).getTime()
      );
    });
}
