import React from "react";
import Link from "next/link";

function User({ user }) {
  return (
    <>
      <Link href={`/users/${user.id}`}>
        <a className="card">
          <h1>{user.name}</h1>
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

export default User;
