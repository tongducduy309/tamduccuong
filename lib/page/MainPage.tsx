"use client"
import { CategoryCard } from "../components/CategoryCard";
import { Button } from "../components/ui/button";
import Image from "next/image";
import {
  Layers,
  Home,
  ArrowRight,
  Sparkles,
  Bolt,
  Boxes,
  Building2,
  PaintBucket,
  SunSnow,
  Award,
  PhoneCall,
  CheckCircle2,
  Factory,
  Badge,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { SlideInText } from "../components/slideIn";
import Marquee from "../components/marquee";
import Divider from "../components/ui/divider";
import Layout from "../layouts/(layout)/layout";
import Link from "next/link";

const categories = [
  { icon: Layers, title: "Tôn Lạnh / Tôn Kẽm", subtitle: "cuộn, tấm – nhiều độ dày" },
  { icon: PaintBucket, title: "Tôn Màu", subtitle: "AZ/Z, bảng màu đa dạng" },
  { icon: Boxes, title: "Thép Hộp", subtitle: "đa kích thước, mác thép" },
  { icon: Building2, title: "Thép Hình (I / H / U / V)", subtitle: "tiêu chuẩn JIS/ASTM" },
  { icon: SunSnow, title: "Chống Nóng", subtitle: "mát mẻ, sạch sẽ" },
  { icon: Bolt, title: "Phụ Kiện", subtitle: "vít bắn tôn, keo" },

];

const STATS = [
  { label: "Năm kinh nghiệm", value: "20+" },
  { label: "Đơn hàng / năm", value: "10K+" },
  { label: "Kho hàng đa quy cách", value: "Sẵn" },
  { label: "Hỗ trợ công trình", value: "Nhanh" },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Chất lượng rõ ràng",
    desc: "Tư vấn đúng nhu cầu, minh bạch quy cách – độ dày – mác thép, ưu tiên hàng chuẩn và ổn định.",
  },
  {
    icon: Truck,
    title: "Giao nhanh tận công trình",
    desc: "Chủ động lịch giao, hỗ trợ bốc xếp theo điều kiện thực tế, hạn chế phát sinh chờ đợi.",
  },
  {
    icon: Award,
    title: "Uy tín lâu dài",
    desc: "Làm đúng cam kết, đồng hành cùng khách hàng – nhà thầu bằng dịch vụ tử tế và nhất quán.",
  },
];

const CAPABILITIES = [
  "Tôn lạnh / tôn kẽm (cuộn, tấm) – nhiều độ dày",
  "Tôn màu – bảng màu đa dạng, tư vấn theo hạng mục",
  "Thép hộp, thép hình (I/H/U/V) – tiêu chuẩn phổ biến",
  "Xà gồ C/Z, phụ kiện: vít bắn tôn, keo, vật tư kèm theo",
  "Cắt – gia công theo yêu cầu, tối ưu hao hụt",
];


export function MainPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto text-center">
            <SlideInText text="NHÀ MÁY TÔN TÂM ĐỨC CƯỜNG" />
            <p className="text-muted-foreground mb-8 mt-4 font-medium">
              Tiết kiệm chi phí, có sẵn hàng đa quy cách: tôn lạnh/tôn màu, thép hình, thép hộp, xà gồ C/Z… <br />Cắt theo yêu cầu, giao nhanh tận công trình.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/about">
  <Button size="lg">
    Về Chúng Tôi
    <ArrowRight className="ml-2 h-4 w-4" />
  </Button>
