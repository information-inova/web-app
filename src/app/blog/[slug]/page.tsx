import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../data";

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Alvino Blog`,
    description: post.excerpt,
  };
}

const tagColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600",
  Product:     "bg-purple-50 text-purple-600",
  AI:          "bg-rose-50 text-rose-600",
  Mobile:      "bg-green-50 text-green-600",
  Cloud:       "bg-sky-50 text-sky-600",
};

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter(p => p.slug !== slug && p.tag === post.tag).slice(0, 2);

  const renderContent = (raw: string) => {
    return raw.trim().split("\n\n").map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      if (trimmed.startsWith("## ")) {
        return (
          <h2 key={i} className="mt-10 mb-4 text-xl font-extrabold text-gray-900">
            {trimmed.slice(3)}
          </h2>
        );
      }

      if (trimmed.startsWith("|")) {
        const rows = trimmed.split("\n").filter(r => !r.match(/^\|[-| ]+\|$/));
        return (
          <div key={i} className="my-6 overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={ri === 0 ? "bg-gray-50 font-semibold" : "border-t border-gray-100"}>
                    {row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1).map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-gray-700">{cell.trim()}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }

      if (trimmed.split("\n").every(l => l.startsWith("- "))) {
        return (
          <ul key={i} className="my-4 space-y-2">
            {trimmed.split("\n").map((item, li) => (
              <li key={li} className="flex gap-2 text-gray-700 text-sm leading-relaxed">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                {item.slice(2)}
              </li>
            ))}
          </ul>
        );
      }

      if (trimmed.startsWith("```")) {
        const code = trimmed.replace(/^```\w*\n?/, "").replace(/```$/, "");
        return (
          <pre key={i} className="my-6 overflow-x-auto rounded-xl bg-gray-950 p-5 text-xs text-green-400 leading-relaxed">
            <code>{code}</code>
          </pre>
        );
      }

      return (
        <p key={i} className="my-4 text-gray-600 leading-relaxed text-sm sm:text-base">
          {trimmed.replace(/\*\*(.*?)\*\*/g, "$1").replace(/`(.*?)`/g, "$1").replace(/<em>(.*?)<\/em>/g, "$1")}
        </p>
      );
    });
  };

  return (
    <div className="pt-20">

      {/* ── Post hero ── white, no dark bg */}
      <section className="bg-white border-b border-gray-100 py-20 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{background:"radial-gradient(ellipse at 70% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)"}} />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-500 transition-colors mb-6">
            ← Back to Blog
          </Link>
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${tagColors[post.tag] ?? "bg-gray-100 text-gray-600"}`}>
            {post.tag}
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-gray-500 text-lg leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full text-white text-sm font-bold shrink-0"
              style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900">{post.author}</p>
              <p className="text-xs text-gray-400">{post.authorRole}</p>
            </div>
            <span className="ml-auto text-xs text-gray-400">{post.date} · {post.read}</span>
          </div>
        </div>
      </section>

      {/* ── Article body ── */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose-sm sm:prose max-w-none">
            {renderContent(post.content)}
          </article>

          <div className="mt-14 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-8">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tagColors[post.tag] ?? "bg-gray-100 text-gray-600"}`}>
              {post.tag}
            </span>
            <span className="ml-auto text-sm text-gray-500">Share:</span>
            <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://Alvino.io/blog/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              X / Twitter
            </a>
            <a href={`https://www.linkedin.com/sharing/share-offsite/?url=https://Alvino.io/blog/${post.slug}`}
              target="_blank" rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-4 py-1.5 text-xs font-semibold text-gray-700 hover:border-indigo-300 hover:text-indigo-600 transition-all">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${tagColors[p.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-gray-400">{p.date} · {p.read}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── light, no dark bg */}
      <section className="bg-white border-t border-gray-100 py-16 text-center">
        <div className="mx-auto max-w-xl px-4">
          <h2 className="text-2xl font-extrabold text-gray-900">Enjoyed this article?</h2>
          <p className="mt-3 text-gray-500">Let&apos;s talk about how Alvino can help you solve similar challenges.</p>
          <Link href="/contact"
            className="group mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{background:"linear-gradient(135deg,#6366f1,#a855f7)"}}>
            Start a Conversation
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
