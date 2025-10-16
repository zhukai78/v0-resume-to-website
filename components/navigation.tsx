"use client"

import { useLanguage } from "@/contexts/language-context"
import type { Locale } from "@/lib/i18n"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const { locale, setLocale, t } = useLanguage()

  const locales: { code: Locale; label: string }[] = [
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "en", label: "English" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-light tracking-tight">{t.title}</h1>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground hidden md:block">{t.subtitle}</p>
          <div className="flex gap-2">
            {locales.map((loc) => (
              <button
                key={loc.code}
                onClick={() => setLocale(loc.code)}
                className={`px-3 py-1 text-xs rounded transition-all ${
                  locale === loc.code
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {loc.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
