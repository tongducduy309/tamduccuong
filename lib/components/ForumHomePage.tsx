import { Button } from "./ui/button";
import { ForumPostCard } from "./ForumPostCard";
import { Badge } from "./ui/badge";
import { PlusCircle, TrendingUp, HelpCircle, Lightbulb, Wrench } from "lucide-react";
import { useState } from "react";

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

interface ForumHomePageProps {
  posts: ForumPost[];
  onPostClick: (id: string) => void;
  onCreatePostClick: () => void;
}

const forumCategories = [
  { name: "All Discussions", icon: TrendingUp, color: "bg-blue-500" },
  { name: "Help & Support", icon: HelpCircle, color: "bg-green-500" },
  { name: "Project Showcase", icon: Lightbulb, color: "bg-purple-500" },
  { name: "Tips & Tricks", icon: Wrench, color: "bg-orange-500" },
];

export function ForumHomePage({ posts, onPostClick, onCreatePostClick }: ForumHomePageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Discussions");

  const filteredPosts = selectedCategory === "All Discussions" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12 md:py-16 rounded-lg mb-8">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="mb-4">
            Community Forum
          </h1>
          <p className="text-muted-foreground mb-8">
            Connect with fellow builders, share your projects, ask questions, and learn from the community. 
            Whether you're a professional contractor or a DIY enthusiast, everyone is welcome!
          </p>
          <Button size="lg" onClick={onCreatePostClick}>
            <PlusCircle className="mr-2 h-5 w-5" />
            Create New Post
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {forumCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Badge
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                className="cursor-pointer px-4 py-2 text-sm"
                onClick={() => setSelectedCategory(category.name)}
              >
                <Icon className="h-4 w-4 mr-2" />
                {category.name}
              </Badge>
            );
          })}
        </div>
      </section>

      {/* Forum Posts */}
      <section className="mb-16">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="mb-2">
              {selectedCategory === "All Discussions" ? "Recent Discussions" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? "discussion" : "discussions"}
            </p>
          </div>
        </div>
        
        {filteredPosts.length > 0 ? (
          <div className="space-y-4">
            {filteredPosts.map((post) => (
              <ForumPostCard
                key={post.id}
                {...post}
                onClick={() => onPostClick(post.id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground mb-4">
              No posts in this category yet.
            </p>
            <Button variant="outline" onClick={onCreatePostClick}>
              Be the first to post!
            </Button>
          </div>
        )}
      </section>

      {/* Community Guidelines */}
      <section className="bg-muted/30 rounded-lg p-8 mb-8">
        <div className="max-w-3xl mx-auto">
          <h3 className="mb-4">Community Guidelines</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Be respectful and constructive in all interactions</li>
            <li>• Share your knowledge and experiences to help others</li>
            <li>• Stay on topic and keep discussions relevant to construction</li>
            <li>• No spam, self-promotion, or commercial solicitation</li>
            <li>• Report any inappropriate content to moderators</li>
          </ul>
        </div>
      </section>
    </>
  );
}
