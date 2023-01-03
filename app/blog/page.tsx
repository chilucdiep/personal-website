import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";
import { PostMetadata } from "../../utils/PostMetadataInterface";

export default function BlogPage() {
  const postMetadata = getPostMetadata();

  const postPreviewsMarkup = postMetadata.map((post: any) => (
    <div key={post.title}>
      <h3>{post.date}</h3>
      <Link href={`/blog/${post.slug}`}>
        <h4>{post.title}</h4>
        <p>{post.subtitle}</p>
      </Link>
    </div>
  ));

  return (
    <div>
      Welcome to my Blog
      {postPreviewsMarkup}
    </div>
  );

  function getPostMetadata(): PostMetadata[] {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    //   Get gray-matter data from each file.
    const posts = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);

      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        subtitle: matterResult.data.subtitle,
        slug: fileName.replace(".md", ""),
      };
    });

    return posts;
  }
}
