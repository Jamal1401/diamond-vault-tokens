import { SectionHeading } from "@/components/tokenisation/SectionHeading";
import { FAQAccordion } from "@/components/tokenisation/FAQAccordion";
import { CTABand } from "@/components/tokenisation/CTABand";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import { useScrollToNextPage } from "@/hooks/useScrollToNextPage";

const FAQs = () => {
  useScrollToNextPage();
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about tokenised diamonds, ARVAs, and how to participate."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 md:pb-32">
        <div className="container">
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
                {
                  question: "How are diamonds certified?",
                  answer: "All diamonds in our tokenisation program are certified by leading independent gemological laboratories such as GIA (Gemological Institute of America), IGI (International Gemological Institute), or equivalent bodies. Certification covers the 4Cs (cut, color, clarity, carat) and additional characteristics."
                },
                {
                  question: "What blockchain is used for tokenisation?",
                  answer: "ARVAs are issued on enterprise-grade, regulatory-compliant blockchain infrastructure. The specific chain and technology stack are selected based on the offering structure and regulatory requirements, always prioritising security, transparency, and institutional-grade performance."
                },
                {
                  question: "Can I redeem tokens for physical diamonds?",
                  answer: "Yes. Depending on the tokenisation model, token holders may have the option to redeem their tokens for the underlying physical diamonds. Redemption terms, including minimum holdings and logistics, are detailed in each offering's documentation."
                },
                {
                  question: "What fees are involved?",
                  answer: "Fees vary by product and may include issuance fees, custody and insurance costs, and transaction fees. All fees are transparently disclosed in offering documents before investment. There are no hidden charges."
                },
                {
                  question: "How is pricing determined?",
                  answer: "Token pricing is based on independent valuations of the underlying diamonds, taking into account market conditions, certification grades, and liquidity factors. Prices are updated regularly and disclosed to participants."
                },
                {
                  question: "What regulatory framework governs these offerings?",
                  answer: "Billiton's tokenisation platform operates under VARA (Virtual Assets Regulatory Authority) regulation in Dubai. All offerings are structured to comply with applicable securities laws and anti-money laundering requirements in relevant jurisdictions."
                },
                {
                  question: "How do I get started?",
                  answer: "Begin by booking a consultation with our team. We'll discuss your objectives, explain available products, and guide you through the onboarding and suitability assessment process. You can schedule a call directly through our website."
                },
                {
                  question: "Is there a minimum investment?",
                  answer: "Minimum investment thresholds vary by product and investor classification. Professional and institutional offerings typically have higher minimums. Contact our team for specific details on current offerings."
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABand
        title="Still have questions? Our team is here to help."
        primaryCTA="Book a consultation"
        secondaryCTA="Or email us directly"
      />

      <Footer />
    </div>
  );
};

export default FAQs;
