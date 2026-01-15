import { CustomMDX } from '@/components/mdx';
import { CaseStudy, getCaseStudies } from '@/data/getMDX';

export async function generateStaticParams() {
  let posts = getCaseStudies();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post: CaseStudy = await getCaseStudies().find(
    (post) => post.slug === slug
  );

  const lede =
    'nth-of-type-1:text-xl nth-of-type-1:text-pretty nth-of-type-1:first-line:text-end';
  const nutGraf =
    'nth-of-type-2:xl:my-[4em] nth-of-type-2:xl:columns-2 nth-of-type-2:xl:gap-10';

  const Title = ({ children }: { children: React.ReactNode }) => (
    <h1 className="my-[1em] text-2xl">{children}</h1>
  );
  const Body = ({ children }: { children: React.ReactNode }) => (
    <p className={`${lede} ${nutGraf} my-[2em]`}>{children}</p>
  );
  const Heading = ({ children }: { children: React.ReactNode }) => (
    <h2 className="my-[1em] mt-10 mb-4 text-xl">{children}</h2>
  );

  const overrideComponents = {
    h1: Title,
    p: Body,
    h2: Heading,
  };

  return (
    <article className="mx-10 my-40 max-w-7xl xl:mx-auto">
      <header className="mb-20 md:max-w-1/2">
        <h1 className="font-serif text-5xl">{post.title}</h1>
        <p>{post.excerpt}</p>
      </header>
      <CustomMDX source={post.content} components={overrideComponents} />
    </article>
  );
}
