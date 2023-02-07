"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImg from "../../../assets/images/Home/Hero/HeroImg.png";
import { EmailButton } from "./EmailButton";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

export function Hero() {
  const textVariant = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imgVariant = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.3,
      },
    },
  };

  const typeWriterMarkup = (
    <h3>
      <Typewriter
        options={{
          strings: ["I specialize in 👇", "Oh hello! 👋", "My name is Chi-Luc"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 30,
        }}
      />
    </h3>
  );

  const heroTextMarkup = (
    <motion.div
      className={styles.HeroText}
      variants={textVariant}
      initial="hidden"
      animate="visible"
    >
      {typeWriterMarkup}
      <h1 className="Title">Enhancing Digital Experiences</h1>
      <p>
        My goal is to bridge <span>Front-End Development</span> &{" "}
        <span>Product Design</span> to build beautiful, accessible and
        user-centered products for people️.
      </p>
      <EmailButton />
    </motion.div>
  );

  const imgMarkup = (
    <motion.div variants={imgVariant} initial="hidden" animate="visible">
      <Image
        src={HeroImg}
        alt="Clay Tech Illustration"
        className={styles.HeroImg}
        priority
        width={60000}
        height={8000}
      />
    </motion.div>
  );

  return (
    <section className={styles.Hero}>
      {heroTextMarkup}
      {imgMarkup}
    </section>
  );
}
