import Link from "next/link";
import { Waves, AtSign, Code2, Users } from "lucide-react";

const FOOTER_LINKS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Editor", href: "#editor" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Support", href: "#" },
      { label: "API", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 text-zinc-100">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500">
                <Waves className="h-4 w-4 text-white" />
              </span>
              <span className="text-lg font-semibold tracking-tight">SFX Studio</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              AI-powered sound effects for video editors, creators, and university film programs.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" aria-label="Social" className="text-zinc-500 hover:text-indigo-400">
                <AtSign className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Developer Community" className="text-zinc-500 hover:text-indigo-400">
                <Code2 className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Community" className="text-zinc-500 hover:text-indigo-400">
                <Users className="h-4 w-4" />
              </a>
            </div>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.heading}>
              <h4 className="text-sm font-semibold text-zinc-200">{section.heading}</h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-zinc-500 hover:text-zinc-200">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-800/60 pt-8 text-sm text-zinc-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} SFX Studio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
