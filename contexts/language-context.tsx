"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, translations } from "@/lib/i18n"

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: typeof translations.ja
}

const defaultLocale: Locale = "ja"

const LanguageContext = createContext<LanguageContextType>({
  locale: defaultLocale,
  setLocale: () => {},
  t: translations[defaultLocale],
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Only run in browser
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") as Locale | null
      if (savedLocale && translations[savedLocale]) {
        setLocaleState(savedLocale)
      } else {
        // Auto-detect browser language
        const browserLang = navigator.language.toLowerCase()
        if (browserLang.startsWith("zh")) {
          setLocaleState("zh")
        } else if (browserLang.startsWith("ja")) {
          setLocaleState("ja")
        } else if (browserLang.startsWith("en")) {
          setLocaleState("en")
        }
      }
      setMounted(true)
    }
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", newLocale)
    }
  }

  const value = {
    locale: mounted ? locale : defaultLocale,
    setLocale,
    t: translations[mounted ? locale : defaultLocale],
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  return context
}

