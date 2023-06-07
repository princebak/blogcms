import { PostCard, Categories, PostWidget } from "@/components";
import { FeaturedPosts } from "@/components";
import { getPosts } from "@/services";

export default async function Home() {
  const myPosts = await getPosts();

  return (
    <main className="container mx-auto px-10 mb-8">
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {myPosts.map((post) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </main>
  );
}
