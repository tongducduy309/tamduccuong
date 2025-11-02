import { MapPin, Heart } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
  onClick?: () => void;
}

export function ProductCard({
  title,
  price,
  location,
  imageUrl,
  condition,
  category,
  onClick,
}: ProductCardProps) {
  const conditionColors = {
    Excellent: "bg-green-100 text-green-800 hover:bg-green-100",
    Good: "bg-blue-100 text-blue-800 hover:bg-blue-100",
    Fair: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 bg-white/90 hover:bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="h-4 w-4" />
        </Button>
        <Badge className="absolute top-2 left-2" variant="secondary">
          {category}
        </Badge>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="line-clamp-2 flex-1">{title}</h3>
          <Badge className={conditionColors[condition]} variant="secondary">
            {condition}
          </Badge>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-primary">${price.toLocaleString()}</p>
          <Button size="sm" onClick={(e) => e.stopPropagation()}>Buy Now</Button>
        </div>
      </div>
    </Card>
  );
}
