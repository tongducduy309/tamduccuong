import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Layout from "@/lib/layouts/(layout)/layout";
import { getProductBySlug, products } from "@/lib/products";
import { ArrowLeft, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

const SITE_URL = "https://tamduccuong.vercel.app";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm", robots: { index: false, follow: false } };

  return {
    title: `${product.name} tại Hiệp Phước, TP.HCM`,
    description: `${product.shortDescription} Hướng dẫn chọn, quy cách báo giá và liên hệ Tâm Đức Cường tại Hiệp Phước, TP.HCM.`,
    alternates: { canonical: `${SITE_URL}/san-pham/${product.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/san-pham/${product.slug}`,
      title: `${product.name} | Tâm Đức Cường`,
      description: product.shortDescription,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = product.relatedSlugs.map((relatedSlug) => getProductBySlug(relatedSlug)).filter(Boolean);
  const productUrl = `${SITE_URL}/san-pham/${product.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    category: "Vật liệu xây dựng",
    url: productUrl,
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: product.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE_URL}/home` },
      { "@type": "ListItem", position: 2, name: "Sản phẩm", item: `${SITE_URL}/san-pham` },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([schema, faqSchema, breadcrumb]).replace(/</g, "\\u003c") }} />
      <main className="container mx-auto max-w-5xl px-4 py-10 md:py-16">
        <Link href="/san-pham" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-amber-700">
          <ArrowLeft className="h-4 w-4" /> Tất cả sản phẩm
        </Link>
        <header className="mt-6 rounded-3xl border bg-gradient-to-br from-amber-50 via-white to-slate-50 p-7 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">Sản phẩm Tâm Đức Cường</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-zinc-900 md:text-5xl">{product.name}</h1>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">{product.shortDescription}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="tel:0933770378" className="inline-flex items-center rounded-xl bg-zinc-900 px-5 py-3 font-semibold text-white hover:bg-amber-700">
              <PhoneCall className="mr-2 h-4 w-4" /> Gọi 0933.770.378
            </a>
            <Link href="/quotation" className="inline-flex items-center rounded-xl border border-amber-300 bg-white px-5 py-3 font-semibold text-zinc-900 hover:bg-amber-50">
              Yêu cầu báo giá <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </header>

        <section className="mt-10">
          <h2 className="text-2xl font-bold text-zinc-900">Thông tin về {product.name.toLowerCase()}</h2>
          <p className="mt-4 text-base leading-8 text-slate-700">{product.description}</p>
        </section>

        <section className="mt-10"><h2 className="text-2xl font-bold text-zinc-900">Hướng dẫn chọn {product.name.toLowerCase()} phù hợp</h2><ol className="mt-5 grid gap-4 md:grid-cols-3">{(product.buyingGuide ?? []).map((item, index) => <li key={item} className="rounded-2xl border bg-white p-5"><span className="text-sm font-bold text-amber-700">Bước {index + 1}</span><p className="mt-2 text-sm leading-7 text-slate-700">{item}</p></li>)}</ol></section>
        <section className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold text-zinc-900">Ứng dụng phổ biến</h2>
            <ul className="mt-4 space-y-3">
              {product.applications.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-700" />{item}</li>)}
            </ul>
          </div>
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold text-zinc-900">Thông tin cần kiểm tra trước khi mua</h2>
            <ul className="mt-4 space-y-3">
              {product.selectionPoints.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-slate-700"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-amber-700" />{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">Câu hỏi thường gặp về {product.name.toLowerCase()}</h2>
          <div className="mt-5 space-y-4">
            {product.faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border bg-white p-5">
                <h3 className="font-semibold text-zinc-900">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border bg-white p-6 md:p-8"><h2 className="text-2xl font-bold text-zinc-900">{product.name} tại Hiệp Phước, TP. Hồ Chí Minh</h2><p className="mt-3 text-sm leading-8 text-slate-700">{{product.localSearchIntro ?? ""}</p><p className="mt-3 text-sm leading-7 text-slate-600">Địa chỉ được công bố: 413 Nguyễn Văn Tạo, Xã Hiệp Phước, TP. Hồ Chí Minh. Vui lòng liên hệ trước để xác nhận thời gian làm việc, tình trạng hàng và phạm vi giao nhận cho địa chỉ công trình.</p><div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold"><a href="https://www.google.com/maps/search/?api=1&query=413%20Nguyen%20Van%20Tao%2C%20Hiep%20Phuoc%2C%20Ho%20Chi%20Minh" target="_blank" rel="noreferrer" className="rounded-lg border px-4 py-2 text-zinc-800 hover:border-amber-400">Xem vị trí trên bản đồ</a><Link href="/contact" className="rounded-lg border px-4 py-2 text-zinc-800 hover:border-amber-400">Thông tin liên hệ</Link></div></section>
        {(product.relatedArticles?.length ?? 0) > 0 && <section className="mt-12"><h2 className="text-2xl font-bold text-zinc-900">Bài viết hướng dẫn liên quan</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{(product.relatedArticles ?? []).map((articleSlug) => <Link key={articleSlug} href={`/blogs/${articleSlug}`} className="rounded-xl border bg-white p-5 text-sm font-semibold capitalize text-zinc-800 hover:border-amber-300 hover:text-amber-800">Đọc bài tư vấn: {articleSlug.replace(/-/g, " ")}</Link>)}</div></section>}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-zinc-900">Sản phẩm liên quan</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {related.map((item) => item && (
                <Link key={item.slug} href={`/san-pham/${item.slug}`} className="rounded-xl border bg-white p-5 hover:border-amber-300">
                  <span className="font-semibold text-zinc-900">{item.name}</span>
                  <span className="mt-2 block text-sm text-slate-600">{item.shortDescription}</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-12 rounded-3xl bg-zinc-900 p-7 text-white md:p-9">
          <h2 className="text-2xl font-bold">Nhận tư vấn và báo giá {product.name.toLowerCase()}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/75">Gửi quy cách, số lượng và địa điểm giao hàng. Giá bán, tồn kho và thời gian giao cần được xác nhận theo yêu cầu thực tế.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/quotation" className="rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900 hover:bg-amber-100">Gửi yêu cầu báo giá</Link>
            <a href="tel:0918279361" className="rounded-xl border border-white/30 px-5 py-3 font-semibold text-white hover:bg-white/10">Gọi 0918.279.361</a>
          </div>
        </section>
      </main>
    </Layout>
  );
}
