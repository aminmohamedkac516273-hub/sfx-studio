"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const TIERS: PricingTier[] = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying out AI sound design.",
    features: [
      "5 AI SFX exports / month",
      "720p footage analysis",
      "Basic sound library",
      "Community support",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For solo editors and content creators.",
    features: [
      "Unlimited AI SFX exports",
      "4K footage analysis",
      "Full ElevenLabs & OpenAI engine",
      "Priority rendering queue",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Studio",
    price: "$49",
    period: "/mo",
    description: "For professional teams and agencies.",
    features: [
      "Everything in Pro",
      "Team workspaces (5 seats)",
      "Custom sound packs",
      "Advanced timeline sync",
      "Priority chat support",
    ],
    cta: "Start Free Trial",
  },
  {
    name: "University",
    price: "Custom",
    period: "pricing",
    description: "For film schools and academic programs.",
    features: [
      "Unlimited student seats",
      "Classroom & LMS integration",
      "Dedicated onboarding",
      "Admin usage analytics",
      "SLA & dedicated support",
    ],
    cta: "Contact Sales",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Simple pricing for every stage
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            Start for free. Upgrade when your projects need more power.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative flex flex-col rounded-2xl border p-6 backdrop-blur-sm ${
                tier.highlighted
                  ? "border-indigo-500/60 bg-zinc-900/80 shadow-[0_0_50px_rgba(99,102,241,0.25)] ring-2 ring-indigo-500/50"
                  : "border-zinc-800/60 bg-zinc-900/40"
              }`}
            >
              {tier.highlighted ? (
                <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-lg shadow-indigo-500/40">
                  <Sparkles className="h-3 w-3" />
                  Most Popular
                </span>
              ) : null}

              <h3 className="text-lg font-semibold text-zinc-100">{tier.name}</h3>
              <p className="mt-1 text-sm text-zinc-400">{tier.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-zinc-100">
                  {tier.price}
                </span>
                <span className="text-sm text-zinc-500">{tier.period}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-zinc-300">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-indigo-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.highlighted ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
