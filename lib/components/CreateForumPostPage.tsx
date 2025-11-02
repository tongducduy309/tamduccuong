import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface CreateForumPostPageProps {
  onBack: () => void;
  onSubmit: () => void;
}

const categories = [
  "Help & Support",
  "Project Showcase",
  "Tips & Tricks",
  "General Discussion",
];

export function CreateForumPostPage({ onBack, onSubmit }: CreateForumPostPageProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) {
      toast.error("Please enter a title");
      return;
    }
    if (!category) {
      toast.error("Please select a category");
      return;
    }
    if (!content.trim()) {
      toast.error("Please enter your post content");
      return;
    }

    toast.success("Post created successfully!");
    onSubmit();
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

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="mb-2">Create New Post</h1>
          <p className="text-muted-foreground">
            Share your project, ask for help, or start a discussion with the community
          </p>
        </div>

        <Card className="p-6">
          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Post Title</Label>
              <Input
                id="title"
                placeholder="e.g., Need advice on reclaimed wood finishing"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Category */}
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                placeholder="Share details about your question, project, or tip. Be as specific as possible to get better responses from the community."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[300px]"
              />
              <p className="text-sm text-muted-foreground">
                Minimum 20 characters
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
              <Button onClick={handleSubmit} className="flex-1">
                Publish Post
              </Button>
              <Button variant="outline" onClick={onBack}>
                Cancel
              </Button>
            </div>
          </div>
        </Card>

        {/* Guidelines */}
        <Card className="p-6 mt-6 bg-muted/30">
          <h3 className="mb-3">Posting Guidelines</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Be clear and descriptive in your title</li>
            <li>• Choose the most appropriate category for your post</li>
            <li>• Provide enough context and details</li>
            <li>• Be respectful and constructive</li>
            <li>• Avoid duplicate posts - search first!</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
