import React from "react";
import Head from "next/head";
import UserList from "../components/UserList";

export default function Users({users}) {
  return (
    <div>
      <Head>
        <title>Data Fetching 2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Data Fetching</h1>
        <UserList users={users}/>
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};
