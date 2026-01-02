import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Diamond } from "lucide-react";
import { cn } from "@/lib/utils";
import { ConsultationDialog } from "./ConsultationDialog";
const navLinks = [
  { href: "/tokenisation", label: "Overview" },
  { href: "/tokenisation/asset-owners", label: "Asset Owners" },
  { href: "/tokenisation/investors", label: "Investors" },
  { href: "/tokenisation/how-it-works", label: "How It Works" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/tokenisation" className="flex items-center gap-2 group">
            <Diamond className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-display text-lg font-semibold text-foreground">Billiton</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-1">Digital</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ConsultationDialog>
              <Button variant="gold" size="sm">
                Book Consultation
              </Button>
            </ConsultationDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <div className="container py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <ConsultationDialog>
                  <Button variant="gold" className="w-full" onClick={() => setIsOpen(false)}>
                    Book Consultation
                  </Button>
                </ConsultationDialog>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
