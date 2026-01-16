import React from "react";
import { motion } from 'motion/react';
import { Target, Users, Share2, Handshake } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: 'Amplify Women\'s Leadership',
    description: 'Elevate and showcase women leaders making impact in technology and computing.'
  },
  {
    icon: Users,
    title: 'Promote Diversity & Inclusion',
    description: 'Create an inclusive space that celebrates diverse perspectives and experiences.'
  },
  {
    icon: Share2,
    title: 'Enable Knowledge Sharing',
    description: 'Facilitate the exchange of ideas, research, and innovations across the community.'
  },
  {
    icon: Handshake,
    title: 'Foster Mentorship',
    description: 'Build lasting connections between emerging and established professionals.'
  }
];

export function MissionSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E879F9]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-center">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-16 bg-accent" />
              <span className="text-accent uppercase tracking-[0.3em] text-xs">Mission</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight" style={{ fontWeight: 700 }}>
              <span className="text-white">Key Objectives</span>
            </h2>

            <p className="text-xl text-muted-foreground mt-8 leading-relaxed">
              Our mission is to elevate women's voices in computing and foster an inclusive technology community.
            </p>
          </motion.div>

          {/* Right column - Objectives list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group flex items-start gap-6 p-6 bg-secondary/30 border border-border hover:border-accent/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                    <objective.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div>
                  <div className="text-xl text-white group-hover:text-accent transition-colors duration-300 mb-2" style={{ fontWeight: 600 }}>
                    {objective.title}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {objective.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}