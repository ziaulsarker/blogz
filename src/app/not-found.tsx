"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const path = usePathname();

  return <h1>404 - {path} Not Found! </h1>;
}
