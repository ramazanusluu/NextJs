import React from "react";
import Head from "next/head";
import Image from "next/image";
import reactPic from "../../public/images/react.js.png";
import ImageNav from "../../components/ImageNav";

export default function localImage() {
  return (
    <div>
      <Head>
        <title>Next/LocalImage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageNav />
        <h1> Next Image / Next Local Image</h1>
        <Image src={reactPic} alt="Picture of the author" />
      </main>
    </div>
  );
}
