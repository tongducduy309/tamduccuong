import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";

interface ForumPostCardProps {
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
  onClick: () => void;
}

export function ForumPostCard({
  title,
  content,
  author,
  category,
  timestamp,
  replies,
  likes,
  views,
  onClick,
}: ForumPostCardProps) {
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
    <Card
      className="p-5 hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex gap-4">
        {/* Author Avatar */}
        <div className="flex-shrink-0">
          <Avatar className="h-10 w-10">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1">
              <h3 className="mb-1 line-clamp-2">{title}</h3>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm text-muted-foreground">{author.name}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-sm text-muted-foreground">{timestamp}</span>
                <Badge variant="outline" className={getCategoryColor(category)}>
                  {category}
                </Badge>
              </div>
            </div>
          </div>

          {/* Preview */}
          <p className="text-muted-foreground line-clamp-2 mb-3 text-sm">
            {content}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MessageSquare className="h-4 w-4" />
              <span>{replies}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ThumbsUp className="h-4 w-4" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Eye className="h-4 w-4" />
              <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
