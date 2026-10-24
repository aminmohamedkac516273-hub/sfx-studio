"use client";

import { Search, Bell } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function DashboardHeader() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-10 flex items-center justify-between px-6">
      <h1 className="text-base font-semibold text-zinc-100">Dashboard</h1>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-64 bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
          />
        </div>

        <Bell className="h-5 w-5 text-zinc-400 hover:text-zinc-100 transition-colors cursor-pointer" />

        <div className="h-9 w-9 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-semibold cursor-pointer">
          E
        </div>

        <Badge variant="accent">Pro</Badge>
      </div>
    </header>
  );
}
