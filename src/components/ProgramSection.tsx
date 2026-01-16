import React from "react";
import { motion } from 'motion/react';
import { Mic, Users2, Wrench, Award, Network } from 'lucide-react';

const highlights = [
  {
    icon: Mic,
    title: 'Keynote Talks',
    description: 'Inspiring presentations from leading women in technology and computing.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users2,
    title: 'Panel Discussions',
    description: 'Thought-provoking conversations on critical issues in tech.',
    color: 'from-pink-500 to-purple-500'
  },
  {
    icon: Wrench,
    title: 'Workshops & Sessions',
    description: 'Hands-on learning experiences and skill-building activities.',
    color: 'from-purple-400 to-pink-600'
  },
  {
    icon: Award,
    title: 'Student Showcases',
    description: 'Platform for emerging talent to present innovative projects.',
    color: 'from-pink-600 to-purple-400'
  },
  {
    icon: Network,
    title: 'Networking Events',
    description: 'Connect with peers, mentors, and industry leaders.',
    color: 'from-purple-500 to-pink-400'
  }
];

export function ProgramSection() {
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#1a1434] to-[#2a2450]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-accent" />
            <span className="text-accent uppercase tracking-[0.3em] text-xs">Agenda</span>
            <div className="h-px w-16 bg-accent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8" style={{ fontWeight: 700 }}>
            <span className="text-white">Event Highlights</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days packed with engaging content, meaningful connections, and transformative experiences.
          </p>
        </motion.div>

        {/* Highlights grid - Asymmetrical layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${
                index === 0 ? 'lg:col-span-2' : ''
              } ${
                index === highlights.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border overflow-hidden group-hover:border-accent/50 transition-all duration-500">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-accent/10 border border-accent/20">
                    <highlight.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-2xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  {highlight.title}
                </h3>
                <p className="relative text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}