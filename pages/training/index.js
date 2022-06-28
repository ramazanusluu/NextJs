import Head from "next/head";
import Link from "next/link";
import { URL } from "../../environment/index";

export default function Training({ lessons }) {
  return (
    <div>
      <Head>
        <title>API Routes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>API Routes</h1>
      <div>
        {lessons.map((lesson) => (
          <div key={lesson.id}>
            <Link href={`/training/${lesson.id}`}>
              <a>{lesson.name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${URL}/api/training`);
  const lessons = await res.json();
  return {
    props: {
      lessons,
    },
  };
};
