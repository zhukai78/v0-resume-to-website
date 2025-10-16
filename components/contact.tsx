export default function Contact() {
  return (
    <section className="space-y-12">
      <h3 className="text-3xl font-light tracking-tight">お問い合わせ</h3>

      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          新しいプロジェクトや協業の機会についてお気軽にお問い合わせください。
        </p>

        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-2">メール</p>
            <a href="mailto:zl282145321@gmail.com" className="text-lg hover:text-accent transition-colors">
              zl282145321@gmail.com
            </a>
          </div>


          <div>
            <p className="text-sm text-muted-foreground mb-4">ソーシャルメディア</p>
            <div className="flex gap-6">
          
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
