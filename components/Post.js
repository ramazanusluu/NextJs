import React from "react";
import Link from "next/link";

function Post({ post }) {
  return (
    <>
      <Link href={`/posts/${post.id}`}>
        <a className="card">
          <h1>{post.title}</h1>
        </a>
      </Link>
      <style jsx>
        {`
          .card {
            font-size: 10px;
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid black;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 300px;
          }
        `}
      </style>
    </>
  );
}

export default Post;
