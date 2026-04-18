"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/home", label: "Trang chủ" },
  { href: "/about", label: "Về chúng tôi" },
  { href: "/contact", label: "Liên hệ" },
  { href: "/quotation", label: "Bảng báo giá" },
  { href: "/blogs", label: "Bài viết" },
];

interface HeaderProps {
  onLogoClick?: () => void;
  onVintageClick?: () => void;
}

export function Header({ onLogoClick, onVintageClick }: HeaderProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) return false;
    // active cho /blogs và /blogs/slug
    if (href === "/blogs") return pathname === "/blogs" || pathname.startsWith("/blogs/");
    return pathname === href;
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={[
      "sticky top-0 z-50 transition-all duration-300",
      scrolled
        ? "border-b border-slate-200/80 bg-white/80 shadow-sm backdrop-blur-xl"
        : "bg-transparent"
    ].join(" ")}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer rounded-md border border-amber-200 overflow-hidden" onClick={onLogoClick}>
            <img
              src="/images/logo.png"
              alt="Tâm Đức Cường"
              className="h-14 md:h-20 w-auto"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((item, index) => (
              <Link key={index}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-semibold transition-colors ${isActive(item.href) ? "text-amber-700" : "text-slate-700 hover:text-amber-700"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-3 h-0.5 rounded-full bg-amber-600 transition-all duration-300 ${isActive(item.href) ? "w-[calc(100%-24px)]" : "w-0"
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="lg:flex items-center gap-2 border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900"
              onClick={onVintageClick}
            >
              <Sparkles className="h-4 w-4" />
              <span>Uy Tín Hàng Đầu</span>
            </Button>

            <Button
              className="bg-black hover:bg-zinc-900 text-white"
              onClick={() => (window.location.href = "tel:0933770378")}
            >
              Gọi ngay <PhoneCall className="ml-2 h-4 w-4" />
            </Button>

            {/* Mobile menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="border-amber-200">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[86vw] max-w-sm">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>

                  <div className="mt-6 flex flex-col gap-2">
                    {NAV.map((item) => (
                      <Link key={item.href} href={item.href}>
                        <Button
                          variant={isActive(item.href) ? "default" : "outline"}
                          className={
                            "w-full justify-start " +
                            (isActive(item.href)
                              ? "bg-black hover:bg-zinc-900 text-white"
                              : "border-amber-200")
                          }
                        >
                          {item.label}
                        </Button>
                      </Link>
                    ))}


                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
