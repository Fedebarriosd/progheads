import Link from "next/link";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Blog",
  description:
    "Reseñas, notas y análisis sobre rock y metal progresivo, escritos desde Paraguay.",
};

export default function BlogList() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <main className="bg-pattern relative flex-1 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <h1 className="font-brand font-bold text-4xl lg:text-6xl text-yellow uppercase tracking-wide mb-10 lg:mb-16 text-center">
          Blog
        </h1>
        <ul className="flex flex-col gap-6 lg:gap-8">
          {sorted.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-navy border-2 border-yellow/40 rounded-lg p-6 lg:p-8 hover:border-yellow transition-colors"
              >
                <p className="text-yellow/60 text-sm lg:text-base font-brand tracking-wide mb-1">
                  {post.date}
                </p>
                <h2 className="font-brand font-bold text-2xl lg:text-3xl text-yellow mb-2">
                  {post.title}
                </h2>
                <p className="text-yellow/80 font-brand lg:text-lg">
                  {post.excerpt}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
