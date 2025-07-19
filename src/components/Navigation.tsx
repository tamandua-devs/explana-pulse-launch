import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Jornada", href: "#jornada" },
    { label: "Perguntas", href: "#perguntas" },
    { label: "Serviços", href: "#servicos" },
  ];

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'glass-strong backdrop-blur-xl shadow-floating' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-black">
              <span className="gradient-text">Explana</span>{" "}
              <span className={isScrolled ? "text-brand-black" : "text-brand-white"}>
                Geral
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`
                  font-medium transition-all duration-300 hover:scale-105
                  ${isScrolled 
                    ? "text-brand-black hover:text-brand-red" 
                    : "text-brand-white hover:text-brand-red"
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-brand-red hover:bg-brand-red-vivid text-brand-white px-6 py-3 rounded-xl font-semibold shadow-vivid hover:shadow-floating transition-all duration-300 hover:scale-105 group"
            >
              CONTATO
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-brand-black" : "text-brand-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-brand-black" : "text-brand-white"}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
            md:hidden transition-all duration-300 overflow-hidden
            ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className="py-6 space-y-4 glass-strong rounded-2xl mt-4 mb-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-6 py-3 text-brand-black hover:text-brand-red font-medium transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            
            <div className="px-6 pt-4">
              <Button
                className="w-full bg-brand-red hover:bg-brand-red-vivid text-brand-white py-3 rounded-xl font-semibold transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTATO
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;