</Link>
              {/* <Button size="lg" variant="outline" >
                Nhận Báo Giá Nhanh
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* <div className="mb-8">
            <h2 className="mb-2">Danh mục</h2>
            <p className="text-muted-foreground">
              Tìm đúng vật tư cho hạng mục của bạn
            </p>
          </div> */}
          <Marquee speed={80} pauseOnHover className="rounded-2xl">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
                // onClick={() => onCategoryClick?.(category.title)}
              />
            ))}
          </Marquee>


        </div>
      </section>

      {/* Vintage Showcase */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">Lĩnh Vực</span>
            </div>
            <h2 className="mb-4 text-amber-900">
              Khám Phá Nguồn Hàng Đa Dạng
            </h2>
            <p className="text-muted-foreground mb-6">
              Đảm bảo chất lượng - Uy tín hàng đầu - Giá thành hợp lý
            </p>
            {/* <Button
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={onVintageClick}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Browse Vintage Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button> */}
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Sản phẩm đã xác thực</h4>
              <p className="text-sm text-muted-foreground">
                Mỗi món đồ cổ điển đều được kiểm định về tính xác thực và giá trị lịch sử.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Thương hiệu doanh nghiệp</h4>
              <p className="text-sm text-muted-foreground">
                Hơn 20 năm kinh nghiệm trong ngành xây dựng và cung cấp vật tư chất lượng.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Giá trị đầu tư</h4>
              <p className="text-sm text-muted-foreground">
                Giá cả hợp lý, mang lại giá trị vượt trội cho mọi dự án xây dựng.
              </p>
            </div>
          </div>





        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        {/* Hero */}
        <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-red-50 via-amber-50 to-background p-8 md:p-12">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 border border-amber-200 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-600" />
                <span className="text-sm text-amber-800 font-medium">
                  Tôn Thép Tâm Đức Cường
                </span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight text-zinc-900">
                Về Chúng Tôi
              </h1>

              <p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                Chúng tôi cung cấp tôn – thép – xà gồ và vật tư xây dựng với tiêu chí:
                <span className="font-semibold text-zinc-800"> đúng quy cách, giá hợp lý, giao nhanh</span>.
                Mục tiêu của Tâm Đức Cường là giúp khách hàng triển khai công trình thuận lợi,
                giảm phát sinh và tối ưu chi phí.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  className="bg-black hover:bg-zinc-900 text-white"
                  onClick={() => (window.location.href = "tel:0933770378")}
                >
                  Gọi ngay 0933.770.378 <PhoneCall className="ml-2 h-4 w-4" />
                </Button>

                <Link href="/contact">
                  <Button variant="outline" className="border-amber-200 hover:bg-amber-50">
                    Liên hệ
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image / Card */}
            <div className="relative">
              <div className="rounded-3xl border bg-white p-4 shadow-sm">
                <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden border bg-muted">
                  <Image
                    src="/images/collection1.png"
                    alt="Tôn thép Tâm Đức Cường"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {STATS.map((s) => (
                    <div key={s.label} className="rounded-2xl border bg-amber-50 p-4">
                      <div className="text-2xl font-bold text-zinc-900">{s.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-12">
          <div className="text-center max-w-2xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Giá trị cốt lõi</Badge>
            <h2 className="mt-4 text-2xl md:text-4xl font-bold">Làm đúng – Làm nhanh – Làm tới nơi</h2>
            <p className="mt-3 text-muted-foreground">
              Chúng tôi tập trung vào chất lượng hàng hóa và trải nghiệm dịch vụ nhất quán.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border bg-white p-6 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                  <v.icon className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="mt-4 font-bold text-lg text-zinc-900">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="mt-12 grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-3xl border bg-white p-7">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-red-50 border border-red-100 flex items-center justify-center">
                <Factory className="h-5 w-5 text-red-700" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Năng lực cung ứng</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Đa dạng chủng loại – quy cách – hỗ trợ theo tiến độ công trình.
                </p>
              </div>
            </div>

            <ul className="mt-5 space-y-3">
              {CAPABILITIES.map((x) => (
                <li key={x} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-amber-700 mt-0.5" />
                  <span className="text-sm md:text-base text-zinc-800">{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border bg-white p-7">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-amber-700" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-bold">Quy trình làm việc</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Rõ ràng từng bước để giảm phát sinh – nhận hàng nhanh.
                </p>
              </div>
            </div>

            <ol className="mt-5 space-y-4">
              {[
                { t: "Tiếp nhận yêu cầu", d: "Hạng mục, quy cách, số lượng, địa điểm giao." },
                { t: "Tư vấn & chốt phương án", d: "Độ dày – chủng loại – phụ kiện – tối ưu hao hụt." },
                { t: "Báo giá & xác nhận", d: "Minh bạch giá và thời gian giao." },
                { t: "Giao hàng", d: "Giao nhanh tận nơi, hỗ trợ theo điều kiện công trình." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">{s.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-12 rounded-3xl border bg-gradient-to-r from-zinc-900 to-black p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Cần tư vấn & báo giá nhanh?</h2>
              <p className="mt-2 text-white/80">
                Gửi quy cách (độ dày, khổ, chiều dài) – chúng tôi hỗ trợ chốt phương án phù hợp cho công trình.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <Button
                className="bg-white text-black hover:bg-white/90"
                onClick={() => (window.location.href = "tel:0933770378")}
              >
                Gọi 0933.770.378 <PhoneCall className="ml-2 h-4 w-4" />
              </Button>

              <Button
                className="bg-white text-black hover:bg-white/90"
                onClick={() => (window.location.href = "tel:0918279361")}
              >
                Gọi 0918.279.361 <PhoneCall className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Featured Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <div>
              <h2 className="mb-2 text-2xl md:text-5xl font-bold" style={{ color: "#ff914d" }}>Sản Phẩm</h2>
              <p className="text-muted-foreground">
                Vật tư xây dựng chất lượng cao, đa dạng quy cách, giá cả hợp lý
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1 */}
            <div>
              <div className="relative h-56 rounded-xl border-2 border-amber-200 overflow-hidden hover:shadow-lg transition mb-4">
                <Image
                  src="/images/collection1.png"   // đổi đúng path ảnh của bạn
                  alt=""                            // decorative
                  fill
                  className="object-cover"
                  aria-hidden
                  priority
                />

              </div>
              <p className="text-center font-bold text-2xl">Sắt - Thép - Xà Gồ</p>
            </div>

            {/* Card 2 */}
            <div>
              <div className="relative h-56 rounded-xl border-2 border-amber-200 overflow-hidden hover:shadow-lg transition mb-4">
                <Image
                  src="/images/collection2.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
              </div>
              <p className="text-center font-bold text-2xl">Tôn</p>
            </div>


            {/* Card 3 */}
            <div>
              <div className="relative h-56 rounded-xl border-2 border-amber-200 overflow-hidden hover:shadow-lg transition mb-4">
                <Image
                  src="/images/collection3.png"
                  alt=""
                  fill
                  className="object-cover"
                  aria-hidden
                />
              </div>
              <p className="text-center font-bold text-2xl">Tôn Theo Yêu Cầu</p>
            </div>

          </div>

          <Divider
            variant="dashed"
            thickness={2}
            className="my-8"
            children={<span className="text-muted-foreground">Liên Hệ Ngay</span>}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <Image
                    src="/images/map.png"

                    alt="Bản đồ"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
            </div>

            <div>
              <h3 className="mb-4 font-bold">Giờ làm việc</h3>
              <ul className="space-y-2 text-muted-foreground text-md">
                <li>
                  Thứ Hai - Thứ Sáu: 7:00 - 17:00 (7:00 AM - 5:00 PM)
                </li>
                <li>
                  Thứ Bảy - Chủ Nhật: 7:00 - 12:00 (7:00 AM - 12:00 PM)
                </li>
              </ul>
            </div>
          </div>
        </div>


      </section>



      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">CÔNG TY TNHH MỘT THÀNH VIÊN DỊCH VỤ TÔN THÉP TÂM ĐỨC CƯỜNG</h2>
              <div className="flex gap-4">
                <a href="https://zalo.me/0918279361" className="animate-(--animation-pulse) ">
                  <Image
                    src="/images/zalo.png"

                    alt="Zalo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </a>

                <a href="https://zalo.me/0933770378" className="animate-(--animation-pulse) delay-2000">
                  <Image
                    src="/images/zalo.png"

                    alt="Zalo"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </a>
              </div>
            </div>

            <h4>Mã số thuế: <span className="font-semibold">0305971408</span></h4>
            <h4>Di động: <a className="font-semibold" href="tel:0918279361">0918.279.361</a> | <a className="font-semibold" href="tel:0933770378">0933.770.378</a></h4>

            <div className="flex gap-2 flex-col md:flex-row mt-2" >
              <h4>Địa chỉ: </h4>
              <div>

                <p className="font-semibold">413 Đường Nguyễn Văn Tạo, Xã Long Thới, Huyện Nhà Bè, Thành phố Hồ Chí Minh (Cũ)</p>
                <p className="font-semibold">413 Đường Nguyễn Văn Tạo, Xã Hiệp Phước, Thành phố Hồ Chí Minh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </Layout>
  );
}
