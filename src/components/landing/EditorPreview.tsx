"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Download,
  Film,
  FolderOpen,
  ImageIcon,
  Mic,
  Music2,
  Play,
  Scissors,
  Search,
  Sparkles,
  Volume2,
} from "lucide-react";

const MEDIA_ITEMS = [
  { label: "scene_01_intro.mp4", icon: Film },
  { label: "scene_02_chase.mp4", icon: Film },
  { label: "interview_a.mov", icon: Film },
  { label: "b-roll_city.mp4", icon: ImageIcon },
];

const VIDEO_CLIPS = [
  { left: "2%", width: "22%" },
  { left: "26%", width: "30%" },
  { left: "58%", width: "20%" },
  { left: "80%", width: "18%" },
];

const DIALOGUE_CLIPS = [
  { left: "6%", width: "16%" },
  { left: "40%", width: "24%" },
  { left: "72%", width: "20%" },
];

const SFX_CLIPS = [
  { left: "10%", width: "6%", label: "whoosh" },
  { left: "28%", width: "5%", label: "slam" },
  { left: "47%", width: "7%", label: "impact" },
  { left: "63%", width: "5%", label: "ding" },
  { left: "84%", width: "6%", label: "swell" },
];

export function EditorPreview() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowNotification((prev) => !prev);
    }, 4500);
    setShowNotification(true);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="editor" className="relative bg-zinc-950 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Your footage, automatically scored
          </h2>
          <p className="mt-4 text-base text-zinc-400 sm:text-lg">
            A familiar timeline editor — supercharged with an AI sound designer baked right in.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Floating AI notification */}
          <div className="pointer-events-none absolute -top-6 right-4 z-30 sm:right-10">
            <AnimatePresence>
              {showNotification ? (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2 rounded-xl border border-indigo-400/30 bg-zinc-900/95 px-4 py-2.5 text-xs font-medium text-zinc-200 shadow-[0_0_30px_rgba(99,102,241,0.35)] backdrop-blur-md sm:text-sm"
                >
                  <Sparkles className="h-4 w-4 flex-shrink-0 text-indigo-400" />
                  <span>AI detected: Door slam at 00:12.4</span>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          {/* Editor window */}
          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/80 shadow-[0_30px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            {/* Topbar */}
            <div className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4 py-3">
              <div className="flex items-center gap-4">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="hidden text-xs text-zinc-500 sm:inline">
                  untitled_project — SFX Studio
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="hidden items-center gap-1 rounded-md border border-zinc-700 px-2 py-1 sm:flex">
                  <Scissors className="h-3 w-3" /> Edit
                </span>
                <button className="flex items-center gap-1.5 rounded-md bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-1.5 font-medium text-white shadow-sm shadow-indigo-500/30">
                  <Download className="h-3 w-3" />
                  Export
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4">
              {/* Media panel */}
              <div className="border-b border-zinc-800 bg-zinc-950/40 p-4 lg:col-span-1 lg:border-b-0 lg:border-r">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">
                    <FolderOpen className="h-3.5 w-3.5" /> Media
                  </span>
                  <Search className="h-3.5 w-3.5 text-zinc-600" />
                </div>
                <div className="mt-4 space-y-2">
                  {MEDIA_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-lg border border-zinc-800/80 bg-zinc-900/60 px-2.5 py-2 text-xs text-zinc-300"
                      >
                        <Icon className="h-3.5 w-3.5 flex-shrink-0 text-indigo-400" />
                        <span className="truncate">{item.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Preview + timeline */}
              <div className="lg:col-span-3">
                {/* Video preview frame */}
                <div className="relative mx-4 mt-4 flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.12),transparent_70%)]" />
                  <button className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform hover:scale-110">
                    <Play className="h-6 w-6 text-white" fill="white" />
                  </button>
                  <span className="absolute bottom-3 right-3 rounded bg-black/60 px-2 py-0.5 font-mono text-[10px] text-zinc-300">
                    00:12.4 / 01:32.0
                  </span>
                </div>

                {/* Timeline */}
                <div className="mt-4 space-y-2 px-4 pb-4">
                  {/* Ruler */}
                  <div className="flex justify-between px-1 font-mono text-[10px] text-zinc-600">
                    {["00:00", "00:15", "00:30", "00:45", "01:00", "01:15"].map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>

                  <div className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/60 p-3">
                    {/* Animated playhead */}
                    <motion.div
                      className="absolute bottom-0 top-0 z-20 w-px bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.9)]"
                      animate={{ left: ["0%", "100%"] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="absolute -top-1 -left-1.5 h-3 w-3 rotate-45 bg-red-500" />
                    </motion.div>

                    {/* Video track */}
                    <div className="relative mb-2 flex items-center gap-2">
                      <span className="flex w-16 flex-shrink-0 items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                        <Film className="h-3 w-3" /> Video
                      </span>
                      <div className="relative h-8 flex-1 rounded-md bg-zinc-900">
                        {VIDEO_CLIPS.map((clip, i) => (
                          <div
                            key={i}
                            style={{ left: clip.left, width: clip.width }}
                            className="absolute top-0.5 h-7 rounded bg-gradient-to-r from-zinc-700 to-zinc-600 ring-1 ring-inset ring-zinc-500/40"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Dialogue track */}
                    <div className="relative mb-2 flex items-center gap-2">
                      <span className="flex w-16 flex-shrink-0 items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                        <Mic className="h-3 w-3" /> Dialogue
                      </span>
                      <div className="relative h-8 flex-1 rounded-md bg-zinc-900">
                        {DIALOGUE_CLIPS.map((clip, i) => (
                          <div
                            key={i}
                            style={{ left: clip.left, width: clip.width }}
                            className="absolute top-0.5 h-7 rounded bg-gradient-to-r from-emerald-700/70 to-emerald-600/60 ring-1 ring-inset ring-emerald-400/30"
                          />
                        ))}
                      </div>
                    </div>

                    {/* SFX track */}
                    <div className="relative flex items-center gap-2">
                      <span className="flex w-16 flex-shrink-0 items-center gap-1 text-[10px] font-medium uppercase tracking-wide text-zinc-500">
                        <Volume2 className="h-3 w-3" /> SFX
                      </span>
                      <div className="relative h-8 flex-1 rounded-md bg-zinc-900">
                        {SFX_CLIPS.map((clip, i) => (
                          <motion.div
                            key={i}
                            style={{ left: clip.left, width: clip.width }}
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                            className="absolute top-0.5 flex h-7 items-center justify-center overflow-hidden rounded bg-gradient-to-r from-indigo-500/80 to-violet-500/70 ring-1 ring-inset ring-indigo-300/50"
                            title={clip.label}
                          >
                            <Music2 className="h-3 w-3 text-white/80" />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
