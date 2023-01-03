import Link from "next/link";
import { PostMetadata } from "../../utils/PostMetadata";

export function PostPreview(post: PostMetadata) {
  return (
    <div
      style={{
        padding: "2em 5em",
        marginBottom: "10em",
        border: "1px #cacaca solid",
        borderRadius: "8px",
        maxWidth: "500px",
      }}
    >
      <h3>{post.subtitle}</h3>
      <Link href={`/blog/${post.slug}`}>
        <h4>{post.title}</h4>
        <p>{post.description}</p>
      </Link>
    </div>
  );
}
