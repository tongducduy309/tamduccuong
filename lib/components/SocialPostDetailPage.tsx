import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, Heart, MessageCircle, Share2, Send, Play, Pause, MoreVertical } from "lucide-react";
import { toast } from "sonner";
import { Separator } from "./ui/separator";

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

interface Comment {
  id: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
}

interface SocialPostDetailPageProps {
  post: SocialPost;
  comments: Comment[];
  onBack: () => void;
}

export function SocialPostDetailPage({ post, comments, onBack }: SocialPostDetailPageProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);
  const [newComment, setNewComment] = useState("");
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
    }
  };

  const handleShare = () => {
    toast.success("Link copied to clipboard!");
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim()) {
      toast.success("Comment posted!");
      setNewComment("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1>Post</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {/* Media Section */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="relative aspect-[9/16] max-h-[80vh]">
                {post.type === "video" ? (
                  <>
                    <video
                      ref={videoRef}
                      src={post.mediaUrl}
                      poster={post.thumbnailUrl}
                      className="w-full h-full object-contain"
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
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            {/* Author */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <h3>{post.author.name}</h3>
                    {post.author.verified && (
                      <Badge variant="secondary" className="h-5 px-1 text-xs">
                        ✓
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{post.timestamp}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>

            {/* Title and Description */}
            <div>
              <h2 className="mb-2">{post.title}</h2>
              <p className="text-muted-foreground">{post.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6 py-4">
              <button
                className="flex items-center gap-2 text-muted-foreground hover:text-destructive transition-colors"
                onClick={handleLike}
              >
                <Heart
                  className={`h-6 w-6 ${isLiked ? "fill-destructive text-destructive" : ""}`}
                />
                <span>{likeCount}</span>
              </button>
              <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-6 w-6" />
                <span>{post.comments}</span>
              </button>
              <button
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={handleShare}
              >
                <Share2 className="h-6 w-6" />
                <span>{post.shares}</span>
              </button>
            </div>

            <Separator />

            {/* Comments Section */}
            <div>
              <h3 className="mb-4">Comments ({comments.length})</h3>

              {/* Add Comment */}
              <form onSubmit={handleCommentSubmit} className="mb-6">
                <div className="flex gap-2">
                  <Textarea
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={2}
                  />
                  <Button type="submit" size="icon" disabled={!newComment.trim()}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </form>

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.author.avatar} />
                      <AvatarFallback>{comment.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="bg-muted rounded-lg p-3">
                        <p className="text-sm mb-1">{comment.author.name}</p>
                        <p className="text-sm text-muted-foreground">{comment.content}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 px-3">
                        <button className="text-xs text-muted-foreground hover:text-foreground">
                          Like ({comment.likes})
                        </button>
                        <button className="text-xs text-muted-foreground hover:text-foreground">
                          Reply
                        </button>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
