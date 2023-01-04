import Link from "next/link";
import styles from "./PostPreview.module.scss";
import { PostMetadata } from "../../utils/PostMetadata";

export function PostPreview(post: PostMetadata) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.PostPreview}>
      <h3>{post.subtitle}</h3>
      <h4>{post.title}</h4>
      <p>{post.description}</p>
    </Link>
  );
}
