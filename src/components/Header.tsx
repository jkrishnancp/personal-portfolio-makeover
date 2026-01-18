import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Summary", href: "#summary" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Impact", href: "#impact" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Projects", href: "#featured-projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const externalLinks = [
  { label: "Security Blueprints", href: "/security-blueprints.html" },
  { label: "Cyber Periodic Table", href: "/cybersecurity-periodic-table.html" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-display font-bold text-lg text-foreground">
            <span className={isScrolled ? "text-foreground" : "text-white"}>Jay</span>
            <span className="text-accent">Prakash</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Divider */}
            <div className={`w-px h-6 mx-2 ${isScrolled ? "bg-border" : "bg-white/20"}`} />
            
            {/* External Links */}
            {externalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent/10 hover:text-accent flex items-center gap-1 ${
                  isScrolled ? "text-foreground" : "text-white/90"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="px-4 py-3 text-left text-foreground hover:bg-accent/10 hover:text-accent rounded-md transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="my-2 border-t border-border" />
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-3 text-foreground hover:bg-accent/10 hover:text-accent rounded-md transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
