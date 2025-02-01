"use client";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { likeAction } from "src/serverActions/likeBtnAction";

import { auth } from "@/auth";

export function LikeBtn() {
  return (
    <button onClick={(e) => likeAction(e)}>
      <FontAwesomeIcon
        fill={"red"}
        icon={faHeartbeat}
        className="animate-bounce"
      />
    </button>
  );
}
