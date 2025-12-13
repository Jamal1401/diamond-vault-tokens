import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FAQAccordion } from "@/components/tokenisation/FAQAccordion";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import {
  ArrowRight,
  Download,
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
    answer: "Billiton utilizes institutional-grade blockchain infrastructure with enterprise security standards. Tokens are created on established networks with proven track records for security and regulatory compliance."
  },
  {
    question: "Where are tokens held?",
    answer: "Investors can hold tokens in Billiton's platform custody solution or transfer to designated external wallet solutions. Custody arrangements are designed with institutional security standards."
  },
  {
    question: "How does redemption work?",
    answer: "Token holders can redeem for underlying diamonds (subject to minimum thresholds) or exit through secondary markets where available. Redemption processes and timelines are specified in offering documentation."
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
              A transparent, end-to-end process managed by Billiton.
            </p>
            <Button variant="gold">
              <Download className="mr-2 w-5 h-5" />
              Download process overview
            </Button>
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
                "Provenance checks and ownership chain documentation"
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
                  "Jurisdictional requirements",
                  "Investor categorisation",
                  "Compliance framework setup"
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
                  Digital Asset Creation
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tokens are created on institutional-grade blockchain infrastructure using established 
                token standards. Each token maps 1:1 (or pro-rata) to diamonds or holding vehicles, 
                with supply controls linking inventory and tokens.
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
                  "Private placement to qualified investors",
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
                  "Buyback and redemption facilities"
                ]}
                index={1}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-card/50">
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
