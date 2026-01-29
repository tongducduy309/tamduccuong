"use client"
import Layout from "@/lib/layouts/(layout)/layout";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/lib/components/ui/button";
import { Badge } from "@/lib/components/ui/badge";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Factory,
  PhoneCall,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

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

export default function AboutPage() {
  return (
    <Layout>
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
    </Layout>
  );
}
