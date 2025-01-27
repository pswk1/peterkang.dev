import "./globals.css"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata = {
  title: "Peter Kang, Frontend Engineer Personal Website",
  description: "Personal website for Peter Kang, a frontend engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-pink-500 text-white p-2"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}

