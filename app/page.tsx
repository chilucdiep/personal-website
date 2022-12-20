import { Hero } from "../components/Home/Hero";
import { Work } from "../components/Home/Work/Work";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="work-section">
        <Work />
      </div>
    </>
  );
}
