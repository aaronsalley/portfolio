import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote-client/rsc';
import { highlight } from 'sugar-high';
import React from 'react';
import fs from 'fs';
import path from 'path';
import { CaseStudy } from '@/data/cases/cases';

type Metadata = Omit<CaseStudy, 'content'>;

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, '').trim();
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Metadata = {} as Metadata;

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
      metadata[trimmedKey] = parsedValue as never;
    }
  });

  return { metadata: metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.md');
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  return parseFrontmatter(rawContent);
}

export function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      slug,
      ...metadata,
      content,
    };
  });
}

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: React.ComponentProps<typeof Link>) {
  const href = props.href as string;

  if (href.startsWith('/')) {
    return (
      <Link {...props} href={href}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a
        {...(props as React.DetailedHTMLProps<
          React.AnchorHTMLAttributes<HTMLAnchorElement>,
          HTMLAnchorElement
        >)}
      />
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...(props as React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >)}
    />
  );
}

function RoundedImage(props: React.ComponentProps<typeof Image>) {
  return <Image {...props} alt={props.alt} className="rounded-lg" />;
}

function Code({ children, ...props }: { children: string }) {
  const codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function UnorderedList({
  children,
  ...props
}: React.PropsWithChildren<unknown>) {
  return <ul {...props}>{children}</ul>;
}

function OrderedList({ children, ...props }: React.PropsWithChildren<unknown>) {
  return <ol {...props}>{children}</ol>;
}

function ListItem(props: Record<string, unknown>) {
  return <li className="pl-1 marker:text-stone-500" {...props} />;
}

function slugify(str: string | React.ReactNode): string {
  if (!str) return '';

  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    const slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  Table,
};

export function CustomMDX(props: unknown & MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
