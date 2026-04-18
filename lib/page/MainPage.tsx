"use client";

import { motion } from "framer-motion";
import { CategoryCard } from "../components/CategoryCard";
import { Button } from "../components/ui/button";
import Image from "next/image";
import {
  Layers,
  ArrowRight,
  Sparkles,
  Bolt,
  Boxes,
  Building2,
  PaintBucket,
  Award,
  PhoneCall,
  CheckCircle2,
  Factory,
  ShieldCheck,
  Truck,
  Warehouse,
  SquareStack,
  Wrench,
  BetweenHorizontalStart,
  PanelsTopLeft,
  Square,
} from "lucide-react";
import Divider from "../components/ui/divider";
import Layout from "../layouts/(layout)/layout";
import Link from "next/link";
import Marquee from "../components/marquee";

const categories = [
  { icon: Layers, title: "Tôn Lạnh / Tôn Kẽm", subtitle: "Cuộn, tấm – nhiều độ dày" },
  { icon: PaintBucket, title: "Tôn Màu", subtitle: "AZ/Z, bảng màu đa dạng" },
  { icon: Boxes, title: "Thép Hộp", subtitle: "Đa kích thước, mác thép" },
  { icon: Building2, title: "Thép Hình (I / H / U / V)", subtitle: "Tiêu chuẩn phổ biến" },

  { icon: Warehouse, title: "Tấm Panel (PU/EPS)", subtitle: "Cách nhiệt, cách âm cho kho lạnh, nhà xưởng" },
  { icon: SquareStack, title: "Tôn PU", subtitle: "3 lớp cách nhiệt, chống nóng hiệu quả" },

  { icon: Wrench, title: "Uốn Vòm", subtitle: "Gia công uốn vòm theo thiết kế công trình" },
  { icon: BetweenHorizontalStart, title: "Nhấn Máng", subtitle: "Gia công máng xối, thoát nước theo yêu cầu" },

  { icon: PanelsTopLeft, title: "Alu", subtitle: "Tấm ốp nhôm nhựa thẩm mỹ, bền ngoài trời" },
  { icon: Square, title: "Tấm Nhựa Poly", subtitle: "Lấy sáng, bền, dùng cho mái che và giếng trời" },

  { icon: Bolt, title: "Phụ Kiện", subtitle: "Vít bắn tôn, keo, phụ kiện lắp đặt" },
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
    desc: "Tư vấn đúng nhu cầu, minh bạch quy cách, độ dày và chủng loại vật tư.",
  },
  {
    icon: Truck,
    title: "Giao nhanh tận nơi",
    desc: "Chủ động lịch giao, hỗ trợ công trình và giảm thời gian chờ đợi.",
  },
  {
    icon: Award,
    title: "Uy tín lâu dài",
    desc: "Làm đúng cam kết, đồng hành cùng khách hàng bằng dịch vụ ổn định và tử tế.",
  },
];

