import Head from "next/head";
import PostList from "../components/PostList";

export default function Posts({ posts }) {
    console.log(posts);
  return (
    <div>
      <Head>
        <title>Data Fetching</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Data Fetching</h1>
      <PostList posts={posts}/>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
