import Link from "next/link";
import { buildHref } from "src/utils";

interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  category?: string;
}

export default function Pagination({
  currentPage,
  totalPages,
  category,
}: IPaginationProps) {
  if (totalPages <= 1) return null;

  const prevPageHref = buildHref(currentPage - 1, category);
  const nextPageHref = buildHref(currentPage + 1, category);

  return (
    <div className="flex items-center justify-center gap-4 my-8 md:my-12">
      {currentPage > 1 && (
        <Link
          href={prevPageHref}
          className="px-3 py-1 inline-flex text-sm rounded-full bg-[#222] hover:bg-[#49c5b6] text-white dark:bg-white dark:text-[#222] dark:hover:bg-[#e7b10a] dark:hover:text-[#fff] transition-all duration-200 ease-in-out font-bold"
        >
          &larr; PREV
        </Link>
      )}

      <span className="text-sm font-bold">
        {currentPage} / {totalPages}
      </span>

      {currentPage < totalPages && (
        <Link
          href={nextPageHref}
          className="px-3 py-1 inline-flex text-sm rounded-full bg-[#222] hover:bg-[#49c5b6] text-white dark:bg-white dark:text-[#222] dark:hover:bg-[#e7b10a] dark:hover:text-[#fff] transition-all duration-200 ease-in-out font-bold"
        >
          NEXT &rarr;
        </Link>
      )}
    </div>
  );
}
