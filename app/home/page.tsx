"use client";
import { CategoryCard } from "@/lib/components/CategoryCard";
import { ProductCard } from "@/lib/components/ProductCard";
import { Button } from "@/lib/components/ui/button";
import Layout from "@/lib/layouts/(layout)/layout";
import {
  Hammer,
  Layers,
  Wrench,
  Home,
  Paintbrush,
  Box,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const categories = [
  { icon: Layers, title: "Lumber & Wood", count: 142 },
  { icon: Box, title: "Bricks & Blocks", count: 89 },
  { icon: Wrench, title: "Tools", count: 256 },
  { icon: Home, title: "Doors & Windows", count: 67 },
  { icon: Paintbrush, title: "Paint & Finishes", count: 45 },
  { icon: Hammer, title: "Equipment", count: 128 },
];

interface Product {
  id: string;
  title: string;
  price: number;
  location: string;
  imageUrl: string;
  condition: "Excellent" | "Good" | "Fair";
  category: string;
}

interface HomePageProps {
  products?: Product[];
  onProductClick: (id: string) => void;
  onUploadClick: () => void;
  onCategoryClick?: (category: string) => void;
  onVintageClick?: () => void;
}

export default function HomePage({ products, onProductClick, onUploadClick, onCategoryClick, onVintageClick }: HomePageProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-4">
              Find Quality Second-Hand Construction Materials
            </h1>
            <p className="text-muted-foreground mb-8">
              Save money and reduce waste by buying and selling pre-owned
              building materials, tools, and equipment. Join our sustainable
              construction community today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg">
                Browse Materials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={onUploadClick}>
                Sell Your Materials
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="mb-2">Browse by Category</h2>
            <p className="text-muted-foreground">
              Find exactly what you need for your next project
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <CategoryCard 
                key={category.title} 
                {...category} 
                onClick={() => onCategoryClick?.(category.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vintage Showcase */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-20" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full mb-4">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm">New Collection</span>
            </div>
            <h2 className="mb-4 text-amber-900">
              Discover Vintage & Historical Treasures
            </h2>
            <p className="text-muted-foreground mb-6">
              Explore our curated collection of authenticated architectural pieces
              from bygone eras. Each item carries unique historical value and
              timeless craftsmanship.
            </p>
            <Button 
              size="lg" 
              className="bg-amber-600 hover:bg-amber-700 text-white"
              onClick={onVintageClick}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Browse Vintage Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Authenticated Pieces</h4>
              <p className="text-sm text-muted-foreground">
                Every vintage item is verified for authenticity and historical
                significance
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Home className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Unique Character</h4>
              <p className="text-sm text-muted-foreground">
                One-of-a-kind architectural elements impossible to replicate
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border-2 border-amber-200 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 text-amber-900">Investment Value</h4>
              <p className="text-sm text-muted-foreground">
                Historical pieces that appreciate in value over time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="mb-2">Featured Listings</h2>
              <p className="text-muted-foreground">
                Recently added materials in great condition
              </p>
            </div>
            <Button variant="ghost">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onClick={() => onProductClick(product.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Have Materials to Sell?</h2>
            <p className="mb-8 opacity-90">
              List your unused construction materials, tools, and equipment.
              Help others save money while earning from items you no longer
              need.
            </p>
            <Button size="lg" variant="secondary" onClick={onUploadClick}>
              Start Selling Today
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="mb-4">About</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Safety Tips
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Categories</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Lumber
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Tools
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Equipment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4">Legal</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © 2025 TDC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </Layout>
  );
}
