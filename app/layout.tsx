import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ApprovalHQ | 10DLC Application Platform",
  description: "ApprovalHQ streamlines your 10DLC registration and campaign approval process. Fast, compliant, and built for scale.",
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