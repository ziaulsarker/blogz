import Link, { LinkProps } from "next/link";

export interface IPill {
  text: string;
  href?: string | LinkProps;
}

export default function Pill({ text }: IPill) {
  return (
    <Link
      href={{
        pathname: "/",
        query: { category: text },
      }}
      className="px-3 py-1 inline-flex text-xs rounded-full bg-[#222] hover:bg-[#49c5b6] text-white dark:text-[#222] dark:bg-white dark:hover:bg-[#e7b10a] dark:hover:text-[#fff] transition-all duration-200 ease-in-out"
    >
      <span>{text}</span>
    </Link>
  );
}
