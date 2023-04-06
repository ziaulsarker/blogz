import Avatar from "../components/avatar/avatar";
import AvatarSrc from "@/public/me.jpeg";
import Bio from "../components/bio";

export default function Page() {
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
