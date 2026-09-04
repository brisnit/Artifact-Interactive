import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard, Surface } from "@/components/ui/Card";
import { FadeUp, RevealText } from "@/components/motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { QuoteBlock } from "@/components/ui/Editorial";
import { WaveMark } from "@/components/ui/SignalWave";
import { ImagePlaceholder } from "@/components/ui/Placeholder";
import { CtaBand } from "@/components/layout/CtaBand";
import {
  articles,
  formatDate,
  getArticle,
  relatedArticles,
  type Block,
} from "@/content/insights";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = relatedArticles(slug);
  const headings = article.body.filter(
    (block): block is { type: "h2"; text: string } => block.type === "h2",
  );

  return (
    <>
      {/* ---- Article header ---- */}
      <header className="on-dark relative overflow-hidden bg-ink-950 text-white">
        <div aria-hidden="true" className="absolute inset-0 grid-texture" />
        <div
          aria-hidden="true"
          className="absolute -right-1/4 -top-1/3 size-[42rem] rounded-full bg-signal-500/12 blur-[140px]"
        />
        <div className="container-wide relative pt-36 pb-16 lg:pt-44 lg:pb-20">
          <FadeUp>
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2.5 text-[0.75rem] text-slate-ai-400">
                <li>
                  <Link
                    className="transition-colors duration-300 hover:text-white"
                    href="/insights"
                  >
                    Insights
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-signal-300">{article.category}</li>
              </ol>
            </nav>
          </FadeUp>

          <h1 className="text-display mt-9 max-w-[20ch] text-white lg:mt-11">
            <RevealText delay={0.1}>{article.title}</RevealText>
          </h1>

          <FadeUp delay={0.28}>
            <p className="mt-9 max-w-[52ch] font-editorial text-[1.375rem] leading-[1.45] text-slate-ai-300 lg:text-[1.75rem]">
              {article.deck}
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <dl className="mt-16 flex flex-wrap items-center gap-x-14 gap-y-5 border-t border-white/10 pt-8">
              {[
                { label: "Author", value: article.author },
                { label: "Published", value: formatDate(article.date) },
                { label: "Reading time", value: `${article.readingTime} minutes` },
              ].map((item) => (
                <div key={item.label}>
                  <dt className="font-mono text-[0.625rem] uppercase tracking-[0.18em] text-signal-300">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[0.875rem] text-slate-ai-300">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeUp>
        </div>
      </header>

      {/* ---- Article body ---- */}
      <Section tone="light">
        <div className="container-artifact">
          <div className="grid gap-14 lg:grid-cols-[15rem_minmax(0,46rem)] lg:justify-center lg:gap-24">
            {/* Contents rail */}
            <aside className="lg:sticky lg:top-32 lg:self-start">
              {headings.length > 0 && (
                <nav aria-label="On this page">
                  <h2 className="text-[0.9375rem] font-bold tracking-tight text-ink-900">
                    Contents
                  </h2>
                  <ol className="mt-5 space-y-3 border-l border-ink-900/10 pl-5">
                    {headings.map((heading) => (
                      <li key={heading.text}>
                        <a
                          className="block text-[0.8125rem] leading-snug text-slate-ai-600 transition-colors duration-300 hover:text-signal-600"
                          href={`#${slugify(heading.text)}`}
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
              <div className="mt-10 border-t border-ink-900/[0.07] pt-6">
                <p className="text-[0.8125rem] text-slate-ai-600">
                  Filed under{" "}
                  <span className="font-semibold text-ink-900">
                    {article.category}
                  </span>
                </p>
              </div>
            </aside>

            <article className="min-w-0">
              <div className="space-y-8 text-[1.125rem] leading-[1.75] text-ink-800 lg:text-[1.1875rem]">
                {article.body.map((block, i) => (
                  <BlockRenderer
                    block={block}
                    heading={headingNumber(article.body, i)}
                    key={i}
                    lead={i === 0}
                  />
                ))}
              </div>

              <div className="mt-16 border-t border-ink-900/[0.07] pt-10">
                <div className="flex items-center gap-4">
                  <WaveMark />
                  <p className="text-[0.875rem] text-slate-ai-600">
                    <span className="font-semibold text-ink-900">
                      {article.author}
                    </span>{" "}
                    · {article.authorRole}
                  </p>
                </div>
                <p className="mt-5 text-[0.9375rem] leading-relaxed text-slate-ai-600">
                  Artifact Research publishes the working thinking behind the
                  Learning Intelligence Platform, including the parts that are
                  still open questions.
                </p>
                <div className="mt-8">
                  <ImagePlaceholder
                    caption="Reserved for an accompanying diagram, figure, or research artefact."
                    label="Article figure"
                    ratio="16/9"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </Section>

      {/* ---- Related ---- */}
      <Section tone="paper">
        <div className="container-artifact">
          <SectionHeading title="Related articles." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item, i) => (
              <FadeUp delay={i * 0.11} key={item.slug}>
                <ArticleCard
                  category={item.category}
                  date={formatDate(item.date)}
                  excerpt={item.excerpt}
                  href={`/insights/${item.slug}`}
                  readingTime={item.readingTime}
                  title={item.title}
                />
              </FadeUp>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand
        body="Artifact Interactive works with institutions exploring new ways to understand learning, behavior, knowledge, and outcomes."
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "All Insights", href: "/insights" }}
      />
    </>
  );
}

/** Section numbering, so the article reads as a paper rather than a post. */
function headingNumber(body: Block[], index: number) {
  let n = 0;
  for (let i = 0; i <= index; i += 1) {
    if (body[i].type === "h2") n += 1;
  }
  return body[index].type === "h2" ? String(n).padStart(2, "0") : undefined;
}

function BlockRenderer({
  block,
  lead = false,
  heading,
}: {
  block: Block;
  lead?: boolean;
  heading?: string;
}) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          className="scroll-mt-32 pt-10 text-ink-900"
          id={slugify(block.text)}
        >
          <span className="index-numeral mb-4 block font-mono text-[0.6875rem] text-signal-600">
            {heading}
          </span>
          <span className="text-statement block">{block.text}</span>
        </h2>
      );
    case "quote":
      return (
        <QuoteBlock className="my-14 border-l-0 pl-0 lg:-mx-12">
          <span className="block border-t border-b border-ink-900/10 py-9 text-center font-editorial text-[1.625rem] leading-[1.35] text-ink-900 lg:text-[2rem]">
            {block.text}
          </span>
        </QuoteBlock>
      );
    case "list":
      return (
        <ul className="my-10 space-y-5">
          {block.items.map((item, i) => (
            <li className="flex gap-6" key={item}>
              <span className="index-numeral mt-[0.45rem] shrink-0 font-mono text-[0.625rem] text-slate-ai-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[1.0625rem] leading-[1.7] text-slate-ai-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <Surface className="my-10 p-6 lg:p-7" tone="paper">
          <p className="text-[0.9375rem] leading-relaxed text-slate-ai-700">
            <span className="font-semibold uppercase tracking-[0.14em] text-signal-600">
              Note ·{" "}
            </span>
            {block.text}
          </p>
        </Surface>
      );
    default:
      return (
        <p
          className={
            lead
              ? "text-[1.3125rem] leading-[1.6] text-ink-900 lg:text-[1.4375rem]"
              : undefined
          }
        >
          {block.text}
        </p>
      );
  }
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
