"use client";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { likeAction } from "../../serverActions";

export function LikeBtn() {
  return (
    <button onClick={() => likeAction({ isPending: true })}>
      <FontAwesomeIcon
        fill={"red"}
        icon={faHeartbeat}
        className="animate-bounce"
      />
    </button>
  );
}
