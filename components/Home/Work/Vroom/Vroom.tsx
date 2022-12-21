import { WorkCard } from "../WorkCard";
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
      projectUrl="http://vroom2.ca/"
      figmaUrl="https://www.figma.com/file/VvflnQx7wd5uHKjcEVxGSs/Vroom-2?node-id=779%3A33"
      githubUrl="https://github.com/chilucdiep/vroom2"
      isDone={false}
    >
      <VroomThumbnail />
    </WorkCard>
  );
}
