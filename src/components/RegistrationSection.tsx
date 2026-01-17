import React from "react";
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const benefits = [
  'Access to all keynote talks and panel discussions',
  'Participation in hands-on workshops',
  'Networking opportunities with industry leaders',
  'Student showcase viewing access',
  'Conference materials and resources',
  'Certificate of attendance'
];

export function RegistrationSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#1a1434] via-[#2a2450] to-[#1a1434]">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl" />
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 215, 0, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 215, 0, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main content card */}
          <div className="relative p-12 lg:p-16 bg-gradient-to-br from-secondary/80 to-secondary/40 border-2 border-accent/30 backdrop-blur-sm">
            {/* Decorative corner accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-accent" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-accent" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-accent" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-accent" />

            {/* Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block mb-6">
                  <span className="px-6 py-2 bg-accent text-accent-foreground uppercase tracking-[0.3em] text-xs" style={{ fontWeight: 600 }}>
                    Join Us
                  </span>
                </div>
                
                <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-6" style={{ fontWeight: 700 }}>
                  <span className="text-white">Secure Your Spot Today</span>
                </h2>

                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Don't miss this opportunity to be part of a transformative experience celebrating women in computing.
                </p>
              </motion.div>
            </div>

            {/* Benefits grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-4 mb-12"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
            <a
              href="https://forms.gle/fGRzDFix7PpSU2MbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="group relative inline-flex items-center gap-4 px-12 py-6 bg-accent text-accent-foreground overflow-hidden transition-all duration-300 hover:gap-6 hover:shadow-2xl hover:shadow-accent/30">
                <span className="relative z-10 text-lg uppercase tracking-widest" style={{ fontWeight: 700 }}>
                  Register Now
                </span>
                <ArrowRight className="relative z-10 w-6 h-6" />
                
                {/* Animated background */}
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-accent blur-xl" />
                </div>
              </button>
            </a>

            </motion.div>

            {/* Event details reminder */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-accent/20 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>February 16–17, 2026</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>BITS Pilani, Dubai Campus</span>
              </div>
            </motion.div>
          </div>
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