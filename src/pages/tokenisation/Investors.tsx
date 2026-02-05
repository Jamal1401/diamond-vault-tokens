import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FeatureCard } from "@/components/tokenisation/FeatureCard";
import { ProcessStep } from "@/components/tokenisation/ProcessStep";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";

import { Link } from "react-router-dom";
import { useScrollToNextPage } from "@/hooks/useScrollToNextPage";
import {
  ArrowRight,
  Building2,
  Users,
  Briefcase,
  LayoutGrid,
  Shield,
  Eye,
  Layers,
  Gem,
  PieChart,
  FileStack,
  ClipboardCheck,
  FileText,
  CreditCard,
  Wallet,
  LineChart,
  AlertTriangle,
} from "lucide-react";

const investorTypes = [
  {
    icon: Building2,
    title: "Professional & Institutional",
    description: "Regulated entities and qualifying investors meeting professional criteria."
  },
  {
    icon: Users,
    title: "Family Offices & UHNW",
    description: "Private wealth structures seeking alternative asset exposure."
  },
  {
    icon: Briefcase,
    title: "Platforms & Intermediaries",
    description: "Digital asset platforms and wealth advisors distributing to end investors."
  },
];

const benefits = [
  {
    icon: LayoutGrid,
    title: "Standardised exposure",
    description: "Consistent, well-documented products with clear terms and structures."
  },
  {
    icon: Shield,
    title: "Third-party custody",
    description: "Independent vault and custody arrangements with segregated holdings."
  },
  {
    icon: Eye,
    title: "Transparent reporting",
    description: "Real-time visibility into holdings, provenance, and valuations."
  },
  {
    icon: Layers,
    title: "Fractional access",
    description: "Lower minimum investments enabling portfolio diversification."
  },
];

const investmentTypes = [
  {
    icon: Gem,
    title: "Single-stone or parcel ARVAs",
    description: "Direct exposure to specific certified diamonds or curated stone parcels via Asset-Referenced Virtual Assets.",
    isArva: true
  },
  {
    icon: PieChart,
    title: "Diamond pools / funds",
    description: "Diversified exposure across a managed portfolio of tokenised diamonds.",
    isArva: false
  },
];

const journeySteps = [
  { icon: ClipboardCheck, title: "Register & KYC" },
  { icon: FileText, title: "Review offerings" },
  { icon: CreditCard, title: "Subscribe" },
  { icon: Wallet, title: "Receive ARVAs", hasRwaBadge: true },
  { icon: LineChart, title: "Monitor & exit" },
];


const risks = [
  "Price volatility – diamond values can fluctuate",
  "Liquidity risk – secondary markets may be limited",
  "Regulatory changes – rules may vary by jurisdiction",
  "Operational risk – custody and technology considerations",
];

const Investors = () => {
  useScrollToNextPage();

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
              For Investors
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              Access curated, tokenised{" "}
              <span className="text-gradient-gold">diamond strategies.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              For professional, qualified and institutional investors seeking 
              exposure to diamonds through Asset-Referenced Virtual Assets (ARVAs) — 
              <span className="inline-flex items-center gap-1.5 ml-1">
                <span className="px-2 py-0.5 text-xs font-semibold rounded bg-primary/20 text-primary border border-primary/30">RWA</span>
                <span className="text-muted-foreground">Real-World Asset tokens.</span>
              </span>
            </p>
            <a
              href="https://billitonauctions.com/consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero">
                Book a call
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Who this is for"
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {investorTypes.map((type, i) => (
              <FeatureCard
                key={type.title}
                icon={type.icon}
                title={type.title}
                description={type.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Benefits of tokenised diamonds"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <FeatureCard
                key={benefit.title}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What You Can Invest In */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="What you can invest in"
            subtitle="Billiton offers a range of ARVA products — regulated RWA tokens — tailored to different investor needs."
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {investmentTypes.map((type, i) => (
              <div key={type.title} className="relative">
                {type.isArva && (
                  <div className="absolute -top-2 -right-2 z-10">
                    <span className="px-2 py-1 text-[10px] font-bold rounded bg-primary text-primary-foreground shadow-md">
                      RWA
                    </span>
                  </div>
                )}
                <FeatureCard
                  icon={type.icon}
                  title={type.title}
                  description={type.description}
                  index={i}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Journey */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Investor journey"
          />

          <div className="flex flex-wrap justify-center gap-2 md:gap-0">
            {journeySteps.map((step, i) => (
              <ProcessStep
                key={step.title}
                step={i + 1}
                icon={step.icon}
                title={step.title}
                isLast={i === journeySteps.length - 1}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Risk & Eligibility */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Risk & eligibility"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  Key risks
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 font-medium">
                No guarantee of returns. Capital is at risk.
              </p>
              <ul className="space-y-3">
                {risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                    {risk}
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
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-medium text-foreground">
                  Eligibility
                </h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Jurisdictions:</span>
                  <br />Products available in select regulated markets
                </li>
                <li>
                  <span className="font-medium text-foreground">Investor categories:</span>
                  <br />Professional, qualified, and institutional investors only
                </li>
                <li className="pt-2">
                  <Link to="#" className="text-primary hover:underline text-sm">
                    View full risk and legal disclosures →
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
};

export default Investors;
