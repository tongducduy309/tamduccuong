"use client"
import { CategoryCard } from "@/lib/components/CategoryCard";
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
            <MainPage products={[]} onProductClick={function (id: string): void {
              throw new Error("Function not implemented.");
            }} onUploadClick={function (): void {
              throw new Error("Function not implemented.");
            }} />
          </TabsContent>

          <TabsContent value="contact" className="mt-0">
            {/* <SocialFeedPage
            posts={socialPosts}
            onPostClick={onSocialPostClick}
            onCreatePostClick={onCreateSocialPostClick}
          /> */}
          </TabsContent>

          <TabsContent value="price_quote" className="mt-0">
            {/* <ForumHomePage
            posts={forumPosts}
            onPostClick={onForumPostClick}
            onCreatePostClick={onCreatePostClick}
          /> */}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
