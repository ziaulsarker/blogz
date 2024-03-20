"use client";
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
} from "next-share";

function Share({
  slug,
  quote,
  hashtag,
}: {
  slug: string;
  quote?: string;
  hashtag?: string;
}) {
  return (
    <div>
      <LinkedinShareButton url={`https://ziaulsarker.com/${slug}`}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>

      <FacebookShareButton
        url={`https://ziaulsarker.com/${slug}`}
        quote={quote}
        hashtag={hashtag}
      >
        <FacebookIcon size={32} />
      </FacebookShareButton>
    </div>
  );
}

export default Share;
