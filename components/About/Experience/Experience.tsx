import styles from "./Experience.module.scss";
import { TechnologiesList, ToolsList, SkillsList } from "./SkillsList";

export function Experience() {
  return (
    <>
      <div className={styles.SkillGrid}>
        <ListComponent listType="Technologies" list={TechnologiesList} />
        <ListComponent listType="Tools" list={ToolsList} />
        <ListComponent listType="Skills" list={SkillsList} />
      </div>
    </>
  );
}

function ListComponent({ listType, list }: any) {
  const listMarkup = list?.map((skill: any) => (
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
