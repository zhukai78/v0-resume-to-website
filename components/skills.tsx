"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      category: t.skillCategories.mobile,
      skills: ["Android", "Flutter", "React Native", "iOS", "Kotlin", "Java"],
    },
    {
      category: t.skillCategories.iot,
      skills: ["Bluetooth (BLE)", "Wi-Fi", "Serial", "CAN Bus", "NFC"],
    },
    {
      category: t.skillCategories.platform,
      skills: ["Rockchip", "Qualcomm", "Android Framework", "Firmware"],
    },
    {
      category: t.skillCategories.ai,
      skills: ["ChatGPT", "Gemini", "Claude", "Cursor", "n8n"],
    },
    {
      category: t.skillCategories.other,
      skills: ["PMP", "Project Management", "Team Leadership", "JNI", "C"],
    },
  ]

  return (
    <section className="space-y-16">
      <h3 className="text-3xl font-light tracking-tight">{t.skillsTitle}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="space-y-4">
            <h4 className="text-lg font-light text-foreground">{cat.category}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, sidx) => (
                <span
                  key={sidx}
                  className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full font-light"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
