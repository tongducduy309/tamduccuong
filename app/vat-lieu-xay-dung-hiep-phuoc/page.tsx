import type { Metadata } from "next";
import Link from "next/link";
import Layout from "@/lib/layouts/(layout)/layout";
import { products } from "@/lib/products";
import { MapPin, PhoneCall, ArrowRight } from "lucide-react";

const SITE_URL = "https://tamduccuong.vercel.app";

export const metadata: Metadata = {
  title: "Vật liệu xây dựng, tôn thép tại Hiệp Phước, TP.HCM",
  description: "Tìm hiểu danh mục tôn lợp, tôn màu, thép hộp, thép hình, xà gồ C/Z và phụ kiện tại Tâm Đức Cường, 413 Nguyễn Văn Tạo, Xã Hiệp Phước, TP.HCM. Liên hệ xác nhận quy cách, giá và giao nhận.",
  alternates: { canonical: `${SITE_URL}/vat-lieu-xay-dung-hiep-phuoc` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/vat-lieu-xay-dung-hiep-phuoc`,
    title: "Vật liệu xây dựng tại Hiệp Phước | Tâm Đức Cường",
    description: "Danh mục tôn, sắt thép, xà gồ và vật liệu xây dựng tại địa chỉ 413 Nguyễn Văn Tạo, Xã Hiệp Phước, TP.HCM.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tôn thép Tâm Đức Cường tại Hiệp Phước" }],
  },
};

export default function HiepPhuocMaterialsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Vật liệu xây dựng tại Hiệp Phước, TP.HCM",
    url: `${SITE_URL}/vat-lieu-xay-dung-hiep-phuoc`,
    about: { "@id": `${SITE_URL}/#business` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem", position: index + 1, name: product.name,
        url: `${SITE_URL}/san-pham/${product.slug}`,
      })),
    },
  };

  return (
    <Layout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <main className="container mx-auto max-w-6xl px-4 py-12 md:py-16">
        <header className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800"><MapPin className="h-4 w-4" /> Địa chỉ tại Hiệp Phước</div>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-zinc-900 md:text-5xl">Tìm mua tôn, sắt thép và vật liệu xây dựng tại Hiệp Phước, TP.HCM</h1>
          <p className="mt-5 text-base leading-8 text-slate-700 md:text-lg">Tâm Đức Cường giới thiệu các nhóm vật tư tôn lợp, tôn màu, thép hộp, thép hình, xà gồ C/Z, panel, tôn PU và phụ kiện. Người mua có thể xem thông tin từng nhóm, chuẩn bị quy cách và gửi yêu cầu để được xác nhận giá, tình trạng hàng và phương án giao nhận.</p>
        </header>
        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-bold text-zinc-900">Địa chỉ và liên hệ</h2>
            <p className="mt-4 flex gap-3 text-sm leading-7 text-slate-700"><MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-700" />413 Nguyễn Văn Tạo, Xã Hiệp Phước, TP. Hồ Chí Minh</p>
            <p className="mt-3 text-sm leading-7 text-slate-700">Điện thoại: 0933.770.378 – 0918.279.361</p>
            <p className="mt-2 text-sm leading-7 text-slate-700">Email: nhamaytontheptamduccuong@gmail.com</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href="tel:0933770378" className="inline-flex items-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white"><PhoneCall className="mr-2 h-4 w-4" />Gọi tư vấn</a>
              <a href="https://www.google.com/maps/search/?api=1&query=413%20Nguyen%20Van%20Tao%2C%20Hiep%20Phuoc%2C%20Ho%20Chi%20Minh" target="_blank" rel="noreferrer" className="rounded-xl border px-4 py-3 text-sm font-semibold text-zinc-800">Mở bản đồ</a>
            </div>
          </div>
          <div className="rounded-2xl bg-zinc-900 p-6 text-white">
            <h2 className="text-xl font-bold">Cần kiểm tra giá và giao hàng?</h2>
            <p className="mt-3 text-sm leading-7 text-white/75">Giá, quy cách sẵn có và khả năng giao đến công trình thay đổi theo mặt hàng, số lượng và thời điểm. Hãy gửi địa chỉ công trình cùng danh sách vật tư để được xác nhận trước khi đặt.</p>
            <Link href="/quotation" className="mt-5 inline-flex items-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-zinc-900">Gửi yêu cầu báo giá <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-zinc-900">Danh mục tôn thép và vật liệu</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">Chọn nhóm sản phẩm để xem mô tả, ứng dụng và thông tin cần chuẩn bị khi hỏi mua.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <Link key={product.slug} href={`/san-pham/${product.slug}`} className="rounded-xl border bg-white p-5 transition hover:border-amber-300 hover:shadow-md"><h3 className="font-bold text-zinc-900">{product.name}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{product.shortDescription}</p><span className="mt-3 inline-flex items-center text-sm font-semibold text-amber-700">Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" /></span></Link>)}
          </div>
        </section>
        <section className="mt-12 rounded-2xl border bg-white p-6 md:p-8">
          <h2 className="text-2xl font-bold text-zinc-900">Cách yêu cầu báo giá vật liệu chính xác</h2>
          <ol className="mt-5 grid gap-4 md:grid-cols-3">
            <li className="rounded-xl bg-slate-50 p-5"><strong>1. Gửi quy cách</strong><p className="mt-2 text-sm leading-7 text-slate-600">Tên hàng, kích thước, độ dày, chiều dài và tiêu chuẩn nếu có.</p></li>
            <li className="rounded-xl bg-slate-50 p-5"><strong>2. Gửi số lượng</strong><p className="mt-2 text-sm leading-7 text-slate-600">Số tấm, số cây, khối lượng hoặc bảng thống kê vật tư.</p></li>
            <li className="rounded-xl bg-slate-50 p-5"><strong>3. Gửi địa chỉ công trình</strong><p className="mt-2 text-sm leading-7 text-slate-600">Khu vực nhận hàng, điều kiện xe vào và nhu cầu bốc dỡ.</p></li>
          </ol>
        </section>
      </main>
    </Layout>
  );
}
