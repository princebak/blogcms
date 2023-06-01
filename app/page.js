import Image from "next/image";
import { PostCard, Categories, PostWidget } from "@/components";

const posts = [
  { title: "React Testing", excerpt: "Lear react testing with fun ..." },
  { title: "React SSR", excerpt: "Lear react SSR with fun ..." },
];

export default function Home() {
  return (
    <main className="container mx-auto px-10 mb-8 bg-gray-300">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post} key={post.title} />
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
