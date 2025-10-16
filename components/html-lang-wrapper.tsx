"use client"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"

export function HtmlLangWrapper() {
  const { locale } = useLanguage()

  useEffect(() => {
    // Update HTML lang attribute
    document.documentElement.lang = locale
  }, [locale])

  return null
}

