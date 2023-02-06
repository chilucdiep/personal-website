import styles from "./Journey.module.scss";
import AboutImgg from "../../../assets/images/About/AboutImgg.png";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export function Journey() {
  const imgVariant = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: 1,
        duration: 0.4,
      },
    },
  };

  const typewriterMarkup = (
    <Typewriter
      options={{
        strings: "As a passionate self-taught",
        autoStart: true,
        delay: 40,
        cursor: "",
      }}
    />
  );

  const textMarkup = (
    <div className={styles.AboutText}>
      <h3>{typewriterMarkup}</h3>
      <h2>My journey in tech</h2>
      <p>
        My name is Chi-Luc and I am a Software Developer based in 📍 Montreal,
        Canada. I&apos;m currently at{" "}
        <Link
          href="https://www.poka.io"
          target="_blank"
          style={{ color: "#6773FF" }}
        >
          <strong>Poka</strong>
        </Link>{" "}
        where I have a direct impact on the business&apos; metrics as a Frontend
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
        where I delivered usage analytics solutions to Coveo&apos;s clients.
        From revamping a master component in the design system, to designing a
        Data Health feature, I’m always looking for ways to improve the user
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
      <motion.div variants={imgVariant} initial="hidden" animate="visible">
        <Image
          className={styles.AboutImg}
          src={AboutImgg}
          alt="Profile About"
        />
      </motion.div>
      {textMarkup}
    </div>
  );
}
