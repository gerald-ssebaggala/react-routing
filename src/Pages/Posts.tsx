import { useLoaderData } from "react-router-dom";
import Post from "./Post";

interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const postsData: Post[] = useLoaderData();

  const posts = postsData.map((post) => (
    <Post key={post.id} id={post.id} body={post.body} title={post.title} />
  ));

  return (
    <>
      <h1>Posts</h1>
      <div className="all-posts">{posts}</div>
    </>
  );
}
