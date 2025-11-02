import { Heart, MessageCircle, Share2, Play, Pause } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useState, useRef } from "react";

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

interface SocialPostCardProps {
  post: SocialPost;
  onClick: () => void;
  onLike?: () => void;
  isLiked?: boolean;
}

export function SocialPostCard({ post, onClick, onLike, isLiked = false }: SocialPostCardProps) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    onLike?.();
  };

  return (
    <div
      className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      {/* Media */}
      <div className="relative aspect-[9/16] bg-muted">
        {post.type === "video" ? (
          <>
            <video
              ref={videoRef}
              src={post.mediaUrl}
              poster={post.thumbnailUrl}
              className="w-full h-full object-cover"
              loop
              playsInline
              onClick={handleVideoClick}
            />
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity"
              style={{ opacity: playing ? 0 : 1 }}
              onClick={handleVideoClick}
            >
              <div className="bg-white/90 rounded-full p-4">
                {playing ? (
                  <Pause className="h-8 w-8 text-primary" />
                ) : (
                  <Play className="h-8 w-8 text-primary" />
                )}
              </div>
            </div>
          </>
        ) : (
          <img
            src={post.mediaUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Author info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Avatar className="h-10 w-10 border-2 border-white">
              <AvatarImage src={post.author.avatar} />
              <AvatarFallback>{post.author.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-medium">{post.author.name}</span>
                {post.author.verified && (
                  <Badge variant="secondary" className="h-5 px-1 text-xs">
                    ✓
                  </Badge>
                )}
              </div>
              <p className="text-xs text-white/80">{post.timestamp}</p>
            </div>
          </div>

          <h3 className="mb-1 line-clamp-1">{post.title}</h3>
          <p className="text-sm text-white/90 line-clamp-2 mb-2">
            {post.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-white/80">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 flex items-center justify-between bg-card">
        <div className="flex items-center gap-4">
          <button
            className="flex items-center gap-1 text-muted-foreground hover:text-destructive transition-colors"
            onClick={handleLike}
          >
            <Heart
              className={`h-5 w-5 ${isLiked ? "fill-destructive text-destructive" : ""}`}
            />
            <span className="text-sm">{post.likes}</span>
          </button>
          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <MessageCircle className="h-5 w-5" />
            <span className="text-sm">{post.comments}</span>
          </button>
          <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
            <Share2 className="h-5 w-5" />
            <span className="text-sm">{post.shares}</span>
          </button>
        </div>
        <Badge variant="outline">{post.type === "video" ? "Video" : "Photo"}</Badge>
      </div>
    </div>
  );
}
