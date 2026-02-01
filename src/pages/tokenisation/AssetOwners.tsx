import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FeatureCard } from "@/components/tokenisation/FeatureCard";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import { ConsultationDialog } from "@/components/tokenisation/ConsultationDialog";
import { useScrollToNextPage } from "@/hooks/useScrollToNextPage";
import {
  ArrowRight,
  Gem,
  Globe2,
  ShieldCheck,
  Zap,
  Scale,
  FileCheck,
  Shield,
  Vault,
  Coins,
  ListChecks,
  Users,
  Building2,
  Briefcase,
  CheckCircle2,
  LayoutDashboard,
  RefreshCw,
  HeadphonesIcon,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const challenges = [
  {
    icon: Gem,
    title: "Illiquid inventory",
    text: "Physical diamonds sitting in vaults or showrooms cannot be easily traded or financed, tokenisation converts them into instantly tradeable, globally accessible digital assets.",
  },
  {
    icon: Globe2,
    title: "Limited buyer reach",
    text: "Traditional auctions and B2B sales restrict access to local or niche buyers, the Web3 marketplace opens holdings to global RWA and crypto-native investors 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Trust and authenticity concerns",
    text: "Buyers struggle to verify provenance, grading and custody, each token is linked to certified stones in regulated, audited custody with immutable ownership records.",
  },
  {
    icon: Zap,
    title: "Operational and settlement friction",
    text: "Cross-border payments, invoicing, and delivery create delays and cost, on-chain settlement, stablecoin/fiat options, and token-based redemption streamline the full transaction lifecycle.",
  },
  {
    icon: Scale,
    title: "Regulatory and compliance complexity",
    text: "Navigating VARA/DMCC rules, proof-of-reserve, and audits is difficult for merchants alone, the platform embeds compliant issuance, custody, and reporting frameworks into a single infrastructure.",
  },
];

const issuanceSteps = [
  {
    step: 1,
    icon: FileCheck,
    title: "Sourcing & Selection",
    description: "Submit your certified diamond inventory for initial assessment and selection.",
  },
  {
    step: 2,
    icon: Shield,
    title: "Certification",
    description: "We verify provenance, ownership, and validate existing GIA/IGI lab certifications.",
  },
  {
    step: 3,
    icon: Scale,
    title: "Legal Structure",
    description: "Establish the compliant legal framework for tokenisation under VARA/DMCC regulations.",
  },
  {
    step: 4,
    icon: Coins,
    title: "Token Issuance",
    description: "Regulated digital tokens (ARVAs) are minted representing the underlying assets.",
  },
  {
    step: 5,
    icon: ListChecks,
    title: "Marketplace Listing",
    description: "Tokens are listed for qualified investors, with custody triggered based on your chosen model.",
  },
];

const ongoingServices = [
  {
    icon: LayoutDashboard,
    title: "Portfolio Dashboard & Reporting",
    description: "Real-time NAV updates, transaction history, and comprehensive investor reporting.",
  },
  {
    icon: RefreshCw,
    title: "Redemption & Liquidity Options",
    description: "Flexible redemption mechanisms and secondary market access for token holders.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support for Additional Tranches",
    description: "Streamlined process to tokenise additional assets as your portfolio grows.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Manufacturers",
    description: "Convert certified inventory into liquid digital assets, enabling working capital access without full divestment while maintaining exposure to price appreciation.",
    hasRwaBadge: false,
  },
  {
    icon: Briefcase,
    title: "Traders",
    description: "Tokenise stock for faster settlement, reduced counterparty risk, and access to a global base of qualified buyers through regulated digital infrastructure.",
    hasRwaBadge: false,
  },
  {
    icon: Users,
    title: "Institutional Investors",
    description: "Gain transparent, fractional exposure to certified diamonds as an uncorrelated asset class with on-chain provenance and regulated custody.",
    hasRwaBadge: true,
  },
];

const onboardingRequirements = [
  "KYC/AML documentation as per DMCC regulations for precious stones",
  "Existing GIA, IGI, or equivalent lab certifications",
  "Minimum asset value threshold (contact us for details)",
  "Agreement to custody and tokenisation terms",
];

const AssetOwners = () => {
  useScrollToNextPage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    role: "",
    email: "",
    inventoryValue: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.functions.invoke("save-asset-owner-inquiry", {
        body: {
          name: formData.name,
          organisation: formData.organisation,
          role: formData.role,
          email: formData.email,
          inventoryValue: formData.inventoryValue,
          description: formData.description,
        },
      });

      if (error) throw error;

      toast({
        title: "Assessment request submitted",
        description: "Our team will contact you within 2 business days.",
      });
      setFormData({
        name: "",
        organisation: "",
        role: "",
        email: "",
        inventoryValue: "",
        description: "",
      });
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.08),_transparent_50%)]" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              For Asset Holders
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Unlock liquidity from{" "}
              <span className="text-gradient-gold">diamond holdings.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Tokenising your diamond inventory into compliant, vault-backed digital assets, we unlock liquidity: you can access global buyers, faster settlement, and flexible ownership options while your gems stay securely stored.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero">
                Request Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <ConsultationDialog>
                <Button variant="hero-outline">
                  Schedule Onboarding Call
                </Button>
              </ConsultationDialog>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges We Solve */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Challenges we solve"
          />

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    {/* Icon with gradient ring effect */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                        <challenge.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {challenge.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {challenge.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Our solution"
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                Billiton's platform tokenises <span className="text-foreground font-medium">certified diamonds and gemstones</span> into <span className="text-foreground font-medium">compliant digital assets</span> that can be bought, sold, and redeemed through a <span className="text-foreground font-medium">regulated marketplace</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our <span className="text-foreground font-medium">institutional-grade infrastructure</span> connects merchants to a rapidly expanding <span className="text-foreground font-medium">Web3 and real-world asset (RWA) ecosystem</span>, where tokenised luxury assets like diamonds are a natural fit for on-chain portfolios.
              </p>

              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">Liquidity events on your timeline</span> through primary issuance and secondary trading of tokenised stones, without disrupting existing vault or on-premise custody arrangements.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">Transparent, market-driven price discovery</span> for each certified stone via a digital listing, bidding, and settlement environment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">Access to a global pool</span> of professional, crypto-native, and RWA-focused investors as capital increasingly moves into tokenised real-world assets.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="text-foreground font-medium">Continue holding the underlying diamonds</span> in secure, audited custody while participating in the future of RWAs on-chain through tradeable, redeemable digital tokens.
                  </span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Issuance Process */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Issuance process"
            subtitle="From sourcing to token listing—aligned with both tokenisation models."
          />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary to-primary/50 hidden md:block" />
              
              <div className="space-y-6">
                {issuanceSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-6 relative"
                  >
                    {/* Step number circle */}
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-sm flex-shrink-0 z-10">
                      {step.step}
                    </div>
                    
                    <div className="flex-1 p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                          <step.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-display text-lg font-medium text-foreground mb-1">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Initial Assessment to Ongoing Management */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="From initial assessment to ongoing management"
            subtitle="Continuous monitoring, compliance, and custody throughout your tokenisation journey."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ongoingServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Use cases"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <div key={useCase.title} className="relative">
                {useCase.hasRwaBadge && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className="px-2 py-1 text-[10px] font-bold rounded bg-primary text-primary-foreground shadow-md">
                      RWA
                    </span>
                  </div>
                )}
                <FeatureCard
                  icon={useCase.icon}
                  title={useCase.title}
                  description={useCase.description}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Requirements */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Onboarding requirements"
            subtitle="Complete checklist to begin your tokenisation journey."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-card border border-border/50"
          >
            <ul className="space-y-4">
              {onboardingRequirements.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Ready to get started? Submit your details below and our team will guide you through the process.
              </p>
              <Button variant="gold">
                Request Assessment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Request assessment"
              subtitle="Tell us about your diamond holdings and our team will be in touch."
            />

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organisation">Organisation</Label>
                  <Input
                    id="organisation"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    required
                    className="bg-secondary/50"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Input
                    id="role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    required
                    className="bg-secondary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-secondary/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inventoryValue">Approximate asset value</Label>
                <Input
                  id="inventoryValue"
                  placeholder="e.g., $5M - $10M"
                  value={formData.inventoryValue}
                  onChange={(e) => setFormData({ ...formData, inventoryValue: e.target.value })}
                  className="bg-secondary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Describe your holdings</Label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Type of diamonds/gemstones, current storage arrangements, goals for tokenisation..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-secondary/50"
                />
              </div>

              <Button variant="gold" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Assessment Request"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AssetOwners;
