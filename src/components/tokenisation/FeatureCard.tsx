import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

export const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-colors duration-200",
        className
      )}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      
      <div className="relative">
        {/* Icon container with refined styling */}
        <div className="mb-5 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        
        <h3 className="font-display text-lg md:text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
