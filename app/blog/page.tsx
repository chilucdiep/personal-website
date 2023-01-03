import Link from "next/link";
import { PostPreview } from "../../components/PostPreview";
import getPostMetadata from "../../utils/getPostMetadata";

export default function BlogPage() {
  const postMetadata = getPostMetadata();

  const postPreviewsMarkup = postMetadata.map((post: any) => (
    <PostPreview key={post.title} {...post} />
  ));

  return (
    <div>
      <h1>Welcome to my Blog</h1>
      {postPreviewsMarkup}
    </div>
  );
}
