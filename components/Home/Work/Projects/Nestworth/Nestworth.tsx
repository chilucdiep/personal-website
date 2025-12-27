import { WorkCard } from "../../WorkCard";
import NestworthThumbnail from "./NestworthThumbnail";

export function Nestworth() {
  return (
    <WorkCard
      side="left"
      subtitle="simplify your real estate"
      title="nestworth"
      date="December 2025 (MVP)"
      description="Nestworth is a real estate portfolio dashboard. The app leverages a clean UI, satisfying animations, and performant rendering to help owners store property documents, receive smart reminders, track mortgages, rent, tenants, expenses, and much more."
      tech="TypeScript, React, Next.js, Tailwind CSS, Shadcn ui, Firebase, Vitest, PostHog, Stripe, Vercel, Claude Code"
      projectUrl="https://nestworth.vercel.app"
    >
      <NestworthThumbnail />
    </WorkCard>
  );
}
