import React from "react";
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { WireframeShape } from './WireframeShape';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1434] via-[#2a2450] to-[#1a1434]" />
      
      {/* Diagonal stripes pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(232, 121, 249, 0.1) 10px,
            rgba(232, 121, 249, 0.1) 20px
          )`
        }}
      />
      
      {/* Magenta geometric shapes */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#E879F9] opacity-10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#22D3EE] opacity-10 rounded-full blur-3xl" />
      
      {/* Animated wireframe background */}
      <div className="absolute inset-0 opacity-30">
        <WireframeShape scrollY={scrollY} className="w-full h-full" />
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="inline-block mb-12">
            <span className="px-4 py-2 border border-accent/30 bg-accent/5 backdrop-blur-sm text-accent uppercase tracking-[0.3em] text-xs">
              Dubai Edition 2026
            </span>
          </div>

          <div className="my-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight" style={{ fontWeight: 700 }}>
              <span className="bg-gradient-to-r from-[#E879F9] via-[#D8B4FE] to-white bg-clip-text text-transparent">WiCoDE26</span>
            </h1>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 leading-none">
            <span className="block text-white" style={{ fontWeight: 500 }}>
              Celebration of Women In
            </span>
            <span className="block bg-gradient-to-r from-[#E879F9] via-[#D8B4FE] to-white bg-clip-text text-transparent mt-2" style={{ fontWeight: 500 }}>
              Computing
            </span>
          </h2>

  

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 text-muted-foreground text-lg">
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" />
              <span>February 16–17, 2026</span>
            </div>
            <div className="w-px h-6 bg-border hidden md:block" />
            <div className="flex items-center gap-2">
              <div className="w-1 h-1 bg-accent rounded-full" />
              <span>BITS Pilani, Dubai Campus</span>
            </div>
          </div>

          <a
            href="https://forms.gle/fGRzDFix7PpSU2MbA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground overflow-hidden transition-all duration-300 hover:gap-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 tracking-wider uppercase text-sm" style={{ fontWeight: 600 }}>
                Register Now
              </span>
              <ArrowRight className="relative z-10 w-5 h-5" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}