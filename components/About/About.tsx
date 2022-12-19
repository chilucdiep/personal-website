import styles from "./About.module.scss";
import AboutImg from "../../assets/images/About/AboutImg.png";
import Image from "next/image";
import Link from "next/link";
import { Journey } from "./Journey";
import { Experience } from "./Experience";
import { Mission } from "./Mission";

export function About() {
  const heroMarkup = (
    <section className={styles.Hero}>
      <h1 className="Title">A quick blurb about me</h1>
      <p>
        I am a driven, curious and detail-oriented front-end developer with
        experience in startups environment. 🚀
      </p>
    </section>
  );

  return (
    <section className={styles.AboutContainer}>
      {heroMarkup}
      <Journey />
      <Experience />
      <Mission />
    </section>
  );
}
