import { FolderKanban, Sparkles, Music, Plus } from "lucide-react";

interface StatCard {
  label: string;
  value: string;
  icon: typeof FolderKanban;
}

const STATS: StatCard[] = [
  { label: "Active Projects", value: "4", icon: FolderKanban },
  { label: "AI Generations Left", value: "180/200", icon: Sparkles },
  { label: "Saved SFX", value: "42", icon: Music },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-zinc-100">Welcome back, Editor 👋</h1>
        <p className="text-zinc-400 mt-1">Here&apos;s an overview of your workspace.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">{stat.label}</span>
                <Icon className="h-5 w-5 text-indigo-400" />
              </div>
              <span className="text-3xl font-bold text-zinc-100 mt-2">{stat.value}</span>
            </div>
          );
        })}
      </div>

      <div>
        <h2 className="text-lg font-semibold text-zinc-100 mt-10 mb-4">Recent Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="h-40 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-center">
            <span className="text-sm text-zinc-500">Project Preview</span>
          </div>
          <div className="h-40 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-center">
            <span className="text-sm text-zinc-500">Project Preview</span>
          </div>
          <div className="h-40 border-2 border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-indigo-500/40 hover:bg-zinc-900/30 transition-colors cursor-pointer">
            <Plus className="h-6 w-6 text-zinc-500" />
            <span className="text-sm font-medium text-zinc-400">Create New Project</span>
          </div>
        </div>
      </div>
    </div>
  );
}
