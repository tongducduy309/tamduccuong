import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/lib/layouts/(layout)/layout";
import { products } from "@/lib/products";
import { ArrowRight, PackageSearch } from "lucide-react";

export const metadata: Metadata = {
  title: "Danh mục tôn, sắt thép và vật liệu xây dựng",
  description: "Danh mục tôn lạnh, tôn màu, tôn PU, thép hộp, thép hình, xà gồ C/Z, panel, Alu, tấm Poly và phụ kiện tại Tâm Đức Cường.",
  alternates: { canonical: "https://tamduccuong.vercel.app/san-pham" },
  openGraph: {
    type: "website",
    url: "https://tamduccuong.vercel.app/san-pham",
    title: "Danh mục sản phẩm | Tâm Đức Cường",
    description: "Tìm hiểu các nhóm tôn, sắt thép, xà gồ và vật liệu xây dựng do Tâm Đức Cường cung cấp.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Danh mục vật liệu xây dựng Tâm Đức Cường" }],
  },
};

export default function ProductsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Danh mục sản phẩm Tâm Đức Cường",
    url: "https://tamduccuong.vercel.app/san-pham",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: product.name,
        url: `https://tamduccuong.vercel.app/san-pham/${product.slug}`,
      })),
    },
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
            <PackageSearch className="h-4 w-4" /> Danh mục vật liệu
          </div>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-zinc-900 md:text-5xl">
            Tôn, sắt thép và vật liệu xây dựng
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-600 md:text-lg">
            Tra cứu nhóm sản phẩm, đặc điểm, ứng dụng và các thông số cần chuẩn bị trước khi yêu cầu báo giá.
            Quy cách, khả năng cung ứng và giá bán được xác nhận theo từng yêu cầu thực tế.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.slug} href={`/san-pham/${product.slug}`} className="group rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg">
              <h2 className="text-xl font-bold text-zinc-900 group-hover:text-amber-700">{product.name}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{product.shortDescription}</p>
              <span className="mt-5 inline-flex items-center text-sm font-semibold text-amber-700">
                Xem thông tin <ArrowRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border bg-white p-6"><h2 className="text-xl font-bold text-zinc-900">Tìm vật liệu xây dựng tại Hiệp Phước?</h2><p className="mt-2 text-sm leading-7 text-slate-600">Xem địa chỉ, thông tin liên hệ và cách gửi yêu cầu báo giá cho công trình tại Hiệp Phước, TP.HCM.</p><Link href="/vat-lieu-xay-dung-hiep-phuoc" className="mt-4 inline-flex items-center text-sm font-semibold text-amber-700">Thông tin khu vực <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
        <div className="mt-12 rounded-2xl bg-zinc-900 p-7 text-white md:p-9">
          <h2 className="text-2xl font-bold">Cần tư vấn quy cách hoặc báo giá?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/75">Gửi loại vật liệu, kích thước, số lượng và địa điểm giao hàng để Tâm Đức Cường kiểm tra khả năng cung ứng và phản hồi.</p>
          <Link href="/quotation" className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-zinc-900 hover:bg-amber-100">Yêu cầu báo giá</Link>
        </div>
      </main>
    </Layout>
  );
}
