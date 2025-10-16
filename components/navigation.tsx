"use client"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-light tracking-tight">朱凱</h1>
        <p className="text-sm text-muted-foreground">フルスタックフロントエンドエンジニア</p>
      </div>
    </header>
  )
}
