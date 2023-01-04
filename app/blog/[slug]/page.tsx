import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "../../../utils/getPostMetadata";
import { BlogPost } from "../../../components/Blog/BlogPost";

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return <BlogPost {...post} />;
}

function getPostContent(slug: string) {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();

  return posts.map((post) => ({
    slug: post.slug,
  }));
};
