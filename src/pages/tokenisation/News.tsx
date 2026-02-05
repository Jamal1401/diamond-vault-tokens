import { motion } from "framer-motion";
import { Navbar } from "@/components/tokenisation/Navbar";
import { Footer } from "@/components/tokenisation/Footer";
import { ExternalLink, Newspaper, Calendar } from "lucide-react";

const newsArticles = [
  {
    title: "Ripple-Backed Custody Secures USD280 Million Diamond Tokenization Push in UAE",
    source: "CoinDesk",
    date: "February 3, 2026",
    url: "https://www.coindesk.com/markets/2026/02/03/ripple-backed-custody-secures-usd280-million-diamond-tokenization-push-in-uae",
    description: "Major milestone in diamond tokenization as Ripple-backed custody solution enables significant investment in UAE's growing tokenized asset market.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Newspaper className="w-4 h-4" />
              <span className="text-sm font-medium">Industry News</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Diamond Tokenisation{" "}
              <span className="text-gradient">in the News</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest developments in diamond tokenisation and the broader tokenized assets industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {newsArticles.map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="block group"
              >
                <div className="p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                          {article.source}
                        </span>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="w-3.5 h-3.5" />
                          {article.date}
                        </div>
                      </div>
                      <h2 className="text-xl md:text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {article.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
