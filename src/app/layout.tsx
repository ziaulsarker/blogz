import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "I explain my coding journey through the world fo software engineering.",
  keywords:
    "HTML, CSS, JavaScript Software Engineer, AI, Coding & Programming, Machine Learning, Software Development, Software Engineering, ML Engineering, Machine Learning Engine",

  other: {
    author: "Ziaul Sarker",
    "page-type": "Blogging",
    "page-topic":
      "Software Engineer, AI, Coding & Programming, Machine Learning, Software Development",
  },
  icons: {
    icon: "/me.jpeg", // /public path
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value ?? "light";

  return (
    <html>
      <body className={roboto.className} data-theme={theme}>
        <Nav theme={theme} />
        <main className="container">{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
