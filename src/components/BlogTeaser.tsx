import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogTeaser() {
  const [featured] = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  if (!featured) return null;

  return (
    <section className="relative z-10 px-4 pb-16 lg:pb-24">
      <div className="mx-auto max-w-2xl lg:max-w-3xl">
        <h2 className="font-brand font-bold text-2xl lg:text-3xl text-yellow uppercase tracking-wide mb-4 lg:mb-6 text-center">
          Del blog
        </h2>
        <Link
          href={`/blog/${featured.slug}`}
          className="block bg-navy border-2 border-yellow/40 rounded-lg p-6 lg:p-8 hover:border-yellow transition-colors"
        >
          <h3 className="font-brand font-bold text-2xl lg:text-3xl text-yellow mb-2">
            {featured.title}
          </h3>
          <p className="text-yellow/80 font-brand lg:text-lg">
            {featured.excerpt}
          </p>
        </Link>
        <p className="text-center mt-4 lg:mt-6">
          <Link
            href="/blog"
            className="font-brand text-sm lg:text-base text-yellow/60 hover:text-yellow uppercase tracking-wide transition-colors"
          >
            Ver todos los posts →
          </Link>
        </p>
      </div>
    </section>
  );
}
