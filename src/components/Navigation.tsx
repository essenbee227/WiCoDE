import React from "react";
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Overview', href: '#overview' },
  { label: 'Mission', href: '#mission' },
  { label: 'Program', href: '#program' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Register', href: '#register' }
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-lg border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-accent-foreground text-sm" style={{ fontWeight: 700 }}>W</span>
              </div>
              <span className="text-lg tracking-tight text-white" style={{ fontWeight: 600 }}>
                WiCoDE<span className="text-accent">26</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-white transition-colors duration-200 uppercase tracking-wider"
                >
                  {item.label}
                </a>
              ))}

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-20"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl text-white hover:text-accent transition-colors duration-200"
              >
                {item.label}
              </motion.a>
            ))}

          </div>
        </motion.div>
      )}
    </>
  );
}
