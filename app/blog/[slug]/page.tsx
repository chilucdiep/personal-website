import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "../../../utils/getPostMetadata";

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "6em auto",
      }}
    >
      <h5>{post.data.subtitle}</h5>
      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </div>
  );

  function getPostContent(slug: string) {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);

    return matterResult;
  }
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
