import React from "react";
import fs from "fs";
import matter from "gray-matter";
import getPostMetadata from "@/utils/getPostMetadata";
import Markdown from "markdown-to-jsx";

function getPostContent(slug) {
  const folder = "./recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("recipes");
  return posts.map((post) => ({slug: post.slug}));
};

export const generateMetadata = ({ params, searchParams }) => {
  const id = params?.slug ? " • " + params?.slug : "";
  return {
    title: `Samia's Blog ${id.replace("_", " ")}`,
  };
};

const RecipePage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
};

export default RecipePage;
