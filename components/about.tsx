"use client"

import { useLanguage } from "@/contexts/language-context"

export default function About() {
  const { t } = useLanguage()

  return (
    <section className="space-y-12">
      <h3 className="text-3xl font-light tracking-tight">{t.aboutTitle}</h3>

      <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
        <p>{t.aboutPara1}</p>
        <p>{t.aboutPara2}</p>
        <p>{t.aboutPara3}</p>
        <p>{t.aboutPara4}</p>
      </div>
    </section>
  )
}
