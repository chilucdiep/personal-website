import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".mdx"));

  //   Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      description: matterResult.data.description,
      date: matterResult.data.date,
      timeToRead: matterResult.data.timeToRead,
      slug: fileName.replace(".mdx", ""),
    };
  });

  return posts;
}
