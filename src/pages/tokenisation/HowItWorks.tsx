import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FAQAccordion } from "@/components/tokenisation/FAQAccordion";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import { ConsultationDialog } from "@/components/tokenisation/ConsultationDialog";
import { VaultBasedDiagram, OnPremiseDiagram } from "@/components/tokenisation/TokenLifecycleDiagram";
import {
  ArrowRight,
  Diamond,
  FileCheck,
  Vault,
  Scale,
  Coins,
  Users,
  RefreshCcw,
  Search,
  ShieldCheck,
  FileText,
  Database,
  Building,
  CheckCircle2,
  AlertCircle,
  Flame,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PhaseCardProps {
  icon: LucideIcon;
  title: string;
  items: string[];
  index: number;
}

const PhaseCard = ({ icon: Icon, title, items, index }: PhaseCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="p-8 rounded-2xl bg-gradient-card border border-border/50"
  >
    <div className="flex items-center gap-4 mb-6">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-display text-xl font-medium text-foreground">
        {title}
      </h3>
    </div>
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground">
          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const processSteps = [
  { icon: Search, label: "Sourcing & Selection" },
  { icon: FileCheck, label: "Certification" },
  { icon: Vault, label: "Vaulting" },
  { icon: Scale, label: "Legal Structure" },
  { icon: Coins, label: "Token Issuance" },
  { icon: Users, label: "Distribution" },
  { icon: RefreshCcw, label: "Trading & Redemption" },
];

const faqs = [
  {
    question: "How long does the tokenisation process take?",
    answer: "Timelines vary based on structure complexity, diamond inventory size, and regulatory requirements. Typical projects range from 3-6 months from initial assessment to token issuance."
  },
  {
    question: "What are the costs involved?",
    answer: "Costs include structuring and legal fees, vaulting and insurance, technology and platform fees, and ongoing administration. We provide detailed fee estimates during the initial assessment phase."
  },
  {
    question: "What technology underlies the tokens?",
    answer: "Billiton utilizes institutional-grade blockchain infrastructure with enterprise security standards. Tokens are issued as Asset-Referenced Virtual Assets (ARVAs) on established networks with proven track records for security and regulatory compliance."
  },
  {
    question: "Where are tokens held?",
    answer: "Investors can hold tokens in Billiton's platform custody solution or transfer to designated external wallet solutions. Custody arrangements are designed with institutional security standards."
  },
  {
    question: "How does redemption work?",
    answer: "Token holders can redeem for underlying diamonds (subject to minimum thresholds) or exit through secondary markets where available. Upon redemption, the corresponding token is burned, removing it from circulation. Redemption processes and timelines are specified in offering documentation."
  },
  {
    question: "Which tokenisation model is right for me?",
    answer: "The Vault-Based Model offers maximum security and compliance assurance, ideal for those prioritising institutional-grade custody. The On-Premise Model provides flexibility for merchants wanting to tokenise from existing infrastructure while maintaining inventory control. Our team will help determine the best fit during the initial assessment."
  },
];

const HowItWorks = () => {
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
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              How It Works
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              From certified stones to{" "}
              <span className="text-gradient-gold">regulated tokens.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              A transparent, end-to-end process creating Asset-Referenced Virtual Assets (ARVAs) backed 1:1 by physical diamonds.
            </p>
            <ConsultationDialog>
              <Button variant="gold">
                Book a consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </ConsultationDialog>
          </motion.div>
        </div>
      </section>

      {/* High-Level Diagram */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="The tokenisation pipeline"
          />

          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-2 md:gap-4 min-w-max px-4">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-card border border-border/50 flex items-center justify-center mb-2">
                      <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-foreground max-w-[80px] md:max-w-[100px]">
                      {step.label}
                    </span>
                  </div>
                  {i < processSteps.length - 1 && (
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground mx-2 md:mx-4 flex-shrink-0" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Tokenisation Models */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Two tokenisation models"
            subtitle="Choose the approach that best fits your operational requirements and compliance preferences."
          />

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Model 1: Vault-Based */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-primary/30 relative overflow-hidden"
            >
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                  Recommended
                </span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Vault className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    Model 1: Vault-Based
                  </h3>
                  <p className="text-sm text-muted-foreground">Centralised Custody</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tokenisation occurs only when diamonds are held within a predefined and verified vault. 
                The vault serves as the central point of custody, verification, and proof of reserve.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Key Process
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Transfer diamonds to approved vaulting facility",
                      "Physical verification and inventory system entry",
                      "Token minting upon successful verification",
                      "Trade or redeem via the platform",
                      "Token burning upon physical redemption"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Advantages
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Every token backed by a verified diamond",
                      "Simplified proof-of-reserve and compliance",
                      "Third-party custody enhances buyer confidence",
                      "Reduced operational risk"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Model 2: On-Premise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Building className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-foreground">
                    Model 2: On-Premise
                  </h3>
                  <p className="text-sm text-muted-foreground">Merchant Custody</p>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tokens are minted while diamonds remain on the merchant's premises, integrated through 
                API connection. However, ARVAs are only created upon sale when goods are transferred to the custodian.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <Database className="w-4 h-4 text-primary" />
                    Key Process
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Mint tokens via inventory management system",
                      "Daily reconciliation and inventory accuracy maintained",
                      "Upon sale, diamonds transfer to custodian vault",
                      "ARVA created once goods are with the custodian",
                      "ARVA sent to buyer upon settlement"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    Advantages
                  </h4>
                  <ul className="space-y-2">
                    {[
                      "Lower entry barrier for merchants",
                      "Phased adoption with partial inventory",
                      "Reduced logistical burden initially",
                      "Faster marketplace participation"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ARVA Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12 p-6 rounded-xl bg-primary/5 border border-primary/20"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Coins className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">What is an ARVA?</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Asset-Referenced Virtual Assets (ARVAs) are digital tokens that represent ownership of physical diamonds. 
                  Each ARVA is backed 1:1 by a certified, vaulted diamond, ensuring traceability and transparency on the blockchain ledger. 
                  ARVAs can be bought, sold, or redeemed for their physical counterparts.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Lifecycle Diagrams */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Lifecycle flow diagrams"
            subtitle="Visual representation of how diamonds move through each tokenisation model."
          />

          {/* Token vs ARVA Legend */}
          <div className="max-w-4xl mx-auto mb-10 p-5 rounded-xl bg-muted/30 border border-border/50">
            <h4 className="text-sm font-medium text-foreground mb-4 text-center">Understanding the Difference</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Coins className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium text-foreground text-sm mb-1">Token</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A digital representation minted on the blockchain. In the On-Premise model, tokens can exist before the physical asset is with the custodian.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="w-10 h-10 rounded-lg bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Diamond className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="font-medium text-foreground text-sm mb-1">ARVA (Asset-Referenced Virtual Asset)</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A fully-backed token where the physical diamond is verified and held by the custodian. ARVAs are always 1:1 backed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8 max-w-6xl mx-auto">
            <VaultBasedDiagram />
            <OnPremiseDiagram />
          </div>

          {/* Key Differences Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Vault className="w-5 h-5 text-primary" />
                Vault-Based Key Point
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Diamonds must be physically transferred to the vault <strong className="text-foreground">before</strong> tokenisation. 
                This ensures every ARVA is backed by a verified, secured asset from day one.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-muted/50 border border-border/50">
              <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                <Building className="w-5 h-5 text-primary" />
                On-Premise Key Point
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tokens are minted <strong className="text-foreground">while diamonds remain with the merchant</strong>, but 
                ARVAs are only created <strong className="text-foreground">upon sale</strong> when goods are transferred to the custodian.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Token Lifecycle */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Token lifecycle"
            subtitle="From minting to burning, every stage is tracked and verifiable."
          />

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Coins className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Minting</h3>
              <p className="text-sm text-muted-foreground">
                Token created when diamond is verified and enters the custody system. 
                Supply directly linked to physical inventory.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <RefreshCcw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Trading</h3>
              <p className="text-sm text-muted-foreground">
                Tokens can be traded on the marketplace. Ownership transfers are recorded immutably 
                on the blockchain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-card border border-border/50 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Burning</h3>
              <p className="text-sm text-muted-foreground">
                Token permanently destroyed upon physical redemption or sale outside the ecosystem. 
                Ensures 1:1 backing integrity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phase 1: Asset Intake */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                1
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Asset intake
              </h2>
            </motion.div>

            <PhaseCard
              icon={Diamond}
              title="Sourcing & Verification"
              items={[
                "Selection of eligible diamonds or parcels based on quality and market criteria",
                "Verification of GIA, HRD, or other recognized certificates",
                "Provenance checks and ownership chain documentation",
                "Inventory data entered into management system"
              ]}
              index={0}
            />
          </div>
        </div>
      </section>

      {/* Phase 2: Structuring */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                2
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Structuring & compliance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <PhaseCard
                icon={Scale}
                title="Legal Entities"
                items={[
                  "Vehicle design (SPV, fund, trust)",
                  "Rights and obligations mapping",
                  "Investor protection mechanisms"
                ]}
                index={0}
              />
              <PhaseCard
                icon={ShieldCheck}
                title="Regulatory Analysis"
                items={[
                  "VARA compliance framework",
                  "Investor categorisation",
                  "KYC/AML requirements"
                ]}
                index={1}
              />
              <PhaseCard
                icon={FileText}
                title="Documentation"
                items={[
                  "Offering memoranda",
                  "Terms and conditions",
                  "Risk disclosures"
                ]}
                index={2}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Token Issuance */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                3
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Token issuance
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-card border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground">
                  ARVA Creation
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Asset-Referenced Virtual Assets are created on institutional-grade blockchain infrastructure. 
                Each token maps 1:1 to verified diamonds, with supply controls ensuring complete backing at all times.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Enterprise-grade security standards",
                  "Immutable ownership records",
                  "Proof-of-reserve mechanisms",
                  "Controlled token supply management"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Phase 4: Distribution & Lifecycle */}
      <section className="py-20 md:py-28 bg-card/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold">
                4
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-foreground">
                Distribution & lifecycle
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              <PhaseCard
                icon={Users}
                title="Primary Distribution"
                items={[
                  "Marketplace listing and visibility",
                  "Platform allocation and subscription",
                  "Distribution partner network access"
                ]}
                index={0}
              />
              <PhaseCard
                icon={RefreshCcw}
                title="Ongoing Lifecycle"
                items={[
                  "NAV calculation and reporting",
                  "Corporate actions management",
                  "Physical redemption and token burning"
                ]}
                index={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container">
          <SectionHeading
            title="Process FAQs"
          />

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;