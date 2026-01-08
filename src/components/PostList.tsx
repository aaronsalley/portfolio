import { Post } from "@/helpers/fetchPosts";
import PostCard from "./PostCard";

export default function PostList({ posts }: { posts: Post[] }) {
  const renderPosts = () => {
    return posts
      .slice(0, 3)
      .map((post) => <PostCard key={post.id} {...post} />);
  };

  return (
    <section className="px-10 bg-salley-primary/10 py-40">
      <header className="text-4xl mb-[1em] text-center w-full max-w-7xl xl:mx-auto">
        <p className="text-base mb-[1em]">From the Blog</p>
        <h2>Insights & Ideas</h2>
      </header>
      <ol className="w-full max-w-7xl xl:mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {renderPosts()}
      </ol>
    </section>
  );
}