const CAPABILITIES = [
  "Tôn lạnh / tôn kẽm (cuộn, tấm) – nhiều độ dày",
  "Tôn màu – bảng màu đa dạng, tư vấn theo hạng mục",
  "Thép hộp, thép hình (I/H/U/V) – tiêu chuẩn phổ biến",
  "Tấm panel PU/EPS, tôn PU – giải pháp cách nhiệt, chống nóng",
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

function SectionTitle({
  badge,
  title,
  desc,
}: {
  badge: string;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mx-auto max-w-2xl text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm">
        <Sparkles className="h-4 w-4" />
        <span>{badge}</span>
      </div>

      <h2 className="mt-4 text-2xl font-bold text-zinc-900 md:text-4xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">{desc}</p>
    </motion.div>
  );
}

export function MainPage() {
  return (
    <Layout>
      <main className="overflow-hidden">
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-background to-background py-16 md:py-24">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
          <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-red-200/20 blur-3xl" />

          <div className="container relative mx-auto px-4">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.div
                variants={stagger}
                initial="hidden"
                animate="show"
                className="max-w-2xl"
              >
                <motion.div
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
                >
                  <Sparkles className="h-4 w-4 text-amber-600" />
                  <span className="text-sm font-medium text-amber-800">
                    Nhà máy tôn thép Tâm Đức Cường
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-4xl font-extrabold leading-tight text-zinc-900 md:text-6xl"
                >
                  Tôn – thép – xà gồ
                  <span className="block text-amber-600">đúng quy cách, giao nhanh</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg"
                >
                  Cung cấp vật tư xây dựng với tiêu chí rõ ràng về quy cách, giá hợp lý,
                  có sẵn hàng đa chủng loại và hỗ trợ giao tận công trình.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-zinc-900"
                    onClick={() => (window.location.href = "tel:0933770378")}
                  >
                    Gọi ngay 0933.770.378
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>

                  <Link href="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-amber-200 hover:bg-amber-50"
                    >
                      Liên hệ tư vấn
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </motion.div>

                <motion.div
                  variants={stagger}
                  className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {STATS.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border bg-white/80 p-4 shadow-sm backdrop-blur"
                    >
                      <div className="text-2xl font-extrabold text-zinc-900">{item.value}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{item.label}</div>
                    </motion.div>
                  ))}
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
                  className="rounded-[28px] border bg-white p-4 shadow-xl"
                >
                  <div className="relative h-[260px] overflow-hidden rounded-2xl border bg-muted md:h-[420px]">
                    <Image
                      src="/images/collection1.png"
                      alt="Tôn thép Tâm Đức Cường"
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16">
  <div className="container mx-auto px-4">
    <SectionTitle
      badge="Danh mục sản phẩm"
      title="Nguồn hàng đa dạng cho nhiều hạng mục"
      desc="Chọn nhanh chủng loại vật tư phù hợp với nhà dân, nhà xưởng và công trình."
    />

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mt-10"
    >
      <Marquee pauseOnHover speed={40} className="[--duration:40s]">
        {categories.map((category, index) => (
          <div
            key={`${category.title}-${index}`}
            className="mx-3 w-[280px] sm:w-[300px] lg:w-[320px] shrink-0"
          >
            <CategoryCard {...category} delay={0} />
          </div>
        ))}
      </Marquee>
    </motion.div>
  </div>
</section>

        <section className="bg-amber-50/50 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              badge="Giá trị cốt lõi"
              title="Làm đúng – Làm nhanh – Làm tới nơi"
              desc="Tập trung vào chất lượng hàng hóa, tiến độ giao hàng và trải nghiệm dịch vụ nhất quán."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-10 grid gap-6 md:grid-cols-3"
            >
              {VALUES.map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-start gap-8 lg:grid-cols-2">
              <motion.div
                variants={fadeLeft}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-3xl border bg-white p-7 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-100 bg-red-50">
                    <Factory className="h-5 w-5 text-red-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold md:text-2xl">Năng lực cung ứng</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Đa dạng chủng loại, quy cách và hỗ trợ theo tiến độ công trình.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {CAPABILITIES.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -14 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.06, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex gap-3"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                      <span className="text-sm text-zinc-800 md:text-base">{item}</span>
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
                      Rõ ràng từng bước để giảm phát sinh và nhận hàng nhanh hơn.
                    </p>
                  </div>
                </div>

                <ol className="mt-6 space-y-5">
                  {[
                    { t: "Tiếp nhận yêu cầu", d: "Hạng mục, quy cách, số lượng và địa điểm giao." },
                    { t: "Tư vấn phương án", d: "Chọn độ dày, chủng loại, phụ kiện và tối ưu hao hụt." },
                    { t: "Báo giá xác nhận", d: "Rõ giá, rõ tiến độ, rõ phương án giao hàng." },
                    { t: "Giao hàng tận nơi", d: "Hỗ trợ theo điều kiện thực tế của công trình." },
                  ].map((step, index) => (
                    <motion.li
                      key={step.t}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08, duration: 0.45 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-zinc-900">{step.t}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{step.d}</div>
                      </div>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <SectionTitle
              badge="Sản phẩm nổi bật"
              title="Vật tư xây dựng chất lượng cao"
              desc="Đa dạng quy cách, phù hợp nhiều nhu cầu thi công và gia công theo yêu cầu."
            />

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-10 grid gap-6 md:grid-cols-3"
            >
              {[
                { src: "/images/collection1.png", title: "Sắt - Thép - Xà Gồ" },
                { src: "/images/collection2.png", title: "Tôn" },
                { src: "/images/collection3.png", title: "Tôn Theo Yêu Cầu" },
              ].map((item) => (
                <motion.div key={item.title} variants={fadeUp}>
                  <div className="group overflow-hidden rounded-2xl border-2 border-amber-200 bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-lg">
                    <div className="relative h-56 overflow-hidden rounded-xl">
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="py-4 text-center text-xl font-bold text-zinc-900">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Divider variant="dashed" thickness={2} className="my-10">
              <span className="text-muted-foreground">Thông tin liên hệ</span>
            </Divider>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                <Image
                  src="/images/map.png"
                  alt="Bản đồ"
                  width={600}
                  height={600}
                  className="rounded-2xl border object-contain"
                />
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 rounded-3xl border bg-white p-7 shadow-sm"
              >
                <h3 className="text-xl font-bold text-zinc-900">Giờ làm việc</h3>
                <ul className="mt-4 space-y-3 text-muted-foreground">
                  <li>Thứ Hai - Thứ Sáu: 7:00 - 17:00</li>
                  <li>Thứ Bảy - Chủ Nhật: 7:00 - 12:00</li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    className="bg-black text-white hover:bg-zinc-900"
                    onClick={() => (window.location.href = "tel:0933770378")}
                  >
                    Gọi 0933.770.378
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "tel:0918279361")}
                  >
                    Gọi 0918.279.361
                    <PhoneCall className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="bg-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-lg font-bold md:text-2xl">
                    CÔNG TY TNHH MỘT THÀNH VIÊN DỊCH VỤ TÔN THÉP TÂM ĐỨC CƯỜNG
                  </h2>

                  <div className="mt-4 space-y-2 text-sm md:text-base">
                    <p>
                      Mã số thuế: <span className="font-semibold">0305971408</span>
                    </p>
                    <p>
                      Di động:{" "}
                      <a className="font-semibold hover:underline" href="tel:0918279361">
                        0918.279.361
                      </a>
                      {" | "}
                      <a className="font-semibold hover:underline" href="tel:0933770378">
                        0933.770.378
                      </a>
                    </p>
                    <p className="font-semibold">
                      413 Đường Nguyễn Văn Tạo, Xã Hiệp Phước, Thành phố Hồ Chí Minh
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <a href="https://zalo.me/0918279361" target="_blank" rel="noreferrer">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                    >
                      <Image
                        src="/images/zalo.png"
                        alt="Zalo 0918279361"
                        width={42}
                        height={42}
                        className="object-contain"
                      />
                    </motion.div>
                  </a>

                  <a href="https://zalo.me/0933770378" target="_blank" rel="noreferrer">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: 0.2 }}
                    >
                      <Image
                        src="/images/zalo.png"
                        alt="Zalo 0933770378"
                        width={42}
                        height={42}
                        className="object-contain"
                      />
                    </motion.div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  );
}