"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Hero() {
  const { t } = useLanguage()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-32 md:py-48 space-y-12">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-foreground to-muted-foreground flex items-center justify-center">
        <span className="text-2xl font-light text-background">ZK</span>
      </div>

      <div className="space-y-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight animate-fade-in">
          {t.heroTitle1}
          <br />
          <span className="text-foreground/80">{t.heroTitle2}</span>
        </h2>

        <p className="text-xl md:text-2xl text-foreground/70 font-light tracking-wide">{t.heroTagline}</p>

        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed font-light">
          {t.heroDescription}
        </p>

        <div className="pt-8 flex gap-6">
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all duration-300 text-sm tracking-widest font-light"
          >
            {t.exploreButton}
          </button>
          <p className="text-sm text-foreground/70 tracking-widest pt-3">
            {t.email}：zl282145321@gmail.com
          </p>
        </div>
      </div>
    </section>
  )
}
