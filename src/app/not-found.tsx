"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();

  return (
    <div>
      <h1>404 - {path} Not Found! </h1>
      <div className="my-3 flex">
        back to
        <Link
          href={`/?category=all`}
          className="ml-2 px-3 py-1 inline-flex text-xs rounded-full bg-[#49c5b6] hover:bg-[#222] text-white  dark:bg-[#e7b10a] dark:hover:bg-[#fff] dark:hover:text-[#222] transition-all duration-200 ease-in-out font-bold"
        >
          all posts
        </Link>
      </div>
    </div>
  );
}
