import fs from 'fs';
import path from 'path';

enum Tags {
  Strategy = 'Strategy',
  Design = 'Design',
  AI = 'AI',
  Leadership = 'Leadership',
  Mobile = 'Mobile',
  Engineering = 'Engineering',
}

enum Categories {
  Healthcare = 'Healthcare',
  Commerce = 'Commerce',
  SaaS = 'SaaS',
  IoT = 'IoT',
  Platform = 'Platform',
}

type Metadata = {
  title: string;
  feature_image?: string;
  feature_image_alt?: string;
  feature_image_caption?: string;
  featured?: boolean;
  visibility?: string;
  published_at: string;
  excerpt: string;
  reading_time?: string;
  category?: Categories;
  tags?: string[];
};

type Post = Metadata & {
  slug: string;
  content: string;
};

export type CaseStudy = Post & {
  client_name: string;
  client_logo?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    let value = valueArr.join(': ').trim();
    value = value.replace(/^['"](.*)['"]$/, '$1'); // Remove quotes
    let parsedValue: string | string[] = value;
    if (value.startsWith('[') && value.endsWith(']')) {
      parsedValue = value
        .slice(1, -1)
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean)
        .map((item) => item.replace(/^['"](.*)['"]$/, '$1'));
    }
    const trimmedKey = key.trim() as keyof Metadata;
    if (trimmedKey === 'tags') {
      metadata[trimmedKey] = Array.isArray(parsedValue)
        ? parsedValue
        : typeof parsedValue === 'string' && parsedValue.length > 0
          ? [parsedValue]
          : [];
    } else {
      metadata[trimmedKey] = parsedValue as any;
    }
  });

  return { metadata: metadata, content };
}

function getMDXFiles(dir: any) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md');
}

function readMDXFile(filePath: any) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: any) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      ...metadata,
      slug,
      content,
    };
  });
}

export function getCaseStudies(): any[] {
  return getMDXData(path.join(process.cwd(), 'src', 'data', 'cases'));
}
