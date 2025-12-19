import { WorkCard } from "../../WorkCard";
import NestworthThumbnail from "./NestworthThumbnail";

export function Nestworth() {
  return (
    <WorkCard
      side="left"
      subtitle="simplify your real estate"
      title="nestworth"
      date="December 2025 (MVP)"
      description="Nestworth is a comprehensive real estate investment analysis platform that helps investors evaluate rental properties. The platform features property financial modeling, unit management, expense tracking, and detailed analytics to calculate ROI and cash flow projections."
      tech="TypeScript, React, Next.js, Tailwind CSS, Supabase, Figma"
      projectUrl="https://nestworth.vercel.app"
    >
      <NestworthThumbnail />
    </WorkCard>
  );
}
