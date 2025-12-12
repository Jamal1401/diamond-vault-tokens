import { Link } from "react-router-dom";
import { Diamond, ExternalLink } from "lucide-react";

const footerLinks = {
  tokenisation: [
    { label: "Overview", href: "/tokenisation" },
    { label: "For Asset Owners", href: "/tokenisation/asset-owners" },
    { label: "For Investors", href: "/tokenisation/investors" },
    { label: "How It Works", href: "/tokenisation/how-it-works" },
  ],
  company: [
    { label: "About Billiton", href: "https://billitonauctions.com/about", external: true },
    { label: "Auctions", href: "https://billitonauctions.com", external: true },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Risk Disclosure", href: "#" },
  ],
};

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/tokenisation" className="flex items-center gap-2 mb-4">
              <Diamond className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-display text-lg font-semibold text-foreground">Billiton</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-1">Digital</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Institutional-grade diamond tokenisation. Combining auction expertise with regulated digital asset infrastructure.
            </p>
          </div>

          {/* Tokenisation Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Tokenisation</h4>
            <ul className="space-y-3">
              {footerLinks.tokenisation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Billiton Digital. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Diamond tokenisation involves risks. Investment products are for eligible investors only.
          </p>
        </div>
      </div>
    </footer>
  );
};
