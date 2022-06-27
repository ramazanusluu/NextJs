import Head from "next/head";
import Refresh from "../components/Refresh";

export default function fastRefresh() {
  return (
    <div>
      <Head>
        <title>Fast Refresh</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Refresh />
      </main>
    </div>
  );
}