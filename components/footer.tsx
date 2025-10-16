"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border mt-32 py-16 bg-gradient-to-b from-background to-muted/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Statement */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-widest text-foreground">{t.footerAbout}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footerAboutText}</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-widest text-foreground">{t.footerConnect}</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:zl282145321@gmail.com"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h4 className="text-sm font-light tracking-widest text-foreground">{t.footerCollaborate}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footerCollaborateText}</p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>{t.footerCopyright}</p>
          <p className="mt-4 md:mt-0">{t.footerTagline}</p>
        </div>
      </div>
    </footer>
  )
}

