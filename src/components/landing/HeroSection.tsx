"use client";

import { motion } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const WAVEFORM_BARS = Array.from({ length: 64 }, (_, i) => i);

function AnimatedWaveform() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft radial glow backdrop */}
      <div className="absolute left-1/2 top-1/3 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 h-[24rem] w-[24rem] rounded-full bg-violet-600/20 blur-[120px]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,300 Q150,180 300,300 T600,300 T900,300 T1200,300"
          stroke="url(#waveGradient)"
          strokeWidth="2"
          animate={{
            d: [
              "M0,300 Q150,180 300,300 T600,300 T900,300 T1200,300",
              "M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300",
              "M0,300 Q150,180 300,300 T600,300 T900,300 T1200,300",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M0,320 Q200,420 400,320 T800,320 T1200,320"
          stroke="url(#waveGradient)"
          strokeWidth="1.5"
          opacity={0.6}
          animate={{
            d: [
              "M0,320 Q200,420 400,320 T800,320 T1200,320",
              "M0,320 Q200,240 400,320 T800,320 T1200,320",
              "M0,320 Q200,420 400,320 T800,320 T1200,320",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>

      {/* Animated bottom waveform bars (mimics an audio editor waveform) */}
      <div className="absolute inset-x-0 bottom-0 flex h-40 items-end justify-center gap-[3px] px-6 [mask-image:linear-gradient(to_top,black,transparent)]">
        {WAVEFORM_BARS.map((bar) => (
          <motion.span
            key={bar}
            className="w-1.5 rounded-full bg-gradient-to-t from-indigo-500/70 to-violet-400/10"
            animate={{
              height: [`${10 + (bar % 7) * 6}%`, `${20 + ((bar * 3) % 11) * 7}%`, `${10 + (bar % 7) * 6}%`],
            }}
            transition={{
              duration: 1.8 + (bar % 5) * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bar * 0.03,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-zinc-950 pb-24 pt-28 sm:pt-36">
      <AnimatedWaveform />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge>
            <Sparkles className="h-3.5 w-3.5" />
            Now in Beta
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 text-4xl font-bold leading-[1.1] tracking-tight text-zinc-100 sm:text-6xl"
        >
          AI{" "}
          <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(129,140,248,0.45)]">
            Sound Effects
          </span>{" "}
          for Video Editors
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-balance text-base text-zinc-400 sm:text-lg"
        >
          Upload your footage. Our AI detects scenes, actions, and mood — then places perfectly
          timed sound effects on your timeline.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button variant="primary" size="lg">
            Try Free
          </Button>
          <Button variant="ghost" size="lg">
            <Play className="h-4 w-4" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 text-sm text-zinc-500"
        >
          Trusted by 500+ video editors &amp; 20+ universities
        </motion.p>
      </div>
    </section>
  );
}
