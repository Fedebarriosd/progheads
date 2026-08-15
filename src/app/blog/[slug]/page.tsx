import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Progheads Paraguay" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogDetail({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="bg-pattern relative flex-1 px-4 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl lg:max-w-4xl">
        <Link
          href="/blog"
          className="font-brand text-yellow/70 hover:text-yellow transition-colors text-sm lg:text-base"
        >
          ← Volver al blog
        </Link>

        <h1 className="font-brand font-bold text-3xl md:text-4xl lg:text-5xl text-yellow uppercase tracking-wide mt-4 mb-2">
          {post.title}
        </h1>
        <p className="text-yellow/60 font-brand text-sm lg:text-base mb-8">
          {post.date} · {post.author}
        </p>

        <div className="bg-navy border-2 border-yellow/40 rounded-lg overflow-hidden" style={{ height: "80vh" }}>
          <object
            data={post.pdfPath}
            type="application/pdf"
            className="w-full h-full"
          >
            <p className="p-6 font-brand text-yellow">
              No se pudo mostrar el PDF.{" "}
              <a href={post.pdfPath} className="underline" target="_blank" rel="noreferrer">
                Descargalo acá
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </main>
  );
}
