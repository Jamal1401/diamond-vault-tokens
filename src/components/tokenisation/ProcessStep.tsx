import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";
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
  index = 0 
}: ProcessStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-card border border-border/50 flex items-center justify-center group hover:border-primary/50 transition-all">
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
          </div>
          <span className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
            {step}
          </span>
        </div>
        <h4 className="mt-4 font-medium text-foreground text-sm md:text-base max-w-[120px]">
          {title}
        </h4>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground max-w-[140px]">
            {description}
          </p>
        )}
      </div>
      {!isLast && (
        <ChevronRight className="w-5 h-5 text-muted-foreground mx-2 md:mx-4 flex-shrink-0" />
      )}
    </motion.div>
  );
};
