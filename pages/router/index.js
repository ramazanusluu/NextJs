import { useRouter } from "next/router";
import Head from "next/head";
import styles from "../../styles/Sidebar.module.css";

export default function Router() {
  const router = useRouter();
  console.log({ router });
  return (
    <div>
      <Head>
        <title>Next | Router</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button
        className={styles.buton}
        type="button"
        onClick={() => router.push("/router/nextRouter")}
      >
        Next/Router
      </button>
      <button
        className={styles.buton}
        type="button"
        onClick={() => router.push("/router/login")}
      >
        Login
      </button>
      <button
        className={styles.buton}
        type="button"
        onClick={() => router.push("/router/withRouters")}
      >
        WithRouters
      </button>
    </div>
  );
}
