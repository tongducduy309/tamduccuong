import Layout from "@/lib/layouts/(layout)/layout";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap promise

  if (!slug) notFound();

  try {
    const { frontmatter, contentHtml } = await getPostBySlug(slug);

    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">{frontmatter.title}</h1>

          <article
            className="
    text-lg md:text-xl leading-relaxed
    [&_p]:my-5
    [&_li]:my-2
    [&_h2]:text-2xl md:[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
    [&_h3]:text-xl md:[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
    [&_img]:my-8 [&_img]:rounded-xl [&_img]:max-w-full
    [&_ul]:list-disc
    [&_ul]:pl-6
    [&_li]:my-2
    [&_ol]:list-decimal
    [&_ol]:pl-6
  "
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </Layout>
    );
  } catch (e: any) {
    if (e?.code === "POST_NOT_FOUND") notFound();
    throw e;
  }
}
