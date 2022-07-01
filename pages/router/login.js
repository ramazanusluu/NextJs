import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const useUser = () => ({ user: null, loading: false });

export default function login() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || loading)) {
      router.push("/");
    }
  }, [user, loading]);
  return (
    <div>
      <Head>
        <title>Next/Router | login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Redirecting...</h1>
    </div>
  );
}
