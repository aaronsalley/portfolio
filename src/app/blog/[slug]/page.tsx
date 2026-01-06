import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
  // This function can be used to generate static paths if needed
  return [];
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  return (
    <article className="flex flex-col">
      <header
        className={[
          "relative w-full bg-soft-charcol text-warm-ivory pt-50 pb-20",
          "",
        ].join(" ")}
      >
        <Image
          src="/"
          alt="Post Image"
          width={600}
          height={400}
          className={[
            "",
            "md:absolute md:top-0 md:-bottom-10 md:right-0 md:w-1/2",
          ].join(" ")}
        />
        <div className="max-w-5xl mx-auto">
          <p className="font-mono uppercase">Category</p>
          <h1 className="font-[Oswald] uppercase text-7xl">Post Title</h1>
          <p className="text-xl">Date</p>
        </div>
      </header>
      <div className="flex flex-wrap gap-10 w-full max-w-5xl mx-auto">
        <main
          className={[
            "w-full flex-1 font-sans",
            "md:order-3 md:max-w-2/3",
          ].join(" ")}
        >
          {/* Content goes here */}
          Content
        </main>
        <aside className={["w-full", "md:order-4"].join(" ")}>
          {/* Related Posts */}
          Related Posts
        </aside>
        <aside
          className={["w-full flex-1", "md:order-2 md:max-w-1/3"].join(" ")}
        >
          <Image src="/author.jpg" alt="Author Image" width={50} height={50} />
          <p>Author Name</p>
          <p>Author Bio</p>
          <Link href="/about">More about us</Link>
          {/* spacer */}
          <Link href="https://instagram.com/salleyandco">
            Find me on Instagram
          </Link>
          <Link href="/contact">Work with us</Link>
        </aside>
      </div>
    </article>
  );
}
