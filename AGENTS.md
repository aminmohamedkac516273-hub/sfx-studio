<# AGENTS.md — Instructions for AI Coding Agents

## Role
You are a senior full-stack engineer building SFX Studio.
Always read CONTEXT.md before coding.

## Code Rules
- Follow the Design System in CONTEXT.md EXACTLY
- Server Components by default — only use "use client" when needed (hooks, state, animations)
- TypeScript strict — no `any`, no `@ts-ignore`
- Ship complete code — no TODOs, no placeholders, no "// rest of code"
- All components must be responsive (mobile-first: 375px → 1920px)
- All interactive elements must be keyboard accessible with aria labels
- Dark mode ONLY

## Output Format
For each file, output:
### 📄 `exact/file/path.tsx`
```tsx
// full file content