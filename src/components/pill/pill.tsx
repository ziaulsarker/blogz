import Link, { type LinkProps } from "next/link";
import type { UrlObject } from "url";

export interface IPill {
  text: string;
  href?: string | LinkProps | UrlObject;
  isActive?: boolean;
}

export default function Pill({ text, href, isActive = false }: IPill) {
  const defaultClasses =
    "px-3 py-1 inline-flex text-xs rounded-full hover:bg-[#49c5b6] text-white dark:text-[#222]  dark:hover:bg-[#e7b10a] dark:hover:text-[#fff] transition-all duration-200 ease-in-out";

  const activeClasses = isActive
    ? "bg-[#49c5b6] dark:bg-[#e7b10a] dark:text-[#fff]"
    : "bg-[#222] dark:bg-white";

  return href ? (
    <Link
      href={{
        pathname: "/",
        query: { category: text },
      }}
      className={`${defaultClasses} ${activeClasses}`}
    >
      <span>{text.toUpperCase()}</span>
    </Link>
  ) : (
    <span className={`${defaultClasses} ${activeClasses}`}>
      <span>{text.toUpperCase()}</span>
    </span>
  );
}
