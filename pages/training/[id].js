import React from "react";
import Head from "next/head";
import { URL } from "../../environment";

export default function TrainingDetail({ lesson }) {
  return (
    <div>
      <Head>
        <title>Training Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>{lesson.id}</h3>
      <h3>{lesson.name}</h3>
      <h3>{lesson.content}</h3>
    </div>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch(`${URL}/api/training`);
  const training = await res.json();
  const paths = training.map((lesson) => {
    return {
      params: { id: lesson.id.toString() },
    };
  });
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${URL}/api/training/${context.params.id}`
  );
  const lesson = await res.json();

  return {
    props: {
      lesson,
    },
  };
};
