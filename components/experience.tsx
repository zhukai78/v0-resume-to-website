"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Experience() {
  const { t } = useLanguage()

  return (
    <section className="space-y-16">
      <h3 className="text-3xl font-light tracking-tight">{t.experienceTitle}</h3>

      <div className="space-y-16">
        {t.experiences.map((exp, idx) => (
          <div key={idx} className="border-l border-border pl-8 space-y-4">
            <div>
              <h4 className="text-xl font-light">{exp.company}</h4>
              <p className="text-muted-foreground">{exp.position}</p>
              <p className="text-sm text-muted-foreground mt-2">{exp.period}</p>
            </div>

            <ul className="space-y-3 text-muted-foreground">
              {exp.projects.map((project, pidx) => (
                <li key={pidx} className="text-base leading-relaxed">
                  • {project}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
