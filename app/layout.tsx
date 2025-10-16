import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { HtmlLangWrapper } from "@/components/html-lang-wrapper"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "朱凱 | Zhu Kai | Senior Android Engineer",
  description: "10年以上の実務経験を持つシニアAndroidエンジニア | Senior Android Engineer with 10+ years experience | 拥有10年以上经验的高级Android工程师",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className="dark">
      <body className={`font-sans antialiased bg-background text-foreground`}>
        <LanguageProvider>
          <HtmlLangWrapper />
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
