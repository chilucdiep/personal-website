import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  //   Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
}
