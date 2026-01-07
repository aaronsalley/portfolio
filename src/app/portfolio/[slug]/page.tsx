import Image from 'next/image';
import Link from 'next/link';

export async function generateStaticParams() {
  // This function can be used to generate static paths if needed
  return [];
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return (
    <article className="">
      <header className={[].join(' ')}></header>
      <main className={[].join(' ')}>
        {/* Content goes here */}
        Content
      </main>
      <aside className={[].join(' ')}></aside>
    </article>
  );
}
