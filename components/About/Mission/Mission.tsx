import styles from "./Mission.module.scss";
import MissionImg from "../../../assets/images/About/MissionImg.png";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { values, IValue } from "./valuesList";

export function Mission() {
  const typewriterMarkup = (
    <Typewriter
      options={{
        strings: "What is important to me",
        autoStart: true,
        delay: 40,
        cursor: "",
      }}
    />
  );

  const headerMarkup = (
    <>
      <h3>{typewriterMarkup}</h3>
      <h2>
        My mission is to <span>empower people</span> through user-centered
        software
      </h2>
    </>
  );

  const valuesMarkup = values?.map(({ title, description }: IValue) => (
    <ListComponent key={title} title={title} description={description} />
  ));

  const textMarkup = (
    <div className={styles.Text}>
      <p className={styles.Caption}>
        I strive to create engaging user experiences that can help people and I
        love creating products that provide solutions to real world problems.
        Here are some of the things that help me thrive:
      </p>
      <ul>{valuesMarkup}</ul>
    </div>
  );

  return (
    <div className={styles.Mission}>
      {headerMarkup}
      <div className={styles.Description}>
        {textMarkup}
        <Image src={MissionImg} alt="Tech VR" />
      </div>
    </div>
  );
}

function ListComponent({ title, description }: IValue) {
  return (
    <li>
      <h4>{title}</h4>
      <p>{description}</p>
    </li>
  );
}
