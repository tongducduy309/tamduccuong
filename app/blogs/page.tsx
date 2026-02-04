
import Layout from "@/lib/layouts/(layout)/layout";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/lib/components/ui/badge";
import { getAllPosts } from "@/lib/blog";
import TimeAgo from "@/lib/components/TimeAgo";
import type { Metadata } from "next";

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
    const posts = getAllPosts();

    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
                <p className="text-muted-foreground mt-2">Cập nhật thông tin mới nhất từ chúng tôi.</p>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    {posts.map((p) => (
                        <Link key={p.slug} href={`/blogs/${p.slug}`} className="group">
                            <article className="h-full flex flex-col rounded-2xl border bg-background overflow-hidden hover:shadow-lg transition-shadow">

                                {/* Image */}
                                <div className="relative h-44 bg-muted shrink-0">
                                    {p.cover && (
                                        <Image
                                            src={p.cover}
                                            alt={p.title}
                                            fill
                                            className="object-cover group-hover:scale-[1.02] transition-transform"
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {(p.tags ?? []).slice(0, 3).map((t) => (
                                            <Badge key={t} variant="secondary">{t}</Badge>
                                        ))}
                                    </div>

                                    <h3 className="font-bold text-lg leading-snug line-clamp-2">
                                        {p.title}
                                    </h3>

                                    {p.excerpt && (
                                        <p className="text-muted-foreground text-sm mt-2 line-clamp-3">
                                            {p.excerpt}
                                        </p>
                                    )}

                                    {/* ⬇️ luôn nằm đáy card */}
                                    <div className="mt-auto">
                                        <TimeAgo iso={p.date} />
                                    </div>
                                </div>
                            </article>
                        </Link>

                    ))}
                </div>
            </div>
        </Layout>
    );
}
