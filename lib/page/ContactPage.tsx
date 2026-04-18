"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PhoneCall,
  MapPin,
  Mail,
  Clock3,
  FileText,
  MessageCircleMore,
  Building2,
  Sparkles,
} from "lucide-react";
import Layout from "../layouts/(layout)/layout";

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

const CONTACTS = [
  {
    icon: PhoneCall,
    title: "Điện thoại 1",
    value: "0933.770.378",
    href: "tel:0933770378",
    desc: "Tư vấn nhanh, hỗ trợ đơn hàng và giao công trình.",
  },
  {
    icon: PhoneCall,
    title: "Điện thoại 2",
    value: "0918.279.361",
    href: "tel:0918279361",
    desc: "Liên hệ báo giá, quy cách và tiến độ giao hàng.",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nhamaytontheptamduccuong@gmail.com",
    href: "mailto:nhamaytontheptamduccuong@gmail.com",
    desc: "Tiếp nhận thông tin báo giá và yêu cầu tư vấn.",
  },
];

export function ContactPage() {
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
                    Liên hệ Tâm Đức Cường
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="mt-5 text-3xl font-bold leading-tight text-zinc-900 md:text-5xl"
                >
                  Liên hệ nhanh
                  <span className="mt-2 block text-amber-600">
                    Tư vấn đúng nhu cầu, báo giá rõ ràng
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg"
                >
                  Gửi cho chúng tôi quy cách cần dùng như độ dày, kích thước,
                  số lượng hoặc hạng mục thi công. Tâm Đức Cường sẽ hỗ trợ tư vấn
                  phương án phù hợp và phản hồi nhanh.
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

                  <Button
                    variant="outline"
                    className="border-amber-200 hover:bg-amber-50"
                    onClick={() =>
                      (window.location.href =
                        "https://maps.app.goo.gl/hN7QZhWvf8tazzkR6")
                    }
                  >
                    Tìm đường
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
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
                  <div className="relative h-56 overflow-hidden rounded-2xl border bg-muted md:h-80">
                    <Image
                      src="/images/map.png"
                      alt="Bản đồ Tâm Đức Cường"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border bg-amber-50 p-4">
                      <div className="text-2xl font-bold text-zinc-900">2</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Số điện thoại hỗ trợ
                      </div>
                    </div>
                    <div className="rounded-2xl border bg-amber-50 p-4">
                      <div className="text-2xl font-bold text-zinc-900">7:00</div>
                      <div className="mt-1 text-sm text-muted-foreground">
                        Bắt đầu hỗ trợ mỗi ngày
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* CONTACT CARDS */}
          <section className="mt-14">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto max-w-2xl text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-800 shadow-sm">
                <MessageCircleMore className="h-4 w-4" />
                <span>Thông tin liên hệ</span>
              </div>

              <h2 className="mt-4 text-2xl font-bold text-zinc-900 md:text-4xl">
                Kết nối với chúng tôi theo cách thuận tiện nhất
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground md:text-base">
                Gọi trực tiếp, gửi email hoặc tìm đường đến địa chỉ doanh nghiệp.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-8 grid gap-6 md:grid-cols-3"
            >
              {CONTACTS.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 transition-transform duration-300 group-hover:scale-110">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 break-all text-base font-semibold text-amber-700">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.desc}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </section>

          {/* MAP + DETAILS */}
          <section className="mt-14 grid items-start gap-8 lg:grid-cols-2">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-3xl border bg-white p-5 shadow-sm"
            >
              <div className="relative h-[320px] overflow-hidden rounded-2xl border bg-muted md:h-[420px]">
                <Image
                  src="/images/map.png"
                  alt="Bản đồ vị trí doanh nghiệp"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-5 flex flex-wrap justify-end gap-3">
                <Button
                  className="bg-black text-white hover:bg-zinc-900"
                  onClick={() =>
                    (window.location.href =
                      "https://maps.app.goo.gl/hN7QZhWvf8tazzkR6")
                  }
                >
                  Mở Google Maps
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50">
                    <Clock3 className="h-5 w-5 text-amber-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold md:text-2xl">Giờ làm việc</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Hỗ trợ nhanh trong khung giờ làm việc.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-muted-foreground">
                  <li>Thứ Hai - Thứ Sáu: 7:00 - 17:00</li>
                  <li>Thứ Bảy - Chủ Nhật: 7:00 - 12:00</li>
                </ul>
              </div>

              <div className="rounded-3xl border bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-red-100 bg-red-50">
                    <FileText className="h-5 w-5 text-red-700" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold md:text-2xl">Thông tin doanh nghiệp</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Thông tin liên hệ và pháp lý cơ bản.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-4 text-sm md:text-base">
                  <p className="text-zinc-900">
                    <span className="font-semibold">Tên công ty:</span>{" "}
                    CÔNG TY TNHH MỘT THÀNH VIÊN DỊCH VỤ TÔN THÉP TÂM ĐỨC CƯỜNG
                  </p>

                  <p className="text-zinc-900">
                    <span className="font-semibold">Mã số thuế:</span> 0305971408
                  </p>

                  <div className="flex gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <div className="space-y-2 text-muted-foreground">
                      <p>
                        413 Đường Nguyễn Văn Tạo, Xã Long Thới, Huyện Nhà Bè,
                        Thành phố Hồ Chí Minh (cũ)
                      </p>
                      <p className="font-medium text-zinc-900">
                        413 Đường Nguyễn Văn Tạo, Xã Hiệp Phước, Thành phố Hồ Chí Minh
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <div className="space-y-1">
                      <a
                        href="tel:0918279361"
                        className="block font-medium text-zinc-900 hover:underline"
                      >
                        0918.279.361
                      </a>
                      <a
                        href="tel:0933770378"
                        className="block font-medium text-zinc-900 hover:underline"
                      >
                        0933.770.378
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Mail className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                    <div className="space-y-1 text-muted-foreground">
                      <a
                        href="mailto:nhamaytontheptamduccuong@gmail.com"
                        className="block break-all font-medium text-zinc-900 hover:underline"
                      >
                        nhamaytontheptamduccuong@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
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
                  Cần báo giá hoặc tư vấn vật liệu?
                </h2>
                <p className="mt-2 text-white/80">
                  Gửi thông tin quy cách hoặc gọi trực tiếp để được hỗ trợ nhanh hơn.
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