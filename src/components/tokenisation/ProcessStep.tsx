import { LucideIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  icon: LucideIcon;
  title: string;
  description?: string;
  isLast?: boolean;
  index?: number;
}

export const ProcessStep = ({ 
  step, 
  icon: Icon, 
  title, 
  description,
  isLast = false,
}: ProcessStepProps) => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center text-center">
        {/* Step number badge */}
        <div className="relative">
          {/* Main icon container */}
          <div className="w-18 h-18 md:w-22 md:h-22 rounded-2xl bg-card border-2 border-border flex items-center justify-center relative overflow-hidden">
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
            <Icon className="w-8 h-8 md:w-9 md:h-9 text-primary relative z-10" />
          </div>
          
          {/* Step number */}
          <div className="absolute -top-2 -left-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shadow-lg">
            {step}
          </div>
        </div>
        
        {/* Title */}
        <h4 className="mt-4 font-semibold text-foreground text-sm md:text-base max-w-[130px] leading-tight">
          {title}
        </h4>
        
        {description && (
          <p className="mt-2 text-xs text-muted-foreground max-w-[150px] leading-relaxed">
            {description}
          </p>
        )}
      </div>
      
      {/* Connector arrow */}
      {!isLast && (
        <div className="flex items-center mx-3 md:mx-6">
          <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-border to-primary/40" />
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary/60 -ml-1" />
        </div>
      )}
    </div>
  );
};
