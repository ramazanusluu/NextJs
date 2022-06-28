import React from "react";
import Head from "next/head";

export default function UserDetail({ user }) {
  return (
    <div>
      <Head>
        <title>User Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
      <h3>{user.phone}</h3>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );
  const user = await res.json();
  return {
    props: {
      user,
    },
  };
};
