import React from "react";
import { motion } from 'motion/react';

export function OrganizersSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#2a2450] to-[#1a1434]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-accent" />
            <span className="text-accent uppercase tracking-[0.3em] text-xs">Organizers</span>
            <div className="h-px w-16 bg-accent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6" style={{ fontWeight: 700 }}>
            <span className="text-white">Organized by Dubai ACM-W Professional Chapter</span>
          </h2>
        </motion.div>

        {/* Logo placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-16"
        >
          {/* ACM-W BPDC */}
          <div className="group flex flex-col items-center gap-4">
            <a
              href="https://www.acm-wbpdc.com/"
              target="_blank"
             rel="noopener noreferrer"
             className="w-48 aspect-[3/2] border border-accent/30 bg-secondary/20 
             flex items-center justify-center overflow-hidden
             hover:border-accent hover:bg-secondary/40 
             transition-all duration-300"            >
              <img
                src="/logos/ACMW.png"
                alt="ACM-W BPDC Logo"
                className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
            ACM-W BPDC
            </span>
          </div>
        
          {/* ACM BPDC */}
          <div className="group flex flex-col items-center gap-4">
            <a
                href="https://www.acmbpdc.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 aspect-[3/2] border border-accent/30 bg-secondary/20 
                flex items-center justify-center overflow-hidden
                hover:border-accent hover:bg-secondary/40 
                transition-all duration-300"                >
              <img
                src="/logos/ACM-BPDC-Logo.png"
                alt="ACM BPDC Logo"
                className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
             />
           </a>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
            ACM BPDC
            </span>
          </div>
        
          {/* ACM UoBD */}
          <div className="group flex flex-col items-center gap-4">
            <a
                href="https://www.acmuobd.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 aspect-[3/2] border border-accent/30 bg-secondary/20 
                flex items-center justify-center overflow-hidden
                hover:border-accent hover:bg-secondary/40 
                transition-all duration-300"                >              
              <img
                src="/logos/ACM-UoB-logo.png"
                alt="ACM-UoBD-logo"
                className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            
            <span className="text-xs text-muted-foreground uppercase tracking-wider whitespace-nowrap">
              ACM UOBD
            </span>
          </div>

          {/* ACM UoS */}
          <div className="group flex flex-col items-center gap-4">
            <a
                href="https://www.sharjah.ac.ae/Academics/CI/ACM-Student-Chapter"
                target="_blank"
                rel="noopener noreferrer"
                className="w-48 aspect-[3/2] border border-accent/30 bg-secondary/20 
                flex items-center justify-center overflow-hidden
                hover:border-accent hover:bg-secondary/40 
                transition-all duration-300"            >               
              <img
                src="/logos/ACM-UoS-Logo.png"
                alt="ACM-UoS-logo"
                className="h-full w-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
            ACM UoS
            </span>
          </div>
        </motion.div>



        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground max-w-2xl mx-auto">
            In collaboration with ACM student chapters across the region
          </p>
        </motion.div>


                {/* Bottom decorative text */}
                <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-6xl md:text-8xl lg:text-9xl tracking-tighter text-white/5 select-none" style={{ fontWeight: 900 }}>
            WiCoDE26
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}