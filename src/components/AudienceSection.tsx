import React from "react";
import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Briefcase, Users, Rocket, Lightbulb } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students & Researchers',
    description: 'UG and PG students interested in tech'
  },
  {
    icon: BookOpen,
    title: 'Faculty & Academics',
    description: 'Researchers and faculty members'
  },
  {
    icon: Briefcase,
    title: 'Industry Professionals',
    description: 'Tech professionals from various sectors'
  },
  {
    icon: Users,
    title: 'ACM & ACM-W Members',
    description: 'Active members of ACM community'
  },
  {
    icon: Rocket,
    title: 'Early-Career Technologists',
    description: 'Early-career technologists and aspiring leaders'
  },
  {
    icon: Lightbulb,
    title: 'Tech Entrepreneurs',
    description: 'Innovators and startup enthusiasts'
  }
];

export function AudienceSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >

          
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight" style={{ fontWeight: 700 }}>
            <span className="text-white">Who Should Attend?</span>
          </h2>
        </motion.div>

        {/* Audience grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-8 bg-secondary/50 border border-border hover:border-accent/50 transition-all duration-300 h-full">
                {/* Icon */}
                <div className="mb-6 inline-flex">
                  <div className="p-4 bg-accent/10 border border-accent/20 group-hover:bg-accent/20 transition-colors duration-300">
                    <audience.icon className="w-8 h-8 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-4 text-white" style={{ fontWeight: 600 }}>
                  {audience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>

                {/* Accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}