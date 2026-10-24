"use client";

import { useState } from "react";
import { FolderKanban, Music, Sparkles, Settings, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface NavItem {
  label: string;
  icon: LucideIcon;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Projects", icon: FolderKanban },
  { label: "SFX Library", icon: Music },
  { label: "AI Generator", icon: Sparkles },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState<string>("Projects");

  return (
    <aside className="w-64 h-screen sticky top-0 flex flex-col border-r border-zinc-800 bg-zinc-950">
      <div className="p-6 border-b border-zinc-800 flex items-center gap-2">
        <span className="text-lg font-bold text-zinc-100">SFX Studio</span>
        <Badge variant="accent">AI</Badge>
      </div>

      <nav className="flex-1 px-3 py-6 space-y-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <div
              key={item.label}
              role="button"
              tabIndex={0}
              onClick={() => setActiveItem(item.label)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  setActiveItem(item.label);
                }
              }}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer",
                isActive
                  ? "bg-indigo-500/10 text-indigo-400"
                  : "text-zinc-400 hover:bg-zinc-900/60 hover:text-zinc-100 transition-colors"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800 mt-auto">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-sm font-semibold">
            E
          </div>
          <div>
            <p className="text-sm font-medium text-zinc-100">Editor User</p>
            <p className="text-xs text-zinc-500">EDITOR</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
