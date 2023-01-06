"use client";

import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImg from "../../../assets/images/Home/Hero/HeroImg.png";
import { EmailButton } from "./EmailButton";
import Typewriter from "typewriter-effect";

export function Hero() {
  const typeWriterMarkup = (
    <h3>
      <Typewriter
        options={{
          strings: ["Oh hello! 👋", "My name is Chi-Luc", "I specialize in 👇"],
          autoStart: true,
          loop: true,
          delay: 0,
          deleteSpeed: 0,
        }}
      />
    </h3>
  );

  const heroTextMarkup = (
    <div className={styles.HeroText}>
      {typeWriterMarkup}
      <h1 className="Title">Enhancing Digital Experiences</h1>
      <p>
        My goal is to bridge <span>Front-End Development</span> &{" "}
        <span>Product Design</span> to build beautiful, accessible and
        user-centered products for people️.
      </p>
      <EmailButton />
    </div>
  );

  const imgMarkup = (
    <Image
      src={HeroImg}
      alt="Clay Tech Illustration"
      className={styles.HeroImg}
    />
  );

  return (
    <section className={styles.Hero}>
      {heroTextMarkup}
      {imgMarkup}
    </section>
  );
}
