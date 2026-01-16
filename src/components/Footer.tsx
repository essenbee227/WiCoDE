import React from "react";
import { motion } from 'motion/react';
import { Mail, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 border-t border-border overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2a2450] to-[#1a1434]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-lg mb-4 text-white" style={{ fontWeight: 600 }}>WiCoDE25</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              ACM Celebration of Women in Computing – Dubai Edition 2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-white" style={{ fontWeight: 600 }}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                  About the Event
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                  Registration
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4 text-white" style={{ fontWeight: 600 }}>Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.acm-wbpdc.com/"         
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-flex items-center gap-2">
                  ACM-W <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://dubai.acm.org/events/" 
                  target="_blank"
                  rel="noopener noreferrer"                
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-flex items-center gap-2">
                  ACM Dubai <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.bits-pilani.ac.in/dubai/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-flex items-center gap-2">
                  BITS Pilani Dubai <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-white" style={{ fontWeight: 600 }}>Contact</h3>
            <a 
              href="mailto:acm-w@dubai.bits-pilani.ac.in" 
              className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              acm-w@dubai.bits-pilani.ac.in
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 ACM-W Dubai Professional Chapter. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}