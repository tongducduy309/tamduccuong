import Layout from "@/lib/layouts/(layout)/layout";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CalendarDays, ArrowRight, Sparkles } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const { frontmatter } = await getPostBySlug(slug);

    const title = frontmatter.title;
    const description =
      frontmatter.excerpt ||
      "Chia sẻ kiến thức và thông tin hữu ích về tôn, sắt, thép, xà gồ và vật liệu xây dựng.";

    const url = `https://tamduccuong.vercel.app/blogs/${slug}`;
    const ogImage = frontmatter.cover || "/og.png";

    return {
      title,
      description,
      alternates: { canonical: url },
      robots: { index: true, follow: true },
      openGraph: {
        type: "article",
        locale: "vi_VN",
        url,
        title,
        description,
        siteName: "Tâm Đức Cường",
        images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [ogImage],
      },
    };
  } catch (e: any) {
    if (e?.code === "POST_NOT_FOUND") notFound();
    return {};
  }
}

function formatDate(date?: string) {
  if (!date) return "";

  try {
    return new Intl.DateTimeFormat("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  try {
    const { frontmatter, contentHtml } = await getPostBySlug(slug);

    return (
      <Layout>
        <main className="overflow-hidden">
          {/* HERO */}
          <section className="relative overflow-hidden border-b bg-gradient-to-b from-red-50 via-amber-50 to-background">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />

            <div className="container relative mx-auto px-4 py-10 md:py-14">
              <div className="mx-auto max-w-4xl">
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm backdrop-blur transition hover:border-amber-300 hover:text-amber-700"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Quay lại bài viết
                </Link>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  <span>Kiến thức vật liệu xây dựng</span>
                </div>

                <h1 className="mt-5 text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
                  {frontmatter.title}
                </h1>

                {frontmatter.excerpt && (
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">
                    {frontmatter.excerpt}
                  </p>
                )}

                <div className="mt-5 flex flex-wrap items-center gap-4">
                  {frontmatter.date && (
                    <div className="inline-flex items-center gap-2 rounded-full border bg-white/80 px-4 py-2 text-sm text-muted-foreground shadow-sm">
                      <CalendarDays className="h-4 w-4 text-amber-700" />
                      <span>{formatDate(frontmatter.date)}</span>
                    </div>
                  )}

                  {!!frontmatter.tags?.length && (
                    <div className="flex flex-wrap gap-2">
                      {frontmatter.tags.slice(0, 4).map((tag: string) => (
                        <span
                          key={tag}
                          className="rounded-full border bg-white/80 px-3 py-1.5 text-xs font-medium text-zinc-700 shadow-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* COVER */}
          {frontmatter.cover && (
            <section className="container mx-auto px-4 pt-8">
              <div className="mx-auto max-w-5xl">
                <div className="relative overflow-hidden rounded-3xl border bg-muted shadow-sm">
                  <div className="relative aspect-[16/8] w-full">
                    <Image
                      src={frontmatter.cover}
                      alt={frontmatter.title}
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CONTENT */}
          <section className="container mx-auto px-4 py-10 md:py-14">
            <div className="mx-auto max-w-3xl">
              <article
                className="
                  text-base leading-8 text-zinc-700 md:text-lg
                  [&_p]:my-5
                  [&_li]:my-2
                  [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-2xl [&_h2]:font-bold md:[&_h2]:text-3xl
                  [&_h3]:mt-10 [&_h3]:mb-3 [&_h3]:text-xl [&_h3]:font-semibold md:[&_h3]:text-2xl
                  [&_img]:my-8 [&_img]:max-w-full [&_img]:rounded-2xl [&_img]:shadow-sm
                  [&_ul]:list-disc [&_ul]:pl-6
                  [&_ol]:list-decimal [&_ol]:pl-6
                  [&_blockquote]:my-6
                  [&_blockquote]:border-l-4
                  [&_blockquote]:border-amber-300
                  [&_blockquote]:bg-amber-50/50
                  [&_blockquote]:px-4
                  [&_blockquote]:py-3
                  [&_strong]:font-semibold [&_strong]:text-zinc-900
                  [&_a]:text-amber-700 [&_a]:underline-offset-4 hover:[&_a]:underline
                  [&_table]:w-full
                  [&_table]:border-collapse
                  [&_th]:border [&_th]:bg-muted [&_th]:px-3 [&_th]:py-2 [&_th]:text-left
                  [&_td]:border [&_td]:px-3 [&_td]:py-2
                "
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />
            </div>
          </section>

          {/* CTA */}
          <section className="container mx-auto px-4 pb-14">
            <div className="mx-auto max-w-4xl rounded-3xl border bg-gradient-to-r from-zinc-900 to-black p-8 text-white md:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Cần tư vấn vật liệu cho công trình?
                  </h2>
                  <p className="mt-2 text-white/80">
                    Liên hệ Tâm Đức Cường để được hỗ trợ báo giá và chọn vật tư phù hợp.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
                  >
                    Liên hệ ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  <Link
                    href="/blogs"
                    className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                  >
                    Xem thêm bài viết
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  } catch (e: any) {
    if (e?.code === "POST_NOT_FOUND") notFound();
    throw e;
  }
}