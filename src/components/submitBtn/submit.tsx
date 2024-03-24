"use client";
import { useFormStatus } from "react-dom";
import { CSSProperties } from "react";
import LoadingSpinner from "../loading/loading";

function SubmitButton({
  copy = "submit",
  className = "",
  style = {},
}: {
  style?: CSSProperties;
  copy?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{ ...style }}
      className={`rounded w-full font-mono dark:bg-[#e7b10a] bg-[#49c5b6] text-white dark:text-[#222] p-2 mt-1 md:mt-0 lg:mt-1 font-medium transition shadow-md dark:shadow-[#000] ${className} `}
    >
      {pending ? (
        <span className="w-full flex items-center justify-center">
          <LoadingSpinner />
        </span>
      ) : (
        copy
      )}
    </button>
  );
}

export default SubmitButton;
