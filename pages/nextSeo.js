import React from "react";
import { NextSeo } from "next-seo";

export default function nextSeo() {
  return (
    <div>
      <NextSeo
        title="Simple Usage Example"
        description="A short description goes here."
      />
      <h1>next-seo</h1>
    </div>
  );
}
