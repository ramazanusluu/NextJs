import Head from "next/head";
import Image from "next/image";
import ImageNav from "../../components/ImageNav";
import styles from "../../styles/Image.module.css";

export default function imageSizing() {
  return (
    <div>
      <Head>
        <title>Next/Image Sizing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ImageNav />
        <h1>Next Image / Image Sizing</h1>
        <div className={styles.imageSizing}>
          <Image
            src="/images/next.png" // Route of the image file
            alt="next image"
            layout="fill"
            priority
          />
        </div>
      </main>
    </div>
  );
}
