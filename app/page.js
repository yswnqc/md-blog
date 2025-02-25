import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Home() {
  const postMetadata = getPostMetadata("recipes");
  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, idx) => (
          <PostCard key={idx} post={post} />
        ))}
      </div>
    </main>
  );
}
