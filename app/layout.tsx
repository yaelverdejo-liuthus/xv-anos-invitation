import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-cursive",
})

export const metadata: Metadata = {
  title: "Mis XV Años - Jimena",
  description: "Te invito a celebrar mis XV años el 5 de diciembre de 2025",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased ${_dancingScript.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
