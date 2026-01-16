import React from "react";
import { useEffect, useRef } from 'react';

interface WireframeShapeProps {
  scrollY: number;
  className?: string;
}

export function WireframeShape({ scrollY, className = '' }: WireframeShapeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Rotation based on scroll
    const rotation = scrollY * 0.001;

    // Draw wireframe torus
    ctx.strokeStyle = 'rgba(232, 121, 249, 0.6)';
    ctx.lineWidth = 1;

    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) * 0.3;
    const tubeRadius = radius * 0.3;

    // Draw torus wireframe
    const segments = 32;
    const tubeSegments = 16;

    for (let i = 0; i < segments; i++) {
      const theta1 = (i / segments) * Math.PI * 2;
      const theta2 = ((i + 1) / segments) * Math.PI * 2;

      for (let j = 0; j < tubeSegments; j++) {
        const phi1 = (j / tubeSegments) * Math.PI * 2;
        const phi2 = ((j + 1) / tubeSegments) * Math.PI * 2;

        // Apply rotation
        const cos1 = Math.cos(theta1 + rotation);
        const sin1 = Math.sin(theta1 + rotation);
        const cos2 = Math.cos(theta2 + rotation);
        const sin2 = Math.sin(theta2 + rotation);

        // Calculate points
        const x1 = centerX + (radius + tubeRadius * Math.cos(phi1)) * cos1;
        const y1 = centerY + (radius + tubeRadius * Math.cos(phi1)) * sin1 + tubeRadius * Math.sin(phi1) * Math.sin(rotation * 0.5);
        
        const x2 = centerX + (radius + tubeRadius * Math.cos(phi2)) * cos1;
        const y2 = centerY + (radius + tubeRadius * Math.cos(phi2)) * sin1 + tubeRadius * Math.sin(phi2) * Math.sin(rotation * 0.5);
        
        const x3 = centerX + (radius + tubeRadius * Math.cos(phi1)) * cos2;
        const y3 = centerY + (radius + tubeRadius * Math.cos(phi1)) * sin2 + tubeRadius * Math.sin(phi1) * Math.sin(rotation * 0.5);

        // Draw lines
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x3, y3);
        ctx.stroke();
      }
    }

    // Add glow effect
    ctx.strokeStyle = 'rgba(232, 121, 249, 0.3)';
    ctx.lineWidth = 3;
    ctx.shadowBlur = 20;
    ctx.shadowColor = 'rgba(232, 121, 249, 0.5)';
    
    // Draw outer circle for glow
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 1.3, 0, Math.PI * 2);
    ctx.stroke();

  }, [scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
