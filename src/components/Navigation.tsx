import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, User, Briefcase, Mail, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About", icon: User },
    { href: "#projects", label: "Projects", icon: Briefcase },
    { href: "#blog", label: "Blog", icon: BookOpen },
    { href: "#contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Code className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">TS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </button>
              );
            })}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => {
                // Create a dummy CV download - in real app, this would be an actual CV file
                const link = document.createElement('a');
                link.href = 'data:text/plain;charset=utf-8,Trinadh Suroju - CV\n\nCybersecurity Enthusiast | Developer | BTech Student\n\nContact: Available on request';
                link.download = 'Trinadh_Suroju_CV.txt';
                link.click();
              }}
            >
              Download CV
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border">
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.href}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-3 w-full text-left text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full mt-4"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'data:text/plain;charset=utf-8,Trinadh Suroju - CV\n\nCybersecurity Enthusiast | Developer | BTech Student\n\nContact: Available on request';
                  link.download = 'Trinadh_Suroju_CV.txt';
                  link.click();
                  setIsOpen(false);
                }}
              >
                Download CV
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;