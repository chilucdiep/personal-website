import Link from "next/link";
import getPostMetadata from "../../utils/getPostMetadata";

export default function BlogPage() {
  const postMetadata = getPostMetadata();

  const postPreviewsMarkup = postMetadata.map((post: any) => (
    <div
      key={post.title}
      style={{
        padding: "2em 5em",
        marginBottom: "10em",
        border: "1px #cacaca solid",
        borderRadius: "8px",
        maxWidth: "500px",
      }}
    >
      <h3>{post.date}</h3>
      <Link href={`/blog/${post.slug}`}>
        <h4>{post.title}</h4>
        <p>{post.subtitle}</p>
      </Link>
    </div>
  ));

  return (
    <div>
      <h1>Welcome to my Blog</h1>
      {postPreviewsMarkup}
    </div>
  );
}
