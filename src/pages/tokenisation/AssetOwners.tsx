import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FeatureCard } from "@/components/tokenisation/FeatureCard";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import {
  ArrowRight,
  LockKeyhole,
  Users,
  Clock,
  FileCheck,
  Shield,
  Database,
  Coins,
  BarChart3,
  Building2,
  Gem,
  Vault,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const issuanceSteps = [
  {
    step: 1,
    icon: FileCheck,
    title: "Initial assessment & structuring workshop",
    description: "We review your diamond holdings and discuss optimal structures for your goals."
  },
  {
    step: 2,
    icon: Shield,
    title: "Due diligence on diamonds and ownership",
    description: "Verification of certificates, provenance, and legal ownership rights."
  },
  {
    step: 3,
    icon: Database,
    title: "Legal / vehicle / regulatory setup",
    description: "Establish the appropriate legal structures and regulatory framework."
  },
  {
    step: 4,
    icon: Vault,
    title: "Vaulting, insurance, and data standardisation",
    description: "Secure custody arrangements with comprehensive insurance coverage."
  },
  {
    step: 5,
    icon: Coins,
    title: "Token issuance and primary offering",
    description: "Digital token creation and distribution via Billiton's platform or network."
  },
  {
    step: 6,
    icon: BarChart3,
    title: "Ongoing reporting and corporate actions",
    description: "Continuous NAV updates, investor reporting, and lifecycle management."
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Mining company tokenising long-term stock",
    description: "Convert inventory holdings into working capital while maintaining upside exposure."
  },
  {
    icon: Users,
    title: "Family office monetising a collection",
    description: "Access liquidity from generational holdings without full divestment."
  },
  {
    icon: Vault,
    title: "Vault provider offering tokenised access",
    description: "Create new revenue streams by enabling client tokenisation services."
  },
];

const AssetOwners = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    role: "",
    email: "",
    inventoryValue: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form submitted",
      description: "Our team will respond within 2 business days.",
    });
    setFormData({
      name: "",
      organisation: "",
      role: "",
      email: "",
      inventoryValue: "",
      description: "",
    });
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
              For Asset Owners
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Unlock liquidity from{" "}
              <span className="text-gradient-gold">diamond holdings.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Use Billiton's platform to tokenise your inventory or collection, 
              accessing new capital and broader distribution without full divestment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero">
                Speak to our team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="hero-outline">
                Submit project details
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Challenges we solve"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={LockKeyhole}
              title="Illiquid inventory in vaults"
              description="Valuable diamonds sitting idle, tying up capital that could be working for your business."
              index={0}
            />
            <FeatureCard
              icon={Users}
              title="Narrow buyer universe"
              description="Limited access to investors and buyers outside traditional diamond trading channels."
              index={1}
            />
            <FeatureCard
              icon={Clock}
              title="Complex exits or succession"
              description="Challenging liquidity events for large collections or generational holdings."
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Solution Overview */}
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
                Billiton combines deep industry expertise, advanced inventory management, 
                and institutional-grade digital asset infrastructure to design and launch 
                tokenised diamond products tailored to your needs.
              </p>

              <ul className="space-y-4">
                {[
                  "Liquidity events on your timeline, not the market's",
                  "Broader distribution to qualified professional investors",
                  "Structured products that preserve optionality and upside exposure",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Issuance Flow */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Issuance process"
            subtitle="From initial assessment to ongoing management."
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {issuanceSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 flex-shrink-0">
                  <span className="text-primary font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-foreground mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Use cases"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {useCases.map((useCase, i) => (
              <FeatureCard
                key={useCase.title}
                icon={useCase.icon}
                title={useCase.title}
                description={useCase.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Onboarding requirements"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <h3 className="font-display text-xl font-medium text-foreground mb-6">
                What we need from you
              </h3>
              <ul className="space-y-3">
                {[
                  "KYB/KYC documentation",
                  "Inventory list with certificates",
                  "Target issuance size",
                  "Preferred jurisdictions",
                  "Ownership structure details",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <h3 className="font-display text-xl font-medium text-foreground mb-6">
                What you get from Billiton
              </h3>
              <ul className="space-y-3">
                {[
                  "Structure design and optimisation",
                  "Full documentation preparation",
                  "Platform and technology infrastructure",
                  "Investor distribution network",
                  "Ongoing reporting and lifecycle support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Get started"
              subtitle="Tell us about your project and our team will be in touch."
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
                <Label htmlFor="inventoryValue">Approximate inventory value</Label>
                <Input
                  id="inventoryValue"
                  placeholder="e.g., $5M - $10M"
                  value={formData.inventoryValue}
                  onChange={(e) => setFormData({ ...formData, inventoryValue: e.target.value })}
                  className="bg-secondary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Describe your situation</Label>
                <Textarea
                  id="description"
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-secondary/50"
                />
              </div>

              <Button variant="gold" type="submit" className="w-full">
                Submit
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
