import type { Metadata } from 'next'
import Nav from "../components/nav";
import "../styles/_globals.scss";



export const metadata: Metadata = {
  title: 'Ziaul Sarker Personal Blog',
  description: 'I explain my coding journy through the world fo software engineering.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head />
      <body>
        <Nav />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}