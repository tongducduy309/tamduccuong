import { useState } from "react";
import { MapPin, Heart, Share2, AlertCircle, ArrowLeft, ShoppingCart, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition?: "Excellent" | "Good" | "Fair";
  category: string;
  description?: string;
  seller?: {
    name: string;
    avatar?: string;
    memberSince: string;
    rating: number;
  };
  specifications?: { label: string; value: string }[];
  additionalImages?: string[];
  // Vintage item specific fields
  era?: string;
  rarity?: "Common" | "Uncommon" | "Rare" | "Very Rare";
  historicalValue?: string;
}

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
  onSellerClick?: () => void;
  onBuyNow?: () => void;
}

export function ProductDetailPage({ product, onBack, onSellerClick, onBuyNow }: ProductDetailPageProps) {
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);

  const images = [product.imageUrl, ...(product.additionalImages || [])];

  const conditionColors = {
    Excellent: "bg-green-100 text-green-800 hover:bg-green-100",
    Good: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    Fair: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  };

  const rarityColors = {
    Common: "bg-slate-100 text-slate-800 hover:bg-slate-100",
    Uncommon: "bg-green-100 text-green-800 hover:bg-green-100",
    Rare: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    "Very Rare": "bg-amber-100 text-amber-800 hover:bg-amber-100",
  };

  const isVintage = !!product.rarity;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Listings
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
              <ImageWithFallback
                src={selectedImage}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <Button size="icon" variant="secondary">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === img ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                {isVintage && (
                  <Badge className="bg-amber-600 text-white hover:bg-amber-700">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Vintage Item
                  </Badge>
                )}
                <Badge variant="secondary">
                  {product.category}
                </Badge>
              </div>
              <h1 className="mb-2">{product.title}</h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{product.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-primary">
                  ${product.price.toLocaleString()}
                </p>
                {isVintage && product.rarity ? (
                  <>
                    <Badge className={rarityColors[product.rarity]} variant="secondary">
                      {product.rarity}
                    </Badge>
                    {product.era && (
                      <Badge variant="outline" className="bg-amber-50 text-amber-900 border-amber-300">
                        {product.era}
                      </Badge>
                    )}
                  </>
                ) : (
                  product.condition && (
                    <Badge className={conditionColors[product.condition]} variant="secondary">
                      {product.condition} Condition
                    </Badge>
                  )
                )}
              </div>
            </div>

            <Separator className="my-6" />

            {/* Description */}
            <div className="mb-6">
              <h3 className="mb-3">{isVintage ? "Historical Value" : "Description"}</h3>
              <p className="text-muted-foreground">
                {isVintage 
                  ? product.historicalValue 
                  : (product.description ||
                    "High-quality second-hand construction materials in great condition. Perfect for your next building or renovation project. All items have been carefully inspected and are ready for immediate use. Serious buyers only.")}
              </p>
            </div>

                        {/* Seller Info & Purchase */}
            <Card className="p-6">
              <h3 className="mb-4">Seller Information</h3>
              <div className="flex items-start gap-4 mb-6">
                <Avatar className="h-12 w-12 cursor-pointer" onClick={onSellerClick}>
                  <AvatarImage src={product.seller?.avatar} />
                  <AvatarFallback>
                    {product.seller?.name.charAt(0) || "S"}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 
                    className="hover:underline cursor-pointer" 
                    onClick={onSellerClick}
                  >
                    {product.seller?.name || "John Builder"}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Member since {product.seller?.memberSince || "2023"}
                  </p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="text-sm">⭐ {product.seller?.rating || "4.8"}</span>
                    <span className="text-muted-foreground text-sm">(24 reviews)</span>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-3">
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Price</span>
                    <span className="text-primary">${product.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Condition</span>
                    <span>{product.condition}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full gap-2" 
                  size="lg"
                  onClick={onBuyNow}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Buy Now
                </Button>
                
                <p className="text-muted-foreground text-xs text-center">
                  Secure checkout with buyer protection
                </p>
              </div>
            </Card>

            {/* Specifications */}
            {product.specifications && (
              <>
                <Separator className="my-6" />
                <div className="mb-6">
                  <h3 className="mb-3">Specifications</h3>
                  <div className="space-y-2">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="flex justify-between py-2">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span>{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            <Separator className="my-6" />

            {/* Safety Notice */}
            <Card className="p-4 bg-muted/50 mb-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="mb-1">Safety Tips</h4>
                  <p className="text-muted-foreground text-sm">
                    Always inspect items in person before purchasing. Meet in safe, public locations.
                    Never send payment before seeing the item.
                  </p>
                </div>
              </div>
            </Card>


          </div>
        </div>
      </div>
    </div>
  );
}
