import { ImageProps } from "next/image";
import { LinkProps } from "next/link";

export default interface AvatarLinkSharedProps extends ImageProps,  Pick<LinkProps, 'href'>{}