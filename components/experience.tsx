export default function Experience() {
  const experiences = [
    {
      company: "Portwind株式会社",
      position: "Flutter / React Native（Android・iOS）シニア開発エンジニア",
      period: "2025年2月 ～ 現在",
      projects: [
        "LBSソーシャルアプリ開発：Google Mapをベースに、位置情報と現実世界を融合した「宝探しソーシャルアプリ」を開発。",
        "1対1ライブ配信機能：ビデオチャット・ギフト送信・リアルタイム通信などの低遅延配信機能を設計・構築。",
      ],
    },
    {
      company: "Medevigilance株式会社",
      position: "Flutter（Android/iOS）開発エンジニア",
      period: "2023年5月 ～ 2025年2月",
      projects: [
        "スマートリングアプリ「Fyring」開発：BLE通信を用い、心拍数・血中酸素・睡眠データなどのヘルスデータを安定的に同期。",
        "村田製作所との共同開発：Bluetooth通信プロトコルやデータ形式設計を担当。",
      ],
    },
    {
      company: "長沙超能ロボット科技有限公司",
      position: "Androidシニア開発エンジニア",
      period: "2022年5月 ～ 2023年5月",
      projects: [
        "Androidファームウェアカスタマイズ：RK3288 / RK3566環境にてOTA更新・機能拡張・デバイス制御機能を開発。",
        "医療・サービスロボット開発：サウジアラビア市場向け健康管理ロボットアプリをリード開発。",
      ],
    },
    {
      company: "深圳旭高医療器械有限公司",
      position: "Android開発エンジニア",
      period: "2020年6月 ～ 2022年1月",
      projects: [
        "ECG・SpO₂・血圧・血糖など複数センサーを統合した医療用モニタアプリを開発。",
        "China Mobile「和家親」連携プロジェクトを技術責任者として完遂。",
      ],
    },
  ]

  return (
    <section className="space-y-16">
      <h3 className="text-3xl font-light tracking-tight">職務経歴</h3>

      <div className="space-y-16">
        {experiences.map((exp, idx) => (
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
