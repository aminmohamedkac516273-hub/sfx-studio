"use client";

import { motion } from "framer-motion";
import { ScanLine, AudioLines, Cpu, GraduationCap, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: ScanLine,
    title: "AI Footage Analysis",
    description:
      "Our models scan every frame to recognize scenes, objects, and on-screen actions in seconds.",
  },
  {
    icon: AudioLines,
    title: "Smart SFX Placement",
    description:
      "Sound effects are automatically aligned to the exact frame they belong to — no manual syncing.",
  },
  {
    icon: Cpu,
    title: "ElevenLabs & OpenAI Engine",
    description:
      "Powered by best-in-class audio and language models for natural, high-fidelity sound generation.",
  },
  {
    icon: GraduationCap,
    title: "University & Team Portal",
    description:
      "Collaborative workspaces with shared libraries, seat management, and classroom-ready licensing.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Everything you need to sound professional
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            From raw footage to a fully scored timeline — SFX Studio handles the heavy lifting.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-indigo-500/50"
              >
                <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.25)]" />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 ring-1 ring-inset ring-indigo-400/30 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5 text-indigo-300" />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold text-zinc-100">
                  {feature.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
