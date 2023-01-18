import Nav from "../components/nav"

import "../styles/globals.scss"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        {/* @ts-expect-error */}
        <Nav />
        {children}
      </body>
    </html>
  )
}
