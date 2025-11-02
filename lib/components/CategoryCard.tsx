import { LucideIcon } from "lucide-react";
import { Card } from "./ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: number;
  onClick?: () => void;
}

export function CategoryCard({ icon: Icon, title, count, onClick }: CategoryCardProps) {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group" onClick={onClick}>
      <div className="flex flex-col items-center text-center gap-3">
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="text-muted-foreground text-sm">{count} items</p>
        </div>
      </div>
    </Card>
  );
}
