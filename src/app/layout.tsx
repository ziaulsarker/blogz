import type { Metadata } from "next";
import { cookies } from "next/headers";
import Nav from "../components/nav";
import "../styles/_globals.scss";

import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ziaul Sarker Personal Blog",
  description:
    "I explain my coding journy through the world fo software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  return (
    <html>
      <head />
      <body className={roboto.className} data-theme={theme}>
        <Nav theme={theme} />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
