"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Film, GraduationCap, Users, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import type { UserRole } from "@/types/user";

type SelectableRole = Extract<UserRole, "EDITOR" | "STUDENT" | "CLIENT">;

interface RoleOption {
  role: SelectableRole;
  title: string;
  description: string;
  icon: LucideIcon;
}

const ROLE_OPTIONS: RoleOption[] = [
  {
    role: "EDITOR",
    title: "Professional Editor",
    description: "Full access to the AI video editor, timeline, and SFX library.",
    icon: Film,
  },
  {
    role: "STUDENT",
    title: "University Student",
    description: "Requires a university code to access classroom projects and assignments.",
    icon: GraduationCap,
  },
  {
    role: "CLIENT",
    title: "Client / Reviewer",
    description: "Review & request changes on shared video projects.",
    icon: Users,
  },
];

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<SelectableRole>("EDITOR");
  const [universityCode, setUniversityCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4 py-10">
      <div className="w-full max-w-2xl bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 shadow-xl">
        <h1 className="text-2xl font-bold text-zinc-100">Join SFX Studio</h1>
        <p className="text-zinc-400 text-sm mt-2">Choose your role to get started</p>

        <h2 className="text-sm font-medium text-zinc-100 mt-8 mb-4">Select your account type</h2>

        <div className="space-y-4">
          {ROLE_OPTIONS.map((option) => {
            const isSelected = selectedRole === option.role;
            const Icon = option.icon;

            return (
              <div key={option.role}>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedRole(option.role)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      setSelectedRole(option.role);
                    }
                  }}
                  className={cn(
                    "flex items-start gap-4 rounded-xl border p-4 cursor-pointer transition-colors",
                    isSelected
                      ? "border-indigo-500 bg-indigo-500/10"
                      : "border-zinc-800 bg-zinc-900/50 hover:border-indigo-500/40"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                      isSelected ? "bg-indigo-500/20 text-indigo-400" : "bg-zinc-800 text-zinc-400"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{option.title}</p>
                    <p className="text-sm text-zinc-400 mt-1">{option.description}</p>
                  </div>
                </div>

                {option.role === "STUDENT" && isSelected ? (
                  <div>
                    <label htmlFor="university-code" className="sr-only">
                      University Code
                    </label>
                    <input
                      id="university-code"
                      type="text"
                      value={universityCode}
                      onChange={(event) => setUniversityCode(event.target.value)}
                      placeholder="e.g. UM6P-2025"
                      className="w-full mt-4 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-zinc-100 mb-2">
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="John Doe"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-zinc-100 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-zinc-100 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
            Create Account
          </Button>
        </form>

        <p className="text-sm text-zinc-400 text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
