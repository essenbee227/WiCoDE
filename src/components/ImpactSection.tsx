import React from "react";
import { motion } from 'motion/react';
import { TrendingUp, Link2, Users } from 'lucide-react';

const impacts = [
  {
    icon: TrendingUp,
    title: 'Elevates Women in Computing',
    description: 'Provides a platform for women to showcase their achievements, share their stories, and inspire the next generation of tech leaders.'
  },
  {
    icon: Link2,
    title: 'Bridges Academia & Industry',
    description: 'Creates meaningful connections between academic institutions and industry partners, fostering collaboration and innovation.'
  },
  {
    icon: Users,
    title: 'Expands Networks',
    description: 'Builds professional and mentorship networks that support career growth and personal development in technology.'
  }
];

export function ImpactSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-accent" />
            <span className="text-accent uppercase tracking-[0.3em] text-xs">Impact</span>
            <div className="h-px w-16 bg-accent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8" style={{ fontWeight: 700 }}>
            <span className="text-white">Why Does This Event Matter?</span>
          </h2>
        </motion.div>

        {/* Impact cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-secondary/30 border-2 border-border hover:border-accent transition-all duration-500">
                {/* Number */}
                <div className="absolute top-8 right-8 text-6xl text-accent/10 group-hover:text-accent/20 transition-colors duration-500" style={{ fontWeight: 700 }}>
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className="relative mb-8 inline-flex">
                  <div className="p-5 bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors duration-300">
                    <impact.icon className="w-10 h-10 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-2xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  {impact.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {impact.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}