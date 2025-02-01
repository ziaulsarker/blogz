"use client";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { likeAction } from "src/serverActions/likeBtnAction";

import { auth } from "@/auth";

export function LikeBtn({}: {
  onHandleChange?: (e: React.SyntheticEvent) => void;
}) {
  const handleClick = (e: React.SyntheticEvent) => {
    likeAction();
  };
  return (
    <button onClick={handleClick}>
      <FontAwesomeIcon
        fill={"red"}
        icon={faHeartbeat}
        className="animate-bounce"
      />
    </button>
  );
}
