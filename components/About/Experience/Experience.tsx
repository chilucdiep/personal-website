import styles from "./Experience.module.scss";
import { TechnologiesList, ToolsList, SkillsList } from "./skillsList";
import Coveo from "../../../assets/images/About/Coveo.svg";
import Billmate from "../../../assets/images/About/Billmate.svg";
import ColoredByte from "../../../assets/images/About/ColoredByte.svg";
import Pratt from "../../../assets/images/About/Pratt.svg";
import Poka from "../../../assets/images/About/Poka.svg";
import Wave from "../../../assets/images/About/Wave.svg";
import Image from "next/image";

export function Experience() {
  const skillsMarkup = (
    <div className={styles.SkillGrid}>
      <ListComponent listType="Technologies" list={TechnologiesList} />
      <ListComponent listType="Tools" list={ToolsList} />
      <ListComponent listType="Skills" list={SkillsList} />
    </div>
  );

  const experienceMarkup = (
    <div className={styles.Experience}>
      <h2>I create products that have an impact.</h2>
      <div className={styles.LogoGrid}>
        <Image src={Poka} alt="Poka Logo" />
        <Image src={Coveo} alt="Coveo Logo" />
        <Image src={Billmate} alt="Billmate Logo" className={styles.Smaller} />
        <Image src={ColoredByte} alt="ColoredByte Logo" />
        <Image src={Pratt} alt="Pratt Logo" className={styles.Smaller} />
      </div>
      <Image src={Wave} alt="Wave Separator" />
    </div>
  );

  return (
    <>
      {skillsMarkup}
      {experienceMarkup}
    </>
  );
}

interface ListProps {
  list: string[];
  listType: string;
}

function ListComponent({ listType, list }: ListProps) {
  const listMarkup = list?.map((skill: string) => (
    <li key={skill}>
      <p>{skill}</p>
    </li>
  ));

  return (
    <div>
      <h4>{listType}</h4>
      <ul>{listMarkup}</ul>
    </div>
  );
}
