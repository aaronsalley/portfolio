import { Post } from "@/helpers/fetchPosts";
import Image from "next/image";
import Link from "next/link";

export default function PostCard(post: Post) {
  return (
    <li key={post.id} className="rounded-2xl bg-salley-light">
      <Link href={post.url} target="_blank">
        <article>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={400}
              className="rounded-2xl object-cover w-full aspect-[7/5] bg-black"
            />
          )}
          <ul className="inline-flex mt-5 ml-5">
            {post.tags.length > 0 && (
              <li className="bg-salley-dark rounded-2xl text-salley-light px-2 py-1 text-sm uppercase">
                {post.tags[0]}
              </li>
            )}
          </ul>
          <p className="inline-flex ml-2 mr-6"></p>
          <h3 className="m-5">{post.title}</h3>
        </article>
      </Link>
    </li>
  );
}
