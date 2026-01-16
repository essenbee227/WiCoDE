import React from "react";
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function OverviewSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionOffset = 800; // Approximate offset where this section appears
  const parallaxOffset = Math.max(0, (scrollY - sectionOffset) * 0.3);

  return (
    <section className="relative min-h-screen flex items-center py-32 overflow-hidden">
      {/* Background element */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        style={{ transform: `translateY(calc(-50% + ${parallaxOffset}px))` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left column - Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:pr-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-accent" />
            <span className="text-accent uppercase tracking-[0.3em] text-xs">Overview</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8" style={{ fontWeight: 700 }}>
            <span className="text-white">A Flagship Event</span>
          </h2>
        </motion.div>

        {/* Right column - Description */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <p className="text-xl text-muted-foreground leading-relaxed">
            A two-day flagship event celebrating and advancing women in computing and technology.
          </p>
          
          <div className="h-px w-full bg-border" />
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our focus is on leadership, mentorship, innovation, and community building—creating lasting connections and empowering the next generation of women leaders in tech.
          </p>

          <div className="pt-6 grid grid-cols-2 gap-8">
            <div>
              <div className="text-5xl text-accent mb-2" style={{ fontWeight: 700 }}>2</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Days</div>
            </div>
            <div>
              <div className="text-5xl text-accent mb-2" style={{ fontWeight: 700 }}>100+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">Participants</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}