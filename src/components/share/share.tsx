"use client";
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

function Share({
  slug,
  quote,
  hashtag,
  title,
  rounded = false,
  size = 30,
}: {
  slug: string;
  quote?: string;
  hashtag?: string;
  rounded?: boolean;
  title?: string;
  size?: number;
}) {
  return (
    <div className="flex flex-row md:flex-col gap-2 sticky top-4">
      <LinkedinShareButton url={`https://ziaulsarker.com/${slug}`}>
        <LinkedinIcon size={size} round={rounded} />
      </LinkedinShareButton>

      <FacebookShareButton
        url={`https://ziaulsarker.com/${slug}`}
        quote={quote}
        hashtag={hashtag}
      >
        <FacebookIcon size={size} round={rounded} />
      </FacebookShareButton>

      <TwitterShareButton
        url={`https://ziaulsarker.com/${slug}`}
        title={"next-share is a social share buttons for your next React apps."}
      >
        <TwitterIcon size={size} round={rounded} />
      </TwitterShareButton>
    </div>
  );
}

export default Share;
