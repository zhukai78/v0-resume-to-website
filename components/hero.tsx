"use client"

import { useRef } from "react"

export default function Hero() {
  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-32 md:py-48 space-y-12">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center">
        <span className="text-2xl font-light text-background">ZK</span>
      </div>

      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight animate-fade-in">
          シニア
          <br />
          <span className="text-muted-foreground">フルスタックフロントエンドエンジニア</span>
          <br />
          エンジニア
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
          Crafting intuitive digital experiences through technology.
        </p>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light">
          10年以上にわたり、モバイルアプリ・IoTデバイス・スマートヘルス領域で豊富な開発経験を積んだシニアAndroidエンジニアです。
        </p>

        <div className="pt-8 flex gap-6">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm tracking-widest font-light"
          >
            EXPLORE
          </button>
          <p className="text-sm text-muted-foreground tracking-widest pt-3">Email：zl282145321@gmail.com</p>
        </div>
      </div>

      <div ref={aboutRef} className="absolute -top-20" />
    </section>
  )
}
