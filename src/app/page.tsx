import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";

import { serialize } from "next-mdx-remote/serialize";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Suspense } from "react";

async function getPosts() {
  const url = "http://localhost:3000/api/posts";
  const res = await fetch(url);

  return res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <Bio
        src={AvatarSrc}
        title="Hi i am Ziaul Sarker."
        text="This is my perosnal blog where i share my thoughts and knowleged about Software Engeneering."
      />

      {posts.map(async (post: any) => {
        return (
          <div key={post.data.title}>
            <h1>{post.data.title}</h1>
            <Suspense fallback={<>Loading...</>}>
              {/* @ts-expect-error Server Component */}
              <MDXRemote source={post.content} components={{}} />
            </Suspense>
          </div>
        );
      })}
    </div>
  );
}
