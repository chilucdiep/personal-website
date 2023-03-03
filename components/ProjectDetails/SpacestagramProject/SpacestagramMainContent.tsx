import Image from "next/image";
import { MainContent } from "../ProjectTemplate/ContentTemplate/MainContent";
import styles from "../ProjectTemplate/ContentTemplate/MainContent/MainContent.module.scss";
import HomepageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/HomepageSpaceImg.svg";
import FeedpageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/FeedpageSpaceImg.svg";
import DetailspageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/DetailspageSpaceImg.svg";
import FeedPageComponentImg from "../../../assets/images/ProjectDetails/Spacestagram/FeedPageComponentImg.svg";
import useFetchPicturesImg from "../../../assets/images/ProjectDetails/Spacestagram/useFetchPicturesImg.svg";
import useLocalStorageImg from "../../../assets/images/ProjectDetails/Spacestagram/useLocalStorageImg.svg";
import { ILink } from "../ProjectTemplate/ContentTemplate/LinksTemplate/Links.constant";
import { LinkTemplate } from "../ProjectTemplate/ContentTemplate/LinksTemplate";
import VroomThumbnail from "../../../assets/images/PageThumbnails/VroomThumbnail.svg";
import DayleeThumbnail from "../../../assets/images/PageThumbnails/DayleeThumbnail.svg";

export function SpacestagramMainContent() {
  const pagesMarkup = (
    <div className={styles.ThreeColumnGrid}>
      <div>
        <p>Home Page</p>
        <Image src={HomepageSpaceImg} alt="Home Page" />
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

  const customHooksMarkup = (
    <>
      <h4>Custom hooks</h4>
      <p>
        To enhance the efficiency and scalability of the app, I developed two
        custom hooks for this project: <code>useFetchPictures</code> and{" "}
        <code>useLocalStorage</code>. The <code>useFetchPictures</code> enables
        me to easily retrieve and access the pictures from the API within
        various components of the app.
      </p>
      <p>
        The <code>useLocalStorage</code> allows users to save their favorite
        pictures in the local storage for a more seamless experience. These
        hooks were implemented to streamline the code and improve the user
        experience.
      </p>
      <div className={styles.TwoColumnGrid}>
        <div>
          <p>useFetchPictures</p>
          <Image src={useFetchPicturesImg} alt="useFetchPictures" />
        </div>
        <div>
          <p>useLocalStorage</p>
          <Image src={useLocalStorageImg} alt="useLocalStorage" />
        </div>
      </div>
    </>
  );

  const feedPageMarkup = (
    <>
      <h4>The Feed page component</h4>
      <p>
        The Feed page component is a key feature of the app and utilizes the
        useFetchPictures hook to display the astronomy pictures in chronological
        order. It also includes lazy loading functionality to improve app
        performance. This allows the Feed page to smoothly load and display a
        large number of images without slowing down the user experience.
      </p>
      <div className={styles.TwoColumnGrid}>
        <Image src={FeedPageComponentImg} alt="Todo Code" />
      </div>
    </>
  );

  const featuresMarkup = (
    <div className={styles.ContentSection}>
      <h2>Some cool features</h2>
      <h4>Routing with React Router V6</h4>
      <p>
        The Spacetr Home page provides a quick overview of the app and invites
        users to start their journey by clicking the &apos;Explore&apos; button.
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
      {customHooksMarkup}
      {feedPageMarkup}
    </div>
  );

  const lessonsListMarkup = (
    <ul>
      <li>
        <p>Implementing lazy loading for API data to improve performance</p>
      </li>
      <li>
        <p>
          Building custom hooks in React to efficiently fetch and manage data
        </p>
      </li>
      <li>
        <p>Storing data in the local storage to enhance the user experience</p>
      </li>
      <li>
        <p>
          Using React Router V6 for effective routing and navigation within the
          app
        </p>
      </li>
      <li>
        <p>
          Utilizing modern CSS features such as clamp and grid to create
          visually appealing layouts
        </p>
      </li>
      <li>
        <p>
          By applying these techniques, I was able to build a web app that helps
          space enthusiasts easily access and learn about a wide range of
          astronomy-related images.
        </p>
      </li>
    </ul>
  );

  const lessonsMarkup = (
    <div className={styles.ContentSection}>
      <h2>Lessons learned</h2>
      <p>
        {" "}
        Throughout this project, I gained valuable experience and learned a
        variety of skills and techniques, including:
      </p>
      {lessonsListMarkup}
      <p>
        The app&apos;s user-friendly design and intuitive navigation allows
        users to easily browse and discover new content, while the local storage
        feature enables them to save and revisit their favorite images.
      </p>
      <p>
        Overall, this project has had a significant impact on my development
        skills and has allowed me to create a valuable resource for those
        interested in space exploration.
      </p>
    </div>
  );

  const links: ILink[] = [
    { href: "/daylee", src: DayleeThumbnail },
    { href: "/vroom", src: VroomThumbnail },
  ];

  const linksMarkup = <LinkTemplate links={links} />;

  return (
    <MainContent
      projectBrief="I designed and developed a web application that utilizes an API to access NASA's collection of pictures. Users can browse through the images, read about their context and additional information, and save their favorites. The app also includes a daily update of a new astronomy picture of the day on the feed page."
      problem="Space enthusiasts often have difficulty finding a reliable source for astronomy information and images. To solve this problem, I created Spacetr, a web app that allows users to easily browse and learn about space-related images. Spacetr utilizes clean code and advanced technologies to provide a user-friendly experience for those interested in space exploration."
      goal="The goal of this project was to build a web application that would allow space enthusiasts to explore and learn more about astronomy. To achieve this, I focused on implementing clean code practices, a scalable file architecture, and cutting-edge technologies such as custom hooks and routing using React Router V6."
    >
      {featuresMarkup}
      {lessonsMarkup}
      {linksMarkup}
    </MainContent>
  );
}
