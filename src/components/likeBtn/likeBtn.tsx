import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LikeBtn() {
  return (
    <div className="bg-transparent">
      <div>
        <FontAwesomeIcon
          fill={"red"}
          icon={faHeartbeat}
          className="animate-bounce"
        />
      </div>
    </div>
  );
}
