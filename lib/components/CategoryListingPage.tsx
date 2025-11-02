import { useState } from "react";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { ProductCard } from "./ProductCard";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
}

interface CategoryListingPageProps {
  category: string;
  products: Product[];
  onBack: () => void;
  onProductClick: (id: string) => void;
}

export function CategoryListingPage({
  category,
  products,
  onBack,
  onProductClick,
}: CategoryListingPageProps) {
  const [sortBy, setSortBy] = useState("recent");
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>("all");

  // Filter products by category
  const categoryProducts = products.filter((p) => p.category === category);

  // Apply filters
  let filteredProducts = [...categoryProducts];

  // Filter by condition
  if (selectedConditions.length > 0) {
    filteredProducts = filteredProducts.filter((p) =>
      selectedConditions.includes(p.condition)
    );
  }

  // Filter by price range
  if (priceRange !== "all") {
    filteredProducts = filteredProducts.filter((p) => {
      switch (priceRange) {
        case "under500":
          return p.price < 500;
        case "500to1000":
          return p.price >= 500 && p.price < 1000;
        case "1000to2000":
          return p.price >= 1000 && p.price < 2000;
        case "over2000":
          return p.price >= 2000;
        default:
          return true;
      }
    });
  }

  // Apply sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "recent":
      default:
        return 0;
    }
  });

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const clearFilters = () => {
    setSelectedConditions([]);
    setPriceRange("all");
    setSortBy("recent");
  };

  const activeFiltersCount =
    selectedConditions.length + (priceRange !== "all" ? 1 : 0);

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Sort By */}
      <div>
        <Label className="mb-3 block">Sort By</Label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      {/* Condition Filter */}
      <div>
        <Label className="mb-3 block">Condition</Label>
        <div className="space-y-3">
          {["Excellent", "Good", "Fair"].map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox
                id={`condition-${condition}`}
                checked={selectedConditions.includes(condition)}
                onCheckedChange={() => toggleCondition(condition)}
              />
              <Label
                htmlFor={`condition-${condition}`}
                className="cursor-pointer"
              >
                {condition}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div>
        <Label className="mb-3 block">Price Range</Label>
        <RadioGroup value={priceRange} onValueChange={setPriceRange}>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="price-all" />
              <Label htmlFor="price-all" className="cursor-pointer">
                All Prices
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="under500" id="price-under500" />
              <Label htmlFor="price-under500" className="cursor-pointer">
                Under $500
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="500to1000" id="price-500to1000" />
              <Label htmlFor="price-500to1000" className="cursor-pointer">
                $500 - $1,000
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1000to2000" id="price-1000to2000" />
              <Label htmlFor="price-1000to2000" className="cursor-pointer">
                $1,000 - $2,000
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="over2000" id="price-over2000" />
              <Label htmlFor="price-over2000" className="cursor-pointer">
                Over $2,000
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>

      {activeFiltersCount > 0 && (
        <>
          <Separator />
          <Button variant="outline" onClick={clearFilters} className="w-full">
            Clear All Filters
          </Button>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={onBack} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      {/* Page Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="mb-3">{category}</h1>
            <p className="text-muted-foreground">
              {sortedProducts.length} {sortedProducts.length === 1 ? "item" : "items"} available
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <Card className="p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h3>Filters</h3>
                {activeFiltersCount > 0 && (
                  <span className="text-sm text-muted-foreground">
                    ({activeFiltersCount})
                  </span>
                )}
              </div>
              <FilterPanel />
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {sortedProducts.length} {sortedProducts.length === 1 ? "result" : "results"}
              </p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-1 bg-primary text-primary-foreground rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                  </SheetHeader>
                  <div className="mt-6">
                    <FilterPanel />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {sortedProducts.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => onProductClick(product.id)}
                    className="cursor-pointer"
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            ) : (
              <Card className="p-12 text-center">
                <div className="max-w-md mx-auto">
                  <h3 className="mb-2">No items found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters or check back later for new listings in this category.
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear Filters
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
