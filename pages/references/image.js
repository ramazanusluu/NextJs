import Head from "next/head";
import Image from "next/image";

export default function image() {
  return (
    <div>
      <Head>
        <title>Next/image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Next/Image</h1>
        <Image
          src="/images/next.png" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="next image"
        />
      </main>
    </div>
  );
}
