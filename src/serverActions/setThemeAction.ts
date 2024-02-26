"use server";
import { cookies } from "next/headers";

export default async function setTheme(isDarkMode: boolean) {
  const myCookies = cookies();
  const theme = isDarkMode ? 'dark' : 'light';

  myCookies.set('theme', theme)
}