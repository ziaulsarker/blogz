"use client";
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
} from "next-share";

function Share({ slug, ...restProps }: { slug: string }) {
  return (
    <div>
      <LinkedinShareButton url={`https://ziaulsarker.com/${slug}`}>
        <LinkedinIcon size={32} />
      </LinkedinShareButton>

      <FacebookShareButton
        url={`https://ziaulsarker.com/${slug}`}
        {...restProps}
      >
        <FacebookIcon size={32} />
      </FacebookShareButton>
    </div>
  );
}

export default Share;
