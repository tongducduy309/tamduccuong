import { Search, Menu, Heart, User, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface HeaderProps {
  onUploadClick?: () => void;
  onLogoClick?: () => void;
  onProfileClick?: () => void;
  onVintageClick?: () => void;
}

export function Header({ onUploadClick, onLogoClick, onProfileClick, onVintageClick }: HeaderProps) {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={onLogoClick}>
            <img 
              src="images/logo.png"
              alt="ReBuild Logo" 
              className="h-24 w-auto"
            />
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-2xl relative">
            <Input
              type="search"
              placeholder="Search for materials, tools, equipment..."
              className="w-full pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <Button 
              variant="outline" 
              className="hidden lg:flex items-center gap-2 border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900"
              onClick={onVintageClick}
            >
              <Sparkles className="h-4 w-4" />
              <span>Vintage</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className="lg:hidden text-amber-600"
              onClick={onVintageClick}
              title="Vintage Items"
            >
              <Sparkles className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={onProfileClick}>
              <User className="h-5 w-5" />
            </Button>
            <Button onClick={onUploadClick}>Sell Materials</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </nav>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4 relative">
          <Input
            type="search"
            placeholder="Search materials..."
            className="w-full pl-10"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    </header>
  );
}
