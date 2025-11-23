import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Briefcase },
  { label: 'Projects', href: '#projects', icon: Briefcase },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 transition-all duration-300 px-4",
          isScrolled ? "pt-4" : "pt-6"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
            isScrolled
              ? "bg-background/80 backdrop-blur-md border border-white/10 shadow-lg shadow-purple-500/10 w-full max-w-4xl"
              : "bg-transparent w-full max-w-6xl"
          )}
        >
          {/* Logo */}
          <a
            href="#"
            className="relative group flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-all duration-300">
              S
            </div>
            <span className={cn("font-bold text-lg tracking-tight hidden sm:block transition-opacity duration-300", isScrolled ? "opacity-100" : "opacity-0")}>
              Sahil.dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium hover:text-primary hover:bg-white/5 rounded-full px-5 transition-all duration-300"
              >
                {item.label}
              </Button>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <Button
              className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Hire Me</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-primary hover:bg-white/5 rounded-full"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="bg-card/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => scrollToSection(item.href)}
                  className="w-full justify-start text-lg h-12 rounded-xl hover:bg-white/5"
                >
                  <item.icon className="w-5 h-5 mr-3 text-primary" />
                  {item.label}
                </Button>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Button
                className="w-full rounded-xl bg-primary hover:bg-primary/90 text-white h-12"
                onClick={() => scrollToSection('#contact')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Hire Me
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
