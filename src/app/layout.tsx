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
        <nav>its the nav</nav>
        {children}
      </body>
    </html>
  )
}
