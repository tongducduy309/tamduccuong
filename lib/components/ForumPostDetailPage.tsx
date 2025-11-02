import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { ArrowLeft, ThumbsUp, MessageSquare, Share2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Reply {
  id: string;
  author: {
    name: string;
    avatar?: string;
    memberSince: string;
  };
  content: string;
  timestamp: string;
  likes: number;
}

interface ForumPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar?: string;
    memberSince: string;
  };
  category: string;
  timestamp: string;
  replies: number;
  likes: number;
  views: number;
}

interface ForumPostDetailPageProps {
  post: ForumPost;
  postReplies: Reply[];
  onBack: () => void;
}

export function ForumPostDetailPage({ post, postReplies, onBack }: ForumPostDetailPageProps) {
  const [replyContent, setReplyContent] = useState("");
  const [liked, setLiked] = useState(false);

  const handleSubmitReply = () => {
    if (!replyContent.trim()) {
      toast.error("Please write a reply before submitting");
      return;
    }
    toast.success("Reply posted successfully!");
    setReplyContent("");
  };

  const handleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Like removed" : "Post liked!");
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case "Help & Support":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "Project Showcase":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      case "Tips & Tricks":
        return "bg-orange-500/10 text-orange-700 border-orange-200";
      default:
        return "bg-blue-500/10 text-blue-700 border-blue-200";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Forum
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Post */}
        <Card className="p-6 mb-6">
          <div className="mb-4">
            <Badge variant="outline" className={getCategoryColor(post.category)}>
              {post.category}
            </Badge>
          </div>

          <h1 className="mb-4">{post.title}</h1>

          {/* Author Info */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <div>{post.author.name}</div>
              <div className="text-sm text-muted-foreground">
                Member since {post.author.memberSince} • Posted {post.timestamp}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none mb-6">
            <p className="whitespace-pre-wrap">{post.content}</p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 pt-4 border-t">
            <Button
              variant={liked ? "default" : "outline"}
              size="sm"
              onClick={handleLike}
            >
              <ThumbsUp className="mr-2 h-4 w-4" />
              {liked ? post.likes + 1 : post.likes}
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
            <div className="ml-auto flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4" />
                <span>{postReplies.length} replies</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Reply Form */}
        <Card className="p-6 mb-6">
          <h3 className="mb-4">Add a Reply</h3>
          <Textarea
            placeholder="Share your thoughts, advice, or experience..."
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="min-h-[120px] mb-4"
          />
          <div className="flex justify-end">
            <Button onClick={handleSubmitReply}>Post Reply</Button>
          </div>
        </Card>

        {/* Replies */}
        <div className="space-y-4">
          <h3 className="mb-4">
            {postReplies.length} {postReplies.length === 1 ? "Reply" : "Replies"}
          </h3>
          {postReplies.map((reply) => (
            <Card key={reply.id} className="p-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                    <AvatarFallback>{reply.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="font-medium">{reply.author.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">
                      {reply.timestamp}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-3 whitespace-pre-wrap">
                    {reply.content}
                  </p>
                  <Button variant="ghost" size="sm">
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    {reply.likes}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
