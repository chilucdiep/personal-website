import { WorkCard } from "../WorkCard";
import DayleeThumbnail from "./DayleeThumbnail";

export function Daylee() {
  return (
    <WorkCard
      side="left"
      subtitle="A productivity app"
      title="Daylee"
      description="Daylee is a productivity web app where users can utilize various tools
          and widgets such as habit trackers and bullet journaling to organize
          their schedule and life. For this project, I created the design system
          and built the entire front-end design."
      tech="TypeScript, React, Next.js, Scss"
      projectUrl="http://vroom2.ca/"
      figmaUrl="https://www.figma.com/file/BH6GRyC4CYVTOO4zrqESCs/Productivity-Board?node-id=0%3A1"
      githubUrl="https://github.com/Daylee-Digital-Journal/daylee"
      isDone={false}
    >
      <DayleeThumbnail />
    </WorkCard>
  );
}
