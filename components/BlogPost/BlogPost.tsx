import Markdown from "markdown-to-jsx";
import styles from "./BlogPost.module.scss";

export function BlogPost(post: any) {
  return (
    <section className={styles.BlogPost}>
      <div className={styles.TitleSection}>
        <h5>{post.data.subtitle}</h5>
        <h1>{post.data.title}</h1>
      </div>
      <Markdown>{post.content}</Markdown>
    </section>
  );
}
