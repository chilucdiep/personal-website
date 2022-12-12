import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImg from "../../../assets/images/Home/Hero/HeroImg.png";
import { Button } from "../../Button";

export function Hero() {
  // const HeroImgStyle = {
  //   width: "50%",
  //   maxWidth: "700px",

  //   // @media screen and (max-width: 700px) {
  //   //   margin-top: 3.5em;
  //   //   width: 100%;
  //   // }
  // };

  const heroTextMarkup = (
    <div className={styles.HeroText}>
      <h3>Oh hello! 👋</h3>
      <h1 className="Title">I'm Chi-Luc</h1>
      <p>
        I enjoy bridging <span>Front-End Development</span> &{" "}
        <span>Product Design</span> to build beautiful and accessible digital
        experiences for people️.
      </p>
      <div className={styles.Button}>
        <Button
          label="chilucdiep@hotmail.com"
          // onClick={() => console.log("ok")}
        />
      </div>
    </div>
  );

  return (
    <section className={styles.Hero}>
      {heroTextMarkup}
      <Image src={HeroImg} alt="Clay Tech Illustration" />
    </section>
  );

  async function copyEmail() {
    const email = "chilucdiep@hotmail.com";

    try {
      await navigator.clipboard.writeText(email);
      alert(`You copied '${email}' to your clipboard!`);
      console.log("Page URL copied to clipboard");
    } catch (err) {
      console.error("Failed to copy", err);
    }
  }
}
