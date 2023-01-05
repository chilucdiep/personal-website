import Image from "next/image";
import { MainContent } from "../ProjectTemplate/ContentTemplate/MainContent";
import styles from "../ProjectTemplate/ContentTemplate/MainContent/MainContent.module.scss";
import HomepageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/HomepageSpaceImg.svg";
import FeedpageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/FeedpageSpaceImg.svg";
import DetailspageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/DetailspageSpaceImg.svg";

export function SpacestagramMainContent() {
  const pagesMarkup = (
    <div className={styles.ThreeColumnGrid}>
      <div>
        <p>Home Page</p>
        <Image
          src={HomepageSpaceImg}
          alt="Home Page"
          style={{ height: "auto" }}
        />
      </div>
      <div>
        <p>Feed Page</p>
        <Image src={FeedpageSpaceImg} alt="Feed page" />
      </div>
      <div>
        <p>Details Page</p>
        <Image src={DetailspageSpaceImg} alt="Details page" />
      </div>
    </div>
  );

  const featuresMarkup = (
    <div className={styles.ContentSection}>
      <h2>Some cool features</h2>
      <h4>Routing with React Router V6</h4>
      <p>
        The Spacestagram Home page provides a quick overview of the app and
        invites users to start their journey by clicking the &apos;Explore&apos;
        button.
      </p>
      <p>
        The Feed page features a curated selection of the most breathtaking
        astronomy pictures, updated daily. Users can save their favorites and
        build their own collection of space-related imagery.
      </p>
      <p>
        By clicking on a picture, users can access the Details page, where they
        can find rich information and context about the image, allowing them to
        learn more about the subject depicted.
      </p>
      {pagesMarkup}
    </div>
  );

  const lessonsMarkup = (
    <div className={styles.ContentSection}>
      <h2>Lessons learned</h2>
      <p>
        Through building the Daylee app, I learned the importance of creating
        highly reusable and flexible components, as demonstrated by the custom
        design system I implemented. I also gained valuable experience working
        with time manipulation in JavaScript. As the project continues, I look
        forward to learning more and improving the app even further
      </p>
    </div>
  );

  return (
    <MainContent
      projectBrief="I designed and developed a web application that utilizes an API to access NASA's collection of pictures. Users can browse through the images, read about their context and additional information, and save their favorites. The app also includes a daily update of a new astronomy picture of the day on the feed page."
      problem="Space enthusiasts often have difficulty finding a reliable source for astronomy information and images. To solve this problem, I created Spacestagram, a web app that allows users to easily browse and learn about space-related images. Spacestagram utilizes clean code and advanced technologies to provide a user-friendly experience for those interested in space exploration."
      goal="The goal of this project was to build a web application that would allow space enthusiasts to explore and learn more about astronomy. To achieve this, I focused on implementing clean code practices, a scalable file architecture, and cutting-edge technologies such as custom hooks and routing using React Router V6."
    >
      {featuresMarkup}
      {/* {lessonsMarkup} */}
    </MainContent>
  );
}
