import Avatar from "../components/avatar/avatar";
import AvatarSrc from "@/public/me.jpeg";
import withLink from "../components/withLink";

const AvatarLink = withLink(Avatar);

export default function Page() {
  return (
    <div>
      <header>
        <AvatarLink
          href={"./"}
          src={AvatarSrc}
          alt="Ziaul Sarker"
          style={{ height: "3.5rem", width: "3.5rem" }}
        />
      </header>
    </div>
  );
}
