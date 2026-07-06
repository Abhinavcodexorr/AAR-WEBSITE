"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const DOT_COLOR = "rgba(232, 69, 26, 0.42)";
const LINK_DISTANCE = 120;
const PARTICLE_DENSITY = 9000;

function createParticles(width: number, height: number): Particle[] {
  const count = Math.max(28, Math.floor((width * height) / PARTICLE_DENSITY));

  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    radius: Math.random() * 1.2 + 1.1,
  }));
}

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let animationFrame = 0;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let dpr = 1;

    const draw = (animate: boolean) => {
      context.clearRect(0, 0, width, height);

      if (animate) {
        for (const particle of particles) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x <= 0 || particle.x >= width) {
            particle.vx *= -1;
          }
          if (particle.y <= 0 || particle.y >= height) {
            particle.vy *= -1;
          }

          particle.x = Math.max(0, Math.min(width, particle.x));
          particle.y = Math.max(0, Math.min(height, particle.y));
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < LINK_DISTANCE) {
            const opacity = 1 - distance / LINK_DISTANCE;
            context.strokeStyle = `rgba(232, 69, 26, ${0.14 * opacity})`;
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }
      }

      context.fillStyle = DOT_COLOR;
      for (const particle of particles) {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      }
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) {
        return;
      }

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = createParticles(width, height);
      draw(false);
    };

    const tick = () => {
      draw(true);
      animationFrame = window.requestAnimationFrame(tick);
    };

    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(canvas.parentElement as Element);

    if (!prefersReducedMotion) {
      animationFrame = window.requestAnimationFrame(tick);
    }

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 opacity-45"
      aria-hidden
    />
  );
}
