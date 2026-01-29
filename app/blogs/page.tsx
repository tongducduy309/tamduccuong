
import Layout from "@/lib/layouts/(layout)/layout";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/lib/components/ui/badge";
import { getAllPosts } from "@/lib/blog";
import TimeAgo from "@/lib/components/TimeAgo";




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
