import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FeatureCard } from "@/components/tokenisation/FeatureCard";
import { ProcessStep } from "@/components/tokenisation/ProcessStep";
import { FAQAccordion } from "@/components/tokenisation/FAQAccordion";
import { CTABand } from "@/components/tokenisation/CTABand";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import { ConsultationDialog } from "@/components/tokenisation/ConsultationDialog";
import { Link } from "react-router-dom";
import { useScrollToNextPage } from "@/hooks/useScrollToNextPage";
import {
  ArrowRight,
  ArrowDown,
  Download,
  Building2,
  TrendingUp,
  Droplets,
  Eye,
  Users,
  ShieldCheck,
  Diamond,
  Vault,
  FileCheck,
  Coins,
  BarChart3,
  Gem,
  Package,
  PieChart,
  ShoppingCart,
} from "lucide-react";

const TokenisationHome = () => {
  useScrollToNextPage();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--primary)/0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(var(--primary)/0.05),_transparent_50%)]" />
        
        {/* Subtle ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side - Content */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium tracking-tight text-foreground leading-[1.15] mb-6">
                Bringing <span className="text-gradient-gold">Certified Diamonds</span> into the Digital Asset Era
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                <span className="text-foreground font-semibold">Dubai, DMCC</span> based Billiton Diamond, together with the UAE's leading tokenisation partner, are launching Dubai's first VARA‑regulated diamond tokenisation platform—unlocking liquidity for manufacturers, traders, and asset owners, introducing an institutional‑grade on‑chain asset class, and positioning the diamond market for a future‑ready digital financial ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <ConsultationDialog>
                  <Button variant="hero">
                    Book a consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </ConsultationDialog>
              </div>
            </div>

            {/* Right side - Pipeline graphic */}
            <div className="relative hidden lg:block">
              <div className="relative bg-card rounded-3xl border-2 border-border p-8 md:p-10">
                {/* Top Row: Diamonds → Sale */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  {/* Diamonds */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-2">
                      <Gem className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Diamonds</span>
                    <span className="text-xs text-muted-foreground">Certified stones</span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />

                  {/* Sale */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary/50 flex items-center justify-center mb-2">
                      <ShoppingCart className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Sale</span>
                    <span className="text-xs text-muted-foreground">Transaction</span>
                  </div>
                </div>

                {/* Split Arrow */}
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-8">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 bg-muted-foreground/30" />
                      <ArrowDown className="w-4 h-4 text-muted-foreground -mt-1" />
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-px h-4 bg-muted-foreground/30" />
                      <ArrowDown className="w-4 h-4 text-muted-foreground -mt-1" />
                    </div>
                  </div>
                </div>

                {/* Bottom Row: Vault & ARVAs */}
                <div className="flex items-center justify-center gap-8">
                  {/* Vault */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                      <Vault className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">Vault</span>
                    <span className="text-xs text-muted-foreground">Secure custody</span>
                  </div>

                  {/* ARVAs */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-2 ring-2 ring-primary/30">
                      <Coins className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">ARVAs</span>
                    <span className="text-xs text-muted-foreground">Digital assets</span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            title="Built for the Diamond Industry – Manufacturers, Traders and Institutional Investors."
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Diamond Manufacturers & Traders Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-card border-2 border-border hover:border-primary/40 transition-colors duration-200">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Diamond manufacturers and traders
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tokenisation transforms certified stones and inventory into liquid, tradeable digital assets, 
                  allowing manufacturers and traders to access global demand without moving goods until settlement.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  It reduces reliance on traditional brokers, cuts transaction and logistics costs, and supports 
                  new financing options such as inventory-backed credit and forward sales against tokenised stock.
                </p>
                <Link to="/tokenisation/asset-owners">
                  <Button variant="gold-outline">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Professional & Institutional Investors Card */}
            <div className="group relative p-8 md:p-10 rounded-3xl bg-card border-2 border-border hover:border-primary/40 transition-colors duration-200">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="relative">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                  Professional and institutional investors
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For professional investors, tokenised diamonds and gemstones provide fractional, transparent access 
                  to a historically illiquid asset class with on-chain provenance and certification.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tokens can be traded 24/7, integrated into portfolios alongside other RWAs, and used for 
                  diversification, yield strategies, or hedging, while retaining the option to redeem into physical 
                  stones via regulated custody.
                </p>
                <Link to="/tokenisation/investors">
                  <Button variant="gold-outline">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Tokenised Diamonds */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Why tokenised diamonds"
            subtitle="Tokenised diamonds are a gateway into a multi-trillion-dollar RWA ecosystem that is projected to surpass 9 trillion USD in tokenised real-world assets by 2030. Diamonds are uniquely suited to this shift because they combine high value density, global demand and verifiable certification, making them ideal collateral and portfolio assets in an on-chain financial system."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={Droplets}
              title="Liquidity"
              description="Transform traditionally illiquid diamond holdings into tradeable digital assets with broader market access."
              index={0}
            />
            <FeatureCard
              icon={Eye}
              title="Transparency"
              description="On-chain provenance, auditable reserves, and real-time reporting create unprecedented visibility."
              index={1}
            />
            <FeatureCard
              icon={Users}
              title="Access"
              description="Fractional ownership lowers barriers, enabling a wider range of qualified investors to participate."
              index={2}
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Professional Custody"
              description="Institutional-grade vaulting, insurance, and segregated asset structures protect all stakeholders."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* How It Works - High Level */}
      <section className="py-24 md:py-32">
        <div className="container">
          <SectionHeading
            title="How it works"
            subtitle="A transparent, end-to-end process managed by Billiton."
          />

          <div className="flex flex-wrap justify-center gap-2 md:gap-0 mb-8">
            <ProcessStep
              step={1}
              icon={Diamond}
              title="Source & Certify"
              index={0}
            />
            <ProcessStep
              step={2}
              icon={Vault}
              title="Vault & Insure"
              index={1}
            />
            <ProcessStep
              step={3}
              icon={FileCheck}
              title="Structure & Tokenise"
              index={2}
            />
            <ProcessStep
              step={4}
              icon={Coins}
              title="Distribute & Invest"
              index={3}
            />
            <ProcessStep
              step={5}
              icon={BarChart3}
              title="Monitor & Redeem"
              isLast
              index={4}
            />
          </div>

          <div className="text-center">
            <Link to="/tokenisation/how-it-works">
              <Button variant="outline">
                See the full process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container">
          <SectionHeading
            title="What you can do with tokenised diamonds?"
          />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={BarChart3}
              title="Institutional-grade trading and portfolio allocation"
              description="Trade diamonds as standardised, audited tokens on regulated or permissioned venues, giving professional investors transparent pricing, real-time settlement, and diversification into an uncorrelated hard asset."
              index={0}
            />
            <FeatureCard
              icon={Vault}
              title="Collateral and on-chain credit"
              description="Use tokenised diamonds as collateral in CeFi or DeFi lending pools, unlocking credit lines while underlying stones remain in secure custody and fully traceable on chain."
              index={1}
            />
            <FeatureCard
              icon={PieChart}
              title="Fractional ownership and access products"
              description="Fractionalise high-value stones into smaller units, enabling family offices, wealth platforms, and even retail investors to access diamond exposure without needing to buy or store entire stones."
              index={2}
            />
            <FeatureCard
              icon={Gem}
              title="Luxury utility, redemption and branding"
              description="Link tokens to redeemable physical diamonds and jewellery, enabling luxury gifting, loyalty programs, and brand experiences where authenticated stones can move seamlessly between vault, wallet, and showroom."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Trust & Governance */}
      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Trust & governance
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Billiton brings decades of experience in the diamond industry, combined with 
                deep inventory management expertise, to the tokenisation space.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our move into regulated digital asset structures is built on the same 
                principles that have made us a trusted name in the diamond industry: 
                transparency, rigorous due diligence, and client-first service.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {["Billiton Diamonds", "Regulated Custody", "Independent Audit", "Institutional Compliance"].map((partner) => (
                <div
                  key={partner}
                  className="p-6 rounded-xl bg-card border-2 border-border flex items-center justify-center text-center"
                >
                  <span className="text-sm font-medium text-muted-foreground">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 md:py-32 bg-card/50">
        <div className="container">
          <SectionHeading
            title="Frequently asked questions"
          />

          <div className="max-w-3xl mx-auto">
            <FAQAccordion
              items={[
                {
                  question: "What is an ARVA?",
                  answer: "An Asset-Referenced Virtual Asset (ARVA) is a digital token that represents ownership of a physical diamond. Each ARVA is backed 1:1 by a certified, vaulted diamond, ensuring complete transparency and traceability on the blockchain."
                },
                {
                  question: "Who can participate in tokenised diamond offerings?",
                  answer: "Billiton's tokenised diamond products are designed for professional, qualified, and institutional investors. Eligibility varies by jurisdiction and product type. Our team will guide you through the suitability and onboarding process."
                },
                {
                  question: "Where are the diamonds stored?",
                  answer: "All diamonds backing ARVAs are held in secure, insured vaults operated by independent professional custodians. Vault locations and arrangements are disclosed in offering documentation."
                },
                {
                  question: "What tokenisation models are available?",
                  answer: "We offer two models: Subscription-based Tokenisation where tokenisation occurs without physical custody until 85% or more of tokens are subscribed, triggering transfer to an approved vault, and Digital-Twin Tokenisation where each token represents an exact 1:1 digital copy of a specific certified diamond, with the option to claim physical delivery at any time."
                },
              ]}
            />

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        title="Discuss your tokenisation or investment case with the Billiton team."
        primaryCTA="Book a consultation"
        secondaryCTA="Or email us directly"
      />

      <Footer />
    </div>
  );
};

export default TokenisationHome;
