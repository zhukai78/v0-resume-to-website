export type Locale = "ja" | "zh" | "en"

export const translations = {
  ja: {
    // Navigation
    title: "朱凱",
    subtitle: "高級フロントエンドエンジニア",

    // Hero
    heroTitle1: "シニア",
    heroTitle2: "フロントエンドエンジニア / AI開発",
    heroTagline: "Crafting intuitive digital experiences through technology.",
    heroDescription:
      "10年以上にわたり、モバイルアプリ・IoTデバイス・スマートヘルス領域で豊富な開発経験を積んだシニアAndroidエンジニアです。",
    exploreButton: "EXPLORE",
    email: "Email",

    // About
    aboutTitle: "職務要約",
    aboutPara1:
      "Android Framework層からアプリケーション層まで幅広く精通し、Bluetooth / Wi-Fi / シリアル通信 / CANバスなどのIoT通信技術を活用した開発を得意としています。",
    aboutPara2:
      "LBSソーシャルアプリ・スマートリング・医療用モニタ・サービスロボットなど、多様な分野で多数のプロジェクトを成功に導いてきました。また、Rockchip / Qualcommプラットフォーム上でのファームウェアカスタマイズ経験も豊富です。",
    aboutPara3:
      "PMP®認定プロジェクトマネージャーとして、複雑なプロジェクト運営とチームマネジメントを実施。ChatGPT・Claude・CursorなどのAI開発支援ツールを活用し、開発効率と品質の両立を実現しています。",
    aboutPara4:
      "最新ではAIプログラミング開発者として、n8n・Claude Code・Google AI Studioなどを駆使した自動化ワークフローやデータ処理も手掛けています。",

    // Experience
    experienceTitle: "職務経歴",
    experiences: [
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
    ],

    // Skills
    skillsTitle: "スキル",
    skillCategories: {
      mobile: "モバイル開発",
      iot: "IoT・通信",
      platform: "プラットフォーム",
      ai: "AI・開発ツール",
      other: "その他",
    },

    // Contact
    contactTitle: "お問い合わせ",
    contactDescription: "新しいプロジェクトや協業の機会についてお気軽にお問い合わせください。",
    contactEmail: "メール",

    // Footer
    footerAbout: "ABOUT",
    footerAboutText: "10年以上の開発経験を持つシニアエンジニア。モバイル・IoT・ヘルスケア領域での実績多数。",
    footerConnect: "CONNECT",
    footerCollaborate: "COLLABORATE",
    footerCollaborateText: "新しいプロジェクトや協業の機会をお探しですか？お気軽にお問い合わせください。",
    footerCopyright: "© 2025 朱凱. All rights reserved.",
    footerTagline: "Designed with simplicity and elegance in mind.",
  },
  zh: {
    // Navigation
    title: "朱凯",
    subtitle: "高级前端工程师",

    // Hero
    heroTitle1: "高级",
    heroTitle2: "前端工程师 / AI开发",
    heroTagline: "通过技术打造直观的数字体验。",
    heroDescription: "拥有10年以上移动应用、IoT设备、智能健康领域丰富开发经验的高级Android工程师。",
    exploreButton: "探索更多",
    email: "邮箱",

    // About
    aboutTitle: "职业概述",
    aboutPara1:
      "精通Android Framework层到应用层的开发，擅长运用Bluetooth / Wi-Fi / 串口通信 / CAN总线等IoT通信技术进行开发。",
    aboutPara2:
      "在LBS社交应用、智能戒指、医疗监护仪、服务机器人等多个领域成功交付众多项目。拥有丰富的Rockchip / Qualcomm平台固件定制经验。",
    aboutPara3:
      "作为PMP®认证项目经理，负责复杂项目运营和团队管理。善用ChatGPT、Claude、Cursor等AI开发辅助工具，实现开发效率与质量的双重提升。",
    aboutPara4: "近期作为AI编程开发者，运用n8n、Claude Code、Google AI Studio等工具构建自动化工作流和数据处理方案。",

    // Experience
    experienceTitle: "工作经历",
    experiences: [
      {
        company: "Portwind株式会社",
        position: "Flutter / React Native（Android·iOS）高级开发工程师",
        period: "2025年2月 ～ 至今",
        projects: [
          "LBS社交应用开发：基于Google Map开发融合位置信息与现实世界的「寻宝社交应用」。",
          "一对一直播功能：设计并构建视频聊天、礼物打赏、实时通信等低延迟直播功能。",
        ],
      },
      {
        company: "Medevigilance株式会社",
        position: "Flutter（Android/iOS）开发工程师",
        period: "2023年5月 ～ 2025年2月",
        projects: [
          "智能戒指应用「Fyring」开发：通过BLE通信稳定同步心率、血氧、睡眠数据等健康数据。",
          "与村田制作所联合开发：负责Bluetooth通信协议和数据格式设计。",
        ],
      },
      {
        company: "长沙超能机器人科技有限公司",
        position: "Android FrameWork开发",
        period: "2022年5月 ～ 2023年5月",
        projects: [
          "Android固件定制：在RK3288 / RK3566环境下开发OTA升级、功能扩展、设备控制功能。",
          "医疗·服务机器人开发：主导开发面向沙特阿拉伯市场的健康管理机器人应用。",
        ],
      },
      {
        company: "深圳旭高医疗器械有限公司",
        position: "Android开发工程师",
        period: "2020年6月 ～ 2022年1月",
        projects: [
          "开发集成ECG、SpO₂、血压、血糖等多传感器的医疗监护仪应用。",
          "作为技术负责人完成China Mobile「和家亲」对接项目。",
        ],
      },
    ],

    // Skills
    skillsTitle: "技能",
    skillCategories: {
      mobile: "移动开发",
      iot: "IoT·通信",
      platform: "平台",
      ai: "AI·开发工具",
      other: "其他",
    },

    // Contact
    contactTitle: "联系方式",
    contactDescription: "如有新项目或合作机会，欢迎随时联系我。",
    contactEmail: "邮箱",

    // Footer
    footerAbout: "关于",
    footerAboutText: "拥有10年以上开发经验的高级工程师。在移动、IoT、医疗健康领域有丰富实绩。",
    footerConnect: "联系",
    footerCollaborate: "合作",
    footerCollaborateText: "正在寻找新项目或合作机会？欢迎随时联系。",
    footerCopyright: "© 2025 朱凯. 保留所有权利。",
    footerTagline: "追求简洁与优雅的设计理念。",
  },
  en: {
    // Navigation
    title: "Zhu Kai",
    subtitle: "Senior Frontend Engineer",

    // Hero
    heroTitle1: "Senior",
    heroTitle2: "Frontend Engineer / AI Developer",
    heroTagline: "Crafting intuitive digital experiences through technology.",
    heroDescription:
      "Senior Android engineer with over 10 years of extensive development experience in mobile apps, IoT devices, and smart health solutions.",
    exploreButton: "EXPLORE",
    email: "Email",

    // About
    aboutTitle: "Professional Summary",
    aboutPara1:
      "Proficient from Android Framework layer to application layer, specializing in development utilizing IoT communication technologies such as Bluetooth / Wi-Fi / Serial Communication / CAN Bus.",
    aboutPara2:
      "Successfully delivered numerous projects across diverse fields including LBS social apps, smart rings, medical monitors, and service robots. Extensive experience in firmware customization on Rockchip / Qualcomm platforms.",
    aboutPara3:
      "As a PMP® certified project manager, managing complex project operations and teams. Leveraging AI development tools like ChatGPT, Claude, and Cursor to achieve both development efficiency and quality.",
    aboutPara4:
      "Recently working as an AI programming developer, building automated workflows and data processing solutions using n8n, Claude Code, and Google AI Studio.",

    // Experience
    experienceTitle: "Work Experience",
    experiences: [
      {
        company: "Portwind Inc.",
        position: "Senior Flutter / React Native (Android·iOS) Developer",
        period: "Feb 2025 ～ Present",
        projects: [
          "LBS Social App Development: Developed a treasure hunt social app integrating location information with the real world, based on Google Maps.",
          "1-on-1 Live Streaming Feature: Designed and built low-latency streaming features including video chat, gift sending, and real-time communication.",
        ],
      },
      {
        company: "Medevigilance Inc.",
        position: "Flutter (Android/iOS) Developer",
        period: "May 2023 ～ Feb 2025",
        projects: [
          "Smart Ring App Fyring Development: Stably synchronized health data such as heart rate, blood oxygen, and sleep data using BLE communication.",
          "Joint Development with Murata Manufacturing: Responsible for Bluetooth communication protocol and data format design.",
        ],
      },
      {
        company: "Changsha Chaoneng Robot Technology Co., Ltd.",
        position: "Senior Android Developer",
        period: "May 2022 ～ May 2023",
        projects: [
          "Android Firmware Customization: Developed OTA updates, feature extensions, and device control functions on RK3288 / RK3566 platforms.",
          "Medical & Service Robot Development: Led development of health management robot app for Saudi Arabian market.",
        ],
      },
      {
        company: "Shenzhen Xugao Medical Equipment Co., Ltd.",
        position: "Android Developer",
        period: "Jun 2020 ～ Jan 2022",
        projects: [
          "Developed medical monitor app integrating multiple sensors including ECG, SpO₂, blood pressure, and blood glucose.",
          "Completed China Mobile HeJiaQin integration project as technical lead.",
        ],
      },
    ],

    // Skills
    skillsTitle: "Skills",
    skillCategories: {
      mobile: "Mobile Development",
      iot: "IoT & Communication",
      platform: "Platforms",
      ai: "AI & Dev Tools",
      other: "Others",
    },

    // Contact
    contactTitle: "Contact",
    contactDescription: "Feel free to reach out for new projects or collaboration opportunities.",
    contactEmail: "Email",

    // Footer
    footerAbout: "ABOUT",
    footerAboutText: "Senior engineer with over 10 years of development experience. Extensive achievements in mobile, IoT, and healthcare domains.",
    footerConnect: "CONNECT",
    footerCollaborate: "COLLABORATE",
    footerCollaborateText: "Looking for new projects or collaboration opportunities? Feel free to contact me.",
    footerCopyright: "© 2025 Zhu Kai. All rights reserved.",
    footerTagline: "Designed with simplicity and elegance in mind.",
  },
}

export function detectLocale(): Locale {
  if (typeof window === "undefined") return "ja"

  const browserLang = navigator.language.toLowerCase()

  if (browserLang.startsWith("zh")) return "zh"
  if (browserLang.startsWith("ja")) return "ja"
  if (browserLang.startsWith("en")) return "en"

  return "ja" // default
}

