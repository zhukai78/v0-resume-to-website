export default function Skills() {
  const skillCategories = [
    {
      category: "モバイル開発",
      skills: ["Android", "Flutter", "React Native", "iOS", "Kotlin", "Java"],
    },
    {
      category: "IoT・通信",
      skills: ["Bluetooth (BLE)", "Wi-Fi", "シリアル通信", "CANバス", "NFC"],
    },
    {
      category: "プラットフォーム",
      skills: ["Rockchip", "Qualcomm", "Android Framework", "ファームウェア"],
    },
    {
      category: "AI・開発ツール",
      skills: ["ChatGPT", "Gemini","Claude", "Cursor", "n8n"],
    },
    {
      category: "その他",
      skills: ["PMP認定", "プロジェクト管理", "チームマネジメント", "JNI", "C言語"],
    },
  ]

  return (
    <section className="space-y-16">
      <h3 className="text-3xl font-light tracking-tight">スキル</h3>

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
