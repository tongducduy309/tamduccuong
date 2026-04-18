import Layout from "@/lib/layouts/(layout)/layout";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/lib/components/ui/badge";
import { getAllPosts } from "@/lib/blog";
import TimeAgo from "@/lib/components/TimeAgo";
import type { Metadata } from "next";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: {
    default: "Tin tức – Kiến thức vật liệu xây dựng",
    template: "%s | Tâm Đức Cường",
  },
  description:
    "Cập nhật tin tức, kiến thức và kinh nghiệm về tôn, sắt, thép, xà gồ, vật liệu xây dựng. Thông tin mới nhất từ Tâm Đức Cường – Nhà Bè, Hồ Chí Minh.",
  alternates: {
    canonical: "https://tamduccuong.vercel.app/blogs",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://tamduccuong.vercel.app/blogs",
    title: "Tin tức – Kiến thức vật liệu xây dựng",
    description:
      "Tổng hợp bài viết về tôn, sắt, thép, xà gồ và vật liệu xây dựng. Cập nhật thường xuyên từ Tâm Đức Cường (Nhà Bè, Hồ Chí Minh).",
    siteName: "Tâm Đức Cường",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Tin tức vật liệu xây dựng – Tâm Đức Cường",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tin tức – Kiến thức vật liệu xây dựng",
    description:
      "Chia sẻ kiến thức và cập nhật tin tức về tôn, sắt, thép, vật liệu xây dựng.",
    images: ["/og.png"],
  },
};

export default function BlogsPage() {
  const posts = getAllPosts().sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Layout>
      <main className="overflow-hidden">
        {/* HERO */}
        <section className="relative overflow-hidden border-b bg-gradient-to-b from-red-50 via-amber-50 to-background">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />

          <div className="container relative mx-auto px-4 py-12 md:py-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm backdrop-blur">
                <Sparkles className="h-4 w-4" />
                <span>Chuyên mục bài viết</span>
              </div>

              <h1 className="mt-5 text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
                Tin tức & kiến thức
                <span className="mt-2 block text-amber-600">
                  vật liệu xây dựng
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                Cập nhật kiến thức, kinh nghiệm thực tế và thông tin hữu ích về
                tôn, sắt, thép, xà gồ, panel, alu và các vật liệu thường dùng
                trong công trình dân dụng, nhà xưởng và thi công thực tế.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <div className="rounded-2xl border bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur">
                  <span className="font-semibold text-zinc-900">
                    {posts.length}
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    bài viết hiện có
                  </span>
                </div>

                <div className="rounded-2xl border bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur">
                  <span className="font-semibold text-zinc-900">Cập nhật</span>
                  <span className="ml-2 text-muted-foreground">
                    thường xuyên
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LIST */}
        <section className="container mx-auto px-4 py-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-zinc-900 md:text-2xl">
              Tất cả bài viết
            </h2>
            <p className="text-sm text-muted-foreground">
              Chia sẻ kiến thức và cập nhật thực tế
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="rounded-3xl border border-dashed bg-muted/30 px-6 py-16 text-center">
              <h3 className="text-lg font-semibold text-zinc-900">
                Chưa có bài viết nào
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Nội dung sẽ được cập nhật trong thời gian tới.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blogs/${p.slug}`}
                  className="group block"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg">
                    <div className="relative h-52 shrink-0 bg-muted">
                      {p.cover ? (
                        <Image
                          src={p.cover}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-muted-foreground">
                          Không có ảnh
                        </div>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col p-5">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {(p.tags ?? []).slice(0, 3).map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="rounded-full"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <h3 className="line-clamp-2 text-lg font-bold leading-snug text-zinc-900">
                        {p.title}
                      </h3>

                      {p.excerpt && (
                        <p className="mt-2 line-clamp-3 text-sm leading-6 text-muted-foreground">
                          {p.excerpt}
                        </p>
                      )}

                      <div className="mt-auto pt-5">
                        <div className="flex items-center justify-between gap-3">
                          <TimeAgo iso={p.date} />
                          <span className="inline-flex items-center text-sm font-medium text-amber-700 transition-transform duration-300 group-hover:translate-x-1">
                            Xem thêm
                            <ArrowRight className="ml-1.5 h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}