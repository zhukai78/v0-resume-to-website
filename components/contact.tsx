"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <section className="space-y-12">
      <h3 className="text-3xl font-light tracking-tight">{t.contactTitle}</h3>

      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">{t.contactDescription}</p>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">{t.contactEmail}</p>
            <a href="mailto:zl282145321@gmail.com" className="text-lg hover:text-accent transition-colors">
              zl282145321@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
