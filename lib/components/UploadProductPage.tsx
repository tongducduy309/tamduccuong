import { useState } from "react";
import { ArrowLeft, Upload, X, ImagePlus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface UploadProductPageProps {
  onBack: () => void;
}

export function UploadProductPage({ onBack }: UploadProductPageProps) {
  const [images, setImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Cancel
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="mb-2">List Your Construction Materials</h1>
          <p className="text-muted-foreground">
            Fill in the details below to create your listing. Be as detailed as
            possible to attract buyers.
          </p>
        </div>

        <form className="space-y-8">
          {/* Images Section */}
          <Card className="p-6">
            <h2 className="mb-4">Photos</h2>
            <p className="text-muted-foreground mb-4 text-sm">
              Add at least 3 photos. The first photo will be your cover image.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
              {images.map((img, idx) => (
                <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
                  <img
                    src={img}
                    alt={`Upload ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {idx === 0 && (
                    <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs">
                      Cover
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => removeImage(idx)}
                    className="absolute top-2 right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}

              {images.length < 6 && (
                <label className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-primary transition-colors cursor-pointer flex flex-col items-center justify-center gap-2">
                  <ImagePlus className="h-8 w-8 text-muted-foreground" />
                  <span className="text-muted-foreground text-sm">Add Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </Card>

          {/* Basic Information */}
          <Card className="p-6">
            <h2 className="mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  placeholder="e.g., Reclaimed Oak Hardwood Flooring - 500 sq ft"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your materials including condition, specifications, and any relevant information..."
                  className="mt-2"
                  rows={6}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select>
                    <SelectTrigger id="category" className="mt-2">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lumber">Lumber & Wood</SelectItem>
                      <SelectItem value="bricks">Bricks & Blocks</SelectItem>
                      <SelectItem value="tools">Tools</SelectItem>
                      <SelectItem value="doors">Doors & Windows</SelectItem>
                      <SelectItem value="paint">Paint & Finishes</SelectItem>
                      <SelectItem value="equipment">Equipment</SelectItem>
                      <SelectItem value="plumbing">Plumbing</SelectItem>
                      <SelectItem value="electrical">Electrical</SelectItem>
                      <SelectItem value="roofing">Roofing</SelectItem>
                      <SelectItem value="flooring">Flooring</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Condition *</Label>
                  <RadioGroup defaultValue="good" className="mt-2 space-y-2">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="excellent" id="excellent" />
                      <Label htmlFor="excellent" className="cursor-pointer">
                        Excellent - Like new
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="good" id="good" />
                      <Label htmlFor="good" className="cursor-pointer">
                        Good - Minor wear
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fair" id="fair" />
                      <Label htmlFor="fair" className="cursor-pointer">
                        Fair - Visible wear
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </Card>

          {/* Specifications */}
          <Card className="p-6">
            <h2 className="mb-4">Specifications (Optional)</h2>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="material">Material Type</Label>
                  <Input
                    id="material"
                    placeholder="e.g., Oak, Steel, Concrete"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    placeholder="e.g., 500 sq ft, 1000 pieces"
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="dimensions">Dimensions</Label>
                  <Input
                    id="dimensions"
                    placeholder={`e.g., 4' x 8', 2" x 4" x 8'`}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight/Volume</Label>
                  <Input
                    id="weight"
                    placeholder="e.g., 200 lbs, 5 cubic yards"
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </Card>

          {/* Pricing & Location */}
          <Card className="p-6">
            <h2 className="mb-4">Pricing & Location</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="price">Price (USD) *</Label>
                <Input
                  id="price"
                  type="number"
                  placeholder="0"
                  className="mt-2"
                  required
                />
                <p className="text-muted-foreground text-sm mt-1">
                  Set a fair price based on the condition and market value
                </p>
              </div>

              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  placeholder="City, State"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="zipcode">ZIP Code *</Label>
                <Input
                  id="zipcode"
                  placeholder="12345"
                  className="mt-2"
                  required
                />
              </div>
            </div>
          </Card>

          {/* Submit Buttons */}
          <div className="flex gap-4">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 gap-2">
              <Upload className="h-4 w-4" />
              Publish Listing
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
