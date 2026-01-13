import { CustomMDX } from '@/components/mdx';
import { getCaseStudies } from '@/data/getMDX';

export async function generateStaticParams() {
  let posts = getCaseStudies();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function CaseStudy({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getCaseStudies().find((post) => post.slug === slug);

  return (
    <article>
      <CustomMDX source={post.content} />
    </article>
  );
}
