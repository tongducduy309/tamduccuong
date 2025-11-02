import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ArrowLeft, Upload, Video, Image as ImageIcon, X } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { toast } from "sonner";

interface CreateSocialPostPageProps {
  onBack: () => void;
  onSubmit: () => void;
}

export function CreateSocialPostPage({ onBack, onSubmit }: CreateSocialPostPageProps) {
  const [postType, setPostType] = useState<"video" | "image" | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>, type: "video" | "image") => {
    const file = e.target.files?.[0];
    if (file) {
      setMediaFile(file);
      setPostType(type);
      const reader = new FileReader();
      reader.onloadend = () => {
        setMediaPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveMedia = () => {
    setMediaFile(null);
    setMediaPreview(null);
    setPostType(null);
  };

  const handleAddTag = () => {
    if (tagInput.trim() && tags.length < 5) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !mediaFile) {
      toast.error("Please fill in all required fields and upload media");
      return;
    }

    toast.success("Your post has been shared successfully!");
    onSubmit();
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
              <h1>Share Your Project</h1>
              <p className="text-muted-foreground text-sm">Upload a video or photo to inspire others</p>
            </div>
          </div>
        </div>
      </header>

      {/* Form */}
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Media Upload */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Media</CardTitle>
              <CardDescription>Choose a video or image to showcase your project</CardDescription>
            </CardHeader>
            <CardContent>
              {!mediaPreview ? (
                <div className="grid grid-cols-2 gap-4">
                  {/* Video Upload */}
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={(e) => handleMediaUpload(e, "video")}
                    />
                    <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors text-center">
                      <Video className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h4 className="mb-2">Upload Video</h4>
                      <p className="text-sm text-muted-foreground">
                        MP4, MOV up to 100MB
                      </p>
                    </div>
                  </label>

                  {/* Image Upload */}
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleMediaUpload(e, "image")}
                    />
                    <div className="border-2 border-dashed border-border rounded-lg p-8 hover:border-primary transition-colors text-center">
                      <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                      <h4 className="mb-2">Upload Image</h4>
                      <p className="text-sm text-muted-foreground">
                        JPG, PNG up to 10MB
                      </p>
                    </div>
                  </label>
                </div>
              ) : (
                <div className="relative">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                    {postType === "video" ? (
                      <video src={mediaPreview} controls className="w-full h-full object-cover" />
                    ) : (
                      <img src={mediaPreview} alt="Preview" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2"
                    onClick={handleRemoveMedia}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                  <Badge className="absolute top-2 left-2" variant="secondary">
                    {postType === "video" ? "Video" : "Image"}
                  </Badge>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Post Details */}
          <Card>
            <CardHeader>
              <CardTitle>Post Details</CardTitle>
              <CardDescription>Add a title and description for your post</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., DIY Deck Build Using Reclaimed Wood"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Share details about your project, materials used, tips, and what you learned..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  required
                />
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags">Tags (up to 5)</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    id="tags"
                    placeholder="e.g., DIY, reclaimed, deck"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTag();
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={handleAddTag}
                    disabled={!tagInput.trim() || tags.length >= 5}
                  >
                    Add
                  </Button>
                </div>
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="gap-1">
                        #{tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(index)}
                          className="ml-1 hover:text-destructive"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4 justify-end">
            <Button type="button" variant="outline" onClick={onBack}>
              Cancel
            </Button>
            <Button type="submit" size="lg">
              <Upload className="mr-2 h-4 w-4" />
              Share Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
