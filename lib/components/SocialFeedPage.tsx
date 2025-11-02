import { SocialPostCard } from "./SocialPostCard";
import { Button } from "./ui/button";
import { Plus, TrendingUp, Clock, Flame } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

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

interface SocialFeedPageProps {
  posts: SocialPost[];
  onPostClick: (id: string) => void;
  onCreatePostClick: () => void;
}

export function SocialFeedPage({ posts, onPostClick, onCreatePostClick }: SocialFeedPageProps) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const handleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-b from-primary/5 to-background py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">Community Showcase</h1>
            <p className="text-muted-foreground mb-6">
              Share your construction projects, renovation tips, and creative builds with the community. Get inspired by others!
            </p>
            <Button size="lg" onClick={onCreatePostClick}>
              <Plus className="mr-2 h-4 w-4" />
              Share Your Project
            </Button>
          </div>
        </div>
      </section> */}

      {/* Feed Tabs */}
      <div className="container mx-auto px-4 py-6">
        <Tabs defaultValue="trending" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="trending" className="flex items-center gap-2">
              <Flame className="h-4 w-4" />
              Trending
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Recent
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Most Popular
            </TabsTrigger>
          </TabsList>

          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {posts.map((post) => (
                <SocialPostCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post.id)}
                  onLike={() => handleLike(post.id)}
                  isLiked={likedPosts.has(post.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...posts].reverse().map((post) => (
                <SocialPostCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post.id)}
                  onLike={() => handleLike(post.id)}
                  isLiked={likedPosts.has(post.id)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...posts].sort((a, b) => b.likes - a.likes).map((post) => (
                <SocialPostCard
                  key={post.id}
                  post={post}
                  onClick={() => onPostClick(post.id)}
                  onLike={() => handleLike(post.id)}
                  isLiked={likedPosts.has(post.id)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
