"use client";

import { motion } from "framer-motion";
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
  MapPin,
  FileText,
  Clock3,
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
  "Tấm panel, tôn PU – giải pháp cách nhiệt cho nhà xưởng, kho lạnh",
  "Uốn vòm, nhấn máng – gia công theo yêu cầu công trình",
  "Alu, tấm nhựa poly – hoàn thiện thẩm mỹ, lấy sáng hiệu quả",
  "Xà gồ C/Z, phụ kiện: vít bắn tôn, keo, vật tư kèm theo",
  "Cắt – gia công theo yêu cầu, tối ưu hao hụt",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
} as const;

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
} as const;

export default function AboutPage() {
  return (
    <Layout>
      <main className="overflow-hidden">
        <div className="container mx-auto px-4 py-10">
          {/* HERO */}
          <section className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-red-50 via-amber-50 to-background p-8 md:p-12">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-red-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="max-w-2xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur"
                >
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-800">
                    Tôn Thép Tâm Đức Cường
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-3xl font-bold leading-tight text-zinc-900 md:text-5xl"
                >
                  Về chúng tôi
                  <span className="mt-2 block text-amber-600">
                    Uy tín trong từng đơn hàng
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  Chúng tôi cung cấp tôn – thép – xà gồ và vật tư xây dựng với tiêu chí:
                  <span className="font-semibold text-zinc-800">
                    {" "}đúng quy cách, giá hợp lý, giao nhanh
                  </span>.
                  Mục tiêu của Tâm Đức Cường là giúp khách hàng triển khai công trình thuận lợi,
                  giảm phát sinh và tối ưu chi phí.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  <Button
                    className="bg-black text-white hover:bg-zinc-900"
                    onClick={() => (window.location.href = "tel:0933770378")}
                  >
                    Gọi ngay 0933.770.378
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>

                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-amber-200 hover:bg-amber-50"
                    >
                      Liên hệ
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeRight}
                initial="hidden"
                animate="show"
                className="relative"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="rounded-3xl border bg-white p-4 shadow-xl"
                >
                  <div className="relative h-56 overflow-hidden rounded-2xl border bg-muted md:h-72">
                    <Image
                      src="/images/collection1.png"
                      alt="Tôn thép Tâm Đức Cường"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>

                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    className="mt-4 grid grid-cols-2 gap-3"
                  >
                    {STATS.map((s) => (
                      <motion.div
                        key={s.label}
                        variants={fadeUp}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl border bg-amber-50 p-4 shadow-sm"
                      >
                        <div className="text-2xl font-bold text-zinc-900">{s.value}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* VALUES */}
          <section className="mt-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto max-w-2xl text-center"
            >
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                Giá trị cốt lõi
              </Badge>
              <h2 className="mt-4 text-2xl font-bold md:text-4xl">
                Làm đúng – Làm nhanh – Làm tới nơi
              </h2>
              <p className="mt-3 text-muted-foreground">
                Chúng tôi tập trung vào chất lượng hàng hóa, tiến độ giao hàng và trải nghiệm dịch vụ nhất quán.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-8 grid gap-6 md:grid-cols-3"
            >
              {VALUES.map((v) => (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-transform duration-300 group-hover:scale-110">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* CAPABILITIES + PROCESS */}
          <section className="mt-14 grid items-start gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border bg-white p-7 shadow-sm h-full"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-100 bg-red-50">
                  <Factory className="h-5 w-5 text-red-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold md:text-2xl">Năng lực cung ứng</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Đa dạng chủng loại – quy cách – hỗ trợ theo tiến độ công trình.
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-3">
                {CAPABILITIES.map((x, index) => (
                  <motion.li
                    key={x}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex gap-3"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                    <span className="text-sm text-zinc-800 md:text-base">{x}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border bg-white p-7 shadow-sm h-full"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50">
                  <Building2 className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h2 className="text-xl font-bold md:text-2xl">Quy trình làm việc</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
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
                  <motion.li
                    key={s.t}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-zinc-900">{s.t}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{s.d}</div>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </section>

          {/* COMPANY INFO */}
          <section className="mt-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border bg-muted/30 p-8 shadow-sm"
            >
              <div className="mb-6 max-w-2xl">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">
                  Thông tin doanh nghiệp
                </Badge>
                <h2 className="mt-4 text-2xl font-bold text-zinc-900 md:text-4xl">
                  Đồng hành cùng khách hàng bằng dịch vụ thực tế
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Chúng tôi không chỉ bán vật tư, mà còn hỗ trợ khách hàng chọn đúng giải pháp cho từng hạng mục thi công.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border bg-white p-5"
                >
                  <FileText className="h-6 w-6 text-amber-700" />
                  <h3 className="mt-3 font-bold text-zinc-900">Thông tin pháp lý</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    CÔNG TY TNHH MỘT THÀNH VIÊN DỊCH VỤ TÔN THÉP TÂM ĐỨC CƯỜNG
                  </p>
                  <p className="mt-2 text-sm text-zinc-800">
                    Mã số thuế: <span className="font-semibold">0305971408</span>
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border bg-white p-5"
                >
                  <MapPin className="h-6 w-6 text-amber-700" />
                  <h3 className="mt-3 font-bold text-zinc-900">Địa chỉ</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    413 Đường Nguyễn Văn Tạo, Xã Hiệp Phước, Thành phố Hồ Chí Minh
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border bg-white p-5"
                >
                  <Clock3 className="h-6 w-6 text-amber-700" />
                  <h3 className="mt-3 font-bold text-zinc-900">Thời gian hỗ trợ</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Thứ Hai - Thứ Sáu: 7:00 - 17:00
                    <br />
                    Thứ Bảy - Chủ Nhật: 7:00 - 12:00
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="mt-14 rounded-3xl border bg-gradient-to-r from-zinc-900 to-black p-8 text-white md:p-10">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
            >
              <div>
                <h2 className="text-2xl font-bold md:text-3xl">
                  Cần tư vấn & báo giá nhanh?
                </h2>
                <p className="mt-2 text-white/80">
                  Gửi quy cách như độ dày, khổ, chiều dài hoặc hạng mục sử dụng — chúng tôi hỗ trợ chốt phương án phù hợp.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button
                  className="bg-white text-black hover:bg-white/90"
                  onClick={() => (window.location.href = "tel:0933770378")}
                >
                  Gọi 0933.770.378
                  <PhoneCall className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  className="bg-white text-black hover:bg-white/90"
                  onClick={() => (window.location.href = "tel:0918279361")}
                >
                  Gọi 0918.279.361
                  <PhoneCall className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
    </Layout>
  );
}