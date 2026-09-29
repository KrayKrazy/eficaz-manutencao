"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, animate as motionAnimate } from "framer-motion";

/* ═══════════════════════════════════════
   ANIMATED COUNTER  (scroll-triggered)
   ═══════════════════════════════════════ */
export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimal = false,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimal?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          motionAnimate(0, value, {
            duration: 2.5,
            ease: [0.22, 1, 0.36, 1],
            onUpdate(v) {
              setCount(decimal ? Number(v.toFixed(1)) : Math.round(v));
            },
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, decimal]);

  const formatted = decimal
    ? count.toString().replace(".", ",")
    : new Intl.NumberFormat("pt-BR").format(count);

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ═══════════════════════════════════════
   REVEAL  (scroll-triggered fade-up)
   ═══════════════════════════════════════ */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   GLASS CARD (premium glassmorphism)
   ═══════════════════════════════════════ */
export function GlassCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 md:p-8 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-shadow hover:shadow-[0_16px_48px_rgba(59,130,246,0.15)] hover:border-blue-400/20 ${className ?? ""}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   FLOATING PARTICLES  (canvas, blue tint)
   ═══════════════════════════════════════ */
export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const numberOfParticles =
      typeof window !== "undefined" && window.innerWidth < 768 ? 30 : 70;
    let particlesArray: {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const init = () => {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.3,
          speedX: Math.random() * 0.3 - 0.15,
          speedY: Math.random() * -0.4 - 0.1,
          opacity: Math.random() * 0.4 + 0.1,
        });
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particlesArray) {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.y < 0) {
          p.y = canvas.height;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;

        ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(loop);
    };
    init();
    loop();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none opacity-50"
    />
  );
}
