import { motion } from "framer-motion";
import {
  Diamond,
  Vault,
  Coins,
  Users,
  Flame,
  ArrowRight,
  ArrowDown,
  Building,
  FileCheck,
  ShoppingCart,
  Truck,
  TrendingUp,
  Target,
  BarChart3,
  Layers,
  Repeat,
} from "lucide-react";

interface FlowStepProps {
  icon: React.ElementType;
  label: string;
  sublabel?: string;
  highlight?: boolean;
  threshold?: boolean;
  delay?: number;
}

const FlowStep = ({ icon: Icon, label, sublabel, highlight, threshold, delay = 0 }: FlowStepProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="flex flex-col items-center text-center"
  >
    <div
      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-3 ${
        threshold
          ? "bg-amber-500/20 border-2 border-amber-500"
          : highlight
          ? "bg-primary/20 border-2 border-primary"
          : "bg-gradient-card border border-border/50"
      }`}
    >
      <Icon className={`w-7 h-7 md:w-8 md:h-8 ${threshold ? "text-amber-500" : highlight ? "text-primary" : "text-muted-foreground"}`} />
    </div>
    <span className="text-sm md:text-base font-medium text-foreground max-w-[100px]">{label}</span>
    {sublabel && (
      <span className={`text-xs mt-1 ${threshold ? "text-amber-500 font-medium" : "text-muted-foreground"}`}>{sublabel}</span>
    )}
  </motion.div>
);

const FlowArrow = ({ direction = "right", delay = 0 }: { direction?: "right" | "down"; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.3, delay }}
    viewport={{ once: true }}
    className={`flex items-center justify-center ${direction === "down" ? "py-2" : "px-2"}`}
  >
    {direction === "right" ? (
      <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-primary/60" />
    ) : (
      <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-primary/60" />
    )}
  </motion.div>
);

export const VaultBasedDiagram = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-primary/30"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Vault className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
            Subscription-based Model Flow
          </h3>
          <p className="text-sm text-muted-foreground">No Physical Custody Until 85%+ Subscribed</p>
        </div>
      </div>

      {/* Desktop Flow */}
      <div className="hidden md:block">
        {/* Phase 1: Tokenisation without custody */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 1: Tokenisation Without Physical Custody</p>
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FlowStep icon={Diamond} label="Diamond" sublabel="Merchant Inventory" delay={0} />
            <FlowArrow delay={0.1} />
            <FlowStep icon={FileCheck} label="Certification" sublabel="Verified Asset" delay={0.15} />
            <FlowArrow delay={0.2} />
            <FlowStep icon={Coins} label="Mint Token" sublabel="Token Created" highlight delay={0.25} />
            <FlowArrow delay={0.3} />
            <FlowStep icon={Users} label="Marketplace" sublabel="Open Subscription" delay={0.35} />
            <FlowArrow delay={0.4} />
            <FlowStep icon={Target} label="85% Threshold" sublabel="Subscription Target" threshold delay={0.45} />
          </div>
        </div>

        {/* Phase 2: Vault custody triggered */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 2: 85%+ Subscribed → Vault Custody Triggered</p>
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FlowStep icon={TrendingUp} label="≥85% Subscribed" sublabel="Threshold Met" threshold delay={0.5} />
            <FlowArrow delay={0.55} />
            <FlowStep icon={Truck} label="Transfer" sublabel="To Approved Vault" delay={0.6} />
            <FlowArrow delay={0.65} />
            <FlowStep icon={Vault} label="Vault Storage" sublabel="Proof of Reserve" highlight delay={0.7} />
            <FlowArrow delay={0.75} />
            <FlowStep icon={Diamond} label="ARVA Active" sublabel="Fully Backed" highlight delay={0.8} />
          </div>
        </div>

        {/* Phase 3: Public Exchange Trading */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 3: Public Exchange Availability</p>
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FlowStep icon={Diamond} label="ARVA Active" sublabel="Fully Backed" highlight delay={0.85} />
            <FlowArrow delay={0.9} />
            <FlowStep icon={BarChart3} label="Public Exchanges" sublabel="Listed & Tradable" highlight delay={0.95} />
            <FlowArrow delay={1.0} />
            <FlowStep icon={Repeat} label="Trading" sublabel="Buy/Sell 24/7" delay={1.05} />
            <FlowArrow delay={1.1} />
            <FlowStep icon={Layers} label="DeFi & Staking" sublabel="Yield Opportunities" delay={1.15} />
          </div>
        </div>
      </div>

      {/* Mobile Flow */}
      <div className="md:hidden space-y-4">
        <p className="text-xs text-muted-foreground text-center uppercase tracking-wider">Phase 1: Tokenisation (No Custody)</p>
        <div className="flex items-center justify-between">
          <FlowStep icon={Diamond} label="Diamond" sublabel="Inventory" delay={0} />
          <FlowArrow delay={0.1} />
          <FlowStep icon={Coins} label="Token" sublabel="Created" highlight delay={0.15} />
          <FlowArrow delay={0.2} />
          <FlowStep icon={Target} label="85%" sublabel="Target" threshold delay={0.25} />
        </div>
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 2: 85%+ → Vault</p>
          <div className="flex items-center justify-between">
            <FlowStep icon={TrendingUp} label="≥85%" sublabel="Subscribed" threshold delay={0.3} />
            <FlowArrow delay={0.35} />
            <FlowStep icon={Truck} label="Transfer" delay={0.4} />
            <FlowArrow delay={0.45} />
            <FlowStep icon={Vault} label="Vault" sublabel="Secured" highlight delay={0.5} />
          </div>
        </div>
        <div className="pt-4 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 3: Exchange Trading</p>
          <div className="flex items-center justify-between">
            <FlowStep icon={BarChart3} label="Exchanges" sublabel="Listed" highlight delay={0.55} />
            <FlowArrow delay={0.6} />
            <FlowStep icon={Repeat} label="Trade" sublabel="24/7" delay={0.65} />
            <FlowArrow delay={0.7} />
            <FlowStep icon={Layers} label="DeFi" sublabel="Staking" delay={0.75} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const DigitalTwinDiagram = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="p-6 md:p-8 rounded-2xl bg-gradient-card border border-border/50"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <Diamond className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
            Digital-Twin Model Flow
          </h3>
          <p className="text-sm text-muted-foreground">1:1 Token = Exact Certified Diamond</p>
        </div>
      </div>

      {/* Desktop Flow */}
      <div className="hidden md:block">
        {/* Phase 1: Digital Twin Creation */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 1: Digital Twin Creation (Token = Specific Diamond)</p>
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FlowStep icon={Diamond} label="Certified Diamond" sublabel="Unique Asset" delay={0} />
            <FlowArrow delay={0.1} />
            <FlowStep icon={FileCheck} label="Full Certification" sublabel="GIA/IGI Verified" delay={0.15} />
            <FlowArrow delay={0.2} />
            <FlowStep icon={Coins} label="Mint Digital Twin" sublabel="1:1 Representation" highlight delay={0.25} />
            <FlowArrow delay={0.3} />
            <FlowStep icon={Users} label="Marketplace" sublabel="Trade Digital Twin" delay={0.35} />
          </div>
        </div>

        {/* Phase 2: Physical Delivery Option */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 2: Optional Physical Delivery</p>
          <div className="flex items-center justify-center gap-2 lg:gap-4">
            <FlowStep icon={Users} label="Token Holder" sublabel="Elects Delivery" delay={0.4} />
            <FlowArrow delay={0.45} />
            <FlowStep icon={Vault} label="Vault Release" sublabel="Diamond Retrieved" highlight delay={0.5} />
            <FlowArrow delay={0.55} />
            <FlowStep icon={Flame} label="Token Burn" sublabel="Twin Destroyed" highlight delay={0.6} />
            <FlowArrow delay={0.65} />
            <FlowStep icon={Diamond} label="Physical Diamond" sublabel="Delivered to Holder" delay={0.7} />
          </div>
        </div>
      </div>

      {/* Mobile Flow */}
      <div className="md:hidden space-y-4">
        <p className="text-xs text-muted-foreground text-center uppercase tracking-wider">Phase 1: Digital Twin</p>
        <div className="flex items-center justify-between">
          <FlowStep icon={Diamond} label="Diamond" sublabel="Certified" delay={0} />
          <FlowArrow delay={0.1} />
          <FlowStep icon={FileCheck} label="Verify" sublabel="GIA/IGI" delay={0.15} />
          <FlowArrow delay={0.2} />
          <FlowStep icon={Coins} label="Twin" sublabel="1:1 Token" highlight delay={0.25} />
        </div>
        <div className="flex justify-center">
          <FlowArrow direction="down" delay={0.3} />
        </div>
        <div className="flex items-center justify-center">
          <FlowStep icon={Users} label="Marketplace" sublabel="Trade" delay={0.35} />
        </div>
        <div className="pt-6 border-t border-border/50">
          <p className="text-xs text-muted-foreground text-center mb-4 uppercase tracking-wider">Phase 2: Physical Delivery</p>
          <div className="flex items-center justify-between">
            <FlowStep icon={Flame} label="Burn" highlight delay={0.4} />
            <FlowArrow delay={0.45} />
            <FlowStep icon={Diamond} label="Delivery" sublabel="Physical" delay={0.5} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
