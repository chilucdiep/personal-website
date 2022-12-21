import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImg from "../../../assets/images/Home/Hero/HeroImg.png";
import { EmailButton } from "./EmailButton";
import Typewriter from "typewriter-effect";

export function Hero() {
  const words = ["Chi-Luc", "a developer", "a designer"];

  const typeWriterMarkup = (
    <h1 className="Title">Enhancing Digital Experiences</h1>
  );

  const heroTextMarkup = (
    <div className={styles.HeroText}>
      <h3>Hello! 👋 I specialize in</h3>
      {typeWriterMarkup}
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
      {/* <Typewriter
        options={{
          strings: ["Hello", "World"],
          autoStart: true,
          loop: true,
        }}
      /> */}
    </section>
  );
}
