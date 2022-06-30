import Head from "next/head";
import Image from "next/image";
import ImageNav from "../../components/ImageNav";

export default function image() {
  return (
    <div>
      <Head>
        <title>Next/image</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageNav />
        <h1>Next Image / Remote Image</h1>
        <Image
          src="/images/next.png" // Route of the image file
          height={500} // Desired size with correct aspect ratio
          width={500} // Desired size with correct aspect ratio
          alt="next image"
          priority
        />
      </main>
    </div>
  );
}
