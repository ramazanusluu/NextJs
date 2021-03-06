import React from "react";
import Head from "next/head";

export default function PostDetails({ post }) {
  return (
    <div>
      <Head>
        <title>Post Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};
