import { WorkCard } from "../../WorkCard";
import SpacestagramThumbnail from "./SpacestagramThumbnail";

export function Spacestagram() {
  return (
    <WorkCard
      side="left"
      subtitle="An astronomy app"
      title="Spacestagram"
      description="Spacestagram is a web app where users can browse through
      NASA’s pictures, read about their context/information and
      save their favorites. For this fun challenge, I fetched the
      NASA APOD's API to display the pictures and information."
      tech="TypeScript, React, Scss"
      projectUrl="/spacestagram"
      figmaUrl="https://chilucdiep.github.io/Spacestagram/"
      githubUrl="https://github.com/chilucdiep/Spacestagram"
    >
      <SpacestagramThumbnail />
    </WorkCard>
  );
}
