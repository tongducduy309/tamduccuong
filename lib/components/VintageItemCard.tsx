import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Clock, MapPin, Star } from "lucide-react";

interface VintageItem {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  era: string;
  rarity: "Common" | "Uncommon" | "Rare" | "Very Rare";
  historicalValue: string;
  category: string;
}

interface VintageItemCardProps extends VintageItem {
  onClick: () => void;
}

export function VintageItemCard({
  title,
  price,
  location,
  imageUrl,
  era,
  rarity,
  historicalValue,
  onClick,
}: VintageItemCardProps) {
  const rarityColors = {
    Common: "bg-slate-100 text-slate-700 border-slate-300",
    Uncommon: "bg-green-100 text-green-700 border-green-300",
    Rare: "bg-blue-100 text-blue-700 border-blue-300",
    "Very Rare": "bg-amber-100 text-amber-700 border-amber-300",
  };

  return (
    <div
      className="group relative bg-card rounded-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      {/* Vintage Badge */}
      <div className="absolute top-3 left-3 z-10">
        <Badge className="bg-amber-600 text-white border-amber-700">
          <Star className="h-3 w-3 mr-1" />
          Vintage
        </Badge>
      </div>

      {/* Rarity Badge */}
      <div className="absolute top-3 right-3 z-10">
        <Badge className={`${rarityColors[rarity]} border`}>{rarity}</Badge>
      </div>

      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-amber-50">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ filter: "sepia(0.15) contrast(1.1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-5 bg-gradient-to-b from-amber-50/50 to-white">
        {/* Era Badge */}
        <div className="flex items-center gap-2 mb-2">
          <Clock className="h-4 w-4 text-amber-700" />
          <span className="text-sm text-amber-700">{era}</span>
        </div>

        <h3 className="mb-2 line-clamp-2 group-hover:text-amber-900 transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {historicalValue}
        </p>

        {/* Price and Location */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-amber-900">${price.toLocaleString()}</p>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{location}</span>
          </div>
        </div>

        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
          View Details
        </Button>
      </div>
    </div>
  );
}
