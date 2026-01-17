import React from "react";
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';

const schedule = [
  {
    day: 'DAY 1',
    date: 'FEB 16',
    color: 'from-accent/20 to-accent/5',
    borderColor: 'border-accent/30',
    sessions: [
      { time: '09:30 AM', title: 'Registration', description: 'Check-in and welcome refreshments' },
      { time: '10:00 AM', title: 'Inaugural Ceremony', description: 'Opening keynote and event introduction' },
      { time: '10:30 AM', title: 'Technical Talk', description: 'Expert insights on emerging technologies' },
      { time: '11:00 AM', title: 'Ideathon', description: 'Collaborative innovation and brainstorming session' },
      { time: '02:00 PM', title: 'Pitches & Presentations', description: 'Team presentations and feedback sessions' },
      { time: '03:30 PM', title: 'Closing Remarks'}
    ]
  },
  {
    day: 'DAY 2',
    date: 'FEB 17',
    color: 'from-[#E879F9]/20 to-[#E879F9]/5',
    borderColor: 'border-[#E879F9]/30',
    sessions: [
      { time: '9:30 AM', title: 'Technical Talk', description: 'Advanced computing topics and research' },
      { time: '10:00 AM', title: 'Student Tech Showcase', description: 'Student-led technology demonstrations' },
      { time: '11:00 AM', title: 'Creative Poster Presentation', description: 'Visual research and project displays' },
      { time: '02:00 PM', title: 'ACM-W Panel Discussion', description: 'Women in tech leadership panel' },
      { time: '03:00 PM', title: 'Recognition & Honours Ceremony', description: 'Awards and vote of thanks' }
    ]
  }
];

export function ScheduleSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(255, 215, 0, 0.1) 10px,
            rgba(255, 215, 0, 0.1) 20px
          )`
        }}
      />

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
            <span className="text-accent uppercase tracking-[0.3em] text-xs">Schedule</span>
            <div className="h-px w-16 bg-accent" />
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight mb-8" style={{ fontWeight: 700 }}>
            <span className="text-white">Event Schedule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two full days of learning, networking, and celebration
          </p>
        </motion.div>

        {/* Schedule cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {schedule.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: dayIndex * 0.2 }}
              className="group relative"
            >
              <div className={`relative h-full p-8 bg-gradient-to-br ${day.color} border ${day.borderColor} hover:border-accent transition-all duration-500`}>
                {/* Day header */}
                <div className="mb-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="w-6 h-6 text-accent" />
                    <span className="text-3xl text-accent" style={{ fontWeight: 700 }}>{day.day}</span>
                  </div>
                  <div className="text-2xl text-white" style={{ fontWeight: 600 }}>{day.date}</div>
                </div>

                {/* Sessions */}
                <div className="space-y-6">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={sessionIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: dayIndex * 0.2 + sessionIndex * 0.1 }}
                      className="group/item relative pl-8 border-l-2 border-accent/20 hover:border-accent/60 transition-all duration-300"
                    >
                      {/* Time badge */}
                      <div className="absolute -left-[1px] top-0">
                        <div className="w-4 h-4 bg-accent rounded-full border-4 border-[#1a1434]" />
                      </div>
                      
                      <div className="flex items-start gap-3 mb-2">
                        <Clock className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-sm text-accent font-mono" style={{ fontWeight: 600 }}>
                          {session.time}
                        </span>
                      </div>
                      
                      <h4 className="text-lg text-white mb-2 group-hover/item:text-accent transition-colors duration-300" style={{ fontWeight: 600 }}>
                        {session.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {session.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative element */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Event note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 border border-accent/30 bg-accent/5">
            <span className="text-accent text-xl" style={{ fontWeight: 700 }}>
              FREE Event
            </span>
            <div className="w-px h-6 bg-border" />
            <span className="text-white">
              Refreshments Provided
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}