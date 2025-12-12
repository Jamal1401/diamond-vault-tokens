import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export const SectionHeading = ({ 
  title, 
  subtitle, 
  className,
  align = "center" 
}: SectionHeadingProps) => {
  return (
    <div className={cn(
      "mb-12",
      align === "center" && "text-center",
      className
    )}>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
