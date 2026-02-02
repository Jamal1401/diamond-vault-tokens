import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTABandProps {
  title: string;
  subtitle?: string;
  primaryCTA: string;
  secondaryCTA?: string;
  onSecondaryCTA?: () => void;
}

export const CTABand = ({ 
  title, 
  subtitle,
  primaryCTA, 
  secondaryCTA,
  onSecondaryCTA 
}: CTABandProps) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative py-20 md:py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15),_transparent_70%)]" />
      
      <div className="container relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://billitonauctions.com/consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gold" size="lg">
              {primaryCTA}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
          {secondaryCTA && (
            <Button variant="ghost" onClick={onSecondaryCTA} className="text-muted-foreground hover:text-foreground">
              {secondaryCTA}
            </Button>
          )}
        </div>
      </div>
    </motion.section>
  );
};
