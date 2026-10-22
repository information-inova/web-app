import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "../data";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return { title: "Post Not Found — Alvino Technologies" };
  return {
    title: `${post.title} — Alvino Technologies Blog`,
    description: post.excerpt,
  };
}

const tagColors: Record<string, string> = {
  Engineering: "bg-blue-50 text-blue-600",
  Product:     "bg-blue-50 text-blue-500",
  AI:          "bg-rose-50 text-rose-600",
  Mobile:      "bg-green-50 text-green-600",
  Cloud:       "bg-sky-50 text-sky-600",
};

/* Minimal markdown → HTML renderer for blog content */
function renderContent(raw: string) {
  const lines = raw.trim().split("\n");
  const out: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // H2
    if (line.startsWith("## ")) {
      out.push(
        <h2 key={i} className="mt-10 mb-4 text-xl font-extrabold text-gray-900">
          {line.slice(3)}
        </h2>
      );
      i++;
      continue;
    }

    // Table (starts with |)
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      const rows = tableLines.filter(l => !l.match(/^\|[-| ]+\|$/));
      out.push(
        <div key={i} className="my-6 overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm text-left">
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter((_, ci) => ci > 0 && ci < row.split("|").length - 1);
                return (
                  <tr key={ri} className={ri === 0 ? "bg-gray-50 font-semibold" : "border-t border-gray-100"}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2.5 text-gray-700">{cell.trim()}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // Bold inline — paragraph with **bold**
    if (line.trim() && !line.startsWith("-")) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      const parsed = parts.map((part, pi) =>
        pi % 2 === 1
          ? <strong key={pi} className="font-semibold text-gray-900">{part}</strong>
          : part
      );
      out.push(
        <p key={i} className="my-3 text-gray-600 leading-relaxed">{parsed}</p>
      );
      i++;
      continue;
    }

    // List item
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      out.push(
        <ul key={i} className="my-4 space-y-1.5">
          {items.map((item, li) => (
            <li key={li} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Empty line — skip
    i++;
  }

  return <>{out}</>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);

  if (!post) notFound();

  const related = posts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="pt-20">

      {/* ── Header ── */}
      <section className="bg-white border-b border-gray-100 py-14 relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(0,68,187,0.05) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-8 group">
            <svg className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Back to Blog
          </Link>
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-4 ${tagColors[post.tag] ?? "bg-gray-100 text-gray-600"}`}>
            {post.tag}
          </span>
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl leading-tight">{post.title}</h1>
          <p className="mt-4 text-gray-500 leading-relaxed">{post.excerpt}</p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold shrink-0"
              style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
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

      {/* ── Content ── */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose-sm prose-gray max-w-none">
            {renderContent(post.content)}
          </article>
        </div>
      </section>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="bg-gray-50 border-t border-gray-100 py-12 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">More from the Blog</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`}
                  className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold mb-3 ${tagColors[p.tag] ?? "bg-gray-100 text-gray-600"}`}>
                    {p.tag}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-gray-400">{p.date} · {p.read}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-12 text-center">
        <div className="mx-auto max-w-xl px-4">
          <p className="text-gray-500 text-sm mb-4">Have a question about your business technology?</p>
          <Link href="/contact"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
            style={{ background: "linear-gradient(135deg,#0044bb,#0099ff)" }}>
            Get in Touch
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
