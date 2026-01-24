import { Post } from '@/data/fetchPosts';
import Image from 'next/image';
import Link from 'next/link';

export default function PostCard(post: Post) {
  return (
    <li key={post.id} className="group rounded-2xl bg-salley-light">
      <Link href={post.url} target="_blank">
        <article>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="aspect-7/5 w-full rounded-2xl object-cover"
            />
          ) : (
            <div className="group:bg-[url('/placeholder2.jpg')] aspect-7/5 w-full rounded-2xl bg-cover bg-center group-first:bg-[url('/placeholder1.jpg')] group-last:bg-[url('/placeholder1.jpg')]"></div>
          )}
          <ul className="mt-5 ml-5 inline-flex">
            {post.tags.length > 0 && (
              <li className="rounded-2xl bg-salley-dark px-2 py-1 text-xs text-salley-light uppercase">
                {post.tags[0]}
              </li>
            )}
          </ul>
          <p className="mr-6 ml-2 inline-flex"></p>
          <h3 className="m-5">{post.title}</h3>
        </article>
      </Link>
    </li>
  );
}
