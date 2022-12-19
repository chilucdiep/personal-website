import styles from "./Journey.module.scss";
import AboutImg from "../../../assets/images/About/AboutImg.png";
import Image from "next/image";
import Link from "next/link";

export function Journey() {
  const textMarkup = (
    <div className={styles.AboutText}>
      <h3>As a passionate self-taught</h3>
      <h2>My journey in tech</h2>
      <p>
        My name is Chi-Luc and I am a Software Developer based in 📍 Montreal,
        Canada. I’m currently at{" "}
        <Link
          href="https://www.poka.io"
          target="_blank"
          style={{ color: "#6773FF" }}
        >
          <strong>Poka</strong>
        </Link>{" "}
        where I have a direct impact on the business' metrics as a Frontend
        Developer working on the pricing plans & web admin.
      </p>
      <p>
        Previously, I worked as a UX Designer at{" "}
        <Link
          href="https://www.coveo.com"
          target="_blank"
          style={{ color: "#6773FF" }}
        >
          <strong>Coveo</strong>
        </Link>{" "}
        where I delivered usage analytics solutions to Coveo's clients. From
        revamping a master component in the design system, to designing a Data
        Health feature, I’m always looking for ways to improve the user
        experience by tackling interesting challenges.
      </p>
      <p>
        I spent 3 years as a Electrical/Mechanical Engineering Student at
        Polytechnique Montreal. Driven by curiosity, I discovered the ✨magic✨
        of web development and went on the path of self-study with the help of
        amazing mentors, internships and online ressources.
      </p>
    </div>
  );

  return (
    <div className={styles.Journey}>
      <Image className={styles.AboutImg} src={AboutImg} alt="Profile About" />
      {textMarkup}
    </div>
  );
}
