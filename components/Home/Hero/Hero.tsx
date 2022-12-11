import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroImg from "../../../assets/images/Home/Hero/HeroImg.png";

export function Hero() {
  const HeroImgStyle = {
    width: "50%",
    maxWidth: "700px",

    // @media screen and (max-width: 700px) {
    //   margin-top: 3.5em;
    //   width: 100%;
    // }
  };

  return (
    <div className={styles.Hero}>
      <div className={styles.HeroText}>
        <h3>Oh hello! 👋</h3>
        <h1 className="Title">I'm Chi-Luc</h1>
        <p>
          I enjoy bridging <span>Front-End Development</span> &{" "}
          <span>Product Design</span> to build beautiful and accessible digital
          experiences for people️.
        </p>
        <div className={styles.Button}>
          {/* <Button
            icon={MAIL_ICON}
            label="chilucdiep@hotmail.com"
            onClick={copyEmail}
          /> */}
          <button>ok</button>
        </div>
      </div>
      <Image src={HeroImg} width={700} alt="Clay Tech Illustration" />
    </div>
  );
}
