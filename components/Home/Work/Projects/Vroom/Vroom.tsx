import { WorkCard } from "../../WorkCard";
import VroomThumbnail from "./VroomThumbnail";

export function Vroom() {
  return (
    <WorkCard
      side="right"
      subtitle="A vehicle rental company"
      title="Vroom 2"
      description="Vroom2 is a Slingshot vehicle rental company with the
        mission to provide an unique and exhilarating experience to
        their customers. As a freelancer, I was responsible for
        defining business requirements & brand strategy, translating
        it in design and implementing it for deployment."
      tech="TypeScript, React, Next.js, Scss"
      projectUrl="/vroom"
      figmaUrl="https://www.vroom2.ca/"
      githubUrl="https://github.com/chilucdiep/vroom2"
    >
      <VroomThumbnail />
    </WorkCard>
  );
}
