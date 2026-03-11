import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fanscom Funding | Strategic Partner Program",
  description: "Join the Fanscom Funding network. Generate consistent income with competitive commissions by referring qualified B2B leads and clients.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}