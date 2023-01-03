import fs from "fs";
import Link from "next/link";

function getPostMetadata() {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));

  return slugs;

  // Get gray-matter data from each file.
  // const posts = markdownPosts.map((fileName) => {
  //   const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
  //   const matterResult = matter(fileContents);
  //   return {
  //     title: matterResult.data.title,
  //     date: matterResult.data.date,
  //     subtitle: matterResult.data.subtitle,
  //     slug: fileName.replace(".md", ""),
  //   };
  // });
}

export default function BlogPage() {
  const postMetadata = getPostMetadata();
  const postPreviewsMarkup = postMetadata.map((slug) => (
    <Link href={`/blog/${slug}`} key={slug}>
      {slug}
    </Link>
  ));

  return (
    <div>
      Welcome to my Blog
      {postPreviewsMarkup}
    </div>
  );
}
