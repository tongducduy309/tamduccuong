import { Button } from "./ui/button";
import { VintageItemCard } from "./VintageItemCard";
import {
  ArrowLeft,
  Clock,
  Sparkles,
  History,
  Award,
  Filter,
  SortDesc,
} from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Badge } from "./ui/badge";

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

interface VintageItemsPageProps {
  items: VintageItem[];
  onBack: () => void;
  onItemClick: (id: string) => void;
}

export function VintageItemsPage({
  items,
  onBack,
  onItemClick,
}: VintageItemsPageProps) {
  const [filterEra, setFilterEra] = useState<string>("all");
  const [filterRarity, setFilterRarity] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const filteredItems = items.filter((item) => {
    if (filterEra !== "all" && item.era !== filterEra) return false;
    if (filterRarity !== "all" && item.rarity !== filterRarity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-amber-600" />
                <h1 className="text-amber-900">Vintage & Historical Items</h1>
              </div>
              <p className="text-sm text-muted-foreground">
                Discover architectural treasures with authentic historical value
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
            <Award className="h-4 w-4" />
            <span className="text-sm">Authenticated Historical Pieces</span>
          </div>
          <h2 className="mb-4 text-amber-900">
            Preserve History, Build with Character
          </h2>
          <p className="text-muted-foreground mb-6">
            Each vintage item in our collection tells a story. From Victorian-era
            stained glass to Art Deco fixtures, these authenticated pieces bring
            unique character and historical significance to your projects.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-amber-900 mb-1">{items.length}</div>
              <p className="text-sm text-muted-foreground">Rare Pieces</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-amber-900 mb-1">5+ Eras</div>
              <p className="text-sm text-muted-foreground">Time Periods</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-amber-200">
              <div className="text-amber-900 mb-1">100%</div>
              <p className="text-sm text-muted-foreground">Authenticated</p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="bg-white p-6 rounded-xl border border-amber-200 shadow-sm">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-amber-700" />
                <span className="text-sm">Filter by:</span>
              </div>

              <Select value={filterEra} onValueChange={setFilterEra}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Era" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Eras</SelectItem>
                  <SelectItem value="Victorian Era (1837-1901)">
                    Victorian Era
                  </SelectItem>
                  <SelectItem value="Art Deco (1920s-1930s)">Art Deco</SelectItem>
                  <SelectItem value="Mid-Century (1940s-1960s)">
                    Mid-Century
                  </SelectItem>
                  <SelectItem value="Early 20th Century">
                    Early 20th Century
                  </SelectItem>
                  <SelectItem value="Colonial Era (1700s-1800s)">
                    Colonial Era
                  </SelectItem>
                </SelectContent>
              </Select>

              <Select value={filterRarity} onValueChange={setFilterRarity}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Rarity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="Common">Common</SelectItem>
                  <SelectItem value="Uncommon">Uncommon</SelectItem>
                  <SelectItem value="Rare">Rare</SelectItem>
                  <SelectItem value="Very Rare">Very Rare</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 ml-auto">
                <SortDesc className="h-4 w-4 text-amber-700" />
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="era">Era (Oldest First)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Active Filters */}
            {(filterEra !== "all" || filterRarity !== "all") && (
              <div className="flex items-center gap-2 mt-4 pt-4 border-t border-amber-100">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {filterEra !== "all" && (
                  <Badge variant="outline" className="bg-amber-50">
                    {filterEra}
                  </Badge>
                )}
                {filterRarity !== "all" && (
                  <Badge variant="outline" className="bg-amber-50">
                    {filterRarity}
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setFilterEra("all");
                    setFilterRarity("all");
                  }}
                  className="text-xs"
                >
                  Clear all
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Items Grid */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <History className="h-5 w-5 text-amber-700" />
            <h3 className="text-amber-900">
              {filteredItems.length} Historical Piece
              {filteredItems.length !== 1 ? "s" : ""}
            </h3>
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-amber-200">
              <Sparkles className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <h3 className="mb-2 text-amber-900">No items found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters to see more results
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setFilterEra("all");
                  setFilterRarity("all");
                }}
                className="border-amber-300"
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <VintageItemCard
                  key={item.id}
                  {...item}
                  onClick={() => onItemClick(item.id)}
                />
              ))}
            </div>
          )}
        </section>

        {/* Info Section */}
        <section className="mt-16 bg-gradient-to-r from-amber-100 to-amber-50 p-8 rounded-xl border border-amber-200">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-8 w-8 text-amber-600 mx-auto mb-4" />
            <h3 className="mb-3 text-amber-900">Why Choose Vintage?</h3>
            <p className="text-muted-foreground mb-6">
              Vintage architectural elements offer unmatched quality, unique
              character, and environmental sustainability. Each piece is
              carefully authenticated and documented, ensuring you receive a
              genuine historical artifact for your project.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="mb-2 text-amber-900">Authentic Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Craftsmanship from eras when materials and construction methods
                  were built to last generations
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="mb-2 text-amber-900">Unique Character</h4>
                <p className="text-sm text-muted-foreground">
                  One-of-a-kind pieces that add distinctive charm impossible to
                  replicate with modern materials
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="mb-2 text-amber-900">Sustainable Choice</h4>
                <p className="text-sm text-muted-foreground">
                  Preserve architectural history while reducing environmental
                  impact through material reuse
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
