"use client";

import {
  PhoneCall,
  MapPin,
  Mail,
  Facebook,
} from "lucide-react";

import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* TOP */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Tâm Đức Cường
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-6">
              Chuyên cung cấp tôn, thép, xà gồ, panel, alu và vật tư xây dựng 
              với tiêu chí chất lượng – uy tín – giao hàng nhanh.
            </p>

            <div className="mt-4 space-y-2 text-sm">
              <p className="flex items-center gap-2 text-foreground font-medium">
                <MapPin className="h-4 w-4 text-amber-600" />
                413 Nguyễn Văn Tạo, Hiệp Phước, TP.HCM
              </p>

              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-amber-600" />
                <a href="tel:0933770378" className="hover:underline font-medium">
                  0933 770 378
                </a>
              </p>

              <p className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-amber-600" />
                <a href="tel:0918279361" className="hover:underline font-medium">
                  0918 279 361
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-amber-600" />
                <span className="font-medium">tamduccuong@gmail.com</span>
              </p>
            </div>

            {/* CTA
            <Button
              className="mt-4 w-full bg-black text-white hover:bg-zinc-900"
              onClick={() => (window.location.href = "tel:0933770378")}
            >
              Gọi ngay
            </Button> */}
          </div>

          {/* MENU */}
          <div>
            <h4 className="mb-4 font-semibold">Thông tin</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/about" className="hover:text-foreground">
                  Về chúng tôi
                </a>
              </li>
              <li>
                <a href="/blogs" className="hover:text-foreground">
                  Bài viết
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="mb-4 font-semibold">Dịch vụ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/quotation" className="hover:text-foreground">
                  Nhận báo giá
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-foreground">
                  Tư vấn vật liệu
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="mb-4 font-semibold">Hỗ trợ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/contact" className="hover:text-foreground">
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Câu hỏi thường gặp
                </a>
              </li>
            </ul>

            {/* SOCIAL */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://zalo.me/0933770378"
                target="_blank"
                className="rounded-lg border p-2 hover:bg-amber-50"
              >
                <img
                  src="/images/zalo.png"
                  alt="zalo"
                  className="h-5 w-5"
                />
              </a>

              <a
                href="https://zalo.me/0918279361"
                target="_blank"
                className="rounded-lg border p-2 hover:bg-amber-50"
              >
                <img
                  src="/images/zalo.png"
                  alt="zalo"
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Tâm Đức Cường. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}