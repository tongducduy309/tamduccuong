"use client"
import { CategoryCard } from "@/lib/components/CategoryCard";
import { ContactPage } from "@/lib/components/ContactPage";
import { MainPage } from "@/lib/components/MainPage";
import { ProductCard } from "@/lib/components/ProductCard";
import { Button } from "@/lib/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/lib/components/ui/tabs";
import Layout from "@/lib/layouts/(layout)/layout";
import {
  Hammer,
  Layers,
  Wrench,
  Home,
  Paintbrush,
  Box,
  ArrowRight,
  Sparkles,
  Store,
  MessageSquare,
  Play,
  Contact,
  BadgePercent,
} from "lucide-react";
// import { Metadata } from "next";

const categories = [
  { icon: Layers, title: "Lumber & Wood", count: 142 },
  { icon: Box, title: "Bricks & Blocks", count: 89 },
  { icon: Wrench, title: "Tools", count: 256 },
  { icon: Home, title: "Doors & Windows", count: 67 },
  { icon: Paintbrush, title: "Paint & Finishes", count: 45 },
  { icon: Hammer, title: "Equipment", count: 128 },
];

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
}

// export const metadata: Metadata = {
//   title: { default: "Trang chủ", template: "%s | Steel & Roofing" },
// };

export default function HomePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="store" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid w-full max-w-2xl grid-cols-3 h-12">
              <TabsTrigger value="store" className="flex items-center gap-2">
                <Store className="h-4 w-4" />
                <span>Cửa Hàng</span>
              </TabsTrigger>
              <TabsTrigger value="contact" className="flex items-center gap-2">
                <Contact className="h-4 w-4" />
                <span>Liên Hệ</span>
              </TabsTrigger>
              <TabsTrigger value="price_quote" className="flex items-center gap-2">
                <BadgePercent className="h-4 w-4" />
                <span>Bảng Báo Giá</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="store" className="mt-0">
            <MainPage/>
          </TabsContent>

          <TabsContent value="contact" className="mt-0">
            <ContactPage></ContactPage>
          </TabsContent>

          <TabsContent value="price_quote" className="mt-0">
            <ul className="space-y-2 list-disc list-inside text-base text-zinc-700 dark:text-zinc-300">
              <li>Vui lòng liên hệ với chúng tôi (<><a className="text-blue-500" href="tel:tongducduyy@gmail.com">0933.770.378</a></>) để nhận bảng báo giá chi tiết và ưu đãi tốt nhất cho các sản phẩm thép và vật liệu xây dựng mà bạn quan tâm.</li>
              <li>Chúng tôi cam kết cung cấp dịch vụ khách hàng xuất sắc và hỗ trợ bạn trong việc lựa chọn sản phẩm phù hợp với nhu cầu của bạn.</li>
              <li>Hãy gọi điện hoặc gửi email (<><a className="text-blue-500" href="mailto:tongducduyy@gmail.com">tongducduyy@gmail.com</a></>) cho chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận báo giá nhanh chóng!</li>
            </ul>
             
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
