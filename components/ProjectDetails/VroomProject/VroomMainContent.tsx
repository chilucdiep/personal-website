import Image from "next/image";
import { MainContent } from "../ProjectTemplate/ContentTemplate/MainContent";
import styles from "../ProjectTemplate/ContentTemplate/MainContent/MainContent.module.scss";
import HomepageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/HomepageSpaceImg.svg";
import FeedpageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/FeedpageSpaceImg.svg";
import DetailspageSpaceImg from "../../../assets/images/ProjectDetails/Spacestagram/DetailspageSpaceImg.svg";
import FeedPageComponentImg from "../../../assets/images/ProjectDetails/Spacestagram/FeedPageComponentImg.svg";
import useFetchPicturesImg from "../../../assets/images/ProjectDetails/Spacestagram/useFetchPicturesImg.svg";
import useLocalStorageImg from "../../../assets/images/ProjectDetails/Spacestagram/useLocalStorageImg.svg";

export function VroomMainContent() {
  return (
    <MainContent
      projectBrief=" I was hired as a freelancer to work on the design and development of a website for an active lifestyle vehicle rental company. My responsibilities included defining the business requirements and brand strategy, creating the design, and implementing the website for deployment. The website included a Home page and an About page to provide information about the company and its offerings, as well as customer reviews and a FAQ section to provide additional important information to users."
      problem="Vroom2 is a unique and exciting vehicle rental company that aims to provide an unforgettable experience for its customers. However, without a strong online presence, it can be difficult for the company to reach and attract new customers. Additionally, potential customers may have questions or concerns about the company and its offerings, and may not have an easy way to find answers."
      goal="The goal of the Vroom2 project was to create a website that accurately reflects the brand's mission and values, and effectively communicates the unique experience that the company offers. By creating a strong online presence and including information about the company, its offerings, and customer reviews, the website aims to attract and retain new customers and address any questions or concerns they may have. Additionally, by providing a FAQ section, the website aims to provide a convenient way for users to find answers to common questions."
    ></MainContent>
  );
}
