import fs from "fs";
import Markdown from "markdown-to-jsx";
// import matter from "gray-matter";

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      {slug}
      <Markdown>{post}</Markdown>
    </div>
  );

  function getPostContent(slug: string) {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");

    return content;
    // const matterResult = matter(content);
    // return matterResult;
  }
}
