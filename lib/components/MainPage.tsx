import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Store, MessageSquare, Play } from "lucide-react";
import { HomePage } from "./HomePage";
import { ForumHomePage } from "./ForumHomePage";
import { SocialFeedPage } from "./SocialFeedPage";

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  timestamp: string;
  replies: number;
  likes: number;
  views: number;
}

interface SocialPost {
  id: string;
  type: "video" | "image";
  mediaUrl: string;
  thumbnailUrl?: string;
  title: string;
  description: string;
  author: {
    name: string;
    avatar?: string;
    verified?: boolean;
  };
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  tags: string[];
}

interface MainPageProps {
  products: Product[];
  forumPosts: ForumPost[];
  socialPosts: SocialPost[];
  onProductClick: (id: string) => void;
  onUploadClick: () => void;
  onCategoryClick?: (category: string) => void;
  onForumPostClick: (id: string) => void;
  onCreatePostClick: () => void;
  onSocialPostClick: (id: string) => void;
  onCreateSocialPostClick: () => void;
  onVintageClick?: () => void;
}

export function MainPage({
  products,
  forumPosts,
  socialPosts,
  onProductClick,
  onUploadClick,
  onCategoryClick,
  onForumPostClick,
  onCreatePostClick,
  onSocialPostClick,
  onCreateSocialPostClick,
  onVintageClick,
}: MainPageProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <Tabs defaultValue="store" className="w-full">
        <div className="flex justify-center mb-6">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 h-12">
            <TabsTrigger value="store" className="flex items-center gap-2">
              <Store className="h-4 w-4" />
              <span>Store</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <Play className="h-4 w-4" />
              <span>Social Feed</span>
            </TabsTrigger>
            <TabsTrigger value="forum" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              <span>Forum</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="store" className="mt-0">
          <HomePage
            products={products}
            onProductClick={onProductClick}
            onUploadClick={onUploadClick}
            onCategoryClick={onCategoryClick}
            onVintageClick={onVintageClick}
          />
        </TabsContent>

        <TabsContent value="social" className="mt-0">
          <SocialFeedPage
            posts={socialPosts}
            onPostClick={onSocialPostClick}
            onCreatePostClick={onCreateSocialPostClick}
          />
        </TabsContent>

        <TabsContent value="forum" className="mt-0">
          <ForumHomePage
            posts={forumPosts}
            onPostClick={onForumPostClick}
            onCreatePostClick={onCreatePostClick}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
