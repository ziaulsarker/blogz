import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";
import { BASE_URL } from "src/utils";
import PostGrid from "src/components/postsGrid/postGrid";

async function getPosts() {
  const url = `${BASE_URL}/api/posts`;
  const res = await fetch(url);
  return !res.ok ? [] : res.json();
}

export default async function Page() {
  const posts = await getPosts();

  return (
    <div>
      <Bio
        src={AvatarSrc}
        title="Hi I am Ziaul Sarker."
        text="This is my perosnal blog where i share my thoughts and knowleged about Software Engeneering."
      />

      <PostGrid posts={posts} />
    </div>
  );
}
