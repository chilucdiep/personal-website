import getPostMetadata from "../../utils/getPostMetadata";
import { PostPreview } from "./PostPreview";
import styles from "./Blog.module.scss";

export function Blog() {
  const postMetadata = getPostMetadata();

  const heroMarkup = (
    <section className={styles.Hero}>
      <h1 className="Title">Welcome to my Blog!</h1>
      <p>
        Here, I share through my writing my experience as a front-end engineer
        and everything I&apos;m learning on CSS, React, Typescript, design
        thinking and more.
      </p>
    </section>
  );

  const postPreviewsMarkup = postMetadata.map((post: any) => (
    <PostPreview key={post.title} {...post} />
  ));

  return (
    <section className={styles.Blog}>
      {heroMarkup}
      <h4>Recently Published</h4>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2em" }}
      >
        {postPreviewsMarkup}
      </div>
    </section>
  );
}
