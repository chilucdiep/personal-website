import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImg from "../../../assets/images/Home/Hero/HeroImg.png";
import { EmailButton } from "./EmailButton";
import Typewriter from "typewriter-effect";

export function Hero() {
  const words = ["Chi-Luc", "a developer", "a designer"];

  const typeWriterMarkup = <h1 className="Title">I&apos;m Chi-Luc</h1>;

  const heroTextMarkup = (
    <div className={styles.HeroText}>
      <h3>Oh hello! 👋</h3>
      {typeWriterMarkup}
      <p>
        I enjoy bridging <span>Front-End Development</span> &{" "}
        <span>Product Design</span> to build beautiful and accessible digital
        experiences for people️.
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
