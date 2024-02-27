"use server";
import { cookies } from "next/headers";

export default async function setTheme(isDarkMode: boolean) {
  const myCookies = cookies();
  const theme = isDarkMode ? 'dark' : 'light';
  const oneWeek = (24 * 60 * 60 * 1000) * 14
  myCookies.set('theme', theme, { expires: Date.now() + oneWeek })
}