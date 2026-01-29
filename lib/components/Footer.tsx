"use client"
import { Search, Menu, Heart, User, Sparkles, PhoneCall } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";



export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="mb-4">Thông Tin</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="/about" className="hover:text-foreground">
                    Về Chúng Tôi
                  </a>
                  
                </li>
                <li>
                  <a href="/blogs" className="hover:text-foreground">
                    Bài viết
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Dịch vụ</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="/quotation" className="hover:text-foreground">
                    Nhận Bảng Báo Giá
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Hỗ Trợ</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="/contact" className="hover:text-foreground">
                    Liên Hệ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Câu hỏi thường gặp
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 TDC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}
