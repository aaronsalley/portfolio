import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: `Essays and perspectives on product invention, systems thinking, and making clear decisions in complex environments.`,
};

export default function BlogPage() {
  return (
    <div className="flex grow-1 bg-salley-dark">
      <h1 className="text-white">Blog Page</h1>
      {/* Add blog content here */}
    </div>
  );
}
