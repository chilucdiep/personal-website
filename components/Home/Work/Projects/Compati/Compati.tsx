import { WorkCard } from "../../WorkCard";
import CompatiThumbnail from "./CompatiThumbnail";

export function Compati() {
  return (
    <WorkCard
      side="left"
      subtitle="mental check-in for your emotional health"
      title="Compati"
      date="February 2024"
      description="Compati is a self-reflective tool for users to identify and articulate their emotions, and share them with their mental health professional. I built this full-stack app with Next13, used Zustand for state management, and integrated the OpenAI API to generate reflective prompts for journal entries."
      tech="TypeScript, React, Next.js, Zustand, Prisma, Supabase, Scss, Figma"
      projectUrl="https://shigg.vercel.app/"
    >
      <CompatiThumbnail />
    </WorkCard>
  );
}
