import Avatar from "../components/avatar/avatar";
import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";

async function getAuthor() {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      query: `{
      author {
          name
      }
  }`,
    }),
  };

  const res = await fetch("http://localhost:4000/graphql", options);

  return res.json();
}

export default async function Page() {
  const data = await getAuthor();

  return (
    <div>
      <Bio
        src={AvatarSrc}
        title="Hi i am Ziaul Sarker."
        text="This is my perosnal blog where i share my thoughts and knowleged about Software Engeneering."
      />
    </div>
  );
}
